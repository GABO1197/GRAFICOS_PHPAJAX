<?php
require_once('conexion.php');

if ($_POST['NombreProceso'] == "buscarTerceroOrden") {

    $buscar = $_POST['busca'];

    $ComandoSql = "SELECT cedulanit, nombre1, nombre2, apellido1, apellido2 FROM terceros WHERE nombre1 like '%" . $buscar . "%' or nombre2 like '%" . $buscar . "%' or apellido1 like '%" . $buscar . "%' or apellido2 like '%" . $buscar . "%' or cedulanit = '" . $buscar . "';";
    // echo $ComandoSql;
    if ($Resultado = $conexion->query($ComandoSql)) {
        while ($fila = $Resultado->fetch_array()) {

            echo "<a id='" . $fila['cedulanit'] . "' class='list-group-item list-group-item-action' class='close' data-dismiss='modal' aria-label='Close' onclick='entrega3(0," . $fila['cedulanit'] . ",3)';>";
            echo "<span class='badge badge-primary badge-pill'>" . $fila['cedulanit'] . "</span>";
            echo "<p>" . $fila['nombre1'] . " " . $fila['nombre2'] . " " . $fila['apellido1'] . " " . $fila['apellido2'] . "</p>";
            echo "</a>";
        }
    }
}

if ($_POST['NombreProceso'] == "GUARDARACCIONCLIENTES")
{
    // $nombre=strtoupper($_POST["nombre"]);
    $accion=$_POST["accion"];
    $naccion=$_POST["naccion"];
    $asunto=$_POST["asunto"];
    $fechainicio=date('Y-m-d H:i:s',strtotime($_POST["fechainicio"]));
    $fechafin=date('Y-m-d H:i:s',strtotime($_POST["fechafin"]));
    $cliente=$_POST["cliente"];
    $contacto=$_POST["contacto"];
    $telcontacto=$_POST["telcontacto"];
    $obs=$_POST["obs"];
    $email=$_POST["email"];
    $estado=$_POST["estado"];
    $oportunidad=$_POST["oportunidad"];
    $idusuario=$_SESSION['IdUsuario'];
    $fecha=date("Y-m-d");
    $ComandoSql = "INSERT INTO acciones (idusuario, idtercero, fecha, asunto, accion, fechainicio, fechafin, contacto, telcontacto, observaciones, correo, estado,idoportunidad) VALUES ($idusuario, $cliente, '".$fecha."', '".$asunto."', '".$accion."', '".$fechainicio."', '".$fechafin."', '".$contacto."','".$telcontacto."', '".$obs."', '".$email."','".$estado."','".$oportunidad."')";
    // echo $ComandoSql;
    if ($Resultado = $conexion->query($ComandoSql)) {
       echo "SI";
       $id=$conexion->insert_id;

        //*** insertar en la agenda */
        $Datein = date('d/m/Y H:i:s', strtotime($_POST['fechainicio']));
        $Datefi = date('d/m/Y H:i:s', strtotime($_POST['fechafin']));
        $inicio =  strtotime(substr($Datein, 6, 4)."-".substr($Datein, 3, 2)."-".substr($Datein, 0, 2)." " .substr($Datein, 10, 6)) * 1000;

        // $inicio = _formatear($Datein);
        // y la formateamos con la funcion _formatear
        $final =  strtotime(substr($Datefi, 6, 4)."-".substr($Datefi, 3, 2)."-".substr($Datefi, 0, 2)." " .substr($Datefi, 10, 6)) * 1000;

        // $final  = _formatear($Datefi);

        // Recibimos el fecha de inicio y la fecha final desde el form
        $orderDate= date('d/m/Y H:i:s', strtotime($_POST['fechainicio']));
        $inicio_normal = $orderDate;

        // y la formateamos con la funcion _formatear
        $orderDate2 = date('d/m/Y H:i:s', strtotime($_POST['fechafin']));
        $final_normal  = $orderDate2;
        $sqlrA="INSERT INTO agenda VALUES(null,'$asunto','$obs','http://localhost/crm/modulos/servclientes/descripcion_evento.php?id=$id','event-success','$inicio','$final','$inicio_normal','$final_normal','$idusuario','','$naccion','$oportunidad')";
        $conexion->query($sqlrA);
        // echo "S:".$sqlrA;
        //**** fin agenda */
        if($accion=='4')
        {
            $destinatario = $email; 
            $asuntomail = $asunto; 
            $cuerpo = $obs; 

            //para el envío en formato HTML 
            $headers = "MIME-Version: 1.0\r\n"; 
            $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

            //dirección del remitente 
            $headers .= "From: JAIR <INGJACAVI@GMAIL.com>\r\n"; 

            //dirección de respuesta, si queremos que sea distinta que la del remitente 
            // $headers .= "Reply-To: mariano@desarrolloweb.com\r\n"; 

            // //ruta del mensaje desde origen a destino 
            // $headers .= "Return-path: holahola@desarrolloweb.com\r\n"; 

            // //direcciones que recibián copia 
            // $headers .= "Cc: maria@desarrolloweb.com\r\n"; 

            // //direcciones que recibirán copia oculta 
            // $headers .= "Bcc: pepe@pepe.com,juan@juan.com\r\n"; 
            // mail($destinatario,$asuntomail,$cuerpo,$headers) ;
           
            // $to = 'recipients@email-address.com';
            // $subject = 'Hello from XAMPP!';
            // $message = 'This is a test';
            // $headers = "From: your@email-address.com\r\n";
            if (mail($destinatario,$asuntomail,$cuerpo,$headers)) {
               echo "SUCCESS";
            } else {
               echo "ERROR";
            }
        }

    }
    else
     echo "NO";
}    

