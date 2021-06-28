chrome.storage.sync.get("version", function (value) {
    if (typeof value.version === 'undefined') {
        return false;

    } else {
        if (getLaravelVersion() != value.version) {
            $originUrl = parseUrl();
            $originUrl[2] = value.version;
            location.href = $originUrl.join('/');
        }
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
