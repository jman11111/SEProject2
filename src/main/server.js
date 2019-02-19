const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
var Twitter = require('twitter-node-client').Twitter;

var error = function (err, response, body) {
  console.log('ERROR [%s]', err);
};
var success = function (data) {
  console.log('Data [%s]', data);
};
    
var twitter = new Twitter();

app.get('/', function (req, res) {
  axios.get('https://api.github.com/users/jman11111/repos', {
    headers: {
      'User-Agent': 'jman11111' 
    }
   })
    .then(resp => {
      console.log(resp.data);
      res.send(resp.data);
    })
    .catch(err => {
      console.log(err);
    })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})