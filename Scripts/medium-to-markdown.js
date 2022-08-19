const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl('')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});