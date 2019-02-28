const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
var Twitter = require('twitter-node-client').Twitter;
var tweetdata;
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

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
var OAuth = require('oauth');
var header = {
    "Yahoo-App-Id": "9DNtWM4e"
};

app.post('/weather', function (req, res) {
    var location =req.body.location; //from front end version
    //var location = 'loc'; //manual version

    var request = new OAuth.OAuth(
        null,
        null,
        'dj0yJmk9RkVhUE1DSWw5RVMyJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTcy',
        'a0fe2b1bea9e9515f811bddd3cb3ff7a4cd13878',
        '1.0',
        null,
        'HMAC-SHA1',
        null,
        header
    );

    //var output;

    request.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=' + location + '&format=json',
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err);
            } else {
                res.send(data)
                //console.log(data);
            }
        });
});

app.post('/twitter', async function (req, res) {
    twitter.getSearch({'q':req.body.tweet,'count': 10}, error, success);
    var func = function(){
      res.send(tweetdata);
    }
    setTimeout(func,1000);
})

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