
function sendMsg(text){
    $.ajax({
        url : '../php/routeur.php',
        tyoe : 'GET',
        data :  'Controller=addMsg&Msg=' + text,
        dataType : 'text',
        success : function (result, statut){},
    });
}

async function getAllMsg() {
    let out;
    await $.ajax({
        url : '../php/routeur.php',
        type : 'GET',
        data : 'Controller=getAllMsg&limiter=10',
        dataType : 'text',
        success : function(result, statut){
            out = result;
        },
    });
    return out;
}

async function getIp(text){
    let out;
    await $.ajax({
        url : '../php/routeur.php',
        type : 'GET',
        data : 'Controller=getIp',
        dataType : 'text',
        success : function (result, statut){
            out = result;
        },
    });
    return out;
}

async function getRealDate(){
    let out;
    await $.ajax({
        url : '../php/routeur.php',
        type : 'GET',
        data : 'Controller=getDate',
        dataType : 'text',
        success : function (result, statut){
            out = result;
        },
    });
    return out;
}

async function updateTchat(date, heure) {
    let out;
    await $.ajax({
        url : "../php/routeur.php",
        type : 'GET',
        data : 'Controller=getLastMSg&date=' + date + "&heure=" + heure,
        datatype : 'text',
        success : function (result, statut) {
            out = result;
        },
    });
    return out;
}

