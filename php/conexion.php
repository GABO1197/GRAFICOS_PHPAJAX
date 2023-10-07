<?php
    
   	global $conexion;
		// private $servidor;
		// private $usuario;
		// private $contrasena;
		// private $basedatos;
		// public $conexion;
		    $servidor = "127.0.0.1";
			$usuario = "root";
			$contrasena = "";
			$basedatos = "graficos";
			$conexion = new mysqli($servidor,$usuario,$contrasena,$basedatos);
			if(mysqli_connect_errno()){
				die ("error de conexion :".mysqli_connect_errno());
			}else{
				// die( "conexion con exito");
			}
			// $conexion->set_charset("utf8");
?>