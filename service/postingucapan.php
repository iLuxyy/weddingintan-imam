<?php

    if (isset($_POST['simpan'])) {
        $nama = $_POST['nama'];
        $alamat = $_POST['alamat'];
        $ucapan = $_POST['ucapan'];

        $sql = "INSERT INTO tb_undangan (nama, alamat, ucapan) VALUES
        ('$nama','$alamat','$ucapan')";

        if ($db->query($sql)) {
            echo "";
        } else { echo "data gagal masuk";}
    }
?>

