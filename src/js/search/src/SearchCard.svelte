<script>
  import getLabel from './getLabel';
  export let content;
  const text = content.item.subtitle || content.item.contents;
  const slicedText = text.length > 249 ? `${text.slice(0, 250)}...` : text;
  const link = content.item.link || content.item.permalink;
  const label = getLabel(content.item.permalink);
</script>

<style lang="scss">
  :global(.eg-text + .eg-text) {
    margin-top: 1.5rem;
  }

  .eg-text__group {
    color: #000;
  }

  .search-card-label {
    padding: 0 4px;
    background-color: #FF4221;
    color: #fff;
    display: inline-block;
    font-size: .714285714285714rem;
    font-weight: 700;
    line-height: 1.071428571428571rem;
    min-width: 1.071428571428571rem;
    border-radius: 8px;
    text-align: center;
    position: absolute;
    left: 16px;
    top: -8px;
    vertical-align: baseline;
  }

  .search-card-container {
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 1.5rem 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    text-decoration: none;

    &:hover {
      box-shadow: 0 5px 10px 0 rgba(0,0,0,.12);
    }
  }

  .search-card-title {
    position: relative;
    display: inline-block;
    font-size: 22px;
  }
</style>

<a href={link} class="eg-text search-card-container">
  <span class="search-card-title eg-mb-0-5 eg-text--color-black">{content.item.title}</span>
  <p class="eg-text__group-paragraph eg-text--color-black eg-mb-0">{slicedText}</p>
  <sup class="search-card-label">{label}</sup>
</a>
