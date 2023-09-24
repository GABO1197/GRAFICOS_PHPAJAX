<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/chart.min.css">
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="css/adminlte.min.css">

    <!-- <link href="https://cdn.datatables.net/v/ju/dt-1.13.6/af-2.6.0/b-2.4.2/r-2.5.0/sc-2.2.0/sl-1.7.0/datatables.min.css" rel="stylesheet"> -->
 
    <link rel="stylesheet" href="Datatables/datatables.min.css">
    <!-- <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/dataTables.jqueryui.min.css">
    <script src="https://code.jquery.com/jquery-1.7.1.min.js"></script> -->
    <!-- <script src="https://cdn.datatables.net/v/ju/dt-1.13.6/af-2.6.0/b-2.4.2/r-2.5.0/sc-2.2.0/sl-1.7.0/datatables.min.js"></script> -->

</head>
<style>
  h1,h3,h6 ,p{
    color: beige;
}

  
</style>
<body>
    <div class="contenedor">
      <div class="row m-0">
          <h1> REGISTROS INGRESADOS:</h1>
          <section class="content">
            <div class="container-fluid">
              <!-- Small boxes (Stat box) -->
              <div class="row">
                <div class="col-lg-3 col-6">
                  <!-- small box -->
                  <div class="bg-info small-box ">
                    <div class="inner">
                    <?php
                      include "php/conn.php";
                      //  $id1=$_GET['id'];
                      $respuesta=mysqli_query($conexion,"SELECT COUNT(*) as count FROM productos ");
                      $consulta=mysqli_num_rows($respuesta);
                      while($datos=mysqli_fetch_array($respuesta)){
                        $contador=$datos['count'];
                      ?>
                      <div class="inner">
                        <h3><?php echo $contador?></h3>
                        <p>CANTINDAD DE REGISTROS</p>
                      </div>
                      <?php
                      }
                      ?>
                      <p>New Orders</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-bag"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
      <div class="boton_texto mb-2">
          <h3>GAFICOS PRODUCTOS</h5>
          <div class="col-lg-2 p-2">
          <button  class="btn btn-danger" style="width:200px" onclick="AbrirmodalRegistro()"><i class="fa fa-plus-circle" aria-hidden="true"></i>Nuevo registro</button>
            
          </div>
          
            <div class="col-lg-2 p-2">
              <div class="row">
                <div class="col g-2">
                  <a href=""><button  class="btn btn-warning" >INICIO</button></a>
                </div>
                <div class="col g-2">
                <a onclick="cargar_contenido('contenido_principal','vistas/vista_usuario.php')"><button  class="btn btn-warning" >RESUMEN</button></a>
                </div>
              </div>
            </div>
      </div>
       <div class="contenedor"  id="contenido_principal">
        <div class="contenedor tres_columnas   pt-5" >
              <div class="card z-index-1 col_blanco zoom">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent" >
                    <div >
                        <canvas id="gaficobar" style="background-color: #2674b9; border-radius: 5px;" height="600" width="900"></canvas>
                    </div>
                </div>
                  <div class="card-body">
                    <h6 class="mb-0 ">Website Views</h6>
                    <p class="text-sm ">Last Campaign Performance</p>
                    <hr class="dark horizontal">
                      <div class="d-flex ">
                      <i class="material-icons text-sm my-auto me-1">schedule</i>
                        <p class="mb-0 text-sm"> campaign sent 2 days ago </p>
                      </div>
                  </div>
              </div>
              <div class="card z-index-2 col_pastelazul zoom">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                    <div class="chart">
                        <canvas id="gaficobarhr" class="col_pastellila" height="600" width="900" style="border-radius: 5px;"></canvas>
                    </div>
                </div>
                  <div class="card-body">
                    <h6 class="mb-0 ">Website Views</h6>
                    <p class="text-sm ">Last Campaign Performance</p>
                    <hr class="dark horizontal">
                      <div class="d-flex ">
                      <i class="material-icons text-sm my-auto me-1">schedule</i>
                        <p class="mb-0 text-sm"> campaign sent 2 days ago </p>
                      </div>
                  </div>
              </div>
              <div class="card z-index-2  zoom">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                    <div class="chart">
                        <canvas id="gaficopie" class="col_primario" height="600" width="900" style="border-radius: 5px;"></canvas>
                    </div>
                </div>
                  <div class="card-body">
                    <h6 class="mb-0 ">Website Views</h6>
                    <p class="text-sm ">Last Campaign Performance</p>
                    <hr class="dark horizontal">
                      <div class="d-flex ">
                      <i class="material-icons text-sm my-auto me-1">schedule</i>
                        <p class="mb-0 text-sm"> campaign sent 2 days ago </p>
                      </div>
                  </div>
              </div>
              <div class="card z-index-2 gradiente zoom" >
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                    <div class="chart">
                        <canvas id="gaficobarpolarArea" class="" height="600" width="900" style="background-color: #9f403e;border-radius: 5px;"></canvas>
                    </div>
                </div>
                  <div class="card-body">
                    <h6 class="mb-0 ">Website Views</h6>
                    <p class="text-sm ">Last Campaign Performance</p>
                    <hr class="dark horizontal">
                      <div class="d-flex ">
                      <i class="material-icons text-sm my-auto me-1">schedule</i>
                        <p class="mb-0 text-sm"> campaign sent 2 days ago </p>
                      </div>
                  </div>
              </div>
              <div class="card z-index-2 gradiente zoom" >
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                    <div class="chart">
                        <canvas id="gaficoline" class="" height="600" width="900" style="background-color: #9f403e;border-radius: 5px;"></canvas>
                    </div>
                </div>
                  <div class="card-body">
                    <h6 class="mb-0 ">Website Views</h6>
                    <p class="text-sm ">Last Campaign Performance</p>
                    <hr class="dark horizontal">
                      <div class="d-flex ">
                      <i class="material-icons text-sm my-auto me-1">schedule</i>
                        <p class="mb-0 text-sm"> campaign sent 2 days ago </p>
                      </div>
                  </div>
              </div> 
        </div>
       </div>               
      

      <div class="caja_select">
          <div class="col-lg-12" style="padding-top:2rem;">
              <div class="card mb-2">
                  <h5 class="card-header">GAFICOS PRODUCTOS CON PARAMETROS</h5>
                  <div class="card-body">
                      <div class="row_inputs">
                          <div class="cambiar" id="primero" style="visibility:visible; display:block;">
                            <div class="input">
                                  <label for="">AÑO INICIO</label>
                                  <input type="date" class="form-control" id="fecha_inicio">
                              </div>
                              <div class="input">
                                  <label for="">AÑO FIN</label>
                                  <input type="date" class="form-control" id="fecha_fin">
                              </div>
                          </div>

                          <div class="cambiar" id="segundo" style="visibility:hidden; display:none;" >
                            <div class="input" >
                                  <label for="">MES INICIO</label>
                                  <select name="" id="mes_inicio" class="form-control">
                                  </select>
                                  <!-- <input type="month" class="form-control" id="mes_inicio"> -->
                              </div>
                              <div class="input" id="segundo">
                                  <label for="">MES FIN</label>
                                  <select name="" id="mes_fin" class="form-control">
                                  </select>
                                  <!-- <input type="month" class="form-control" id="mes_fin"> -->
                              </div>
                          </div>

                          <div class="input">
                              <div class="form-check">
                              <a href="#" onclick="visualiza_primero()">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                              </a>
                                <label class="form-check-label" for="flexRadioDefault1">Año</label>
                              </div>
                              <div class="form-check">
                                <a href="#"  onclick="visualiza_segundo()">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                </a>
                                <label class="form-check-label" for="flexRadioDefault2">Mes</label>
                              </div>
                          </div>
                          <div class="inputs">
                                <label for="text">&nbsp;</label>
                                <button class="col-lg-12 btn btn-danger" onclick ="cargarchart_general_PARAMETROS()">BUSCAR</button>
                                <button type="reset"  class="col-lg-12 btn btn-danger" id="limpiar">Limpiar</button>
                          </div>
                          
                             
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
      </div> 
      

      <div class="contenedor tres_columnas pt-5">
          <div class="card z-index-2 gradiente zoom">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent" >
                  <div class="bg-gradient-dark shadow p-1 mb-1 bg-white rounded border-radius-lg py-3 pe-1" >
                    <div class="chart">
                      <canvas id="gaficobardoughnut_parametros" width="900" height="600"></canvas>
                    </div>
                  </div>
                </div>
                  <div class="card-body">
                    <h6 class="mb-0 ">Website Views</h6>
                    <p class="text-sm ">Last Campaign Performance</p>
                    <hr class="dark horizontal">
                      <div class="d-flex ">
                      <i class="material-icons text-sm my-auto me-1">schedule</i>
                        <p class="mb-0 text-sm"> campaign sent 2 days ago </p>
                      </div>
                  </div>
          </div>
          <div class="card z-index-2 gradiente zoom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-dark shadow p-1 mb-1 bg-white rounded border-radius-lg py-3 pe-1">
                <div class="chart">
                  <canvas id="gaficoradar_parametros" width="900" height="600"></canvas>                
              </div>
            </div>
              <div class="card-body">
                <h6 class="mb-0 ">Website Views</h6>
                <p class="text-sm ">Last Campaign Performance</p>
                <hr class="dark horizontal">
                  <div class="d-flex ">
                  <i class="material-icons text-sm my-auto me-1">schedule</i>
                    <p class="mb-0 text-sm"> campaign sent 2 days ago </p>
                  </div>
              </div>
          </div>
          </div>
          <div class="card z-index-2 gradiente zoom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-dark shadow p-1 mb-1 bg-white rounded border-radius-lg py-3 pe-1">
                <div class="chart">
                    <canvas id="gaficobarpolarArea_parametros" width="900" height="600"></canvas>
                </div>
              </div>
            </div>
              <div class="card-body">
                <h6 class="mb-0 ">Website Views</h6>
                <p class="text-sm ">Last Campaign Performance</p>
                <hr class="dark horizontal">
                  <div class="d-flex ">
                  <i class="material-icons text-sm my-auto me-1">schedule</i>
                    <p class="mb-0 text-sm"> campaign sent 2 days ago </p>
                  </div>
              </div>
          </div>    
      </div>

