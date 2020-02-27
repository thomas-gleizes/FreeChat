<?php

require_once ("./Model.php");

Class ModelMsg {

    public static function insertMsg ($text){
        $sql = "INSERT INTO freechat VALUES ('', :ip, :date, :heure, :text);";
        $values['ip'] = $_SERVER['REMOTE_ADDR'];
        $values['date'] = date("o-n-d");
        $values['heure'] = date("H:i:s");
        $values['text'] = $text;
        $rec_prep = Model::$pdo->prepare($sql);
        $rec_prep->execute($values);
    }

    public static function getAllMsg ($limiter){
        $sql = "SELECT * FROM freechat ORDER BY idMsg DESC LIMIT 10";
        $rec_prep = Model::$pdo->prepare($sql);
        $rec_prep->execute();
        $rec_prep->setFetchMode(PDO::FETCH_ASSOC);
        return $rec_prep->fetchAll();
    }


}