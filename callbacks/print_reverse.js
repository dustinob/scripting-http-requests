var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printReverse(html) {
  var reverse = "";

  for (var i = html.length; i >= 0; i--) {
    reverse += html[i];
  }
  console.log(reverse);
}

getHTML(requestOptions, printReverse);
