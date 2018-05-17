namespace Aufgabe4 {
    /*Variablen erstellen*/
    let numPlayer: number = 1;

    /*Anzahl der Karten*/
    export let numPairs: number = 5;

    /*Aktuelle Deck Auswahl*/
    let actualDeck: Deck = undefined;

    /*Variablen zum Status ändern fürs Spielen*/
    let counter: number = 0;
    let klickbar: boolean = true;
    let actualPlayer: number = 1;
    let tempScore: number[] = [];

    /*Array für offene Karten*/
    let visibleCards: HTMLElement[] = [];

    /*Array*/
    let cardArray: string[] = [];

    window.addEventListener("click", changeStatus);

    createDecks();
    createPlayer();

    export function playerInput(element: HTMLInputElement): void {
        numPlayer = parseInt(element.value);

        for (let i: number = 1; i <= 4; i++) {
            let input: HTMLInputElement = <HTMLInputElement>document.getElementById("Spieler" + i);
            let label: HTMLElement = document.getElementById("Spielername" + i);
            if (i <= numPlayer) {
                input.required = true;
                label.style.opacity = "1";

            } else {
                input.required = false;
                label.style.opacity = "0.33";
                input.value = "";
            }
        }
    }

    export function numPairInput(value: string): void {
        document.getElementById("numberOfPairs_label").innerText = value;
        numPairs = parseInt(value);
    }

    export function setCardDeck(value: string): void {
        actualDeck = decks[value];
        setSilderValue();
    }

    export function setSilderValue(): void {
        let numOfPairs: HTMLInputElement = <HTMLInputElement>document.getElementById("numberOfPairs_slider");
        numOfPairs.max = actualDeck.content.length.toString();

        let max: number = actualDeck.content.length;
        let actual: number = parseInt(numOfPairs.value);

        if (max < actual) {
            numOfPairs.value = max.toString();
        }
        document.getElementById("numberOfPairs_label").innerText = numOfPairs.value;
    }

    function changeStatus(_event: Event): void {
        let target: HTMLDivElement = <HTMLDivElement>_event.target;
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
//                            if (players["Player1"].score < players["Player2"].score && players["Player3"].score < players["Player4"].score) {
//                                if (players["Player2"].score < players["Player4"].score) {
//                                    alert("Gratuliere! " + players["Player4"].name + " Du hast gewonnen!");
//                                } else {
//                                    alert("Gratuliere! " + players["Player2"].name + " Du hast gewonnen!");
//                                }
//                            } else if (players["Player1"].score < players["Player3"].score) {
//                                alert("Gratuliere! " + players["Player3"].name + " Du hast gewonnen!");
//                            } else {
//                                alert("Gratuliere! " + players["Player1"].name + " Du hast gewonnen!");
//                            }
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
    function mixStatus(): string {
        return "hidden";
    }

    /* Karten mischen Shufflefunktion */
    function shuffleCardArray(): void {
        let i: number = cardArray.length;
        let j: number = 0;
        let temp: string = "";
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
    function createBoard(): void {
        let node: HTMLElement = document.getElementById("Spielfeld");
        shuffleCardArray();
        let headline: HTMLElement = document.createElement("h2");
        headline.innerText = "Memoryboard";
        node.appendChild(headline);
//        let childNodeHTML: string = "";
//        childNodeHTML += "<h2>Memoryboard</h2>";
//        childNodeHTML += "<div>";
        let gameBoard: HTMLElement = document.createElement("div");
        for (let i: number = 0; i < cardArray.length; i++) {
            let cards: HTMLElement = document.createElement("div");
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
            
//            childNodeHTML += "<div>";
//            childNodeHTML += "<div id=" + i + " attr=" + i + " class='";
//            childNodeHTML += cardArray[i] + " hidden";
//            childNodeHTML += "'>";
//            childNodeHTML += cardArray[i];
//            childNodeHTML += "</div></div>";
        }
//        childNodeHTML += "</div>";
//        node.innerHTML += childNodeHTML;
    }

    /*Spielerinfo*/
    function playerInfo(): void {
        let node: HTMLElement = document.getElementById("Spielerinfo");
        let childNodeHTML: string = "";
        childNodeHTML += "<div>";
        for (let i: number = 1; i <= numPlayer; i++) {
            childNodeHTML += "<div id=Spieler";
            childNodeHTML += i;
            childNodeHTML += ">";
            childNodeHTML += "<p>Spielername: ";
            childNodeHTML += players["Player" + i].name;
            childNodeHTML += "</p>";
            childNodeHTML += "<p id=Player" + i;
            childNodeHTML += ">Punktestand: ";
            childNodeHTML += players["Player" + i].score;
            childNodeHTML += "</p></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;
    }

    /* Hauptprogramm */
    export function main(): void {

        //Auswertung der Spielernamen
        for (let i: number = 1; i <= 4; i++) {
            let player: HTMLElement = document.getElementById("Spieler" + i);
            if ((<HTMLInputElement>player).value == "") {
                players["Player" + i].name = "Mickey";
                players["Player" + i].score = 0;
                tempScore[i] = 0;
            } else {
                players["Player" + i].name = ((<HTMLInputElement>player).value);
                players["Player" + i].score = 0;
                tempScore[i] = 0;
            }
        }

        /*Erzeugung Kartenpaare*/
        for (let i: number = 0; i < numPairs; i++) {
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
}
    //    // Add EventListener - Main() wird ausgeführt, sobald das DOM vollständig geladen ist
    //    document.addEventListener("DOMContentLoaded", main);