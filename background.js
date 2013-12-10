chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
  	return {cancel: true}; 
  },
  {
  	urls: ["*://www.hulu.com/*"]
  },
  ["blocking"]);