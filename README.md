# euc
EU cookie alert in vanilla JS

## Usage
Call `euc.init();` with the following optional settings:
    
    euc.init(
      {
        cookieName   : "eu_consent",
        cookieFlag   : "given",
        cookieMaxAge : 14,
        alertId      : "cookieLaw",
        alertContent : '<div class="cookie-crumble"><span class="cookie-crumble-text">This website uses cookies.&nbsp;<a href="/privacy" rel="nofollow">(?)</a></span><button class="cookie-crumble-close" onclick="euc.removeAlert()">Okay.</button></div>',
        alertHook    : "show-cookie-warning"
      }
    );
