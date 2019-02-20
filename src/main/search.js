var twit = require('twitter'),
    twitter = new twit({

        consumer_key: 'YGfbBkpdB3LzsDbOQq34I8bOK',
        consumer_secret: 'FhRgGKY5oWX2CDJ3JrsLkdmIofE3BgsSMugNllZAeBiCt5lAqJ',
        access_token: '1097228851397173248-5HLGeymTaxe7VtoCDq6GhSGnHDiSQf',
        access_secret: 'fMpt9u8chF4OdjV8vlgp1gP2CcFKM02HHVXiTsMIF4C2n'
    });

var count = 0,
    util = require ('util');

var requestify = require('requestify');
requestify.get('https://stream.twitter.com/1.1/statuses/filter.json').then(function(response) {
  // Get the response body (JSON parsed or jQuery object for XMLs)
  response.getBody();
//get request https://stream.twitter.com/1.1/statuses/filter.json

twitter.stream('filter',{track: 'love'}, function(stream){

    stream.on('data',function(data){
        console.log(util.inspect(data));
        console.log("\n" + data);
        stream.destroy();
        process.exit(0);
    });
   
});
});
