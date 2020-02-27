<?php

require_once ("Controller.php");

if (!$_GET == null) {
    if (isset($_GET['Controller'])){
        $action = $_GET['Controller'];
        Controller::$action();
    } else {
        header('Location:../view/Chat.html');
    }
}