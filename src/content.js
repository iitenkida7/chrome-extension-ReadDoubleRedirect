
var laravel_version = '8.x';

// ローカルストレージ利用例
//localStorage.setItem('laravel_version', '8.x');
//laravel_version = localStorage.getItem('laravel_version')

if (getLaravelVersion() != laravel_version){
    $originUrl = parseUrl();
    $originUrl[2] = laravel_version;
    location.href=$originUrl.join('/');
}

function parseUrl()
{
    /*
    0: ""
    1: "laravel"
    2: "4.2"
    3: "ja"
    4: "quick.html"
     */
    return location.pathname.split('/');
}

function getLaravelVersion(){

    return location.pathname.split('/')[2];
}
