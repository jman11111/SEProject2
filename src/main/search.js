var twit = require('twitter'),
    twitter = new twit({
        consumer_key: 'YGfbBkpdB3LzsDbOQq34I8bOK',
        consumer_secret: 'FhRgGKY5oWX2CDJ3JrsLkdmIofE3BgsSMugNllZAeBiCt5lAqJ',
        access_token: '1097228851397173248-5HLGeymTaxe7VtoCDq6GhSGnHDiSQf',
        access_secret: 'fMpt9u8chF4OdjV8vlgp1gP2CcFKM02HHVXiTsMIF4C2n'
    });

var count = 0,
    util = require ('util');

twitter.stream('filter',{track: 'love'}, function(stream){

    stream.on('data',function(data){
        console.log(util.inspect(data));
        console.log("\n" + data);
        stream.destroy();
        process.exit(0);
    });
});    
