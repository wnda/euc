;(function(){
  
  var settings;
  
  window.euc = {
          
      init : function(config){
        
        settings = {
          cookieName           : config && config.cookieName          ? config.cookieName          : "euc",
          cookieFlag           : config && config.cookieFlag          ? config.cookieFlag          : "true",
          cookieMaxAge         : config && config.cookieMaxAge        ? config.cookieMaxAge        : 14,
          alertId              : config && config.alertId             ? config.alertId             : "cookieAlert",
          alertContent         : config && config.alertContent        ? config.alertContent        : "This website uses cookies. <a href='/privacy'>(?)</a><button>Okay.</button>",
          alertHook            : config && config.alertHook           ? config.alertHook           : "show-cookie-alert",
          alertCloseSelector   : config && config.alertCloseSelector  ? config.alertCloseSelector  : "button",
          alertParentSelector  : config && config.alertParentSelector ? config.alertParentSelector : "body",
          alertPlacementTop    : config && config.alertPlacementTop   ? config.alertPlacementTop   : true
        };
        
        !euc.alreadyConsents && euc.showAlert();
        
      },
      
      alreadyConsents : function(){
        
        var k = document.cookie.split(";"),
            i = k.length;
            
        while(i--)
        {
          if(k[i] === (settings.cookieName + "=" + settings.cookieFlag))
          {
            return true;
          }
        }
        
        return false;
        
      },
      
      showAlert : function(){
        
        var alertParent  = settings.alertParentSelector.split("")[0] === "#" ? document.getElementById(settings.alertParentSelector) : document.querySelector(settings.alertParentSelector),
            alertElement = document.createElement("div");
            
        alertElement.id            = settings.alertId,
        alertElement.innerHTML     = settings.alertContent,
        alertParent.className     += " " + settings.alertHook,
        settings.alertPlacementTop ? alertParent.insertBefore(alertElement, alertParent.firstChild) : alertParent.appendChild(alertElement);
        
        if(alertElement.addEventListener)
        {
          alertElement.querySelector(settings.alertCloseSelector)
            .addEventListener("click", euc.removeAlert,false);
        }
        else if(alertElement.attachEvent)
        {
          alertElement.querySelector(settings.alertCloseSelector)
            .attachEvent("onclick", euc.removeAlert);
        }
        else
        {
          alertElement.querySelector(settings.alertCloseSelector)
            .onclick = euc.removeAlert;
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
        
        document.getElementById(settings.alertId)
          .parentNode.removeChild(document.getElementById(settings.alertId));
        euc.setCookie();
        
      }
      
    }
}());
