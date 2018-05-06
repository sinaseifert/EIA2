namespace Aufgabe4 {
    /*Intrface für die jeweiligen Kartendecks*/
    export interface Deck {
        name: string;
        content: string[];
        textcolor: string;
        font: string;
    }
    export interface Decks {
        [deckname: string]: Deck;
    }

    export let decks: Decks = {};

    export function createDecks(): void {
        decks["letters"] = {
            name: "letters",
            content: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            textcolor: "black",
            font: " 'Dancing Script' , cursive"
        };

        decks["animals"] = {
            name: "animals",
            content: ["Tiger", "Löwe", "Eisbär", "Pinguin", "Robbe", "Hund", "Katze", "Schnecke", "Koala", "Känguru", "Grizzly", "Adler", "Erdmännchen"],
            textcolor: "Whitesmoke",
            font: "Arial"
        };

        decks["fruits"] = {
            name: "fruits",
            content: ["Erdbeere", "Apfel", "Birne", "Banane", "Kirsche", "Weintraube", "Mango", "Passionsfrucht", "Ananas", "Maracuja"],
            textcolor: "#ff8080",
            font: ""

        };

    }
    export interface Player {

        name: string;
        score: number;
    }

    export interface Players {
        [players: string]: Player;
    }

    export let players: Players = {};
}