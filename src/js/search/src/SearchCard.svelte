<script>
  import getLabel from './getLabel';
  export let content;
  const text = content.item.subtitle || content.item.contents;
  const slicedText = text.length > 199 ? `${text.slice(0, 200)}...` : text;
  const link = content.item.permalink;
  const label = getLabel(link);

</script>

<h2>{content.item.title}</h2>
<p>{slicedText}</p>
