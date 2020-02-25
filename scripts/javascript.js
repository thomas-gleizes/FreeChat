$("document").ready(function () {

    getAllMsg();

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





});