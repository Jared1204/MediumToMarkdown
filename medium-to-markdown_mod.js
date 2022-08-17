const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl("https://medium.com/nerd-for-tech/top-5-things-i-actually-like-about-top-x-posts-75b04b7a2e15").then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});