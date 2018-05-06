var Aufgabe4;
(function (Aufgabe4) {
    /*Variablen erstellen*/
    var numPlayer = 0;
    /*Anzahl der Karten*/
    var numPairs = 0;
    /*Aktuelle Deck Auswahl*/
    var actualDeck = "";
    /*Variablen zum Status�ndern f�rs Spielen*/
    var counter = 0;
    var klickbar = true;
    /*Array f�r offene Karten*/
    var visibleCards = [];
    //    /*Kartendecks*/
    //    let actualCardDeck: Deck = undefined;
    /*Array*/
    var cardContent = [];
    var cardArray = [];
    /*Spieler und Score Array*/
    var player = [];
    var score = [0, 0, 0, 0];
    window.addEventListener("click", changeStatus);
    function playerInput(element) {
        numPlayer = parseInt(element.value);
        for (var i = 1; i <= numPlayer; i++) {
            var input = document.getElementById("Spieler" + i);
            var label = document.getElementById("Spielername" + i);
            if (i <= numPlayer) {
                input.required = true;
                label.style.opacity = "1";
            }
            else {
                input.required = false;
                label.style.opacity = "0.33";
                input.value = "";
            }
            console.log(element.value);
        }
    }
    Aufgabe4.playerInput = playerInput;
    function numPairInput(value) {
        document.getElementById("numberOfPairs_label").innerText = value.toString();
        numPairs = value;
        console.log(value);
    }
    Aufgabe4.numPairInput = numPairInput;
    function setCardDeck(value) {
        actualDeck = value;
        console.log(actualDeck);
        var numOfPairs = document.getElementById("numberOfPairs_slider");
        numOfPairs.max = Aufgabe4.decks[actualDeck].content.length.toString();
        if (Aufgabe4.decks[actualDeck].content.length < parseInt(numOfPairs.value)) {
            numOfPairs.value = numOfPairs.max;
        }
        document.getElementById("numberOfPairs_label").innerText = numOfPairs.value;
    }
    Aufgabe4.setCardDeck = setCardDeck;
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
                if (visibleCards[0].innerText == visibleCards[1].innerText) {
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
            childNodeHTML += cardArray[i] + " hidden";
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
        Aufgabe4.createDecks();
        //Auswertung der Spielernamen
        for (var i = 1; i <= numPlayer; i++) {
            var playerName = document.getElementById("Spieler" + i);
            if (playerName.value == "") {
                player.push("Mickey");
            }
            else {
                player.push(playerName.value);
            }
        }
        /*Karten des jeweilig ausgew�hlten Satzes erzeugen*/
        cardContent = Aufgabe4.decks[actualDeck].content;
        /*Erzeugung Kartenpaare*/
        for (var i = 0; i < numPairs; i++) {
            /* cardContent 2x an cardArray [] anf�gen */
            cardArray.push(cardContent[i]);
            cardArray.push(cardContent[i]);
        }
        /*Formular wird gel�scht nachdem alle Einstellungen �bernommen wurden*/
        document.getElementById("Formular").remove();
        /* Spielboard erzeugen */
        createBoard();
        /* Spielerinfo erzeugen */
        playerInfo();
    }
    Aufgabe4.main = main;
})(Aufgabe4 || (Aufgabe4 = {}));
//    // Add EventListener - Main() wird ausgef�hrt, sobald das DOM vollst�ndig geladen ist
//    document.addEventListener("DOMContentLoaded", main); 
//# sourceMappingURL=Aufgabe4.js.map