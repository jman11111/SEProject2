//todo 1) take a location
//todo 2) convert that location to work with the yahoo weather api
//todo 3) use that place in the yahoo weather api to find the weather at that place
//todo 4) return two different items
//todo           1) Weather type
//todo           2) Temperature

var OAuth = require('oauth');
var header = {
    "Yahoo-App-Id": "your-app-id"
};
var request = new OAuth.OAuth(
    null,
    null,
    'your-consumer-key',
    'your-consumer-secret',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);
request.get(
    'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
        }
    }
);