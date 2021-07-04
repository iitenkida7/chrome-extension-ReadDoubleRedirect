chrome.storage.sync.get("version", function (value) {
    if (typeof value.version === 'undefined') {
        return false;
    } else if (getLaravelVersion() != value.version) {
        saveTmpRedirect(getLaravelVersion(), value.version);
        location.href = getNewUri(value.version);
    } else if (getLaravelVersion() == value.version) {
        chrome.storage.local.get("hasRedirect", function (version) {
            if (typeof version.hasRedirect !== 'undefined') {
              var modal = "<div style='position:fixed; top:0; z-index:100; margin-top:30px; padding: 3px 0;right: 0px; font-size: 12px; font-weight: bold;  background-color: rgba(75, 175, 132, 0.8); color: #fff9fc;'>リダイレクト(" + version.hasRedirect.old + "->" + version.hasRedirect.new + ") </div>"
              document.body.insertAdjacentHTML("beforeend", modal);
              chrome.storage.local.remove("hasRedirect", function () { });
            }
        });
    }
});

function parseUrl() {
    /*
    0: ""
    1: "laravel"
    2: "4.2"
    3: "ja"
    4: "quick.html"
     */
    return location.pathname.split('/');
}

function getLaravelVersion() {
    return location.pathname.split('/')[2];
}

function getNewUri(newVersion) {
    originUrl = parseUrl();
    originUrl[2] = newVersion
    return originUrl.join('/');
}

function saveTmpRedirect(oldVersion, newVersion) {
    chrome.storage.local.set({
        'hasRedirect': {
            'old': oldVersion,
            'new': newVersion,
        }
    });
}
