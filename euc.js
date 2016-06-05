;(function(){
  "use strict";

    var settings;

    var euc = {

      init: function(config){
        settings = {
          cookieName   : config.cookieName   ? config.cookieName   : "euc",
          cookieFlag   : config.cookieFlag   ? config.cookieFlag   : "true",
          cookieMaxAge : config.cookieMaxAge ? config.cookieMaxAge : 14,
          alertId      : config.alertId      ? config.alertId      : "cookieAlert",
          alertContent : config.alertContent ? config.alertContent : "",
          alertHook    : config.alertHook    ? config.alertHook    : "show-cookie-alert"
        };

        if (document.cookie.indexOf(settings.cookieName) < 0)
        {
          euc.showAlert();
        }

      },

      showAlert : function(){
        var bodyElement        = document.getElementsByTagName("body")[0],
            alertElement       = document.createElement("div");
        alertElement.id        = settings.alertId,
        alertElement.innerHTML = settings.alertContent,
        bodyElement.className  += " " + settings.alertHook,
        bodyElement.appendChild(alertElement);
      },

      setCookie : function(){
        var d = new Date();
        d.setTime(d.getTime() + 1e3 * 60 * 60 * 24 * settings.cookieMaxAge);
        document.cookie = (settings.cookieName
                        + "="
                        + settings.cookieFlag
                        + (settings.cookieMaxAge ? "; max-age=" + d.toGMTString() : "")
                        + "; path=/");
      },

      removeAlert : function(){
        document.getElementById(settings.alertId).parentNode.removeChild(document.getElementById(settings.alertId));
        euc.setCookie();
      },

    }

    window.euc = euc;

}());
