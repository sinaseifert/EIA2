var Memorie;
(function (Memorie) {
    /*Variablen erstellen*/
    let numPlayer = 0;
    let numPairs = 0;
    /*Variablen zum Statusändern fürs Spielen*/
    let counter = 0;
    let klickbar = true;
    /*Array für offene Karten*/
    let visibleCards = [];
    /*Array*/
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
    let cardArray = [];
    /*Spieler und Score Array*/
    let player = [];
    let score = 0;
    function changeStatus(_event) {
        let target = _event.target;
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
                    setTimeout(() => {
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
                    setTimeout(() => {
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
        let i = cardArray.length;
        let j = 0;
        let temp = "";
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1));
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }
    /*Create Board*/
    function createBoard() {
        let node = document.getElementById("Spielfeld");
        shuffleCardArray();
        let childNodeHTML = "";
        childNodeHTML += "<h2>Memoryboard</h2>";
        childNodeHTML += "<div>";
        for (let i = 0; i < cardArray.length; i++) {
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
        let node = document.getElementById("Spielerinfo");
        let childNodeHTML = "";
        childNodeHTML += "<div>";
        for (let i = 0; i < player.length; i++) {
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
        let i = true;
        while (i) {
            numPlayer = parseInt(prompt("Bitte wählen Sie zwischen 1 und 4 Spielern"), 10);
            if (numPlayer >= 1 && numPlayer <= 4) {
                i = false;
            }
        }
        for (let i = 0; i < numPlayer; i++) {
            player[i] = prompt("Bitte Spielernamen " + (i + 1) + " eingeben");
            if (player[i] == null) {
                player[i] = "Mickey";
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
        for (let i = 0; i < numPairs; i++) {
            /* cardContent 2x an cardArray [] anf�gen */
            cardArray.push(cardContent[i]);
            cardArray.push(cardContent[i]);
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