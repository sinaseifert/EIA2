var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    let address = "https://eia2node1.herokuapp.com/";
    let inputs = document.getElementsByTagName("input");
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let findButton = document.getElementById("find");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        findButton.addEventListener("click", find);
    }
    function insert(_event) {
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let courseOfStudies = document.getElementById("options");
        let student;
        let tempCourseOfStudies = document.getElementById("options");
        student = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            courseOfStudies: tempCourseOfStudies.value
        };
        let stringifyJSON = JSON.stringify(student);
        console.log(stringifyJSON);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert=" + stringifyJSON, true);
        xhr.addEventListener("readystatechange", handleInsertResponse);
        xhr.send();
        //        query += "&name=" + inputs[0].value;
        //        query += "&firstname=" + inputs[1].value;
        //        query += "&matrikel=" + inputs[2].value;
        //        query += "&age=" + inputs[3].value;
        //        query += "&gender=" + genderButton.checked;
        //        query += "&courseOfStudies=" + inputs[6].value;
        //        console.log(query);
        //        sendRequest(student, handleInsertResponse);
    }
    function refresh(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=refresh=", true);
        xhr.addEventListener("readystatechange", handleRefreshResponse);
        xhr.send();
    }
    function find(_event) {
        let matrikel = inputs[3].value;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=find=" + matrikel, true);
        xhr.addEventListener("readystatechange", handleFindResponse);
        xhr.send();
    }
    //    function sendRequest(_query: string, _callback: EventListener): void {
    //        let xhr: XMLHttpRequest = new XMLHttpRequest();
    //        xhr.open("GET", address + "?command=insert", true); //https://eia2node1.herokuapp.com/?" + _query, true);
    //        //xhr.open("GET", "https://eia2-w17-databasetest.herokuapp.com/?" + _query, true);
    //        xhr.addEventListener("readystatechange", handleInsertResponse);
    //        xhr.send();
    //    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleRefreshResponse(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    function handleFindResponse(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value = xhr.response;
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map