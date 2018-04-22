namespace Memorie {
    /*Variablen erstellen*/
    let numPlayer: number = 0;
    let numPairs: number = 0;

    /*Variablen zum Statusändern fürs Spielen*/
    let counter: number = 0;

    /*Abgleichen der offenen Karten*/
    let card1class: string;
    let card2class: string;
    let card1id: string;
    let card2id: string;

    /*Array*/
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
    let cardArray: string[] = [];

    /*Spieler und Score Array*/
    let player: string[] = [];
    let score: number = 0;

    function changeStatus(_event: Event): void {
        let target: HTMLDivElement = <HTMLDivElement>_event.target;
        counter++;
        if (counter < 2) {
            document.getElementById(target.id).classList.remove("hidden");
            card1class = target.className;
            card1id = target.id;
            document.getElementById(target.id).classList.add("visible");
        }else if (counter == 2) {
            document.getElementById(target.id).classList.remove("hidden");
            card2class = target.className;
            card2id = target.id;
            document.getElementById(target.id).classList.add("visible");

            setTimeout(function() {

                if (card1class == card2class) {
                    document.getElementById(card1id).classList.remove("visible");
                    document.getElementById(card2id).classList.remove("visible");

                    document.getElementById(card1id).classList.add("taken");
                    document.getElementById(card2id).classList.add("taken");
                    score++;
                    if (score == numPairs) {
                        alert("Gratuliere! Du hast gewonen!");
                    }
                    counter = 0;
                }else {

                    document.getElementById(card1id).classList.remove("visible");
                    document.getElementById(card2id).classList.remove("visible");

                    document.getElementById(card1id).classList.add("hidden");
                    document.getElementById(card2id).classList.add("hidden");
                    counter = 0;
                }
            }, 2000);
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
    function main(): void {
        /* numPlayers erstellen */
        let i: boolean = true;
        while (i) {
            numPlayer = parseInt(prompt("Bitte wählen Sie zwischen 1 und 4 Spielern"), 10);
            if (numPlayer >= 1 && numPlayer <= 4) {
                i = false;
            }
        }

        for (let i: number = 0; i < numPlayer; i++) {
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

        /* Schleife für Kartenpaare */
        for (let i: number = 0; i < numPairs; i++) {
            /* cardContent 2x an cardArray [] anfügen */
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
    // Add EventListener - Main() wird ausgeführt, sobald das DOM vollständig geladen ist
    document.addEventListener("DOMContentLoaded", main);
}