namespace Aufgabe4 {
    /*Variablen erstellen*/
    let numPlayer: number = 0;

    /*Anzahl der Karten*/
    export let numPairs: number = 0;

    /*Variablen zum Statusändern fürs Spielen*/
    let counter: number = 0;
    let klickbar: boolean = true;

    /*Array für offene Karten*/
    let visibleCards: HTMLElement[] = [];

//    /*Kartendecks*/
//    let actualCardDeck: Deck = undefined;

    /*Array*/
    let cardArray: string[] = [];

    /*Spieler und Score Array*/
    let player: string[] = [];
    let score: number[] = [0, 0, 0, 0];
    window.addEventListener("click", changeStatus);

    createDecks();

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
                            alert("Gratuliere! Du hast gewonnen!")
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


//    /* Status mischen */
//    export function mixStatus(): string {
//        return "hidden";
//    }

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
        let node: any = document.getElementById("Spielfeld");
        shuffleCardArray();
        let childNodeHTML: string = "";
        childNodeHTML += "<h2>Memoryboard</h2>";
        childNodeHTML += "<div>";
        for (let i: number = 0; i < cardArray.length; i++) {
            childNodeHTML += "<div>";
            childNodeHTML += "<div id=" + i + " attr=" + i + " class='";
            childNodeHTML += cardArray[i] + " hidden"; /*+ mixStatus();*/
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
        let node: any = document.getElementById("Spielerinfo");
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
        /* Spielerabfrage erstellen */
//        let numPlayer: number;

        let collection: NodeListOf<Element> = document.getElementById("Spieler").getElementsByTagName("fieldset");
        numPlayer = parseInt(collection.value)

        for (let i = 0; i < numPlayer; i++) {
            collection = document.getElementById("Spielername"+(i+1)).getElementsByTagname("input");
            collection.setStyle = "opacity: 1";
            collection.required = true;
            player.push(collection.value);
            console.log(collection.value);
        }
        
        /*Auswertung Kartenpaare*/
        collection = document.getElementById("numberOfPairs").getElementsByTagname("fieldset");
        
        
        /*Kartensatz Auswahl / Erzeugung Kartenpaare*/
        collection = document.getElementById("Cards").getElementsByTagname("fieldset");
        
        for (let i: number = 0; i < numPairs; i++) {
            /* cardContent 2x an cardArray [] anfügen */
            cardArray.push(decks[collection.value]);
            cardArray.push(decks[collection.value]);
        }
        currentCardDeck = decks[element.value];
        

        /*Karten des jeweilig ausgewählten Satzes erzeugen*/
        populateCardArray(collection.value);
        
        /* Spielboard erzeugen */
        createBoard();

        /* Spielerinfo erzeugen */
        playerInfo();

        /*Formular wird gelöscht nachdem alle Einstellungen übernommen wurden*/
        document.getElementById("Formular").remove();
        
    }   
        
    
    
        function playMemory(_event: Event): void {
            let playGame: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Play");
            for
        }
            

    
    // Add EventListener - Main() wird ausgeführt, sobald das DOM vollständig geladen ist
    document.addEventListener("DOMContentLoaded", main);
}