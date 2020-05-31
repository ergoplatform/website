const getLabel = (link) => {
  if (link.match(/news/)) {
    return 'news';
  }

  if (link.match(/blog/)) {
    return 'blog';
  }

  return 'page';
};

export default getLabel;
