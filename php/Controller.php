<?php

require_once ("ModelMsg.php");

class Controller {

    public static function addMsg(){
        ModelMsg::insertMsg($_GET['Msg']);
    }

    public static function getIp(){
        echo $_SERVER['REMOTE_ADDR'];
    }

    public static function getDate(){
        echo date('o-m-d') . "¤" . date('H:i:s');
    }

    public static function getAllMsg (){
        $tab = ModelMsg::getAllMsg($_GET['limiter']);
        $n = 0;
        foreach ($tab as $item) {
            echo $tab[$n]['ip'] . "$" . $tab[$n]['text'] . "£" . $tab[$n]['date'] . "µ" . $tab[$n]['heure'] . "¤";
            $n++;
        }
    }

    public static function getLastMsg(){
        $tab = ModelMsg::getLastMSg($_GET['date'], $_GET['heure']);
        $n = 0;
        foreach ($tab as $item){
            echo $tab[$n]['ip'] . "$" . $tab[$n]['text'] . "£" . $tab[$n]['date'] . "µ" . $tab[$n]['heure'] . "¤";
            $n++;
        }
    }
}