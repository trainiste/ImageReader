var lang = document.documentElement.lang;
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.type === "lang") {
            sendResponse({language: lang, farewell: "Done"});
        } else if(request.type === "alt") {
            var images = document.getElementsByTagName('img');
            var found = false;
            for (var i = 0; i < images.length; i++) {
                if (images[i].src === request.src) {
                    images[i].lang = request.language;
                    images[i].alt = request.label;
                    found = true;
                }
            }
            if(found) {
                sendResponse({farewell: "Done"});
            } else {
                sendResponse({farewell: "Image not found"});
            }
        }
    }
);
