// purgecss.config.js

module.exports = {
  // These are the files that Purgecss will search through
  content: ["./_site/**/*.html"],

  // These are the stylesheets that will be subjected to the purge
  css: ["./_site/assets/*.css"],
  fontFace: true,
  keyframes: true,
  safelist: ["header-link", "header-link-before", "header-link-after"]
};