if($_POST["NombreProceso"]=='BUSCAACCIONES')
{
$asunto=$_POST["textop"];
$fechaini=$_POST["fechai"];
$fechafin=$_POST["fechaf"];
$condicion="";
$conta=1;
// echo "f1:".$fechaini;
// echo "f2:".$fechafin;
if ($asunto!="")
{
 $condicion.=" AND acciones.asunto like '%".$asunto."%'";
}

if ($fechaini!="" && $fechafin!="")
{
 $condicion.=" AND acciones.fechainicio BETWEEN  CAST('$fechaini' AS DATE) and CAST('$fechafin' AS DATE)";
}
// $condicion="";
$ComandoSql="Select acciones.*,(select dominios.descripcion_valor from dominios where  dominios.valor_inicial=acciones.estado and dominios.nombre_dominio like 'ESTADOACCIONES') as estadoaccion,(select dominios.descripcion_valor from dominios where  dominios.valor_inicial=acciones.accion and dominios.nombre_dominio like 'ACCIONES_CLIENTE') as tipoaccion, (select dominios.tipo from dominios where  dominios.valor_inicial=acciones.estado and dominios.nombre_dominio like 'ESTADOACCIONES') as color from acciones  where id>0 ".$condicion." order by fechainicio";
//   echo $ComandoSql;
if ($Resultado = $conexion->query($ComandoSql))
    {    
        while ($fila = $Resultado->fetch_array()) {
            $sqlr="SELECT CONCAT(nombre1,' ',nombre2,' ',apellido1,' ',apellido2,' ',razonsocial) as nombrecompleto FROM terceros  WHERE CEDULANIT = '".$fila[2]."'";
            // echo "<td>".$sqlr."</td>";
            if ($Resultado2 = $conexion->query($sqlr)) {
                // $rows = array();
                while ($fila2 = $Resultado2->fetch_array()) {
				  $nombretercero=$fila2[0];
                }
            }
            $sqlr="select nombre from oportunidades where idoportunidad=$fila[13]";
            $Resultado2 = $conexion->query($sqlr);
            $fila2 = $Resultado2->fetch_array();
            $nomoportunidad=$fila2[0];
            $datos=$fila[0]."||".$fila[4]."||".$fila[15]."||".$fila[6]."||".$fila[7]."||".$fila[2]."||".$nombretercero."||".$fila[8]."||".$fila[9]."||".$fila[10]."||".$fila[11]."||".$fila[12]."||".$nomoportunidad."||".$fila[5]."||".$fila[14]."||".$fila[15]."||".$fila[13];
            echo "<tr><td>$conta </td><td>".$fila[4]."</td><td>$fila[15]</td><td>$fila[6]</td><td>$fila[7]</td><td>".$nombretercero."</td><td ><span class='card-body card  text-light' style='background-color:".$fila[16]."'>".$fila[14]."</span></td><td><button class='btn btn-outline-warning btn-sm' data-toggle='modal' data-target='#modalEdicion' onclick='agregaformacciones(\"".$datos."\")'><i class='fa fa-pencil-square-o'></i>&nbsp; Ver</button></td><tr>";
            $conta+=1;
        }
    }
}    

