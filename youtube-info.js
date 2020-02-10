var fetchVideoInfo = require('youtube-info');
const ytlist = require('youtube-playlist');
function getListVideo(channelId) {
    const url = 'https://www.youtube.com/playlist?list=' + channelId;
    console.log(url)
    
    ytlist(url, 'url').then(res => {
        console.log(res);
    });
}
fetchVideoInfo('gJn5Ds-EqAE?hd=1&rel=0&autoplay=0&iv_load_policy=3&wmode=transparent', function (err, videoInfo) {
    if (err) throw new Error(err);
    let channelId = videoInfo.channelId;
    console.log(videoInfo)
    getListVideo(channelId)
});