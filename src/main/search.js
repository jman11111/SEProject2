var tweet = require('twitter'),
    twitter = new tweet({
        consumer_key: 'sCcnjWyY5I09rj9rNZRsjntZN',
        consumer_secret: 'yBcwz07LVUTNwL4ZKFUWo4bTHQw94JTHIjJiuypSsB1AvHGNLB',
        access_token: '1097228851397173248-eE0byHpuvAxRwvYnSKzWTB0JnmtqHb',
        access_secret: 'kR0IcRZ6KgfH5FvHlbJxwrXkfPUXhYvMVoxGn3U2KlrPx'
    });

var count = 0,
    util = require ('util');


twitter.stream('filter',{track: 'thanks'}, function(stream){

    stream.on('data',function(data){
        console.log(util.inspect(data));
        console.log("\n" + data);
        stream.destroy();
        process.exit(0);
    });
});    
