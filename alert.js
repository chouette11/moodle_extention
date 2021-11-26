function showAlert() {
    console.log("どうなってんだ");
	alert("今日も楽しく開発しよう！");
}

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({
        url: 'sample.html'
    });
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: showAlert
	});
    console.log(doc);
});