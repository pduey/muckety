function mucketySearch(info, tab) {
    chrome.tabs.create({"url" : "javascript:" + mucketyPostCode + " mucketyPost('" + info.selectionText + "');"});
}

chrome.contextMenus.create({"title": "Search Muckety for '%s'",
                            "contexts":["selection"],
                            "onclick": mucketySearch});

function mucketyPost(name) {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "http://muckety.com/Query");
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "name");
    hiddenField.setAttribute("value", name);
    form.appendChild(hiddenField);
    document.body.appendChild(form);
    form.submit();
};
//minify function
mucketyPostCode = mucketyPost.toString().replace(/(\n|\t)/gm,'');

