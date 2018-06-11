namespace L04_Interfaces {
    window.addEventListener("load", init);

    let address: string = "http://localhost:8100";
    //    let address: string = "https://eia2node1.herokuapp.com/";

    function init(): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("searchButton");
        let submitButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");

        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
        submitButton.addEventListener("click", submit);
    }

    function insert(): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let studi: Studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            courseOfStudies: inputs[6].value
        };

        let dataString: string = JSON.stringify(studi);
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=addStudent&data=" + encodeURIComponent(dataString), true);
        xhr.addEventListener("readystatechange", changedInsert);
        xhr.send();
    }

    function changedInsert(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.responseText);
        }
    }

    function search(): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        let matrikel: HTMLInputElement = <HTMLInputElement>document.getElementById("inputMatrikel");
        xhr.open("GET", address + "?command=searchStudent&data=" + matrikel.value, true);
        xhr.addEventListener("readystatechange", changedSearch);
        xhr.send();
    }

    function changedSearch(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.responseText;
            console.log(xhr.responseText);
        }
    }

    function refresh(): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=studentsRefresh", true);
        xhr.addEventListener("readystatechange", changedRefresh);
        xhr.send();
    }

    function changedRefresh(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
        output.value = "";
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.responseText;
        }
    }

    function submit(): void {
        for (let i: number = 0; i < 3; i++) {
            let student: Studi = {
                name: "Nachname",
                firstname: "Vorname",
                matrikel: Math.floor(Math.random() * 111111),
                age: Math.floor(Math.random() * 60),
                courseOfStudies: "MKB",
                gender: !!Math.round(Math.random())
            };
            let dataString: string = JSON.stringify(student);
            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open("GET", address + "?command=addStudent&data=" + encodeURIComponent(dataString), true);
            xhr.addEventListener("readystatechange", changedInsert);
            xhr.send();
        }
    }


}        