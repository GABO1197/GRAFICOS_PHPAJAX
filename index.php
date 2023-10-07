<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">    
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/chart.min.css">
    <link rel="stylesheet" href="css/Chart.css">
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- <link rel="stylesheet" href="css/adminlte.min.css"> -->
    <link rel="stylesheet" href="css/stilos.css">
    <link rel="stylesheet" href="css/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="Datatables/DataTables-1.13.6/css/dataTables.bootstrap4.min.css">
    <!-- <link rel="stylesheet" href="Datatables/Buttons-2.4.2/css/buttons.bootstrap5.min.css"> -->
    <!-- <link href="https://cdn.datatables.net/v/ju/dt-1.13.6/af-2.6.0/b-2.4.2/r-2.5.0/sc-2.2.0/sl-1.7.0/datatables.min.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="Datatables/datatables.min.css">
    <!-- <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/dataTables.jqueryui.min.css">
    <script src="https://code.jquery.com/jquery-1.7.1.min.js"></script> -->
    <!-- <script src="https://cdn.datatables.net/v/ju/dt-1.13.6/af-2.6.0/b-2.4.2/r-2.5.0/sc-2.2.0/sl-1.7.0/datatables.min.js"></script> -->
</head>
<style>
  .swal2-popup{
    font-size: 2rem !important;
  }
</style>
<body>
    <div class="contenedor">
      <div class="boton_texto mb-2">
          <h3>GAFICOS PRODUCTOS</h5>
          <div class="col-lg-2 p-2">
            <button  class="btn btn-primary" style="width:200px" onclick="AbrirmodalRegistro()"><i class="fa fa-plus-circle" aria-hidden="true"></i>Nuevo registro</button>
          </div>
      </div>
                    <!-- ACA VA EL CONTENEDOR DE DATABABLE POR BUSQUEDA -->
          <div class="col-lg-12 pt-4">
              <div class="card">
                 <div class="card-body card-block">
                                      <div class="grid_row form-group">
                                              <div>
                                              <label for="fecha1etapa">Fecha Inicio</label>                          
                                                  <input id="fecha1etapa" type='date' class="form-control">
                                              </div>
                                              <div>
                                                      <label for="fecha2etapa">Fecha Fin</label>                           
                                                      <input id="fecha2etapa" type='date' class="form-control">
                                              </div>
                                              <div>
                                                      <label for="etapas">Etapas</label>                           
                                                      <select class="form-control" name="etapas" id="etapas">
                                                      <option value=''>Todos</option>
                                                      <?php
                                                      // include ('../controles/accionesestados.php');
                                                      ?>
                                                      </select>
                                              </div>
                                              <div class="col-sm-12"><br>
                                              <button type="button" class="btn btn-warning btn-sm" onclick="informeacciones()"><i class="fa fa-search"></i>&nbsp; Buscar</button>
                                              </div>
                                              <!-- <div class="col-sm-2"><br>
                                              <button type="button" class="btn btn-warning btn-sm" onclick="ocultardiv('graficaacciones')"><i class="fa fa-search"></i>&nbsp; Mostrar Grafica</button>
                                          </div> -->
                                      </div>
                 </div>
              </div>
          </div>  
          <div class="parametros_busqueda tres_columnas_buscar">
              <div class="col-lg-12">
                  <div class="card">
                      <div class="card-header">
                          <strong class="card-title">Resultados: Informe</strong>
                      </div>
                      <div class="card-body">
                          <table id="tabla2" class="table table-striped responsive nowrap " style="width:100%">
                              <thead>
                                  <tr>
                                      <th scope="col">Nombre producto</th>
                                      <th scope="col">Cantidad</th>
                                      <th scope="col">Porcentaje</th>
                                  </tr>
                              </thead>
                              <tbody>
                              
                              </tbody>
                              <tfoot>
                                      <th scope="col">Nombre producto</th>
                                      <th scope="col">Cantidad</th>
                                      <th scope="col">Porcentaje</th>
                              </tfoot>
                          </table>
                      </div>
                  </div>    
              </div>
              <div class="card" id="graficaacciones">
                        <div class="char">
                          <canvas id="graphCanvasacciones"></canvas>
                        </div>
                </div>
        </div>
    </div>   
<div class="contenedor3">
  <div class="row">
    <div class="card">
      <div class=" row justify-content-center align-items-center card-body">
          <button type="submit" class=" col col-2 btn btn-primary btn-lg m-2"  onclick="cargar_contenido('cargar_tablas','vistas/graficos.php')">GRAFICOS GENERALES</button>
        <button type="submit" class=" col col-2 btn btn-primary btn-lg m-2"  onclick="cargar_contenido('cargar_tablas','vistas/general.php')">GENERAL</button>
        <button type="submit" class=" col col-2 btn btn-primary btn-lg m-2"  onclick="cargar_contenido('cargar_tablas','vistas/habilitados.php')">HABILITADOS</button>
        <button type="submit" class=" col col-2 btn btn-primary btn-lg m-2"  onclick="cargar_contenido('cargar_tablas','vistas/desahabilitados.php')">DESHABILITADOS</button>
      </div>
    </div>
  </div>
