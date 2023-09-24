<?php
    require 'modelo_grafico.php';
    $fechaincio=$_POST['inicio'];
    $fechafin=$_POST['fin'];

    $mesinicio=$_POST['m_inicio'];
    $mesfin=$_POST['m_fin'];
    $MG = new modelo_grafico();
    // $consulta=array();
    // $consulta1=array();

    // $consulta = $MG -> traerdatosgraficosparametros($fechaincio,$fechafin,$anioincio,$anioafin);
    $consulta = $MG -> traerdatosgraficosparametros($fechaincio,$fechafin);
    // echo json_encode($consulta);
    

    $MG1 = new modelo_grafico();
    // $consulta = $MG -> traerdatosgraficosparametros($fechaincio,$fechafin,$anioincio,$anioafin);
    $consulta1 = $MG1 -> traerdatosgraficosparametros_MES($mesinicio,$mesfin);
    $js=$consulta+$consulta1;
     echo json_encode($js);
   
?>