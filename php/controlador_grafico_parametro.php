<?php
    require 'modelo_grafico.php';
    $fechaincio=$_POST['inicio'];
    $fechafin=$_POST['fin'];
    $anioincio=$_POST['anioinicio'];
    $anioafin=$_POST['aniofin'];
    $MG = new modelo_grafico();
    $consulta = $MG -> traerdatosgraficosparametros($fechaincio,$fechafin,$anioincio,$anioafin);
    echo json_encode($consulta);
?>