if ($_POST['NombreProceso'] == "GUARDAINSTRUMENTOS")
{
    // $nombre=strtoupper($_POST["nombre"]);
    $nombre=$_POST["nombre"];
    $descripcion=$_POST["descripcion"];
    
    $ComandoSql = "INSERT INTO instrumentos (nombre, descripcion, estado) VALUES ($nombre, $descripcion,'S')";
    // echo $ComandoSql;
    if ($Resultado = $conexion->query($ComandoSql)) {
       echo "SI";
    }
    else
     echo "ERROR";
}

if ($_POST['NombreProceso'] == "GUARDANOTAS")
{
    // $nombre=strtoupper($_POST["nombre"]);
    $titulo=$_POST["titulo"];
    $oportunidad=$_POST["oportunidad"];
    $descripcion=$_POST["descripcion"];
    $idusuario=$_SESSION['IdUsuario'];
    $tipo="OPORTUNIDAD";
    $fecha=date("Y-m-d");
    $ComandoSql = "INSERT INTO notas (idoportunidad,idusuario,titulo, descripcion, estado,tipo,fechacreacion) VALUES ($oportunidad,$idusuario,'$titulo', '$descripcion','S','$tipo','$fecha')";
    //  echo $ComandoSql;
    if ($Resultado = $conexion->query($ComandoSql)) {
       echo "SI";
    }
    else
     echo "ERROR";
}

if ($_POST['NombreProceso'] == "ACTUALIZAACCIONESCLIENTES")
{
        $id=$_POST["id"];
        $asunto=$_POST["asunto"];
        $correo=$_POST["correo"];
        $obs=$_POST["obs"];
        $oportunidad=$_POST["oportunidad"];
        $estado=$_POST["estado"];
        $telcontacto=$_POST["telcontacto"];
        $contacto=$_POST["contacto"];
        $fecha=date('Y-m-d H:i:s',strtotime($_POST["fecha2"]));


        $sqlr="update acciones set asunto='$asunto', fechafin='$fecha',observaciones='$obs',contacto='$contacto',telcontacto='$telcontacto', estado='$estado',idoportunidad='$oportunidad', correo='$correo' where id=$id";
        //  echo $sqlr;
        if ($Resultado = $conexion->query($sqlr))
         {
            echo "SI";
         }
         else
          echo "NO";
    }

if ($_POST['NombreProceso'] == "ACTUALIZANOTAS")
{
        $id=$_POST["id"];
        $nombre=$_POST["nombre"];
        $descripcion=$_POST["descripcion"];
        $fecha=date("Y-m-d");

        $sqlr="update notas set titulo='$nombre', fechaactua='$fecha',descripcion='$descripcion' where idnota=$id";
        // echo $sqlr;
        if ($Resultado = $conexion->query($sqlr))
         {
            echo "SI";
         }
         else
          echo "NO";
    }
    if ($_POST['NombreProceso'] == "ACTUALIZAARCHIVOS")
    {
            $id=$_POST["id"];
            $nombre=$_POST["nombre"];
            // $descripcion=$_POST["descripcion"];
            $fecha=date("Y-m-d");
    
            $sqlr="update archivos set nombre='$nombre', fechaactua='$fecha' where idarchivos=$id";
            // echo $sqlr;
            if ($Resultado = $conexion->query($sqlr))
             {
                echo "SI";
             }
             else
              echo "NO";
        }

