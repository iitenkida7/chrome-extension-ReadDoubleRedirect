var versions = [
              "undefined",
              "5.4",
              "5.5",
              "5.6",
              "5.7",
              "5.8",
              "6.x",
              "7.x",
              "8.x",
              "9.x",
  
];

chrome.storage.sync.get("version", function (value) {
    for (key in versions) {
      if (value.version === versions[key]) {
        document.getElementById('version').insertAdjacentHTML('afterbegin', '<option value="' + versions[key] + '" selected>' + versions[key] + '</option>');

      } else {
        document.getElementById('version').insertAdjacentHTML('afterbegin', '<option value="' + versions[key] + '">' + versions[key] + '</option>');

      }
    }
});

// 設定保存
document.getElementById('save').onclick = function () {

  version = document.getElementById('version').value;

  if (version === 'undefined' ){
    chrome.storage.sync.remove("version", function () { });
  } else {
    chrome.storage.sync.set({
      'version': version
    }, function () {
      // ...
    });
  }
};

