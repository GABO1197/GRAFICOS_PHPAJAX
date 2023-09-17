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
		function traerdatosgraficosparametros($fechaincio,$fechafin,$anioincio,$anioafin){
			$sql = "CALL SP_DATOSGRAFICO_PARAMETRO('$fechaincio','$fechafin','$anioincio','$anioafin')";	
			$arreglo = array();
			if ($consulta = $this->conexion->conexion->query($sql)) {

				while ($consulta_VU = mysqli_fetch_array($consulta)) {
					$arreglo[] = $consulta_VU;
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