;(function(){

  "use strict";

  function eucAlert(config){

    var cookieName   = config.cookieName   ? config.cookieName      : "euc",
        cookieFlag   = config.cookieFlag   ? config.cookieFlag      : "true",
        cookieMaxAge = config.cookieMaxAge ? config.cookieMaxAge    : 14,
        alertId      = config.alertId      ? config.alertId         : "cookieAlert",
        alertContent = config.alertContent ? config.alertContent    : "",
        alertHook    = config.alertHook    ? config.alertHook       : "has-cookie-alert",
        noCookie     = document.cookie.indexOf(cookieName) < 0 ? !0 : !!0;

    var euc = {

      showAlert : function (){

        var bodyElement        = document.getElementsByTagName("body")[0],
            alertElement       = document.createElement("div");

        alertElement.id        = alertId,
        alertElement.innerHTML = alertContent,

        bodyElement.className  += " " + alertHook,
        bodyElement.appendChild(alertElement);

      },

      setCookie : function(){

        var d = new Date();

        d.setTime(d.getTime() + 1e3 * 60 * 60 * 24 * cookieMaxAge);

        document.cookie = 
                      (
                        cookieName
                        + "="
                        + cookieFlag
                        + (cookieMaxAge ? "; max-age=" + d.toGMTString() : "")
                        + "; path=/"
                      );
      },

      removeAlert : function(){
        document.getElementById(alertId).parentNode.removeChild(document.getElementById(alertId));
        euc.setCookie();
      }

    };

    window.euc = euc;

    !!noCookie && euc.showAlert();

  }

  window.eucAlert = eucAlert;

}());
