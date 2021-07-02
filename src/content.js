chrome.storage.sync.get("version", function (value) {
    if (typeof value.version === 'undefined') {
        return false;
    } else if (getLaravelVersion() != value.version) {
        saveTmpRedirect(getLaravelVersion(), value.version);
        location.href = getNewUri(value.version);
    } else if (getLaravelVersion() == value.version) {
        chrome.storage.local.get("hasRedirect", function (value) {
            chrome.storage.local.remove("hasRedirect", function () { });
            //document.body.insertAdjacentHTML("beforeend", "<div class='chrome-plugin'>@todo: モーダル</div>");
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
