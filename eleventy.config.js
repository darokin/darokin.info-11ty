module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("byLang", (items, lang) =>
    (items || []).filter((item) => item.data.lang === lang)
  );

  eleventyConfig.addFilter("relatedBySlug", (items, slugs, lang) => {
    const safeSlugs = Array.isArray(slugs) ? slugs : [];
    return (items || []).filter(
      (item) => item.data.lang === lang && safeSlugs.includes(item.data.slug)
    );
  });

  eleventyConfig.addCollection("exhibitions", (collectionApi) =>
    collectionApi.getFilteredByTag("exhibition").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("artworks", (collectionApi) =>
    collectionApi.getFilteredByTag("artwork").sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
