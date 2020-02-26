
function sendMsg(text){
    $.ajax({
        url : '../php/routeur.php',
        tyoe : 'GET',
        data : 'Msg=' + text,
        dataType : 'text',
        success : function (resultat, statut){
        }
    });
}

async function getAllMsg() {
    let res;
    await $.ajax({
        url : '../php/routeur.php',
        type : 'GET',
        data : 'AllMsg=10',
        dataType : 'text',
        success : function(resultat, statut){
            res = resultat;
        },
    });
    return res;
}

async function getIp(text){
    let res;
    await $.ajax({
        url : '../php/routeur.php',
        tyoe : 'GET',
        data : 'Ip=true',
        dataType : 'text',
        success : function (resultat, statut){
            res = resultat;
        }
    });
    return res;
}

