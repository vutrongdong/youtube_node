import google from 'googleapis';
addSubscription('UClyA28-01x4z60eWQ2kiNbA')
// Subscribes the authorized user to the channel specified
function addSubscription(channelSub) {
    var resource = {
        part: 'id,snippet',
        snippet: {
            resourceId: {
                kind: 'youtube#channel',
                channelId: channelSub
            }
        }
    };

    var request = google.client.youtube.subscriptions.insert(resource);
    request.execute(function (response) {
        var result = response.result;
        if (result) {
            // alert("Subscription completed");
        } else {
            // alert("Subscripion failed");
            // ...
        }
    });
}