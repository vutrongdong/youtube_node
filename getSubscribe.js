var request = require('request');

// Replace id and key with the accountId and an API key.
var id = "UClyA28-01x4z60eWQ2kiNbA";
var key = "AIzaSyA-IT1Xknxt1QrCmtlvAxVN8YRZoYRgKXs";

var url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + id + "&key=" + key;

request({
    method: 'GET',
    url: url
}, function (err, response, text) {
    if (err) {

        return;
    }

    var json = JSON.parse(text);

    console.log(json.items[0].statistics.subscriberCount);
});