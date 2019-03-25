
<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['fname']) && empty($_POST['email'])){
	die();
} 

if ($_POST)
	{
	// set success response code - 200 OK

	http_response_code(200);
	$subject = $_POST['fname'];
	$to = "youremail@example.com"; // replace it with your email
	$from = $_POST['email'];

	// message
	$msg = $_POST['message'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	echojson_encode(array(
		"sent" => true   //email sent successfully.
	));
	}
  else
	{

	// Email not sent error message

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>