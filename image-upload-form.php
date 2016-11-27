<?php

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASS", "root");
define("DB_NAME", "receipt-manager");



echo 'Hello';

include 'database.class.php';
$database = new Database();
$database->query('INSERT INTO Receipt (merchant, date, total) VALUES (:merch, :dt, :price)');
$database->bind(':merch', 'ZARA');
$database->bind(':dt', '2016-11-26');
$database->bind(':price', 29.27);
//$database->execute();
//echo $database->lastInsertId();



?>

<!DOCTYPE html>
<html>
<body>

<form action="upload.php" method="post" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload Image" name="submit">
</form>

</body>
</html>