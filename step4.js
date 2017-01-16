const https = require ('https');

function getHTML (options, callback) {


  var buffer = '';

  // add my code here

  //http get response
  https.get(options, function (response) {

    //set endoing to recieve data
    response.setEncoding('utf8');

      response.on('data', function (data) {

      buffer += data + '\n';
    });


    response.on('end', function() {
      callback(buffer);
      console.log('Responce stream complete.');
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getHTML(requestOptions, printHTML);