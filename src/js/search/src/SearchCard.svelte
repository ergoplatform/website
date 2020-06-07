<script>
  import getLabel from './getLabel';
  export let content;
  const text = content.item.subtitle || content.item.contents;
  const slicedText = text.length > 199 ? `${text.slice(0, 200)}...` : text;
  const link = content.item.link || content.item.permalink;
  const label = getLabel(link);
</script>

<style>
  :global(.eg-text + .eg-text) {
    margin-top: 1rem;
  }

  .eg-text__group {
    color: #000;
  }
</style>
<div class="eg-text">
  <a href={link} class="eg-text__group">
    <h2 class="eg-text__group-title eg-mb-0-5 eg-text--color-black">{content.item.title}</h2>
    <p class="eg-text__group-paragraph eg-text--color-black eg-mb-0">{slicedText}</p>
  </a>
</div>
