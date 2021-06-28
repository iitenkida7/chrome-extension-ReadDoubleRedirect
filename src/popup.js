document.getElementById('save').onclick = function () {

  version = document.getElementById('version').value;

  chrome.storage.sync.set({
    'version': version
  }, function () {
    // aa
  });
};
