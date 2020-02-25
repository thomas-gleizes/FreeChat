<?php

require_once ("ModelMsg.php");

class Controller {

    public static function addMsg(){
        ModelMsg::insertMsg($_GET['Msg']);
    }

    public static function getIp(){
        echo $_SERVER['REMOTE_ADDR'];
    }

    public static function getAllMsg (){
        $tab = ModelMsg::getAllMsg($_GET['AllMsg']);
        $n = 0;
        foreach ($tab as $item) {
            echo $tab[$n]['ip'] . "$" . $tab[$n]['text'] . "£" . $tab[$n]['date'] . "¨" . $tab[$n]['heure'] . "¤";
            $n++;
        }
    }
}