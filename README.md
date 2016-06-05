# euc.js
"This site uses cookies" alert in vanilla JS. Cheerfully made possible by setting a cookie.

## Why?
Because I live in the UK and it's mandatory to warn users within the EU of cookie use.

## Implementation
Following a fairly standard pattern (with a dirty shortcut for init/config object extension) for a JS 'plugin', the aim of this lib is to offer as much configuration as possible without getting in the way. 

The contents of your cookie alert banner, for instance, may vary tremendously per each project, as might the ways in which you want to display the banner. 

To that end, strictly only the hooks needed for the plugin to function are assigned their own object properties, while the innerHTML and all the styling is left up to you.

## Settings

cookieName | cookieFlag | cookieMaxAge | alertId | alertContent | alertHook
--- | --- | --- | --- | --- | ---
The name of your cookie | The indicator of your cookie state, be it "on", "true", etc. | days until the cookie expires | `id` attribute for your cookie warning banner | `innerHTML` for your cookie warning banner | CSS class to add to the root or body element to indicate the banner's presence

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
