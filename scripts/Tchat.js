$("document").ready(function () {

    let tabcolor = [];
    let date = new Date();

    getAllMsg().then(function (value) {
        value = value.split("¤");
        for (let i = 0; i < value.length - 1 ; i++){
            console.log(i)
            addMessage(value[value.length - 2 - i]);
        }
    });

    $("#send").click(function () {
        let text = document.getElementById("text");
        if (text.value !== ""){
            let str = "$" + text.value + "£" + date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()+ "µ" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            getIp().then(function (value) {
                str = value + str;
                console.log("srt ===" + str);
                addMessage(str);
            });
            sendMsg(text.value);
            text.value = "";
        }
    });

    function addMessage(value) {
        console.log(value)
        let tab = splitAjax(value);
        getIp().then(function (value){
            generateColor(tab['ip']);
            let element = document.createElement("div");
            if (tab['ip'] === value) {
                element.className = "perso bg-color" + tabcolor[tab['ip']];
                element.innerHTML = "<p class='user'> Vous avez dit : </p> " + tab['msg'];
            } else {
                element.className = "message bg-color" + tabcolor[tab['ip']];
                element.innerHTML = "<p class='user'> Anynomus-" + generateID(tab['ip']).substring(1,6) + " a dit :</p> " + tab['msg'];
            }
            document.getElementById("contenue").appendChild(element)
        });
    }


    function splitAjax(value) {
        tab = [4];
        tab['ip'] = value.split("$")[0];
        tab['msg'] = value.split("$")[1].split("£")[0];
        tab['date'] = value.split("µ")[0].split('£')[1];
        tab['heure'] = value.split("µ")[1];
        console.log(tab);
        return tab
    }

    function generateColor(ip){
        if (tabcolor[ip] === undefined){
            tabcolor[ip] = Math.floor(Math.random() * 8 + 1);
        }
    }

    function generateID(ip) {
        let id = ip.split(".");
        return "1" + (parseInt(id[0]) * parseInt(id[1]) * parseInt(id[2])  + parseInt(id[3])) ;
    }

    function getDate() {
        let str = date.getFullYear() + "-";
        if (parseInt(date.getMonth() + 1) < 10) str += "0";
        str += date.getMonth() + 1 + "-";
        if (date.getDate() < 10) str += "0";
        str += date.getDate();
        return str;
    }

    function getTime(){
        let time = date.getHours() + ":";;
        if (date.getHours() < 10) time = 0 + time;
        if (date.getMinutes() < 10) time += 0;
        time += date.getMinutes() + ":"
        if (date.getSeconds() < 10) time += 0;
        time += date.getSeconds();
        return time
    }

});