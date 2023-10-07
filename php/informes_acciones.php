<script type="text/javascript" language="javascript" src="../../js/ListarTablas.js"></script>
<script src="../../js/Chart.min.js"></script>

<?php
//**** session para funciones especiales */
// $_SESSION['nuevo']="S";
// $_SESSION['guardar']="S";
// $_SESSION['buscar']="S";
$_SESSION['imprimir']="0";
$_SESSION['nuevaventana']="1";
$_SESSION['paginaactiva']=$_POST["Opcion"];
?>
<div class="col-lg-12">
    <div class="card">
                    <!-- <div class="card-header"><strong>Clientes/Contactos </strong><small>Buscar </small></div> -->
                    <div class="card-body card-block">
                        <div class="row form-group">
                                <div class='col-xs-2 col-sm-2'>
                                <label for="fecha1etapa">Fecha Inicio</label>                          
                                    <input id="fecha1etapa" type='date' class="form-control">
                                </div>
                                <div class='col-xs-2 col-sm-2'>
                                        <label for="fecha2etapa">Fecha Fin</label>                           
                                            <input id="fecha2etapa" type='date' class="form-control">
                                </div>
                                <div class='col-xs-2 col-sm-2'>
                                        <label for="etapas">Etapas</label>                           
                                        <select class="form-control" name="etapas" id="etapas">
                                        <option value=''>Todos</option>
                                        <?php
                                           include ('../controles/accionesestados.php');
                                        ?>
                                        </select>
                                </div>
                                <div class="col-sm-2"><br>
                                <button type="button" class="btn btn-warning btn-sm" onclick="informeacciones()"><i class="fa fa-search"></i>&nbsp; Buscar</button>
                                </div>
                                <div class="col-sm-2"><br>
                                <button type="button" class="btn btn-warning btn-sm" onclick="ocultardiv('graficaacciones')"><i class="fa fa-search"></i>&nbsp; Mostrar Grafica</button></div>

                        </div>

                    </div>
    </div>
</div>       
<div class="col-lg-6">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Resultados: Informe</strong>
                        </div>
                        <div class="card-body">
                            <table id="tabla2" class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Estados</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Porcentaje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>    
</div>
<div class="col-sm-1 col-lg-6" id="graficaacciones">
<div class="col-sm-1 col-lg-12">
  <div class="card text-white bg-flat-color-0">
      <div class="card-body">
        <div class=""><canvas id="graphCanvasacciones"></canvas></div>
</div></div></div></div>
  
