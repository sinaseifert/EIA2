var L04_Interfaces;
(function (L04_Interfaces) {
    window.addEventListener("load", init);
    //    let address: string = "http://localhost:8100";
    let address = "https://eia2node1.herokuapp.com/";
    let inputs = document.getElementsByTagName("input");
    function init() {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("search");
        let submitButton = document.getElementById("submit");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
        submitButton.addEventListener("click", submit);
    }
    function insert() {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            courseOfStudies: inputs[6].value
        };
        let dataString = JSON.stringify(studi);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?method=insert&matrikel=" + encodeURIComponent(dataString), true);
        xhr.addEventListener("readyStateChange", changedInsert);
        xhr.send();
    }
    function changedInsert(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function search() {
        let matrikel = inputs[2].value;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?method=search&searchStudent=" + encodeURIComponent(matrikel), true);
        xhr.addEventListener("readyStateChange", changedSearch);
        xhr.send();
    }
    function changedSearch(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    function refresh() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?method=refresh", true);
        xhr.addEventListener("readyStateChange", changedRefresh);
        xhr.send();
    }
    function changedRefresh(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    function submit() {
        for (let i = 0; i < 3; i++) {
            let student = {
                name: "Nachname",
                firstname: "Vorname",
                matrikel: Math.floor(Math.random() * 111111),
                age: Math.floor(Math.random() * 60),
                courseOfStudies: "MKB",
                gender: !!Math.round(Math.random())
            };
        }
    }
})(L04_Interfaces || (L04_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map