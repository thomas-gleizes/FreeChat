$("document").ready(function () {

    $("#send").click(function () {
        let text = document.getElementById("text");
        if (text.value !== ""){
            let elements = document.createElement("div");
            elements.innerHTML = text.value;
            text.value = "";
            elements.className = "perso";
            document.getElementById("contenue").appendChild(elements);
        }
    });



});