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

    /*Array, dass nur zwei Stellen speichert*/
//    let visibleCards : string [] =       
    window.addEventListener("click", changeStatus);

    function changeStatus(_event: Event): void {
        let target: HTMLDivElement = <HTMLDivElement>_event.target;
        if (counter == 0) { 
            document.getElementById(target.id).classList.remove("hidden");
            card1class = target.className;
            card1id = target.id;
            document.getElementById(target.id).classList.add("visible");

            counter++;
        } else if (counter == 1) {
            document.getElementById(target.id).classList.remove("hidden");
            card2class = target.className;
            card2id = target.id;
            document.getElementById(target.id).classList.add("visible");

            setTimeout(function()  {

                if (card1class == card2class) {
                    document.getElementById(card1id).classList.remove("visible");
                    document.getElementById(card2id).classList.remove("visible");

                    document.getElementById(card1id).classList.add("taken");
                    document.getElementById(card2id).classList.add("taken");
                    score = score + 1;
                    if (score == numPairs) {
                        prompt("Gratuliere!");
                    }
               
                } else {

                    document.getElementById(card1id).classList.remove("visible");
                    document.getElementById(card2id).classList.remove("visible");

                    document.getElementById(card1id).classList.add("hidden");
                    document.getElementById(card2id).classList.add("hidden");
                }
            }, 2000);


            counter = 0;

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
//            console.log(cardArray[i]);
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;

        console.log(childNodeHTML);
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

        console.log(childNodeHTML);
    }

    /* Hauptprogramm */
    function main(): void {
        console.log("main");
        /* numPlayers erstellen */
        let i: boolean = true;
        while (i) {
            numPlayer = parseInt(prompt("Bitte wähhlen Sie zwischen 1 und 4 Spielern"), 10);
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
    }
    // Add EventListener - Main() wird ausgeführt, sobald das DOM vollständig geladen ist
    document.addEventListener("DOMContentLoaded", main);
}