chrome.contextMenus.create({
    id: "ChatGPTboost",
    title: "Ask ChatGPT",
    contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    const selectedText = encodeURIComponent(info.selectionText);
    const url = `https://chat.openai.com/?question=${selectedText}`;
    chrome.tabs.create({url: url});
});