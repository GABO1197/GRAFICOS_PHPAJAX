<?php
    
    class  modelo_grafico{
		private $conexion;
		function __construct()
		{
			require_once('conect.php');
			$this->conexion = new conexion();
			$this->conexion->conectar();
        }


		function traerdatosgraficosbar(){
			$sql = "CALL GRAFICOS_BAR";	
			$arreglo = array();
			if ($consulta = $this->conexion->conexion->query($sql)) {

				while ($consulta_VU = mysqli_fetch_array($consulta)) {
					$arreglo[] = $consulta_VU;
				}
				return $arreglo;
				$this->conexion->cerrar();	
			}
		}
		function traerdatosgraficosparametros($fechaincio,$fechafin){
			// $sql = "SELECT productos.nombre, venta.vanta_cantidad AS CANTIDAD FROM venta
			// INNER JOIN productos ON  venta.venta_id = productos.id
			// WHERE  venta.venta_fecharegistro BETWEEN '$fechaincio' AND '$fechafin'
			// GROUP BY venta.venta_id";	
			$sql="CALL SP_DATOSGRAFICO_PARAMETRO('$fechaincio','$fechafin')";
			$arreglo = array();
			if ($consulta = $this->conexion->conexion->query($sql)) {

				while ($consulta_VU = mysqli_fetch_array($consulta)) {
					$arreglo[] = $consulta_VU;
				}
				return $arreglo;
				$this->conexion->cerrar();	
			}
			// $sql1="CALL SP_DATOSGRAFICO_PARAMETRO_MES('$mesinicio','$mesfin')";
			// 	$arreglo1 = array();
			// 	if ($consulta1 = $this->conexion->conexion->query($sql1)) {
	
			// 		while ($consulta_VU1 = mysqli_fetch_array($consulta1)) {
			// 			$arreglo1[] = $consulta_VU1;
			// 		}
			// 		return $arreglo1;
			// 		$this->conexion->cerrar();	
			// 	}
			
			
		}
		function traerdatosgraficosparametros_MES($mesinicio,$mesfin){
			$sql="CALL SP_DATOSGRAFICO_PARAMETRO_MES('$mesinicio','$mesfin')";
			$arreglo = array();
			if ($consulta1 = $this->conexion->conexion->query($sql)){
				while ($consulta_VU = mysqli_fetch_array($consulta1)){
					$arreglo[] = $consulta_VU;
				}
				return $arreglo;
				$this->conexion->cerrar();	
			}
		}

		// consulta a la base datos para la datatables
		function datas_productos(){
			$sql="CALL SP_GRAFICOS_GENERAL()";
			$arreglo = array();
			if ($consulta = $this->conexion->conexion->query($sql)) {
				while ($consulta_VU = mysqli_fetch_assoc($consulta)) {
                    $arreglo["data"][]=$consulta_VU;
				}
				return $arreglo;
				$this->conexion->cerrar();
			}
		}



		
        function RegistrarUsuario($nombre_producto,$cantidad_producto,$cantidad_stok,$venta_cantidad,$fecha_registro){
            $sql = "CALL SP_REGISTRAR_PRODUCTOS('$nombre_producto','$cantidad_producto','$cantidad_stok','$venta_cantidad','$fecha_registro')";
			$arreglo = array();
			$consulta = $this->conexion->conexion->query($sql);
			echo $consulta;
			$this->conexion->cerrar();
				
        }
		
	}
?>