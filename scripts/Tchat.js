$("document").ready(function () {

    let tabcolor = [];
    let date = new Date();
    let Timelog;

    getRealDate().then(function (value) {
        Timelog = value.split("¤");
    });

    getAllMsg().then(function (value) {
        value = value.split("¤");
        for (let i = 0; i < value.length - 1 ; i++){
            addMessage(value[value.length - 2 - i]);
        }
    });

    $("#send").click(function () {
        let text = document.getElementById("text");
        if (text.value !== ""){
            let str = "$" + text.value + "£" + getDate() + "µ" + getTime()
            getIp().then(function (value) {
                str = value + str;
                addMessage(str);
            });
            sendMsg(text.value);
            text.value = "";
        }
    });

    function addMessage(value) {
        let tab = splitAjax(value);
        getIp().then(function (value){
            let element = document.createElement("div");
            if (tab['ip'] === value) {
                element.className = "perso bg-colorUser";
                element.innerHTML = "<p class='user'> Vous avez dit :</p> <p class='date'> a l'instant </p> ";
            } else {
                generateColor(tab['ip']);
                element.className = "message bg-color" + tabcolor[tab['ip']];
                element.innerHTML = "<p class='user'> Anynomus-" + generateID(tab['ip']).substring(1,6) + " a dit :</p><p class='date'> le " + tab['date'] + " à " + tab['heure'] + "</p> ";
            }
            element.innerHTML += tab['msg'];
            document.getElementById("contenue").appendChild(element)
        });
    }

    function splitAjax(value) {
        tab = [4];
        tab['ip'] = value.split("$")[0];
        tab['msg'] = value.split("$")[1].split("£")[0];
        tab['date'] = value.split("µ")[0].split('£')[1];
        tab['heure'] = value.split("µ")[1];
        return tab
    }

    function generateColor(ip){
        if (tabcolor[ip] === undefined){
            tabcolor[ip] = Math.floor(Math.random() * 9 + 1);
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
        let time = date.getHours() + ":";
        if (date.getHours() < 10) time = 0 + time;
        if (date.getMinutes() < 10) time += 0;
        time += date.getMinutes() + ":";
        if (date.getSeconds() < 10) time += 0;
        time += date.getSeconds();
        return time
    }

    /**
     *  retourne
     *  0 : date1 = date2
     *  1 : date1 > date2
     *  2 : date1 < date2
     */
    function compareDate (date1, date2){
        if (date1 === date2) return 0;
        let d1 = date1.split("-");
        let d2 = date2.split("-");
        if (d1[0] > d2[0]) return 1;
        else if (d1[0] < d2[0]) return 2;
        else if (d1[1] > d2[1]) return 1;
        else if (d1[1] < d2[1]) return 2;
        else if (d1[2] > d2[2]) return 1;
        else return 2;
    }

    function compareTime (time1, time2){
        if (time1 === time2) return 0;
        let t1 = time1.split(":");
        let t2 = time2.split(":");
        if (t1[0] > t2[0]) return 1;
        else if (t1[0] < t2[0]) return 2;
        else if (t1[1] > t2[1]) return 1;
        else if (t1[1] < t2[1]) return 2;
        else if (t1[2] > t2[2]) return 1;
        else return 2;
    }

    let refresh = window.setInterval(upDateTchat, 5000);

    function upDateTchat() {
        getRealDate().then(function (value) {
            let time = value;
            upDateMsg(Timelog[0], Timelog[1]).then(function (value) {
                console.log(Timelog);
                value = value.split("¤");
                for (let i = 0; i < value.length - 1 ; i++){
                    addMessage(value[value.length - 2 - i]);
                }
                Timelog = time.split("¤");
            });
        });

    }

    $("#stop").click(function () {
        clearInterval(refresh)
    });

});