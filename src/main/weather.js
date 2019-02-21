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

function getWeather(location){
    var data = getData(location);
    //return parseData(data);
}


function getData(location){ //Location is the input
    var output;
    request.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location='+location+'&format=json',//do I need to make this string conform better
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err);
            } else {
                output = data;
                //console.log(data) could also just output to console
            }
        }
    );
    return output;
}

/*
function parseData(data){


    return output;
}
*/