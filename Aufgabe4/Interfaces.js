var Aufgabe4;
(function (Aufgabe4) {
    Aufgabe4.decks = {};
    function createDecks() {
        Aufgabe4.decks["letters"] = {
            name: "letters",
            content: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            backgroundcolor: "#004040",
            font: "'Dancing Script' , cursive",
            size: 200
        };
        Aufgabe4.decks["animals"] = {
            name: "animals",
            content: ["Tiger", "Löwe", "Eisbär", "Pinguin", "Robbe", "Hund", "Katze", "Schnecke", "Koala", "Känguru", "Grizzly", "Adler", "Erdmännchen"],
            backgroundcolor: "#000080",
            font: "Arial",
            size: 150
        };
        Aufgabe4.decks["fruits"] = {
            name: "fruits",
            content: ["Erdbeere", "Apfel", "Birne", "Banane", "Kirsche", "Weintraube", "Mango", "Passionsfrucht", "Ananas", "Maracuja"],
            backgroundcolor: "#000040",
            font: "Calibri",
            size: 180
        };
    }
    Aufgabe4.createDecks = createDecks;
    Aufgabe4.players = {};
    function createPlayer() {
        Aufgabe4.players["Player1"] = {
            name: "",
            score: 0
        };
        Aufgabe4.players["Player2"] = {
            name: "",
            score: 0
        };
        Aufgabe4.players["Player3"] = {
            name: "",
            score: 0
        };
        Aufgabe4.players["Player4"] = {
            name: "",
            score: 0
        };
    }
    Aufgabe4.createPlayer = createPlayer;
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Interfaces.js.map