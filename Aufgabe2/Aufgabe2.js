var Memorie;
(function (Memorie) {
    /*Variablen erstellen*/
    var numPlayer = 0;
    var numPairs = 0;
    /*Array*/
    var cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
    var cardArray = [];
    var player = [];
    var score = [0, 0, 0, 0];
    /* Status mischen */
    function mixStatus() {
        var randomState = Math.random();
        if (randomState >= 0.75) {
            return "visible";
        }
        else if (randomState > 0.5 && randomState < 0.75) {
            return "taken";
        }
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
            childNodeHTML += "<div class=\"";
            childNodeHTML += mixStatus();
            childNodeHTML += "\">";
            childNodeHTML += cardArray[i];
            childNodeHTML += "</div></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;
        console.log(childNodeHTML);
    }
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
            childNodeHTML += score[i];
            childNodeHTML += "</p></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;
        console.log(childNodeHTML);
    }
    /* Hauptprogramm */
    function main() {
        console.log("main");
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
        /* Schleife für Kartenpaare */
        for (var i_2 = 0; i_2 < numPairs; i_2++) {
            /* cardContent 2x an cardArray [] anf�gen */
            cardArray.push(cardContent[i_2]);
            cardArray.push(cardContent[i_2]);
        }
        /* Spielboard erzeugen */
        createBoard();
        /* Spielerinfo erzeugen */
        playerInfo();
    }
    // Add EventListener - Main() wird ausgeführt, sobald das DOM vollst�ndig geladen ist
    document.addEventListener("DOMContentLoaded", main);
})(Memorie || (Memorie = {}));
//# sourceMappingURL=Aufgabe2.js.map