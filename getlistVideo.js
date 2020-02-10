  /**
   * Sample JavaScript code for youtube.subscriptions.insert
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */
  const Youtube = require("./lib");
  authenticate().then(loadClient).then(execute());

  function authenticate() {
    return Youtube.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    Youtube.client.setApiKey("AIzaSyA-IT1Xknxt1QrCmtlvAxVN8YRZoYRgKXs");
    return Youtube.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return Youtube.client.youtube.subscriptions.insert({
      "resource": {}
    })
        .then(function(response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        },
        function(err) { console.error("Execute error", err); });
  }
  Youtube.load("client:auth2", function() {
    Youtube.auth2.init({client_id: "712872086304-iuefp1nbu84abfc8amhbcn1d3n0g6l1n.apps.googleusercontent.com"});
  });
