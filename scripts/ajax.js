
function sendMsg(text){
    $.ajax({
        url : '../php/routeur.php',
        tyoe : 'GET',
        data : 'Msg=' + text,
        dataType : 'text',
        success : function (resultat, statut){
            console.log(resultat);
        }
    });
}

async function getAllMsg() {
    await $.ajax({
        url : '../php/routeur.php',
        type : 'GET',
        data : 'AllMsg=10',
        dataType : 'text',
        success : function(resultat, statut){
            console.log(resultat)
        },
    });
}