
"use strict";

var about = (function () {
    var showAbout = function (selected) {
        mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Om";

        var content = document.createElement("p");

        content.textContent = "Här har jag tänkt mig en massa text"



        mainContainer.appendChild(title);
        mainContainer.appendChild(content);
        rootElement.appendChild(mainContainer);

        menu.showMenu("face");

    }
    return {
        showAbout: showAbout
    }
})(about);
