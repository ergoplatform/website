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
    threshold: 0.2,
    location: 0,
    distance: 100,
    maxPatternLength: 64,
    minMatchCharLength: 3,
    keys: [
      {name:"title",weight:0.8},
      {name:"tags",weight:0.5},
      {name:"contents",weight:0.4},
      {name:"subtitle",weight:0.4}
    ]
  };
  let data = [];
  let result = [];
  let searchValue = '';
  let fuse;

  onMount(async () => {
    data = await fetch(window.location.href + 'index.json').then(d => d.json());
    fuse = new Fuse(data, fuseOptions);

    console.log(data);
  });

  const handleInputChange = () => {
    if (searchValue.trim() !== '') {
      result = fuse.search(searchValue);
      console.log(result)
    }
  };
</script>

<input type="text" bind:value={searchValue} on:input={handleInputChange} placeholder="Search query">

{#if searchValue.trim() === ''}
  <p>Enter search query</p>
{:else if searchValue.trim() === ''}
  <p>Unrecognized search pattern. Please try searching by entering news, pages, blog posts</p>
{:else if result.length > 0}
  <ul>
    {#each result as content (content.refIndex)}
      <SearchCard {content} />
    {/each}
  </ul>
{/if}
