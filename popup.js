let urlContent = document.getElementById("url");
let blockBtn = document.getElementById("blockBtn");
let errorMsg = document.getElementById("errorMsg");
var websiteUrl;
var websiteHostName;

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  websiteUrl = tabs[0].url;
  websiteHostName = new URL(websiteUrl).hostname;
  urlContent = urlContent.innerText = websiteHostName;
});

function errorFunc(text){
    errorMsg.textContent = text
    setTimeout(() => {
        errorMsg.textContent = ''
    }, 3000);
}
blockBtn.addEventListener("click", () => {
  if (websiteUrl.toLowerCase().includes("chrome://")) {
    errorFunc("You Cannot block this chrome site");
  }
  else{
    chrome.storage.local.get("BlockedUrls", (data) => {
        if(data.BlockedUrls === undefined){
            chrome.storage.local.set({BlockedUrls: [{status:"In Progress", url: urlContent}]})
        }
        else{
            if(data.BlockedUrls.some(e) => e.url === websiteHostName && e.status)
        }
    })
  }
  
});



//   chrome.storage.local.set({BlockedUrls: [{ status: "In Progress", url: urlContent }]});
//   chrome.storage.local.get("BlockedUrls").then(result => console.log(result["BlockedUrls"]))