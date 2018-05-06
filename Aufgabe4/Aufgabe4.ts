namespace Aufgabe4 {
    /*Variablen erstellen*/
    let numPlayer: number = 0;

    /*Anzahl der Karten*/
    let numPairs: number = 0;

    /*Aktuelle Deck Auswahl*/
    let actualDeck: string = "";

    /*Variablen zum Statusändern fürs Spielen*/
    let counter: number = 0;
    let klickbar: boolean = true;

    /*Array für offene Karten*/
    let visibleCards: HTMLElement[] = [];

    //    /*Kartendecks*/
    //    let actualCardDeck: Deck = undefined;

    /*Array*/
    let cardContent: string[] = [];
    let cardArray: string[] = [];

    /*Spieler und Score Array*/
    let player: string[] = [];
    let score: number[] = [0, 0, 0, 0];
    window.addEventListener("click", changeStatus);

    export function playerInput(element: HTMLInputElement): void {
        numPlayer = parseInt(element.value);

        for (let i: number = 1; i <= numPlayer; i++) {
            let input: HTMLInputElement = <HTMLInputElement>document.getElementById("Spieler" + i);
            let label: HTMLElement = document.getElementById("Spielername" + i);
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

    export function numPairInput(value: number): void {
        document.getElementById("numberOfPairs_label").innerText = value.toString();
        numPairs = value;
        console.log(value);
    }

    export function setCardDeck(value: string): void {
        actualDeck = value;
        console.log(actualDeck);

        let numOfPairs: HTMLInputElement = <HTMLInputElement>document.getElementById("numberOfPairs_slider");
        numOfPairs.max = decks[actualDeck].content.length.toString();

        if (decks[actualDeck].content.length < parseInt(numOfPairs.value)) {
            numOfPairs.value = numOfPairs.max;
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

    /*Create Board*/
    function createBoard(): void {
        let node: HTMLElement = document.getElementById("Spielfeld");
        shuffleCardArray();
        let childNodeHTML: string = "";
        childNodeHTML += "<h2>Memoryboard</h2>";
        childNodeHTML += "<div>";
        for (let i: number = 0; i < cardArray.length; i++) {
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
    function playerInfo(): void {
        let node: HTMLElement = document.getElementById("Spielerinfo");
        let childNodeHTML: string = "";
        childNodeHTML += "<div>";
        for (let i: number = 0; i < player.length; i++) {
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
    export function main(): void {
        
        createDecks();
        
        //Auswertung der Spielernamen
        for (let i: number = 1; i <= numPlayer; i++) {
            let playerName: HTMLElement = document.getElementById("Spieler" + i);
            if ((<HTMLInputElement>playerName).value == "") {
                player.push("Mickey");
            } else {
                player.push((<HTMLInputElement>playerName).value);
            }
        }

        /*Karten des jeweilig ausgewählten Satzes erzeugen*/
        cardContent = decks[actualDeck].content;

        /*Erzeugung Kartenpaare*/
        for (let i: number = 0; i < numPairs; i++) {
            /* cardContent 2x an cardArray [] anfügen */
            cardArray.push(cardContent[i]);
            cardArray.push(cardContent[i]);
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