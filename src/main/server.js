const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
var Twitter = require('twitter-node-client').Twitter;
var tweetdata;
var error = function (err, response, body) {
  console.log('ERROR [%s]', err);
};
var success =  async function (data) {
  tweetdata = data;
};

var config = {
  consumerKey: 'YGfbBkpdB3LzsDbOQq34I8bOK',
  consumerSecret: 'FhRgGKY5oWX2CDJ3JrsLkdmIofE3BgsSMugNllZAeBiCt5lAqJ',
  accessToken: "1097228851397173248-5HLGeymTaxe7VtoCDq6GhSGnHDiSQf",
  accessTokenSecret: "fMpt9u8chF4OdjV8vlgp1gP2CcFKM02HHVXiTsMIF4C2n",
  callBackUrl: "http://localhost:3000"
}

var twitter = new Twitter(config);

app.get('/', async function (req, res) {
    twitter.getSearch({'q':'#love','count': 10}, error, success);
    var func = function(){
      res.send(tweetdata);
    }
    setTimeout(func,1000);
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})