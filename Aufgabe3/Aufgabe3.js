var Memorie;
(function (Memorie) {
    /*Variablen erstellen*/
    var numPlayer = 0;
    var numPairs = 0;
    /*Variablen zum Statusändern fürs Spielen*/
    var counter = 0;
    var klickbar = true;
    /*Array für offene Karten*/
    var visibleCards = [];
    /*Array*/
    var cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
    var cardArray = [];
    /*Spieler und Score Array*/
    var player = [];
    var score = 0;
    function changeStatus(_event) {
        var target = _event.target;
        if (target.classList.contains("hidden") && klickbar) {
            if (counter < 2) {
                target.classList.remove("hidden");
                visibleCards.push(target);
            }
            counter++;
            if (counter == 2) {
                klickbar = false;
                counter = 0;
                if (visibleCards[0].innerText === visibleCards[1].innerText) {
                    setTimeout(function () {
                        visibleCards[0].classList.add("taken");
                        visibleCards[1].classList.add("taken");
                        visibleCards = [];
                        klickbar = true;
                        if (document.getElementsByClassName("hidden").length == 0) {
                            alert("Gratuliere! Du hast gewonnen!");
                        }
                    }, 1500);
                }
                else {
                    //setTimeout Funktion
                    setTimeout(function () {
                        visibleCards[0].classList.add("hidden");
                        visibleCards[1].classList.add("hidden");
                        visibleCards = [];
                        klickbar = true;
                    }, 1500);
                }
            }
        }
    }
    /* Status mischen */
    function mixStatus() {
        return "hidden";
    }
    /* Karten mischen Shufflefunktion */
    function shuffleCardArray() {
        var i = cardArray.length;
        var j = 0;
        var temp = "";
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1));
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }
    /*Create Board*/
    function createBoard() {
        var node = document.getElementById("Spielfeld");
        shuffleCardArray();
        var childNodeHTML = "";
        childNodeHTML += "<h2>Memoryboard</h2>";
        childNodeHTML += "<div>";
        for (var i = 0; i < cardArray.length; i++) {
            childNodeHTML += "<div>";
            childNodeHTML += "<div id=" + i + " attr=" + i + " class='";
            childNodeHTML += cardArray[i] + " " + mixStatus();
            childNodeHTML += "'>";
            childNodeHTML += cardArray[i];
            childNodeHTML += "</div></div>";
            console.log(i);
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;
    }
    /*Spielerinfo*/
    function playerInfo() {
        var node = document.getElementById("Spielerinfo");
        var childNodeHTML = "";
        childNodeHTML += "<div>";
        for (var i = 0; i < player.length; i++) {
            childNodeHTML += "<div id=Spieler";
            childNodeHTML += i;
            childNodeHTML += ">";
            childNodeHTML += "<p>Spielername: ";
            childNodeHTML += player[i];
            childNodeHTML += "</p>";
            childNodeHTML += "<p>Punktestand: ";
            childNodeHTML += score;
            childNodeHTML += "</p></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;
    }
    /* Hauptprogramm */
    function main() {
        /* numPlayers erstellen */
        var i = true;
        while (i) {
            numPlayer = parseInt(prompt("Bitte wählen Sie zwischen 1 und 4 Spielern"), 10);
            if (numPlayer >= 1 && numPlayer <= 4) {
                i = false;
            }
        }
        for (var i_1 = 0; i_1 < numPlayer; i_1++) {
            player[i_1] = prompt("Bitte Spielernamen " + (i_1 + 1) + " eingeben");
            if (player[i_1] == null) {
                player[i_1] = "Mickey";
            }
        }
        /* numPairs erstellen */
        i = true;
        while (i) {
            numPairs = parseInt(prompt("Bitte wählen Sie zwischen 5 und 15 Kartenpaaren"), 10);
            if (numPairs >= 5 && numPairs <= 15) {
                i = false;
            }
        }
        /* Schleife f�r Kartenpaare */
        for (var i_2 = 0; i_2 < numPairs; i_2++) {
            /* cardContent 2x an cardArray [] anf�gen */
            cardArray.push(cardContent[i_2]);
            cardArray.push(cardContent[i_2]);
        }
        /*Gratulation*/
        /* Spielboard erzeugen */
        createBoard();
        /* Spielerinfo erzeugen */
        playerInfo();
        window.addEventListener("click", changeStatus);
    }
    // Add EventListener - Main() wird ausgef�hrt, sobald das DOM vollst�ndig geladen ist
    document.addEventListener("DOMContentLoaded", main);
})(Memorie || (Memorie = {}));
//# sourceMappingURL=Aufgabe3.js.map