</div>
<form autocomplete="false" onsubmit="return false">
<div class="modal fade" id="modal_registro"  aria-modal="true" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Registro de productos</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
                <div class="col-lg-12">
                  <label for="">producto</label>
                  <input type="text" class="form-control" id="txt_nombre_producto" placeholder="Ingrese producto"><br>
                </div>
                <div class="col-lg-12">
                  <label for="">catidad producto</label>
                  <input type="txt" class="form-control" id="txt_cantidad_producto" placeholder="catidad producto"><br>
                </div>
                <div class="col-lg-12">
                  <label for="">cantidad stock</label>
                  <input type="txt" class="form-control" id="txt_cantidad_stok_producto" placeholder="cantidad stock"><br>
                </div>
                <div class="col-lg-12">
                  <label for="">venta cantidad</label>
                  <input type="txt" class="form-control" id="txt_venta_cantidad" placeholder="venta cantidad "><br>
                </div>
                <div class="col-lg-12">
                <label for="">fecha registro</label>
                  <input type="date" class="form-control" id="txt_fecha_procuto" placeholder="fecha registro"><br>
                </div>
               
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-danger close" data-dismiss="modal"><i class="fa fa-times"><b>&nbsp;cerrar</b></i></button>
              <button type="button" class="btn btn-success" onclick="Registrar_Usuario()"><i class="fa fa-check"><b>&nbsp;registrar</b></i></button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
</div>
</form>

<script>
     
    $(document).ready(function() {
      $('#modal_registro').on('shown.bs.modal',function(){
      $('#txt_nombre_producto').focus();
    })
  });

    $(".close").click(function(){
  $("#modal_registro").modal('hide');
});

function cargar_contenido(contenedor,contenido){
    $("#"+contenedor).load(contenido);
}

    
</script>

<script type="text/javascript">
      function visualiza_primero() {
         document.getElementById('primero').style.visibility='visible';
         document.getElementById('primero').style.display='block';
         document.getElementById('segundo').style.visibility='hidden';
         document.getElementById('segundo').style.display='none';
      };
      function visualiza_segundo() {
         document.getElementById('segundo').style.visibility='visible';
         document.getElementById('segundo').style.display='block';
         document.getElementById('primero').style.visibility='hidden';
         document.getElementById('primero').style.display='none';
      };
   </script>
  </body>
    <?php include "php/librerias.php"?>
    <script src="js/sweetalert2/sweetaler2.js"></script>

</html>