const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://itnext.io/benchmarking-to-the-bottom-iterating-arrays-in-net-a58a539656e2").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});