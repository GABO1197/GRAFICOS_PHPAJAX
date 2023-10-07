<?php 
require_once('conexion.php');
/////////////////////////funcion para buscar grafica por fecha
    if ($_POST['NombreProceso'] == "REPORTEETAPASACCIONES")
  {
    $fecha1=$_POST["fecha1"];
     $fecha2=$_POST["fecha2"];
     $etapas=$_POST["etapas"];
     if($_POST["fecha1"]!="" && $_POST["fecha2"]!="")
     {
     $fecha1=date('Y-m-d H:i:s',strtotime($_POST["fecha1"]));
     $fecha2=date('Y-m-d H:i:s',strtotime($_POST["fecha2"]));
    //  $condicion=" and fecha between '".$fecha1."' and '".$fecha2."'";
     }
     //  echo $estado;
     $sqlr="CALL SP_DATOSGRAFICO_PARAMETRO('$fecha1','$fecha2')";
    //  echo $sqlr;
    $campos=array();
     if ($Resultado = $conexion->query($sqlr)) {
        while ($fila = $Resultado->fetch_array()) {
        $campos[]=$fila;
        }
        echo json_encode($campos);
        }
        else
         {
           echo "ERROR";
         }
  }

//////////////////////////777traer todos los datos de la bd grafica auto
    if ($_POST['NombreProceso'] == "REPORTEETAPASACCIONES_auto")
    {
        $sql="SELECT
        productos.id, 
        productos.nombre, 
        productos.cantidad, 
        productos.stok, 
        productos.p_estatus,
        venta.venta_id, 
        venta.producto_id, 
        venta.vanta_cantidad, 
        venta.venta_fecharegistro
        
      FROM
        graficos.venta
        INNER JOIN
        graficos.productos
        ON 
        venta.venta_id = productos.id
        WHERE venta.venta_fecharegistro >= '2023-01-1' 
        AND venta.venta_fecharegistro <= '2023-12-31'
        AND venta.v_estatus=1 AND productos.p_estatus=1";
        //  echo $sqlr;
        $campos=array();
        if ($Resultado = $conexion->query($sql)) {
            while ($fila = $Resultado->fetch_assoc()) {
            $campos[]=$fila;
            }
            echo json_encode($campos);
            }
            else
            {
              echo "ERROR";
            }
    }


    ///////////////////////////datablegeneral
    if ($_POST['NombreProceso'] == "CARGARDATOS")
    {
      $sql="SELECT productos.id,  productos.nombre, productos.cantidad,  productos.stok, 
      productos.p_estatus, venta.venta_id, venta.producto_id, venta.vanta_cantidad, 
      venta.venta_fecharegistro,venta.fecha_v,productos.fecha_p FROM graficos.venta  INNER JOIN
      graficos.productos ON  venta.venta_id = productos.id  WHERE venta.venta_fecharegistro >= '2023-01-1' 
      AND venta.venta_fecharegistro <= '2023-12-31'";
      //  echo $sqlr;
      $campos=array();
      if ($Resultado = $conexion->query($sql)) {
          while ($fila = $Resultado->fetch_assoc()) {
          $campos[]=$fila;
          }
          echo json_encode($campos);
          }
          else
          {
            echo "ERROR";
          }
    }
    // datatable habilitados
    if ($_POST['NombreProceso'] == "CARGARDATOSHABILITADOS")
    {
      $sql="SELECT productos.id,  productos.nombre, productos.cantidad,  productos.stok, 
      productos.p_estatus, venta.venta_id, venta.producto_id, venta.vanta_cantidad, 
      venta.venta_fecharegistro, venta.v_estatus FROM graficos.venta  INNER JOIN
      graficos.productos ON  venta.venta_id = productos.id  WHERE venta.venta_fecharegistro >= '2023-01-1' 
      AND venta.venta_fecharegistro <= '2023-12-31' AND venta.v_estatus=1 AND productos.p_estatus=1" ;
      //  echo $sqlr;
      $campos=array();
      if ($Resultado = $conexion->query($sql)) {
          while ($fila = $Resultado->fetch_assoc()) {
          $campos[]=$fila;
          }
          echo json_encode($campos);
          }
          else
          {
            echo "ERROR";
          }
    }

    // datatable deshabilitados
    if ($_POST['NombreProceso'] == "CARGARDATOSDESHABILITADOS")
    {
      $sql="SELECT productos.id,  productos.nombre, productos.cantidad,  productos.stok, 
      productos.p_estatus, venta.venta_id, venta.producto_id, venta.vanta_cantidad, 
      venta.venta_fecharegistro, venta.v_estatus FROM graficos.venta  INNER JOIN
      graficos.productos ON  venta.venta_id = productos.id  WHERE venta.venta_fecharegistro >= '2023-01-1' 
      AND venta.venta_fecharegistro <= '2023-12-31' AND venta.v_estatus=0 AND productos.p_estatus=0" ;
      //  echo $sqlr;
      $campos=array();
      if ($Resultado = $conexion->query($sql)) {
          while ($fila = $Resultado->fetch_assoc()) {
          $campos[]=$fila;
          }
          echo json_encode($campos);
          }
          else
          {
            echo "ERROR";
          }
    }
  
