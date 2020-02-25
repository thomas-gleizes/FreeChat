<?php

require_once ("ModelMsg.php");

class Controller {

    public static function addMsg(){
        ModelMsg::insertMsg($_GET['Msg']);
    }

    public static function getAllMsg (){
        $tab = ModelMsg::getAllMsg($_GET['AllMsg']);
        foreach ($tab as $item) {
            echo $tab[0]['ip'];
        }
    }
}