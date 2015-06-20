/**
 * Created by hasta on 20/06/15.
 */
//$(function(){
//    $("#siteloader")
//        .html('<object data="http://uat.talk.build/?mobile=1"/>');
//});

//doesn't block the load event
function createIframe() {
    var i = document.createElement("iframe");
    i.src = "http://uat.talk.build/?mobile=1";
    i.scrolling = "auto";
    i.frameborder = "0";
    i.width = "100%";
    i.height = "100%";
    document.getElementById("frameContainer").appendChild(i);
};

// Check for browser support of event handling capability
if (window.addEventListener) window.addEventListener("load", createIframe, false);
else if (window.attachEvent) window.attachEvent("onload", createIframe);
else window.onload = createIframe;