var callback = function () {};
var millisecondsPerMonth = 1000 * 60 * 60 * 24 * 7 * 4;

var oneMonthAgo = new Date().getTime() - millisecondsPerMonth;

const historyItems = chrome.history.search({
  text: "", // Return every history item....
  startTime: 7, // that was accessed less than one week ago.
  maxResults: 100, // Optionally state a limit
});

historyItems.then(res => {
  for (var i = 0; i < res.length; ++i) {
    var url = res[i].url;
    var ul = document.getElementById("listOfHistory");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(url));
    ul.appendChild(li);
  }
});

// console.log(chrome);

document.getElementById("deleteHistoryBtn").addEventListener("click", deleteHistory);

function deleteHistory() {
  chrome.history.deleteAll();
}