if ($_POST['NombreProceso'] == "GUARDAARCHIVOS")
{
    // $nombre=strtoupper($_POST["nombre"]);
    $nombre=$_POST["nombre"];
    $oportunidad=$_POST["oportunidad"];
    $idusuario=$_SESSION['IdUsuario'];
    $tipo="OPORTUNIDAD";
    $fecha=date("Y-m-d");
    if(!isset($_FILES["archivocarga"]["type"]))
    {
    echo "ssisset";
    }
    $carpeta = "../../archivos/";
    $nomanterior=$_FILES["archivocarga"]["name"];
    $archivo_final = $carpeta . $_FILES["archivocarga"]["name"];
    $ComandoSql = "INSERT INTO archivos (idoportunidad,idusuario,nombre, ruta, estado,tipo,fechacreacion) VALUES ($oportunidad,$idusuario,'$nombre','$nomanterior','S','$tipo','$fecha')";
    // echo $ComandoSql;
    if ($Resultado = $conexion->query($ComandoSql)) {
       echo "SI";
       move_uploaded_file($_FILES["archivocarga"]["tmp_name"], $archivo_final); 
    }
    else
     echo "ERROR";
}


if ($_POST['NombreProceso'] == "GUARDABUZON")
{
    // $nombre=strtoupper($_POST["nombre"]);
    $nombre=strip_tags($_POST["nombre"]);
    $asunto=strip_tags($_POST["asunto"]);
    $documento=strip_tags($_POST["documento"]);
    $empresa=strip_tags($_POST["empresa"]);
    $cargo=strip_tags($_POST["cargo"]);
    $telefono=strip_tags($_POST["telefono"]);
    $mail=strip_tags($_POST["mail"]);
    $comentario=strip_tags($_POST["comentario"]);
    $tipopqrs=strip_tags($_POST["tipopqrs"]);
    $fecha=date("Y-m-d");
    $respuesta="";
    $fechafin="0000-00-00";
    if(strtoupper($tipopqrs)=="FELICITACION")
    {
      $respuesta="CERRADO POR FELICITACION";
      $fechafin= date("Y-m-d");
;
    }
    if(!isset($_FILES["archivocarga"]["type"]))
    {
    // echo "ssisset";
    }
    $carpeta = "../archivos/";
    $nomanterior=$_FILES["archivocarga"]["name"];
    $archivo_final = $carpeta . $_FILES["archivocarga"]["name"];

    $ComandoSql = "INSERT INTO BUZON (asunto,fechacreacion,fechafin,nombre, documento, empresa, cargo, telefono, mail, comentario, archivo,estado, tipo,respuesta) VALUES ('$asunto','$fecha','$fechafin','$nombre','$documento', '$empresa', '$cargo', '$telefono', '$mail', '$comentario', '$nomanterior','PENDIENTE', '".strtoupper($tipopqrs)."', '$respuesta')";
    //   echo $ComandoSql;
    if ($Resultado = $conexion->query($ComandoSql)) {
       move_uploaded_file($_FILES["archivocarga"]["tmp_name"], $archivo_final); 
       echo "SI";
    }
    else{
     echo "ERROR";
     $mysqli->connect_error;
     echo "error:".$mysqli;
    }
}

