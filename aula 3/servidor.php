<?php
$txt;
$valor = $_GET["valor"];
for( $i = 1; $i <= $valor ; $i++){
    $txt .= $i."<br>";
}
echo $txt
?>