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
        let query = "command=insert";
        //        let matrikel: string = inputs[2].value;
        //        let courseOfStudies = inputs[6].value;
        //        let student: StudentData;
        //        //        let tempCourseOfStudies: HTMLInputElement = <HTMLInputElement>document.getElementById("options");
        //        student = {
        //            name: inputs[0].value,
        //            firstname: inputs[1].value,
        //            matrikel: parseInt(matrikel),
        //            age: parseInt(inputs[3].value),
        //            gender: genderButton.checked,
        //            courseOfStudies: inputs[6].value
        //        };
        //        let stringifyJSON: string = JSON.stringify(student);
        //        console.log(stringifyJSON);
        //        let xhr: XMLHttpRequest = new XMLHttpRequest();
        //        xhr.open("GET", address + "?command=insert&student" + stringifyJSON, true);
        //        xhr.addEventListener("readystatechange", handleInsertResponse);
        //        xhr.send();
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        query += "&age=" + inputs[3].value;
        query += "&gender=" + genderButton.checked;
        query += "&courseOfStudies=" + inputs[6].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function refresh(_event) {
        sendRequest("command=refresh", handleRefreshResponse);
    }
    function handleRefreshResponse(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    function find(_event) {
        let matrikel = inputs[7].value;
        if (matrikel == "")
            matrikel = "0";
        sendRequest("command=find&matrikel=" + matrikel, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://eia2node1.herokuapp.com/?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleFindResponse(_event) {
        let output = document.getElementById("outputFind");
        output.value = "";
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value = buildResponseString(JSON.parse(xhr.response));
        }
    }
    function buildResponseString(student) {
        let geschlecht = student.gender ? "M�nnlich" : "Weiblich";
        return student.matrikel + ": " + student.name + ", " + student.firstname + ", Alter: " + student.age + ", Studiengang: " + student.courseOfStudies + ", Geschlecht: " + geschlecht;
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map