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

var config = {
  consumerKey: 'YGfbBkpdB3LzsDbOQq34I8bOK',
  consumerSecret: 'FhRgGKY5oWX2CDJ3JrsLkdmIofE3BgsSMugNllZAeBiCt5lAqJ',
  accessToken: "1097228851397173248-5HLGeymTaxe7VtoCDq6GhSGnHDiSQf",
  accessTokenSecret: "fMpt9u8chF4OdjV8vlgp1gP2CcFKM02HHVXiTsMIF4C2n",
  callBackUrl: "http://localhost:3000"
}

var twitter = new Twitter(config);

twitter.getSearch({'q':'#haiku','count': 10}, error, success);

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