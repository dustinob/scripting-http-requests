const https = require ('https');

module.exports = function getHTML (options, callback) {

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
