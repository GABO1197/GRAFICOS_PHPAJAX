<?php
    require 'modelo_grafico.php';
    $MU = new modelo_grafico();
    $consulta = $MU->datas_productos();
    if($consulta){
        echo json_encode($consulta);
    }else{
        echo '{
		    "sEcho": 1,
		    "iTotalRecords": "0",
		    "iTotalDisplayRecords": "0",
		    "aaData": []
		}';
    }
   
?>