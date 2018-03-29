
// main.js

"use strict";

(function () {
    var rootElement = document.getElementById("root");

    var mainContainer = document.createElement("main");

    mainContainer.className = "container";

    var navigation = document.createElement("nav");

    navigation.className = "bottom-nav";

    var showHome = function () {
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


        greeting.textContent = timeOfDayGreeting +
        ", jag heter Pelle Skrutt och tar ett skutt.";

        mainContainer.appendChild(title);
        mainContainer.appendChild(greeting);

        mainContainer.appendChild(image);

        rootElement.appendChild(mainContainer);

        showMenu("home");
    };

    var showAbout = function () {
        console.log('Show about');
    }

    var showGithub = function () {
        console.log('Show github');
    }

    var showPresentation = function () {
        console.log('Show presentation');
    }

    var showMenu = function (selected) {
        navigation.innerHTML = "";

        var navElements = [{name: "Me", class: "home", nav: showHome},
                            {name: "Om", class: "free_breakfast", nav: showAbout},
                            {name: "Github", class: "folder", nav: showGithub},
                            {name: "Redovisning", class: "people", nav: showPresentation}];

        navElements.forEach(function (element) {
            var navElement = document.createElement("a");

            if (selected === element.class) {
                navElement.className = "active";
            }

            navElement.addEventListener("click", element.nav);

            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);

            navigation.appendChild(navElement);
        });

        rootElement.appendChild(navigation);
    };
    showHome();
})();
