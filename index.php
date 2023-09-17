<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/chart.min.css">
    <script src="https://code.jquery.com/jquery-1.7.1.min.js"></script>
</head>
  <body>
  
    <h1>GAFICOS CHARS: </h1>
        <div class="col-lg-12" style="padding-top:2rem;">
            <div class="card">
                <h5 class="card-header">GAFICOS PRODUCTOS</h5>
                <div class="col-lg-2">
                <button  class="btn btn-danger" style="width:200px" onclick="AbrirmodalRegistro()"><i class="fa fa-plus-circle" aria-hidden="true"></i>Nuevo registro</button>
              </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-4">
                            <canvas id="gaficobar" width="900" height="600"></canvas>
                        </div>
                        <div class="col-lg-4">
                            <canvas id="gaficobarhr" width="900" height="600"></canvas>
                        </div>
                        <div class="col-lg-4">
                            <canvas id="gaficopie" width="900" height="600"></canvas>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="card">
                
                <h5 class="card-header">GAFICOS PRODUCTOS CON PRODUCTOS</h5>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-2">
                            <label for="">MES INICIO</label>
                            <select   name="" id="fecha_inicio" class="form-control">
                            </select>
                        </div>
                        <div class="col-lg-2">
                            <label for="">MES FIN</label>
                            <select   name="" id="fecha_fin" class="form-control"></select>
                        </div>
                        <div class="col-lg-2">
                            <label for="">AÑO INICIO</label>
                            <select   name="" id="anio_inicio" class="form-control">
                            </select>
                        </div>
                        <div class="col-lg-2">
                            <label for="">AÑO FIN</label>
                            <select   name="" id="anio_fin" class="form-control"></select>
                        </div>
                        <div class="col-lg-3">
                            <br>
                            <button class="btn btn-danger" onclick="cargarchart_general_PARAMETROS()">BUSCAR</button>
                        </div>
                        
                        <div class="col-lg-4">
                            <canvas id="gaficobardoughnut_parametros" width="900" height="600"></canvas>
                        </div>
                        <div class="col-lg-4">
                            <canvas id="gaficobarpolarArea_parametros" width="900" height="600"></canvas>
                        </div>
                        <div class="col-lg-4">
                            <canvas id="gaficoradar_parametros" width="900" height="600"></canvas>
                        </div>
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

    
</script>
  </body>
    <?php include "php/librerias.php"?>
    <script src="js/sweetalert2/sweetaler2.js"></script>

</html>