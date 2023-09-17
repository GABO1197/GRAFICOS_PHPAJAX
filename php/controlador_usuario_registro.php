<?php 
    require 'modelo_grafico.php';

    $MU= new modelo_grafico();
    $nombre_producto= htmlspecialchars($_POST['nombre_producto'],ENT_QUOTES,'UTF-8');
    $cantidad_producto= htmlspecialchars($_POST['cantidad_producto'],ENT_QUOTES,'UTF-8');
    $cantidad_stok= htmlspecialchars($_POST['cantidad_stok'],ENT_QUOTES,'UTF-8');
    $venta_cantidad= htmlspecialchars($_POST['venta_cantidad'],ENT_QUOTES,'UTF-8');
    $fecha_registro= htmlspecialchars($_POST['fecha_registro'],ENT_QUOTES,'UTF-8');
    $consulta =$MU->RegistrarUsuario($nombre_producto,$cantidad_producto,$cantidad_stok,$venta_cantidad,$fecha_registro);
    // $data =json_encode($consulta);
    echo $consulta;
   
?>