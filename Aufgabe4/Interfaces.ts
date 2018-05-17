namespace Aufgabe4 {
    /*Intrface für die jeweiligen Kartendecks*/
    export interface Deck {
        name: string;
        content: string[];
        backgroundcolor: string;
        font: string;
        size: number;
    }
    export interface Decks {
        [deckname: string]: Deck;
    }

    export let decks: Decks = {};

    export function createDecks(): void {
        decks["letters"] = {
            name: "letters",
            content: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            backgroundcolor: "#004040",
            font: "'Dancing Script' , cursive",
            size: 200
        };

        decks["animals"] = {
            name: "animals",
            content: ["Tiger", "Löwe", "Eisbär", "Pinguin", "Robbe", "Hund", "Katze", "Schnecke", "Koala", "Känguru", "Grizzly", "Adler", "Erdmännchen"],
            backgroundcolor: "#000080",
            font: "Arial",
            size: 150
        };

        decks["fruits"] = {
            name: "fruits",
            content: ["Erdbeere", "Apfel", "Birne", "Banane", "Kirsche", "Weintraube", "Mango", "Passionsfrucht", "Ananas", "Maracuja"],
            backgroundcolor: "#000040",
            font: "Calibri",
            size: 180

        };

    }
    
    export interface Player {
        name: string;
        score: number;
    }

    export interface Players {
        [playersname: string]: Player;
    }

    export let players: Players = {};
    
    export function createPlayer(): void {
        players["Player1"] = {
            name: "",
            score: 0
        };
        
        players["Player2"] = {
            name: "",
            score: 0
        };
        
        players["Player3"] = {
            name: "",
            score: 0
        };
        
        players["Player4"] = {
            name: "",
            score: 0
        };
    }
}