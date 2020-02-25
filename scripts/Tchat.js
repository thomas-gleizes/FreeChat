$("document").ready(function () {

    getAllMsg().then(function (value) {
        value = value.split("£");
        for (let i = 0; i < value.length - 1; i++){
            console.log(value.length - 2 - i);
            addMessage(value[value.length - 2 - i]);
        }
    });


    $("#send").click(function () {
        let text = document.getElementById("text");
        if (text.value !== ""){
            let elements = document.createElement("div");
            elements.innerHTML = text.value;
            sendMsg(text.value);
            text.value = "";
            elements.className = "perso";
            document.getElementById("contenue").appendChild(elements);
        }
    });

    function addMessage(value) {
        let msg = value.split("$");
        getIp().then(function (value){
            let element = document.createElement("div");
            element.innerHTML = msg[1];
            if (msg[0] === value){
                element.className = "perso"
            } else {
                element.className = "message"
            }
            document.getElementById("contenue").appendChild(element)
        });
    }




});