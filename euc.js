;(function(){
  
  "use strict";
    
  var settings;
  
  window.euc = {
          
      init: function(config){
        settings = {
          cookieName   : config && config.cookieName   ? config.cookieName   : "euc",
          cookieFlag   : config && config.cookieFlag   ? config.cookieFlag   : "true",
          cookieMaxAge : config && config.cookieMaxAge ? config.cookieMaxAge : 14,
          alertId      : config && config.alertId      ? config.alertId      : "cookieAlert",
          alertContent : config && config.alertContent ? config.alertContent : "This website uses cookies. <a href='/privacy'>(?)</a><button>Okay.</button>",
          alertHook    : config && config.alertHook    ? config.alertHook    : "show-cookie-alert",
          alertClose   : config && config.alertClose   ? config.alertClose   : "button",
          alertTop     : config && config.alertTop     ? config.alertTop     : true
        };
        
        if (document.cookie.indexOf(settings.cookieName) < 0){
          euc.showAlert();
        }
      },
      
      showAlert : function(){
        var bodyElement        = document.getElementsByTagName("body")[0],
            alertElement       = document.createElement("div");
            
        alertElement.id        = settings.alertId,
        alertElement.innerHTML = settings.alertContent,
        bodyElement.className += " " + settings.alertHook,
        alertTop ? bodyElement.insertBefore(alertElement, bodyElement.firstChild) : bodyElement.appendChild(alertElement);
        
        if(alertElement.addEventListener){
          alertElement.querySelector(settings.alertClose).addEventListener("click",euc.removeAlert,false);
        }
        else if(alertElement.attachEvent){
          alertElement.querySelector(settings.alertClose).attachEvent("onclick",euc.removeAlert);
        }
        else{
          alertElement.querySelector(settings.alertClose).onclick=euc.removeAlert
        }
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
      }
      
    }
}());
