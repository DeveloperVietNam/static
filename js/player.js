function setupPlayer(sha1) {
    jwplayer.key = "W7zSm81+mmIsg7F+fyHRKhF3ggLkTqtGMhvI92kbqf/ysE99";

    var playerInstance = jwplayer("player");
    playerInstance.setup({
        playlist: [{
            sources : [
                {
                  "default": false,
                  "type": "hls",
                  "file": `https://api.phimmoi.vip/hls/${sha1}/main.m3u8`,
                  "label": "0"
                }
              ],
        }],
        primary: "html5",
        autostart: true,
        width: "80%",
        height: "80vh",
    });
}

function myFunction() {
    let sha1 = document.getElementById("hls-stream-input").value
    console.log(sha1)
    setupPlayer(sha1)
}