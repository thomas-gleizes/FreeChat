<?php

require_once ("Controller.php");

if (!$_GET == null) {
    if (isset($_GET['Msg'])){
        Controller::addMsg();
    } else if (isset($_GET['AllMsg'])){
        Controller::getAllMsg();
    } else if (isset($_GET['REC'])) {
        header('Location:../view/Chat.html');
    }
}