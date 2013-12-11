chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
  	console.log("ENTERED:")
  	console.log(details.url);
  	chrome.windows.create({url:"http://www.codecademy.com"})
  	//return {cancel: true};
  },
  {
  	urls: ["*://www.hulu.com/*", "*://www.netflix.com/*"]
  });