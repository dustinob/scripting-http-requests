const https = require('https');

function getAndPrintHTML () {


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var buffer = '';

  // add my code here

  //http get response
  https.get(requestOptions, function (response) {

    //set endoing to recieve data
    response.setEncoding('utf8');

      response.on('data', function (data) {

      buffer += data + '\n';
    });


    response.on('end', function() {
      console.log(buffer);
      console.log('Responce stream complete.');
    });
  });
}

getAndPrintHTML();