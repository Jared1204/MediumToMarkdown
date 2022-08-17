const mediumToMarkdown = require('medium-to-markdown');
 
mediumToMarkdown.convertFromUrl('https://medium.com/@jaredwilton/pass-the-terraform-certified-associate-exam-first-try-64b0b8f078ab')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});