var L04_Interfaces;
(function (L04_Interfaces) {
    window.addEventListener("load", init);
    //    let address: string = "http://localhost:8100";
    let address = "https://eia2node1.herokuapp.com/";
    function init() {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("searchButton");
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
        xhr.open("GET", address + "?command=addStudent&data=" + encodeURIComponent(dataString), true);
        xhr.addEventListener("readyStateChange", changedInsert);
        xhr.send();
    }
    function changedInsert(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.responseText);
        }
    }
    function search() {
        let xhr = new XMLHttpRequest();
        let matrikel = document.getElementById("inputMatrikel");
        let output = document.getElementsByTagName("textarea")[0];
        xhr.open("GET", address + "?command=searchStudent&data=" + matrikel.value, true);
        xhr.addEventListener("readyStateChange", changedSearch);
        output.value = matrikel.value + ": ";
        output.value += xhr.responseText;
        xhr.send();
    }
    function changedSearch(_event) {
        let xhr = _event.target;
        //        if (xhr.readyState == XMLHttpRequest.DONE) {
        if (this.readyState === 4) {
            if (xhr.status === 200) {
                console.log("searchRequest finished");
            }
        }
    }
    function refresh() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=studentsRefresh", true);
        xhr.addEventListener("readyStateChange", changedRefresh);
        xhr.send();
    }
    function changedRefresh(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.responseText;
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
            let dataString = JSON.stringify(student);
            let xhr = new XMLHttpRequest();
            xhr.open("GET", address + "?command=addStudent&data=" + encodeURIComponent(dataString), true);
            xhr.addEventListener("readyStateChange", changedInsert);
            xhr.send();
        }
    }
})(L04_Interfaces || (L04_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map