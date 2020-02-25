<?php

require_once ("./Model.php");

Class ModelMsg {

    public static function insertMsg ($text){
        $sql = "INSERT INTO FreeChat VALUES ('', :ip, :date, :heure, :text);";
        $values['ip'] = $_SERVER['REMOTE_ADDR'];
        $values['date'] = date("o-n-d");
        $values['heure'] = date("H:i:s");
        $values['text'] = $text;
        $rec_prep = Model::$pdo->prepare($sql);
        $rec_prep->execute($values);
    }

    public static function getAllMsg ($limiter){
        $sql = "SELECT * FROM FreeChat ORDER BY idMsg DESC LIMIT 10";
        $value['ip'] = $_SERVER['REMOTE_ADDR'];
        $rec_prep = Model::$pdo->prepare($sql);
        $rec_prep->execute($value);
        $rec_prep->setFetchMode(PDO::FETCH_ASSOC);
        $tab = $rec_prep->fetchAll();
        return $tab;
    }




}