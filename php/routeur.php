<?php

require_once ("Controller.php");

if (!$_GET == null) {
    if ($_GET['REC'] == '1986328'){
        header("Location:../view/Chat.html");
    } else if (isset($_GET['Msg'])){
        Controller::getMsg();
    }
}