</div> 
      <div class="contenedor3" id="cargar_tablas">
        <!-- ACA VA LA TALBA TOTALIZADA  y graficos-->
      </div>

<div class="modal fade" id="modal_editar"  aria-modal="true" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Editar productos</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
                <div class="col-lg-12">
                  <!-- <label for="">id</label> -->
                  <input type="text" class="form-control" id="txt_id" name="txtid" placeholder="id"><br>
                </div>
                <div class="col-lg-12">
                  <label for="">producto</label>
                  <input type="text" class="form-control" id="txt_nombre_producto_editar" name="txt_nombre_editar" placeholder="Ingrese producto"><br>
                </div>
                <div class="col-lg-12">
                  <label for="">catidad producto</label>
                  <input type="txt" class="form-control" id="txt_cantidad_producto_editar" name="txt_cantidad_editar" placeholder="catidad producto"><br>
                </div>
                <div class="col-lg-12">
                  <label for="">cantidad stock</label>
                  <input type="txt" class="form-control" id="txt_cantidad_stok_producto_editar" name="txt_cantidad_stok_editar" placeholder="cantidad stock"><br>
                </div>
                <div class="col-lg-12">
                  <label for="">venta cantidad</label>
                  <input type="txt" class="form-control" id="txt_venta_cantidad_editar" name="txt_venta_cantidad_editar" placeholder="venta cantidad "><br>
                </div>
                <div class="col-lg-12">
                <label for="">fecha registro</label>
                  <input type="date" class="form-control" id="txt_fecha_procuto_editar" name="txt_fecha_procuto_editar" placeholder="fecha registro"><br>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-danger" data-dismiss="modal" data-bs-dismiss="modal"><i class="fa fa-times"><b>&nbsp;cerrar</b></i></button>
              <button type="button" class="btn btn-success" onclick="actualizaproductos()"><i class="fa fa-check"><b>&nbsp;registrar</b></i></button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
</div>
<div class="modal fade" id="modal_registrar"  aria-modal="true" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Registrar productos</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
                <div class="col-lg-12">
                  <label for="">producto</label>
                  <input type="text" class="form-control" id="txt_nombre_producto" name="txt_nombre_producto" placeholder="Ingrese producto"><br>
                </div>
                <div class="col-lg-12">
                  <label for="">catidad producto</label>
                  <input type="txt" class="form-control" id="txt_cantidad_producto" name="txt_cantidad_producto" placeholder="catidad producto"><br>
                </div>
                <div class="col-lg-12">
                  <label for="">cantidad stock</label>
                  <input type="txt" class="form-control" id="txt_cantidad_stok_producto" name="txt_cantidad_stok_producto" placeholder="cantidad stock"><br>
                </div>
                <div class="col-lg-12">
                  <label for="">venta cantidad</label>
                  <input type="txt" class="form-control" id="txt_venta_cantidad" name="txt_venta_cantidad" placeholder="venta cantidad "><br>
                </div>
                <div class="col-lg-12">
                <label for="">fecha registro</label>
                  <input type="date" class="form-control" id="txt_fecha_procuto" name="txt_fecha_procuto" placeholder="fecha registro"><br>
                </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-danger" data-dismiss="modal" data-bs-dismiss="modal"><i class="fa fa-times"><b>&nbsp;cerrar</b></i></button>
              <button type="button" class="btn btn-success" onclick="registroproductos()"><i class="fa fa-check"><b>&nbsp;registrar</b></i></button>
            </div>
          </div>
        </div>
</div>
</div>
</body>
<script>
   function cargar_contenido(contenedor,contenido){
      $("#"+contenedor).load(contenido);
    }
</script>
<!-- <script src="js/sweetalert2/sweetalert2.js"></script> -->
<script src="js/sweetalert2/sweetaler2.js"></script>
<script type="text/javascript" src="js/jquery-3.7.1.min.js"></script>
<script type="text/javascript" src="js/Chart.bundle.min.js"></script>
<script type="text/javascript" src="js/chart.min.js"></script>
<script src="js/Chart.bundle.js"></script>
<script src="js/jquery.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery.flot@0.8.3/jquery.flot.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flot-pie@1.0.0/src/jquery.flot.pie.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flot-spline@0.0.1/js/jquery.flot.spline.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.min.js" integrity="sha512-7U4rRB8aGAHGVad3u2jiC7GA5/1YhQcQjxKeaVms/bT66i3LVBMRcBI9KwABNWnxOSwulkuSXxZLGuyfvo7V1A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="js/proceso.js"></script>
<script src="Datatables/datatables.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<!-- <script src="Datatables/DataTables-1.13.6/js/dataTables.bootstrap4.min.js"></script> -->
<script src="Datatables/Buttons-2.4.2/js/buttons.bootstrap4.min.js"></script>
<script>
  //  traerdatos();
  //  traerdatoshabilitado();
  //  traerdatosdeshabilitado();
    informeacciones();
    // informeacciones_cargarauto();
    function AbrirmodalRegistro(){
    $('#modal_registrar').modal('show');
}
</script>
</html>