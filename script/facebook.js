window.fbAsyncInit = function () {
  FB.init({
    appId: "725605504985921",
    cookie: true,
    xfbml: true,
    version: "v12.0",
  });

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });

  FB.AppEvents.logPageView();
};

function statusChangeCallback(response) {
  if (response.status === "connected") {
    console.log("Logged in and authenticated");
  } else {
    console.log("Not authenticated");
  }
}

FB.getLoginStatus(function (response) {
  statusChangeCallback(response);
});

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}
