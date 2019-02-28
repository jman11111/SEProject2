const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`weather server is listening on ${port}`)
})

var OAuth = require('oauth');
var header = {
    "Yahoo-App-Id": "9DNtWM4e"
};

app.get('/', function (req, res) {

});

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