

<div class="col-lg-12">
  <div class="card card-warning shadow m-0" >
      <div class="card-header with-border">
        <h3 class="card-title">BIENVENIDO USUARIO</h3>
        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <!-- <div class="card-body">
        <div class="form-group">
          <div class="col-lg-10">
            <div class="input-group">
              
              <input type="text" class="global_filter form-control" id="global_filter" placeholder="Ingresar dato a buscar">
              <span class="input-group-text"><i class="fa fa-search"></i></span>
              <br>
              <div class="col-lg-2">
                <button  class="btn btn-danger" style="width:200px" onclick="AbrirmodalRegistro()"><i class="fa fa-plus-circle" aria-hidden="true"></i>Nuevo registro</button>
              </div>
          </div>
          
        </div> -->
        <table id="tabla_productos" class="cell-border  responsive nowrap " style="width:100%">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre producto</th>
                    <th>Cantidad</th>
                    <th>Stok</th>
                    <th>Venta cantidad</th>
                    <th>Fecha registro</th>
                    <th>Acci&oacute;n</th>
                </tr>
            </thead>
            
            <tfoot>
                <tr>
                    <th>#</th>
                    <th>Nombre producto</th>
                    <th>Cantidad</th>
                    <th>Stok</th>
                    <th>Venta cantidad</th>
                    <th>Fecha registro</th>
                    <th>Acci&oacute;n</th>
                </tr>
            </tfoot>
        </table>
      </div>
    </div>
  </div>
</div>

<script>
    $(document).ready(function(){
        listar_usuario();
    });
</script>