// ACTUALIZAR PRODUCTOS
    if ($_POST['NombreProceso'] == "ACTUALIZARPRODUCTOS")
{
        $txtid=$_POST["id"];
        $nombre=$_POST["nombre"];
        $cantidad=$_POST["cantidad"];
        $stock=$_POST["stock"];
        $v_cantidad=$_POST["v_cantidad"];
        $v_fecha=$_POST["v_fecha"];
       


        $sqlr="CALL SP_ACTUALIZAR_PRODUCTOS ('$txtid',' $nombre','$cantidad',' $stock','$v_cantidad','$v_fecha')";
        //  echo $sqlr;
        if ($Resultado = $conexion->query($sqlr))
         {
          echo 1;
         }
         else{
          echo 0;
        }
    }


// DESHABILITAR PRODUCTOS
    if ($_POST['NombreProceso'] == "ELIMINARDATOS")
{
        $txtid=$_POST["id"];
        $sqlr="UPDATE venta ,productos SET venta.v_estatus =0, productos.p_estatus=0
        WHERE venta.venta_id = $txtid AND productos.id=$txtid";
        //  echo $_POST["id"];
        if ($Resultado = $conexion->query($sqlr))
         {
          echo 1;
         }
         else{
          echo 0;
        }
}

    // HABILITAR PRODUCTOS
    if($_POST['NombreProceso'] == "HABILITARDATOS"){
      $txtid=$_POST["id"];
      $sql="UPDATE venta ,productos SET venta.v_estatus =1, productos.p_estatus=1
      WHERE venta.venta_id = $txtid AND productos.id=$txtid";
      if($Resultado = $conexion->query($sql)){
        echo 1;
      }
      else{
        echo 0;
      }
    }

    //////REGISTRAR PRODUCTOS
    if($_POST['NombreProceso'] == "REGISTRARDATOS"){

      $nombre_p=$_POST["nombre_p"];
      $cantidad_p=$_POST["cantidad_p"];
      $stock_p=$_POST["stock_p"];
      $v_cantidad_p=$_POST["v_cantidad_p"];
      $v_fecha_p=$_POST["v_fecha_p"];
      // echo $nombre,$cantidad_p,$stock_p,$v_cantidad_p,$v_fecha_p;
      $comandosql="CALL SP_REGISTRAR_PRODUCTOS('$nombre_p','$cantidad_p','$stock_p','$v_cantidad_p','$v_fecha_p')";
      
      if($Resultado = $conexion->query($comandosql)){
        echo 1;
      }
      else{
       echo 0;
      }
      
     
    }
  
?>
