namespace Memorie {
    /*Variablen erstellen*/
    let numPlayer: number = 0;
    let numPairs: number = 0;

    /*Array*/
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];
    let cardArray: string[] = [];
    let player: string[] = [];
    let score: number[] = [0,0,0,0];



    /* Status mischen */
    function mixStatus(): string {
        let randomState: number = Math.random();
        if (randomState >= 0.75) {
            return "visible";
        } else if (randomState > 0.5 && randomState < 0.75) {
            return "taken";
        }
        return "hidden";
    }

    /* Karten mischen Shufflefunktion */
    function shuffleCardArray(): void {
        let i: number = cardArray.length;
        let j: number = 0;
        let temp: string = "";
        while(--i > 0) {
            j = Math.floor(Math.random() * (i+1));
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
    
    function playerInfo(): void {
        let node: any = document.getElementById("Spielerinfo");
        let childNodeHTML: string = "";
        childNodeHTML += "<div>";
        for(let i: number = 0; i < player.length; i++) {
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
    function main(): void {
        console.log("main");
        /* numPlayers erstellen */
        let i: boolean = true;
        while (i) {
            numPlayer = parseInt(prompt("Bitte wählen Sie zwischen 1 und 4 Spielern"), 10);
            if (numPlayer >= 1 && numPlayer <= 4) {
                i = false;
            }
        }

        for (let i: number = 0; i < numPlayer; i++) {
            player[i] = prompt("Bitte Spielernamen " + (i+1) + " eingeben");
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
            /* cardContent 2x an cardArray [] anf�gen */
            cardArray.push(cardContent[i]);
            cardArray.push(cardContent[i]);
        }

        /* Spielboard erzeugen */
        createBoard();
        
        /* Spielerinfo erzeugen */
        playerInfo();
    }
    // Add EventListener - Main() wird ausgeführt, sobald das DOM vollst�ndig geladen ist
    document.addEventListener("DOMContentLoaded", main);
}