<script>
  import { onMount } from 'svelte';
  import Fuse from 'fuse.js';
  import SearchCard from './SearchCard.svelte';

  const summaryInclude=60;

  // Options for fuse.js
  let fuseOptions = {
    shouldSort: true,
    includeMatches: false,
    matchAllTokens: true,
    threshold: 0.3,
    location: 0,
    distance: 2000,
    maxPatternLength: 64,
    minMatchCharLength: 3,
    keys: [
      {name:"title",weight:0.8},
      {name:"contents",weight:0.4},
      {name:"subtitle",weight:0.4}
    ]
  };
  let data = [];
  let result = [];
  let searchValue = '';
  let fuse;
	let inputElement;

  onMount(async () => {
    data = await fetch(window.location.href + 'index.json').then(d => d.json());
    fuse = new Fuse(data, fuseOptions);

		inputElement.focus();
  });

  const handleInputChange = () => {
    if (searchValue.trim() !== '') {
      result = fuse.search(searchValue);
    }
  };

  let isActive = false;

</script>

<style lang="scss">
  .query-div {
    margin: 20px 0;
  }

  .input-container {
    margin-top: 6px;
    display: inline-flex;
    align-items: center;
    width: initial;
    height: 36px;

    .input-wrapper {
      display: inline-flex;
      vertical-align: middle;
      align-items: center;
      height: 100%;
      user-select: none;
      flex: 1 1 0%;
      border-radius: 5px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(234, 234, 234);
      border-image: initial;
      transition: border 0.2s ease 0s, color 0.2s ease 0s;
      &.active {
        border-color: #FF4221;
      }

      input {
        box-shadow: none;
        font-size: 0.875rem;
        background-color: transparent;
        color: rgb(0, 0, 0);
        width: 100%;
        min-width: 0px;
        margin: 4px 10px;
        padding: 0px;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        outline: none;
        border-radius: 0px;
      }
    }
  }
</style>

<div class="input-container">
  <div class="input-wrapper"
      class:active={isActive}>
    <input
      bind:this={inputElement}
      type="text"
      bind:value={searchValue}
      on:input={handleInputChange}
      placeholder="Search query"
      on:focus={() => isActive = true}
      on:blur={() => isActive = false} />
  </div>
</div>

<div class="query-div eg-text">
  {#if searchValue.trim() === ''}
    <p class="eg-text__paragraph eg-text__paragraph--18">You need to enter a search query</p>
  {:else if result.length === 0}
    <p>Unrecognized search pattern. Please try searching by entering news, pages, blog posts etc.</p>
  {:else if result.length > 0}
    <ul>
      {#each result as content (content.refIndex)}
        <SearchCard {content} />
      {/each}
    </ul>
  {/if}
</div>
