namespace DatabaseClient {
    window.addEventListener("load", init);
    let address: string = "https://eia2node1.herokuapp.com/";

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let findButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("find");

        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        findButton.addEventListener("click", find);
    }

    function insert(_event: Event): void {
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let query: string = "command=insert";
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

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function refresh(_event: Event): void {
        sendRequest("command=refresh", handleRefreshResponse)
    }

    function handleRefreshResponse(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }

    function find(_event: Event): void {
        let matrikel: string = inputs[7].value;
        if (matrikel == "")
            matrikel = "0";
        sendRequest("command=find&matrikel=" + matrikel, handleFindResponse)
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", "https://eia2node1.herokuapp.com/?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("outputFind");
        output.value = "";
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {

            output.value = buildResponseString(JSON.parse(xhr.response));
            //            let responseAsJson: JSON = JSON.parse(xhr.response);
            //            console.log(responseAsJson);
        }
    }

    function buildResponseString(student: StudentData): string {
        let geschlecht = student.gender ? "M�nnlich" : "Weiblich";
        return student.matrikel + ": " + student.name + ", " + student.firstname + ", Alter: " + student.age + ", Studiengang: " + student.courseOfStudies + ", Geschlecht: " + geschlecht;
    }

}
