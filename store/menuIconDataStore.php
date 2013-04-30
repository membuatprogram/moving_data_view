<?php

    include "../../php/mysql.db.php";
    $db = new koneksi();

    include "../../php/initial.php";
    $conn = $db->connect();

    $sql = "SELECT * FROM tabel_menu_icon_moving";
    $db->query($sql, $nbrows, $data);
    $db->close($conn);

    include "../../php/Json.php";
    $json = new Json();

    $result = array(
        "totalCount" => $nbrows,
        "topics" => $data
    );
    die($json->encode($result));

?>