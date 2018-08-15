(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    console.log("------");
    console.log("----------String Split-----------")
    console.log("------");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    console.log("------");
    console.log("----------Break Tags-----------")
    console.log("------");

    var planetsBreak = planetsArray.join("<br>");
    console.log(planetsBreak);


    console.log("------");
    console.log("----------Bonus: Unordered List-----------")
    console.log("------");

    var planetsList = planetsArray.join("</li><li>");

    var planetsListArray = planetsList.split(" ");

    planetsListArray.unshift("<ul><li>");
    planetsListArray.push("</li></ul>");

    planetsList = planetsListArray.join(" ");
    document.body.innerHTML = planetsList;
    console.log(planetsList);




})();
