<?php 
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASS", "root");
define("DB_NAME", "receipt-manager");

include 'database.class.php';
$database = new Database();

// http://localhost/receipt-manager/receipt-manager.php?get=all
// http://localhost/receipt-manager/receipt-manager.php?get=1

header('Content-Type: application/json');

if(isset($_REQUEST['get'])) {
	$get = (int)$_REQUEST['get'];

	if($get === 0) {
		$database->query('SELECT * FROM Receipt');
		$rows = $database->resultset();	
		echo json_encode($rows);

	} else {
		$database->query('SELECT * FROM Receipt WHERE id_receipt = :id');
		$database->bind(':id', $get);
		$rows = $database->resultset();	
		echo json_encode($rows);
	}
}








?>