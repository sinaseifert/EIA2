var Aufgabe4;
(function (Aufgabe4) {
    /*Variablen erstellen*/
    let numPlayer = 1;
    /*Anzahl der Karten*/
    Aufgabe4.numPairs = 5;
    /*Aktuelle Deck Auswahl*/
    let actualDeck = undefined;
    /*Variablen zum Status ändern fürs Spielen*/
    let counter = 0;
    let klickbar = true;
    let actualPlayer = 1;
    let tempScore = [];
    /*Array für offene Karten*/
    let visibleCards = [];
    /*Array*/
    let cardArray = [];
    window.addEventListener("click", changeStatus);
    Aufgabe4.createDecks();
    Aufgabe4.createPlayer();
    function playerInput(element) {
        numPlayer = parseInt(element.value);
        for (let i = 1; i <= 4; i++) {
            let input = document.getElementById("Spieler" + i);
            let label = document.getElementById("Spielername" + i);
            if (i <= numPlayer) {
                input.required = true;
                label.style.opacity = "1";
            }
            else {
                input.required = false;
                label.style.opacity = "0.33";
                input.value = "";
            }
        }
    }
    Aufgabe4.playerInput = playerInput;
    function numPairInput(value) {
        document.getElementById("numberOfPairs_label").innerText = value;
        Aufgabe4.numPairs = parseInt(value);
    }
    Aufgabe4.numPairInput = numPairInput;
    function setCardDeck(value) {
        actualDeck = Aufgabe4.decks[value];
        setSilderValue();
    }
    Aufgabe4.setCardDeck = setCardDeck;
    function setSilderValue() {
        let numOfPairs = document.getElementById("numberOfPairs_slider");
        numOfPairs.max = actualDeck.content.length.toString();
        let max = actualDeck.content.length;
        let actual = parseInt(numOfPairs.value);
        if (max < actual) {
            numOfPairs.value = max.toString();
        }
        document.getElementById("numberOfPairs_label").innerText = numOfPairs.value;
    }
    Aufgabe4.setSilderValue = setSilderValue;
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
                if (visibleCards[0].innerText == visibleCards[1].innerText) {
                    setTimeout(() => {
                        visibleCards[0].classList.add("taken");
                        visibleCards[1].classList.add("taken");
                        visibleCards = [];
                        tempScore[actualPlayer]++;
                        document.getElementById("Player" + actualPlayer).innerText = "Punktestand: " + tempScore[actualPlayer].toString();
                        //                        players["Player" + actualPlayer].score++;
                        //                        document.getElementById("Player" + actualPlayer).innerText = "Punktestand: " + players["Player" + actualPlayer].score.toString();
                        klickbar = true;
                        if (document.getElementsByClassName("hidden").length == 0) {
                            alert("Gratuliere! Game Over!");
                        }
                    }, 1500);
                }
                else {
                    //setTimeout Funktion
                    actualPlayer++;
                    if (actualPlayer > numPlayer) {
                        actualPlayer = 1;
                    }
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
    /*CreateFormular*/
    //    function createFormular(): void {
    //        let node: HTMLElement = document.getElementById("Formular");
    //        let childNodeHTML: string = "";
    //        childNodeHTML += "<fieldset>";
    //            for (let i: number = 
    //    }   
    /*Create Board*/
    function createBoard() {
        let node = document.getElementById("Spielfeld");
        shuffleCardArray();
        let headline = document.createElement("h2");
        headline.innerText = "Memoryboard";
        node.appendChild(headline);
        //        let childNodeHTML: string = "";
        //        childNodeHTML += "<h2>Memoryboard</h2>";
        //        childNodeHTML += "<div>";
        let gameBoard = document.createElement("div");
        for (let i = 0; i < cardArray.length; i++) {
            let cards = document.createElement("div");
            cards.id = i.toString();
            cards.setAttribute("attr", i.toString());
            cards.classList.add(cardArray[i]);
            cards.classList.add(mixStatus());
            cards.textContent = cardArray[i];
            cards.style.backgroundColor = actualDeck.backgroundcolor;
            cards.style.fontFamily = actualDeck.font;
            cards.style.fontSize = actualDeck.size + "%";
            gameBoard.appendChild(cards);
            node.appendChild(gameBoard);
        }
        //        childNodeHTML += "</div>";
        //        node.innerHTML += childNodeHTML;
    }
    /*Spielerinfo*/
    function playerInfo() {
        let node = document.getElementById("Spielerinfo");
        let childNodeHTML = "";
        childNodeHTML += "<div>";
        for (let i = 1; i <= numPlayer; i++) {
            childNodeHTML += "<div id=Spieler";
            childNodeHTML += i;
            childNodeHTML += ">";
            childNodeHTML += "<p>Spielername: ";
            childNodeHTML += Aufgabe4.players["Player" + i].name;
            childNodeHTML += "</p>";
            childNodeHTML += "<p id=Player" + i;
            childNodeHTML += ">Punktestand: ";
            childNodeHTML += Aufgabe4.players["Player" + i].score;
            childNodeHTML += "</p></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;
    }
    /* Hauptprogramm */
    function main() {
        //Auswertung der Spielernamen
        for (let i = 1; i <= 4; i++) {
            let player = document.getElementById("Spieler" + i);
            if (player.value == "") {
                Aufgabe4.players["Player" + i].name = "Mickey";
                Aufgabe4.players["Player" + i].score = 0;
                tempScore[i] = 0;
            }
            else {
                Aufgabe4.players["Player" + i].name = (player.value);
                Aufgabe4.players["Player" + i].score = 0;
                tempScore[i] = 0;
            }
        }
        /*Erzeugung Kartenpaare*/
        for (let i = 0; i < Aufgabe4.numPairs; i++) {
            /* cardContent 2x an cardArray [] anfügen */
            cardArray.push(actualDeck.content[i]);
            cardArray.push(actualDeck.content[i]);
        }
        /*Formular wird gelöscht nachdem alle Einstellungen übernommen wurden*/
        document.getElementById("Formular").remove();
        /* Spielboard erzeugen */
        createBoard();
        /* Spielerinfo erzeugen */
        playerInfo();
    }
    Aufgabe4.main = main;
})(Aufgabe4 || (Aufgabe4 = {}));
//    // Add EventListener - Main() wird ausgeführt, sobald das DOM vollständig geladen ist
//    document.addEventListener("DOMContentLoaded", main); 
//# sourceMappingURL=Aufgabe4.js.map