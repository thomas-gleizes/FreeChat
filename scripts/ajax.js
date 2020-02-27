
function sendMsg(text){
    $.ajax({
        url : '../php/routeur.php',
        tyoe : 'GET',
        data :  'Controller=addMsg&Msg=' + text,
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
        data : 'Controller=getAllMsg&limiter=10',
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
        data : 'Controller=getIp',
        dataType : 'text',
        success : function (resultat, statut){
            res = resultat;
        }
    });
    return res;
}

async function getRealDate(){
    await $.ajax({
        url : '../php/routeur.php',
        tyoe : 'GET',
        data : 'Controller=getDate',
        dataType : 'text',
        success : function (resultat, statut){
            res = resultat;
            console.log(res);
        }
    });
    return res;
}

