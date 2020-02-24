<?php

require_once ("./Model.php");

Class ModelMsg {

    public static function addMsg ($text){
        $sql = "INSERT INTO freechat VALUES ('', :ip, date, :heure, :text);";
        $values['ip'] = $_SERVER['REMOTE_ADDR'];
        $values['date'] = date("o-n-d");
        $values['heure'] = date("H:i:s");
        $values['text'] = $text;
        $rec_prep = Model::$pdo->prepare($sql);
        $rec_prep->execute($values);
    }


}