$("document").ready(function () {

    getAllMsg().then(function (value) {
        value = value.split("£");
        for (let i = 0; i < value.length - 2 ; i++){
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
        let tab = splitAjax(value);
        getIp().then(function (value){
            let element = document.createElement("div");
            element.innerHTML = tab['msg'];
            if (tab['ip'] === value){
                element.className = "perso"
            } else {
                element.className = "message"
            }
            document.getElementById("contenue").appendChild(element)
        });
    }

    function splitAjax(value) {
        tab = [4];
        tab['ip'] = value.split("$")[0].split("¤")[1];
        tab['msg'] = value.split("$")[1];
        tab['date'] = value.split("µ")[0];
        tab['heure'] = value.split("µ")[1].split('¤')[0];
        return tab
    }

    function addRandomColor() {

    }

});