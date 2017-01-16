const https = require('https')

function getAndPrinHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-example/step1.html'
  };

  /* add code here */


  //http get response
  https.get(requestOptions, function (response) {

    //set endoing to recieve data
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
    });

    response.on('end', function() {
      console.log('Responce stream complete.');
    });
  });
}

getAndPrinHTMLChunks();