
function upDateLocalisation(text){
    $.ajax({
        url : './php/routeur.php',
        tyoe : 'GET',
        data : 'Msg=' + text,
        dataType : 'text',
        success : function (resultat, statut){
        }
    });
}

async function getChef() {
    var result;
    await $.ajax({
        url : '../controller/routeur.php',
        type : 'GET',
        data : 'Ajax=getChef',
        dataType : 'text',
        success : function(resultat, statut){
            result = resultat;
        },
    });
    return result;
}