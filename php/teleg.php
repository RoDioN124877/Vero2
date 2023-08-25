<?php
stripslashes(
htmlspecialchars(
$city = $_POST['city']
)
);
stripslashes(
    htmlspecialchars(
$phone = $_POST['phone']
)
);
stripslashes(
    htmlspecialchars(
$time = $_POST['time']
)
);


$body = '' .$time . ' '  .$city .' ' .$phone ;

$url = "https://api.telegram.org/bot6062900028:AAHuWhtLDC1uFtF0PNw8GjoA_dc6an4Rfv4/sendMessage?";
$to = "-968986063";
$text = $url."chat_id=".$to."&text=".urlencode($body);

file_get_contents($text);   
 