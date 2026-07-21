<?php
    $hostname = "RW MASAMBA ENT";
    $username = "iluh3191";
    $password = "gQDzabktKw9A13";
    $database_name = "iluh3191_undangan";

    $db = mysqli_connect ($hostname, $username, $password, $database_name);
    if ($db->connect_error){
        echo "koneksi db gagal";
        die("eror");
    }
?>