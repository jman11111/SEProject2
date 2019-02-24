//todo 1) take a location
//todo 2) convert that location to work with the yahoo weather api
//todo 3) use that place in the yahoo weather api to find the weather at that place
//todo 4) return two different items
//todo           1) Weather type
//todo           2) Temperature

var OAuth = require('oauth');
var header = {
    "Yahoo-App-Id": "9DNtWM4e"
};
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

var location = 'chicago';

var output;

    request.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location='+location+'&format=json',//do I need to make this string conform better
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err);
            } else {
                //output = data;
                console.log(data);
            }
        }
    );