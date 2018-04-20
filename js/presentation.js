
"use strict";

var presentation = (function () {
    var showPresentation = function (selected) {
        mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Redovisningar";

        var papers = [{name: "kmom01", func: kmom01},
        {name: "kmom02", func: kmom02},
        {name: "kmom03", func: kmom03},
        {name: "kmom04", func: kmom04},
        {name: "kmom05", func: kmom05},
        {name: "kmom06", func: kmom06},
        {name: "kmom7/10", func: kmom07}]

        var listOfPapers = document.createElement("ul");
        papers.forEach( function (paper){
            var listElement = document.createElement("li");
            var paperLink = document.createElement("a");
            paperLink.textContent = paper.name;
            paperLink.addEventListener("click", paper.func)
            listElement.appendChild(paperLink);
            listOfPapers.appendChild(listElement);
        });

        mainContainer.appendChild(title);
        mainContainer.appendChild(listOfPapers);

        menu.showMenu("face");
    }

    function presentation(heading) {
        mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = heading;
        mainContainer.appendChild(title);
    }

    function addParagraph (text) {
        var content = document.createElement("p");

        content.textContent = text;
        mainContainer.appendChild(content);
    }

    function kmom01 () {
        presentation("Kmom01");
        addParagraph("här kommer en massa text");
        addParagraph("och mer blir det hela tiden");
    }

    function kmom02 () {
        console.log("Kmom02");
    }

    function kmom03 () {
        console.log("Kmom03");
    }

    function kmom04 () {
        console.log("Kmom04");
    }

    function kmom05 () {
        console.log("Kmom05");
    }

    function kmom06 () {
        console.log("Kmom06");
    }

    function kmom07 () {
        console.log("Kmom7");
    }


    return {
        showPresentation : showPresentation
    }
})(presentation);
