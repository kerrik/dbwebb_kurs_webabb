
"use strict";

var home = (function () {
    var showHome = function (selected) {
        mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Pelle Skrutt";

        var greeting = document.createElement("p");

        var timeOfDayGreeting = "Hej";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
        } else {
            timeOfDayGreeting = "Det är mitt på dan";
        }

        var image = document.createElement("img");

        image.src = "pic/me.jpg";
        image.alt = "Pelle Skrutt";

        greeting.classList.add("bread");
        greeting.textContent = timeOfDayGreeting +
        ", jag heter Pelle Skrutt och tar ett skutt.";

        mainContainer.appendChild(title);
        mainContainer.appendChild(greeting);

        mainContainer.appendChild(image);

        rootElement.appendChild(mainContainer);

        menu.showMenu("home");
    };

    return {
        showHome: showHome
    };
})(home);
