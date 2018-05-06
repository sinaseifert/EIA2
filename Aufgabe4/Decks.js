var Aufgabe4;
(function (Aufgabe4) {
    Aufgabe4.decks = {};
    function createDecks() {
        Aufgabe4.decks["letters"] = {
            name: "letters",
            content: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            textcolor: "black",
            font: " 'Dancing Script' , cursive"
        };
        Aufgabe4.decks["animals"] = {
            name: "animals",
            content: ["Tiger", "L�we", "Eisb�r", "Pinguin", "Robbe", "Hund", "Katze", "Schnecke", "Koala", "K�nguru", "Grizzly", "Adler", "Erdm�nnchen"],
            textcolor: "Whitesmoke",
            font: "Arial"
        };
        Aufgabe4.decks["fruits"] = {
            name: "fruits",
            content: ["Erdbeere", "Apfel", "Birne", "Banane", "Kirsche", "Weintraube", "Mango", "Passionsfrucht", "Ananas", "Maracuja"],
            textcolor: "#ff8080",
            font: ""
        };
    }
    Aufgabe4.createDecks = createDecks;
    Aufgabe4.players = {};
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Decks.js.map