if ($_POST['NombreProceso'] == "BUSCABUZON") 
{
    $perfil=$_POST["perfil"];
    $idusuario=$_SESSION['IdUsuario'];
    
    if($perfil=="")
    {
        $ComandoSql="select * from buzon where 1 order by idbuzon";
        // $sqlr="SELECT * FROM terceros  order by id_tercero;";
    }
    else{
		$ComandoSql="select * from buzon where asunto like '%".$perfil."%' order by idbuzon";
    }
        // echo $ComandoSql;
    $conta=1;
    if ($Resultado = $conexion->query($ComandoSql)) {
        // $rows = array();
        while ($fila = $Resultado->fetch_array()) {
            
            // if($fila[6]=="OPORTUNIDAD")
            // {
            // $tipo="OPORTUNIDAD";
            // $sqlr="select nombre from oportunidades where idoportunidad=$fila[1]";
            // $Resultado2 = $conexion->query($sqlr);
            // $fila2 = $Resultado2->fetch_array();
            // }
            $asigno="";
            $asignado="";
            if($fila[14]!="")
             {
             $sqlr="select nombreusuario,apellidousuario from usuario where idusuario=$fila[14]";
             $Resultado2 = $conexion->query($sqlr);
             $fila2 = $Resultado2->fetch_array();
             $asignado=$fila2[0]." ".$fila2[1];
             }
             if($fila[13]!="")
             {
             $sqlr="select nombreusuario,apellidousuario from usuario where idusuario=$fila[13]";
             $Resultado2 = $conexion->query($sqlr);
             $fila2 = $Resultado2->fetch_array();
             $asigno=$fila2[0]." ".$fila2[1];
             }
            
            if($fila[11]!="")
            {
             $adjunto="<a href='../archivos/".$fila[11]."' target='_blank'><i class='fa fa-download'></i></a>";
            }
            else{
                $adjunto="<i class='ti-na'></i>";
            }
            if($fila[11]!="")
            {
             $adjunto="<a href='../archivos/".$fila[11]."' target='_blank'><i class='fa fa-download'></i></a>";
            }
            $datosasignacion=$fila[2]."||".$fila[0]."||".$fila[1]."||".$fila[3]."||".$fila[4]."||".$fila[5]."||".$fila[6]."||".$fila[7]."||".$fila[8]."||".$fila[9]."||".$fila[10]."||".$fila[11]."||".$fila[12]."||".$fila[13]."||".$fila[14]."||".$fila[15]."||".$fila[16]."||".$fila[17]."||".$asigno."||".$asignado;


            $datos=$fila[2]."||".$fila[0]."||".$fila[1]."||".$fila[3]."||".$fila[4]."||".$fila[5]."||".$fila[6]."||".$fila[7]."||".$fila[8]."||".$fila[9]."||".$fila[10]."||".$fila[11]."||".$fila[12]."||".$fila[13]."||".$fila[14]."||".$fila[15]."||".$fila[16]."||".$fila[17]."||".$asigno."||".$asignado;	
            
            
            if($fila[15]=="PENDIENTE")
            {
             $estado="warning";
             $paraasignar="<button class='btn btn-outline-primary btn-sm' data-toggle='modal' data-target='#modalasignarespuesta' onclick='agregaformasignabuzon(\"".$datos."\")'><i class='ti-check'></i>&nbsp; Asignar</button>";
             if($idusuario==$fila[14])
             {
                $tiporespuesta="agregaformrespuestabuzon(\"".$datos."\")";
                $modal="modalEdicionrespuesta";
             }
             else
             {
                $tiporespuesta="agregaformverbuzon(\"".$datos."\")";
                $modal="modalverrespuesta";
             }
            }
            if($fila[15]=="CONTESTADO")
            {
             $estado="success";
             $paraasignar="<i class='ti-na'></i>";
             $tiporespuesta="agregaformverbuzon(\"".$datos."\")";
             $modal="modalverrespuesta";
            }
            if($fila[15]=="VENCIDO")
            {
             $estado="danger";
             $paraasignar="<button class='btn btn-outline-primary btn-sm' data-toggle='modal' data-target='#modalasignarespuesta' onclick='agregaformasignabuzon(\"".$datos."\")'><i class='ti-check'></i>&nbsp; Asignar</button>";
             if($idusuario==$fila[14])
             {
                $tiporespuesta="agregaformrespuestabuzon(\"".$datos."\")";
                $modal="modalEdicionrespuesta";
             }
             else
             {
                $tiporespuesta="agregaformverbuzon(\"".$datos."\")";
                $modal="modalverrespuesta";
             }
            }

			echo "<tr><td>$conta</td><td><small>".$fila[0]."</small></td><td><small>".ucfirst(strtolower($fila[3]))."</small></td><td><small>".ucfirst(strtolower($fila[4]))."</small></td><td><small>".$fila[8]."</small></td><td><small>".$fila[9]."</small></td><td>".$adjunto."</td><td><small>".$fila[16]."</small></td>";
            echo "<td><small>".ucfirst(strtolower($asignado))."</small></td><td ><span class='card-body card  text-light btn btn-".$estado."'><small>".$fila[15]."</small></span></td><td><small><button class='btn btn-outline-warning btn-sm' data-toggle='modal' data-target='#".$modal."' onclick='".$tiporespuesta."'><i class='fa fa-pencil-square-o'></i>&nbsp; Ver</button></small></td><td>".$paraasignar."</td></tr>";
            $conta+=1;
        }
	}
 }

 if ($_POST['NombreProceso'] == "ACTUALIZABUZON")
 {
         $idbuzon=$_POST["idbuzon"];
         $respuesta=$_POST["respuesta"];
         // $descripcion=$_POST["descripcion"];
         $fecha=date("Y-m-d");
         $sqlr="update buzon set respuesta='$respuesta', fechafin='$fecha', estado='CONTESTADO' where idbuzon=$idbuzon";
    // echo $sqlr;
         if ($Resultado = $conexion->query($sqlr))
          {
             echo "SI";
          }
          else
           echo "NO";
     } 
