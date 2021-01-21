
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
    function to_number(value) {
        return value === '' ? null : +value;
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_data(text, data) {
        data = '' + data;
        if (text.wholeText !== data)
            text.data = data;
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
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

    const language = window.location.pathname.includes('/en/') ? 'en' : 'cn';
    const content = {
        en: {
            dailyRevenueTitle: 'Daily revenue',
            currentPriceTitle: 'Current Price',
            currentBlockRewardTitle: 'Current block reward',
            networkHashrateTitle: 'Network hashrate',
            yourHashrateTitle: 'Your hashrate',
            hashratePlaceholderTitle: 'Hashrate value',
            errmess: 'Download error. If you see this error, please contact us.'
        },
        // Attention: Chinese translate done with Google translator
        cn: {
            dailyRevenueTitle: '每日收入',
            currentPriceTitle: '当前价格',
            currentBlockRewardTitle: '当前块奖励',
            networkHashrateTitle: '网络哈希率',
            yourHashrateTitle: '你的哈希率',
            hashratePlaceholderTitle: '哈希值',
            errmess: '下载错误。 如果您看到此错误，请与我们联系。'
        }
    };

    const MultilingualContent = {
        dailyRevenueTitle: content[language]['dailyRevenueTitle'],
        currentPriceTitle: content[language]['currentPriceTitle'],
        currentBlockRewardTitle: content[language]['currentBlockRewardTitle'],
        networkHashrateTitle: content[language]['networkHashrateTitle'],
        yourHashrateTitle: content[language]['yourHashrateTitle'],
        hashratePlaceholderTitle: content[language]['hashratePlaceholderTitle'],
        errmess: content[language]['errmess']
    };

    /* src\App.svelte generated by Svelte v3.31.2 */

    function create_else_block(ctx) {
    	let div4;
    	let div0;
    	let t1;
    	let div3;
    	let div1;
    	let input;
    	let t2;
    	let div2;
    	let t4;
    	let div19;
    	let div5;
    	let t6;
    	let div8;
    	let div6;
    	let t7;
    	let t8;
    	let t9;
    	let div7;
    	let t10;
    	let span0;
    	let t11;
    	let t12;
    	let t13;
    	let div18;
    	let div11;
    	let div9;
    	let t15;
    	let div10;
    	let t16;
    	let span1;
    	let t17;
    	let t18;
    	let t19;
    	let div14;
    	let div12;
    	let t21;
    	let div13;
    	let t22;
    	let t23;
    	let span2;
    	let t24;
    	let t25;
    	let t26;
    	let div17;
    	let div15;
    	let t28;
    	let div16;
    	let t29;
    	let t30;
    	let mounted;
    	let dispose;

    	return {
    		c() {
    			div4 = element("div");
    			div0 = element("div");
    			div0.textContent = `${MultilingualContent.yourHashrateTitle}`;
    			t1 = space();
    			div3 = element("div");
    			div1 = element("div");
    			input = element("input");
    			t2 = space();
    			div2 = element("div");
    			div2.textContent = "MH/s";
    			t4 = space();
    			div19 = element("div");
    			div5 = element("div");
    			div5.textContent = `${MultilingualContent.dailyRevenueTitle}`;
    			t6 = space();
    			div8 = element("div");
    			div6 = element("div");
    			t7 = text(/*dailyRevenueERG*/ ctx[5]);
    			t8 = text(" ERG");
    			t9 = space();
    			div7 = element("div");
    			t10 = text("= ");
    			span0 = element("span");
    			t11 = text("$");
    			t12 = text(/*dailyRevenue*/ ctx[6]);
    			t13 = space();
    			div18 = element("div");
    			div11 = element("div");
    			div9 = element("div");
    			div9.textContent = `${MultilingualContent.currentPriceTitle}`;
    			t15 = space();
    			div10 = element("div");
    			t16 = text("1 ERG = ");
    			span1 = element("span");
    			t17 = text("$");
    			t18 = text(/*currentPrice*/ ctx[0]);
    			t19 = space();
    			div14 = element("div");
    			div12 = element("div");
    			div12.textContent = `${MultilingualContent.currentBlockRewardTitle}`;
    			t21 = space();
    			div13 = element("div");
    			t22 = text(currentBlockRewardERG);
    			t23 = text(" ERG = ");
    			span2 = element("span");
    			t24 = text("$");
    			t25 = text(/*currentBlockReward*/ ctx[1]);
    			t26 = space();
    			div17 = element("div");
    			div15 = element("div");
    			div15.textContent = `${MultilingualContent.networkHashrateTitle}`;
    			t28 = space();
    			div16 = element("div");
    			t29 = text(/*networkHashrate*/ ctx[2]);
    			t30 = text(" TH/s");
    			attr(div0, "class", "calc-leftside_header");
    			attr(input, "type", "number");
    			attr(input, "placeholder", MultilingualContent.hashratePlaceholderTitle);
    			attr(div1, "class", "calc-leftside_input-wrapper");
    			toggle_class(div1, "active", /*isActive*/ ctx[7]);
    			attr(div3, "class", "calc-leftside_main");
    			attr(div4, "class", "calc-leftside");
    			attr(div5, "class", "calc-rightside_header");
    			attr(span0, "class", "accented-text");
    			attr(div8, "class", "calc-rightside_main");
    			attr(div9, "class", "calc-rightside_parameter_title");
    			attr(span1, "class", "accented-text");
    			attr(div10, "class", "calc-rightside_parameter_value");
    			attr(div11, "class", "calc-rightside_parameter");
    			attr(div12, "class", "calc-rightside_parameter_title");
    			attr(span2, "class", "accented-text");
    			attr(div13, "class", "calc-rightside_parameter_value");
    			attr(div14, "class", "calc-rightside_parameter");
    			attr(div15, "class", "calc-rightside_parameter_title");
    			attr(div16, "class", "calc-rightside_parameter_value");
    			attr(div17, "class", "calc-rightside_parameter");
    			attr(div18, "class", "calc-rightside_parameters");
    			attr(div19, "class", "calc-rightside");
    		},
    		m(target, anchor) {
    			insert(target, div4, anchor);
    			append(div4, div0);
    			append(div4, t1);
    			append(div4, div3);
    			append(div3, div1);
    			append(div1, input);
    			/*input_binding*/ ctx[11](input);
    			set_input_value(input, /*yourHashrate*/ ctx[4]);
    			append(div3, t2);
    			append(div3, div2);
    			insert(target, t4, anchor);
    			insert(target, div19, anchor);
    			append(div19, div5);
    			append(div19, t6);
    			append(div19, div8);
    			append(div8, div6);
    			append(div6, t7);
    			append(div6, t8);
    			append(div8, t9);
    			append(div8, div7);
    			append(div7, t10);
    			append(div7, span0);
    			append(span0, t11);
    			append(span0, t12);
    			append(div19, t13);
    			append(div19, div18);
    			append(div18, div11);
    			append(div11, div9);
    			append(div11, t15);
    			append(div11, div10);
    			append(div10, t16);
    			append(div10, span1);
    			append(span1, t17);
    			append(span1, t18);
    			append(div18, t19);
    			append(div18, div14);
    			append(div14, div12);
    			append(div14, t21);
    			append(div14, div13);
    			append(div13, t22);
    			append(div13, t23);
    			append(div13, span2);
    			append(span2, t24);
    			append(span2, t25);
    			append(div18, t26);
    			append(div18, div17);
    			append(div17, div15);
    			append(div17, t28);
    			append(div17, div16);
    			append(div16, t29);
    			append(div16, t30);

    			if (!mounted) {
    				dispose = [
    					listen(input, "input", /*input_input_handler*/ ctx[12]),
    					listen(input, "input", /*handleInputChange*/ ctx[10]),
    					listen(input, "focus", /*focus_handler*/ ctx[13]),
    					listen(input, "blur", /*blur_handler*/ ctx[14])
    				];

    				mounted = true;
    			}
    		},
    		p(ctx, dirty) {
    			if (dirty & /*yourHashrate*/ 16 && to_number(input.value) !== /*yourHashrate*/ ctx[4]) {
    				set_input_value(input, /*yourHashrate*/ ctx[4]);
    			}

    			if (dirty & /*isActive*/ 128) {
    				toggle_class(div1, "active", /*isActive*/ ctx[7]);
    			}

    			if (dirty & /*dailyRevenueERG*/ 32) set_data(t7, /*dailyRevenueERG*/ ctx[5]);
    			if (dirty & /*dailyRevenue*/ 64) set_data(t12, /*dailyRevenue*/ ctx[6]);
    			if (dirty & /*currentPrice*/ 1) set_data(t18, /*currentPrice*/ ctx[0]);
    			if (dirty & /*currentBlockReward*/ 2) set_data(t25, /*currentBlockReward*/ ctx[1]);
    			if (dirty & /*networkHashrate*/ 4) set_data(t29, /*networkHashrate*/ ctx[2]);
    		},
    		d(detaching) {
    			if (detaching) detach(div4);
    			/*input_binding*/ ctx[11](null);
    			if (detaching) detach(t4);
    			if (detaching) detach(div19);
    			mounted = false;
    			run_all(dispose);
    		}
    	};
    }

    // (79:1) {#if loadingError}
    function create_if_block(ctx) {
    	let t;

    	return {
    		c() {
    			t = text(/*errmes*/ ctx[9]);
    		},
    		m(target, anchor) {
    			insert(target, t, anchor);
    		},
    		p: noop,
    		d(detaching) {
    			if (detaching) detach(t);
    		}
    	};
    }

    function create_fragment(ctx) {
    	let div;

    	function select_block_type(ctx, dirty) {
    		if (/*loadingError*/ ctx[8]) return create_if_block;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	return {
    		c() {
    			div = element("div");
    			if_block.c();
    			attr(div, "class", "calc-container");
    		},
    		m(target, anchor) {
    			insert(target, div, anchor);
    			if_block.m(div, null);
    		},
    		p(ctx, [dirty]) {
    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(div, null);
    				}
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(div);
    			if_block.d();
    		}
    	};
    }

    let currentBlockRewardERG = "67.5";

    // for calculations
    const blockTime = 120;

    function instance($$self, $$props, $$invalidate) {
    	let currentPrice = "";
    	let currentBlockReward = "";
    	let networkHashrate = "";
    	let yourHashrateInput;
    	let yourHashrate = "";
    	let dailyRevenueERG = "";
    	let dailyRevenue = "";
    	let isActive = false;
    	const blocksPerDay = 86400 / blockTime;
    	let difficulty;

    	// for exceptions
    	const errmes = MultilingualContent.errmess;

    	let loadingError = false;
    	initData();

    	function handleInputChange() {
    		const dailyReward = 1000000 * currentBlockRewardERG * yourHashrate * blockTime / difficulty * blocksPerDay;
    		$$invalidate(5, dailyRevenueERG = dailyReward.toFixed(2));
    		$$invalidate(6, dailyRevenue = (dailyRevenueERG * currentPrice).toFixed(2));
    		console.log(dailyReward, currentBlockRewardERG, yourHashrate, blockTime, difficulty, blocksPerDay);
    	}

    	function initData() {
    		fetch(`https://api.coingecko.com/api/vs3/simple/price?ids=ergo&vs_currencies=USD`).then(response => {
    			if (response.ok) {
    				return response;
    			} else {
    				throw new Error();
    			}
    		}).then(response => response.json()).then(data => {
    			$$invalidate(0, currentPrice = data.ergo.usd.toFixed(2));
    			$$invalidate(1, currentBlockReward = (currentBlockRewardERG * currentPrice).toFixed(2));

    			fetch(`https://api.ergoplatform.com/blocks`).then(response => {
    				if (response.ok) {
    					return response;
    				} else {
    					throw new Error();
    				}
    			}).then(response => response.json()).then(data => {
    				difficulty = data.items[0].difficulty;
    				$$invalidate(2, networkHashrate = (difficulty / blockTime / 1000000000000).toFixed(2));
    			}).then(() => {
    				yourHashrateInput.focus();
    				$$invalidate(4, yourHashrate = yourHashrateInput.value);
    				handleInputChange();
    			}).catch(() => {
    				$$invalidate(8, loadingError = true);
    			});
    		}).catch(() => {
    			$$invalidate(8, loadingError = true);
    		});
    	}

    	function input_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			yourHashrateInput = $$value;
    			$$invalidate(3, yourHashrateInput);
    		});
    	}

    	function input_input_handler() {
    		yourHashrate = to_number(this.value);
    		$$invalidate(4, yourHashrate);
    	}

    	const focus_handler = () => $$invalidate(7, isActive = true);
    	const blur_handler = () => $$invalidate(7, isActive = false);

    	return [
    		currentPrice,
    		currentBlockReward,
    		networkHashrate,
    		yourHashrateInput,
    		yourHashrate,
    		dailyRevenueERG,
    		dailyRevenue,
    		isActive,
    		loadingError,
    		errmes,
    		handleInputChange,
    		input_binding,
    		input_input_handler,
    		focus_handler,
    		blur_handler
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
