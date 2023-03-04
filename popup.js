let urlContent = document.getElementById("url");
let blockBtn = document.getElementById("blockBtn");
let errorMsg = document.getElementById("errorMsg");
let unblock = document.getElementById('unblock')
var websiteUrl;
var websiteHostName;

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  websiteUrl = tabs[0].url;
  websiteHostName = new URL(websiteUrl).hostname;
  urlContent = urlContent.innerText = websiteHostName;
});

function errorFunc(text) {
  errorMsg.textContent = text;
  setTimeout(() => {
    errorMsg.textContent = "";
  }, 3000);
}


unblock.addEventListener('click', ()=> {
    chrome.storage.local.clear()
})


//   chrome.storage.local.set({BlockedUrls: [{ status: "In Progress", url: urlContent }]});
//   chrome.storage.local.get("BlockedUrls").then(result => console.log(result["BlockedUrls"]))