if ($_POST['NombreProceso'] == "ASIGNAUSUARIOBUZON")
     {
             $idbuzon=$_POST["idbuzon"];
             $usuarioasignado=$_POST["usuarioasignado"];
             $idusuario=$_SESSION['IdUsuario'];         
             $fecha=date("Y-m-d");
             $sqlr="update buzon set asigno='$idusuario', fechaasigna='$fecha', asignado='$usuarioasignado' where idbuzon=$idbuzon";
        //  echo $sqlr;
             if ($Resultado = $conexion->query($sqlr))
              {
                 echo "SI";
              }
              else
               echo "NO";
    } 

    if ($_POST['NombreProceso'] == "REPORTEPQRS")
    {
     $estado=$_POST["estado"];
     $tipo=$_POST["estadopq"];
     if($_POST["fecha1"]!="" && $_POST["fecha2"]!="")
     {
     $fecha1=date('Y-m-d H:i:s',strtotime($_POST["fecha1"]));
     $fecha2=date('Y-m-d H:i:s',strtotime($_POST["fecha2"]));
     $condicion=" and fechacreacion between '".$fecha1."' and '".$fecha2."'";
     }
     //  echo $estado;
     $sqlr="Select distinct estado,tipo,count(estado) as total  from buzon where estado like'%".$estado."%' and tipo like'%".$tipo."%' $condicion group by estado,tipo";
    //  echo $sqlr;
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

    if ($_POST['NombreProceso'] == "REPORTEPQRSTIPO")
    {
     $estado=$_POST["estado"];
     if($_POST["fecha1"]!="" && $_POST["fecha2"]!="")
     {
     $fecha1=date('Y-m-d H:i:s',strtotime($_POST["fecha1"]));
     $fecha2=date('Y-m-d H:i:s',strtotime($_POST["fecha2"]));
     $condicion=" and fechacreacion between '".$fecha1."' and '".$fecha2."'";
     }
     //  echo $estado;
     $sqlr="Select distinct tipo,count(tipo) as total  from buzon where tipo like'%".$estado."%' $condicion group by tipo";
    //  echo $sqlr;
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

    if ($_POST['NombreProceso'] == "REPORTEETAPASACCIONES")
    {
     $etapas=$_POST["etapas"];
     if($_POST["fecha1"]!="" && $_POST["fecha2"]!="")
     {
     $fecha1=date('Y-m-d H:i:s',strtotime($_POST["fecha1"]));
     $fecha2=date('Y-m-d H:i:s',strtotime($_POST["fecha2"]));
     $condicion=" and fecha between '".$fecha1."' and '".$fecha2."'";
     }
     //  echo $estado;
     $sqlr="Select distinct (select dominios.descripcion_valor from dominios where  dominios.valor_inicial=acciones.estado and dominios.nombre_dominio like 'ESTADOACCIONES') as estados,count(estado) as total  from ACCIONES where estado like'%".$etapas."%' $condicion group by estado";
    //  echo $sqlr;
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

    if ($_POST['NombreProceso'] == "REPORTEETAPASACCIONESTIPOS")
    {
     $etapas=$_POST["etapas"];
     if($_POST["fecha1"]!="" && $_POST["fecha2"]!="")
     {
     $fecha1=date('Y-m-d H:i:s',strtotime($_POST["fecha1"]));
     $fecha2=date('Y-m-d H:i:s',strtotime($_POST["fecha2"]));
     $condicion=" and fecha between '".$fecha1."' and '".$fecha2."'";
     }
     //  echo $estado;
     $sqlr="Select distinct (select dominios.descripcion_valor from dominios where  dominios.valor_inicial=acciones.accion and dominios.nombre_dominio like 'ACCIONES_CLIENTE') as estados,count(accion) as total  from ACCIONES where accion like'%".$etapas."%' $condicion group by accion";
    //  echo $sqlr;
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
    if ($_POST['NombreProceso'] == "GUARDAAGENDA")
    {
        // echo "ENTRADNDO";
        // Recibimos el fecha de inicio y la fecha final desde el form
        $Datein = date('d/m/Y H:i:s', strtotime($_POST['fecha1']));
        $Datefi = date('d/m/Y H:i:s', strtotime($_POST['fecha2']));
        $inicio =  strtotime(substr($Datein, 6, 4)."-".substr($Datein, 3, 2)."-".substr($Datein, 0, 2)." " .substr($Datein, 10, 6)) * 1000;

        // $inicio = _formatear($Datein);
        // y la formateamos con la funcion _formatear
        $final =  strtotime(substr($Datefi, 6, 4)."-".substr($Datefi, 3, 2)."-".substr($Datefi, 0, 2)." " .substr($Datefi, 10, 6)) * 1000;

        // $final  = _formatear($Datefi);

        // Recibimos el fecha de inicio y la fecha final desde el form
        $orderDate= date('d/m/Y H:i:s', strtotime($_POST['fecha1']));
        $inicio_normal = $orderDate;

        // y la formateamos con la funcion _formatear
        $orderDate2 = date('d/m/Y H:i:s', strtotime($_POST['fecha2']));
        $final_normal  = $orderDate2;

        // Recibimos los demas datos desde el form
        $titulo = $_POST['titulo'];

        // y con la funcion evaluar
        $body   = $_POST['evento'];
        $tipo   = $_POST['tipo'];
        $accion   = $_POST['accion'];
        $oportunidad   = $_POST['oportunidad'];
        $idusuario=$_SESSION['IdUsuario'];
  
    $sqlr="INSERT INTO agenda VALUES(null,'$titulo','$body','','$tipo','$inicio','$final','$inicio_normal','$final_normal','$idusuario','','$accion','$oportunidad')";
    //  `title`, `body`, `url`, `class`, `start`, `end`, `inicio_normal`, `final_normal`, `idusuario`, `cliente`, `accion`, `oportunidad`
    // echo "aquiis::".$sqlr;
    if ($Resultado = $conexion->query($sqlr)) {
        $id=$conexion->insert_id;
        $link = "http://localhost/crm/modulos/servclientes/"."descripcion_evento.php?id=$id";
        $query="UPDATE agenda SET url = '$link' WHERE id = $id";
        // Ejecutamos nuestra sentencia sql
        $conexion->query($query); 

       echo "SI";
    }
    }
?>

