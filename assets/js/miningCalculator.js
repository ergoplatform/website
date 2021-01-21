
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_data(text, data) {
        data = '' + data;
        if (text.wholeText !== data)
            text.data = data;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    /* src\App.svelte generated by Svelte v3.31.2 */

    function create_else_block_3(ctx) {
    	let t;

    	return {
    		c() {
    			t = text(/*message*/ ctx[0]);
    		},
    		m(target, anchor) {
    			insert(target, t, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*message*/ 1) set_data(t, /*message*/ ctx[0]);
    		},
    		d(detaching) {
    			if (detaching) detach(t);
    		}
    	};
    }

    // (73:3) {#if currentPrice}
    function create_if_block_3(ctx) {
    	let t0;
    	let t1;

    	return {
    		c() {
    			t0 = text("1 ERG = $");
    			t1 = text(/*currentPrice*/ ctx[1]);
    		},
    		m(target, anchor) {
    			insert(target, t0, anchor);
    			insert(target, t1, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*currentPrice*/ 2) set_data(t1, /*currentPrice*/ ctx[1]);
    		},
    		d(detaching) {
    			if (detaching) detach(t0);
    			if (detaching) detach(t1);
    		}
    	};
    }

    // (84:3) {:else}
    function create_else_block_2(ctx) {
    	let t;

    	return {
    		c() {
    			t = text(/*message*/ ctx[0]);
    		},
    		m(target, anchor) {
    			insert(target, t, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*message*/ 1) set_data(t, /*message*/ ctx[0]);
    		},
    		d(detaching) {
    			if (detaching) detach(t);
    		}
    	};
    }

    // (82:3) {#if currentBlockRewardERG && currentBlockReward}
    function create_if_block_2(ctx) {
    	let t0;
    	let t1;
    	let t2;

    	return {
    		c() {
    			t0 = text(currentBlockRewardERG);
    			t1 = text(" ERG = ");
    			t2 = text(/*currentBlockReward*/ ctx[2]);
    		},
    		m(target, anchor) {
    			insert(target, t0, anchor);
    			insert(target, t1, anchor);
    			insert(target, t2, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*currentBlockReward*/ 4) set_data(t2, /*currentBlockReward*/ ctx[2]);
    		},
    		d(detaching) {
    			if (detaching) detach(t0);
    			if (detaching) detach(t1);
    			if (detaching) detach(t2);
    		}
    	};
    }

    // (93:3) {:else}
    function create_else_block_1(ctx) {
    	let t;

    	return {
    		c() {
    			t = text(/*message*/ ctx[0]);
    		},
    		m(target, anchor) {
    			insert(target, t, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*message*/ 1) set_data(t, /*message*/ ctx[0]);
    		},
    		d(detaching) {
    			if (detaching) detach(t);
    		}
    	};
    }

    // (91:3) {#if networkHashrate}
    function create_if_block_1(ctx) {
    	let t0;
    	let t1;

    	return {
    		c() {
    			t0 = text(/*networkHashrate*/ ctx[3]);
    			t1 = text(" TH/s");
    		},
    		m(target, anchor) {
    			insert(target, t0, anchor);
    			insert(target, t1, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*networkHashrate*/ 8) set_data(t0, /*networkHashrate*/ ctx[3]);
    		},
    		d(detaching) {
    			if (detaching) detach(t0);
    			if (detaching) detach(t1);
    		}
    	};
    }

    // (108:3) {:else}
    function create_else_block(ctx) {
    	let t;

    	return {
    		c() {
    			t = text(/*message*/ ctx[0]);
    		},
    		m(target, anchor) {
    			insert(target, t, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*message*/ 1) set_data(t, /*message*/ ctx[0]);
    		},
    		d(detaching) {
    			if (detaching) detach(t);
    		}
    	};
    }

    // (106:3) {#if dailyRevenueERG && dailyRevenue}
    function create_if_block(ctx) {
    	let t0;
    	let t1;
    	let t2;

    	return {
    		c() {
    			t0 = text(/*dailyRevenueERG*/ ctx[4]);
    			t1 = text(" ERG = $");
    			t2 = text(/*dailyRevenue*/ ctx[5]);
    		},
    		m(target, anchor) {
    			insert(target, t0, anchor);
    			insert(target, t1, anchor);
    			insert(target, t2, anchor);
    		},
    		p(ctx, dirty) {
    			if (dirty & /*dailyRevenueERG*/ 16) set_data(t0, /*dailyRevenueERG*/ ctx[4]);
    			if (dirty & /*dailyRevenue*/ 32) set_data(t2, /*dailyRevenue*/ ctx[5]);
    		},
    		d(detaching) {
    			if (detaching) detach(t0);
    			if (detaching) detach(t1);
    			if (detaching) detach(t2);
    		}
    	};
    }

    function create_fragment(ctx) {
    	let div6;
    	let h1;
    	let t1;
    	let div5;
    	let div0;
    	let t2;
    	let t3;
    	let div1;
    	let t4;
    	let t5;
    	let div2;
    	let t6;
    	let t7;
    	let div3;
    	let span0;
    	let t9;
    	let input;
    	let t10;
    	let span1;
    	let t12;
    	let div4;
    	let t13;
    	let mounted;
    	let dispose;

    	function select_block_type(ctx, dirty) {
    		if (/*currentPrice*/ ctx[1]) return create_if_block_3;
    		return create_else_block_3;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block0 = current_block_type(ctx);

    	function select_block_type_1(ctx, dirty) {
    		if ( /*currentBlockReward*/ ctx[2]) return create_if_block_2;
    		return create_else_block_2;
    	}

    	let current_block_type_1 = select_block_type_1(ctx);
    	let if_block1 = current_block_type_1(ctx);

    	function select_block_type_2(ctx, dirty) {
    		if (/*networkHashrate*/ ctx[3]) return create_if_block_1;
    		return create_else_block_1;
    	}

    	let current_block_type_2 = select_block_type_2(ctx);
    	let if_block2 = current_block_type_2(ctx);

    	function select_block_type_3(ctx, dirty) {
    		if (/*dailyRevenueERG*/ ctx[4] && /*dailyRevenue*/ ctx[5]) return create_if_block;
    		return create_else_block;
    	}

    	let current_block_type_3 = select_block_type_3(ctx);
    	let if_block3 = current_block_type_3(ctx);

    	return {
    		c() {
    			div6 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Ergo Mining Calculator";
    			t1 = space();
    			div5 = element("div");
    			div0 = element("div");
    			t2 = text("Current price: \n\t\t\t");
    			if_block0.c();
    			t3 = space();
    			div1 = element("div");
    			t4 = text("Current block reward: \n\t\t\t");
    			if_block1.c();
    			t5 = space();
    			div2 = element("div");
    			t6 = text("Network hashrate: \n\t\t\t");
    			if_block2.c();
    			t7 = space();
    			div3 = element("div");
    			span0 = element("span");
    			span0.textContent = "Your hashrate:";
    			t9 = space();
    			input = element("input");
    			t10 = space();
    			span1 = element("span");
    			span1.textContent = "MH/s";
    			t12 = space();
    			div4 = element("div");
    			t13 = text("Daily revenue:\n\t\t\t");
    			if_block3.c();
    			attr(input, "type", "number");
    			input.value = "0";
    		},
    		m(target, anchor) {
    			insert(target, div6, anchor);
    			append(div6, h1);
    			append(div6, t1);
    			append(div6, div5);
    			append(div5, div0);
    			append(div0, t2);
    			if_block0.m(div0, null);
    			append(div5, t3);
    			append(div5, div1);
    			append(div1, t4);
    			if_block1.m(div1, null);
    			append(div5, t5);
    			append(div5, div2);
    			append(div2, t6);
    			if_block2.m(div2, null);
    			append(div5, t7);
    			append(div5, div3);
    			append(div3, span0);
    			append(div3, t9);
    			append(div3, input);
    			append(div3, t10);
    			append(div3, span1);
    			append(div5, t12);
    			append(div5, div4);
    			append(div4, t13);
    			if_block3.m(div4, null);

    			if (!mounted) {
    				dispose = listen(input, "change", /*changedYourHashrate*/ ctx[6]);
    				mounted = true;
    			}
    		},
    		p(ctx, [dirty]) {
    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
    				if_block0.p(ctx, dirty);
    			} else {
    				if_block0.d(1);
    				if_block0 = current_block_type(ctx);

    				if (if_block0) {
    					if_block0.c();
    					if_block0.m(div0, null);
    				}
    			}

    			if (current_block_type_1 === (current_block_type_1 = select_block_type_1(ctx)) && if_block1) {
    				if_block1.p(ctx, dirty);
    			} else {
    				if_block1.d(1);
    				if_block1 = current_block_type_1(ctx);

    				if (if_block1) {
    					if_block1.c();
    					if_block1.m(div1, null);
    				}
    			}

    			if (current_block_type_2 === (current_block_type_2 = select_block_type_2(ctx)) && if_block2) {
    				if_block2.p(ctx, dirty);
    			} else {
    				if_block2.d(1);
    				if_block2 = current_block_type_2(ctx);

    				if (if_block2) {
    					if_block2.c();
    					if_block2.m(div2, null);
    				}
    			}

    			if (current_block_type_3 === (current_block_type_3 = select_block_type_3(ctx)) && if_block3) {
    				if_block3.p(ctx, dirty);
    			} else {
    				if_block3.d(1);
    				if_block3 = current_block_type_3(ctx);

    				if (if_block3) {
    					if_block3.c();
    					if_block3.m(div4, null);
    				}
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(div6);
    			if_block0.d();
    			if_block1.d();
    			if_block2.d();
    			if_block3.d();
    			mounted = false;
    			dispose();
    		}
    	};
    }

    let currentBlockRewardERG = 67.5;
    const blockTime = 120;

    function instance($$self, $$props, $$invalidate) {
    	let message = "loading...";
    	let currentPrice = null;
    	let currentBlockReward = null;
    	let networkHashrate = null;
    	let dailyRevenueERG = null;
    	let dailyRevenue = null;
    	const blocksPerDay = 86400 / blockTime;
    	const yourHashrateInput = document.getElementById("your-hashrate");

    	function changedYourHashrate() {
    		const yourHashrate = +yourHashrateInput.value * 1000000;
    		dailyReward = currentBlockRewardERG * yourHashrate * blockTime / difficulty * blocksPerDay;
    		$$invalidate(4, dailyRevenueERG = dailyReward.toFixed(2));
    		$$invalidate(5, dailyRevenue = (dailyReward * currentPrice).toFixed(2));
    	}

    	fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ergo&vs_currencies=USD`).then(
    		response => {
    			if (response.ok) {
    				return response;
    			} else {
    				const error = new Error("Error " + response.status + ": " + response.statusText);
    				throw error;
    			}
    		},
    		error => {
    			return new Error("Error: " + error.message);
    		}
    	).then(response => response.json()).then(response => {
    		$$invalidate(1, currentPrice = response.ergo.usd.toFixed(2));
    		$$invalidate(2, currentBlockReward = (currentBlockRewardERG * currentPrice).toFixed(2));

    		fetch(`https://api.ergoplatform.com/blocks?sortBy=height&sortDirection=desc&limit=1`).then(
    			response => {
    				if (response.ok) {
    					return response;
    				} else {
    					const error = new Error("Error " + response.status + ": " + response.statusText);
    					throw error;
    				}
    			},
    			error => {
    				return new Error("Error: " + error.message);
    			}
    		).then(response => response.json()).then(response => {
    			const difficulty = response.items[0].difficulty;
    			$$invalidate(3, networkHashrate = (difficulty / blockTime / 1000000000000).toFixed(2));
    			changedYourHashrate();
    		}).catch(error => {
    			$$invalidate(0, message = error.message);
    		});
    	}).catch(error => {
    		$$invalidate(0, message = error.message);
    	});

    	return [
    		message,
    		currentPrice,
    		currentBlockReward,
    		networkHashrate,
    		dailyRevenueERG,
    		dailyRevenue,
    		changedYourHashrate
    	];
    }

    class App extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance, create_fragment, safe_not_equal, {});
    	}
    }

    const app = new App({
    	target: document.querySelector('#miningCalculator')
    });

    return app;

}());
//# sourceMappingURL=miningCalculator.js.map
