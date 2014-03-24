chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
  	console.log("ENTERED:")
  	console.log(details.url);
  	chrome.windows.getAll({"populate":true}, function(windows) {
	    var existing_tab = null;
	    for (var i in windows) {
	      var tabs = windows[i].tabs;
	      for (var j in tabs) {
	        var tab = tabs[j];
	        if (tab.url.indexOf('learn.html')!= -1) {
	          existing_tab = tab;
	          break;
	        }
	      }
	    }
	    if (existing_tab) {
	      chrome.tabs.update(existing_tab.id, {"selected":true});
	    } else {
	      chrome.tabs.create({"url":"learn.html", "selected":true});
	    }
    });
  	//chrome.windows.create({url:"http://www.codecademy.com"})
  	//return {cancel: true};
  },
  {
  	urls: ["*://www.hulu.com/*", "*://www.netflix.com/*"]
  });