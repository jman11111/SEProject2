const express = require('express')
const app = express()
const port = 3000
const https = require('https');

let data = '';

var options = {
  host: "developer.api.autodesk.com",
  path: "/oss/v1/buckets",
  method: "POST",
  headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer token"
  }
};

/*var post_options = {
  host: 'api.github.com',
  path: '/jman11111/repos',
  port: '8000',
  method: 'POST',
  headers: {
    'User-Agent': 'jman11111'
  }
}*/
app.get('/', (request, response) => {
  

  https.request(options, (resp) => {
  
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log('data sent');
      response.send(data)
      data = '';
    });

  }).on("error", (err) => {
  console.log("Error: " + err.message);
  });
  
})

app.get('/dev', (request, response) => {
    response.send('You are on /dev')
})

app.get('/json', (request, response) => {
  response.send()
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})