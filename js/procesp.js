
function cargardatosgaficobar(){
    //   alert("entro1");
    $.ajax({
        url:'php/controlador_grafico.php',
        type: 'post',
    }).done(function(resp){
        // alert("entro2");
        if(resp.length>0){
            var titulo=[];
            var cantidad=[]; 
            var colores=[];
            var data= JSON.parse(resp);
            for(var i=0 ;i<data.length; i++){
                titulo.push(data[i][1]);
                cantidad.push(data[i][2]);
                colores.push(colorRGB());
            }
            creargrafico(titulo,cantidad,colores,'bar','GRAFICO EN BARRAS DE PRODUCTOS','gaficobar');
        }

        
    })
}
function  gaficobar_polarArea(){

    //   alert("entro1");
    $.ajax({
        url:'php/controlador_grafico.php',
        type:'post'
    }).done(function(resp){
        // alert("entro2");
        if(resp.length>0){
            var titulo=[];
            var cantidad=[]; 
            var colores=[];
            var data= JSON.parse(resp);
            for(var i=0 ;i<data.length; i++){
                titulo.push(data[i][1]);
                cantidad.push(data[i][2]);
                colores.push(colorRGB());

            }
            creargrafico(titulo,cantidad,colores,'polarArea','GRAFICO POLARAREA DE PRODUCTOS','gaficobarpolarArea');
        } 
    })
}

function  gaficobar_line(){

    //   alert("entro1");
    $.ajax({
        url:'php/controlador_grafico.php',
        type:'post'
    }).done(function(resp){
        // alert("entro2");
        if(resp.length>0){
            var titulo=[];
            var cantidad=[]; 
            var colores=[];
            var data= JSON.parse(resp);
            for(var i=0 ;i<data.length; i++){
                titulo.push(data[i][1]);
                cantidad.push(data[i][2]);
                colores.push(colorRGB());

            }
            creargrafico(titulo,cantidad,colores,'line','GRAFICO POLARAREA DE PRODUCTOS','gaficoline');
        } 
    })
}
function  gafico_bubble(){

    //   alert("entro1");
    $.ajax({
        url:'php/controlador_grafico.php',
        type:'post'
    }).done(function(resp){
        // alert("entro2");
        if(resp.length>0){
            var titulo=[];
            var cantidad=[]; 
            var colores=[];
            var data= JSON.parse(resp);
            for(var i=0 ;i<data.length; i++){
                titulo.push(data[i][1]);
                cantidad.push(data[i][2]);
                colores.push(colorRGB());

            }
            creargrafico(titulo,cantidad,colores,'bubble','GRAFICO POLARAREA DE PRODUCTOS','gaficobubble');
        } 
    })
}

function cargardatosgaficobarradar(){
    //   alert("entro1");
    $.ajax({
        url:'php/controlador_grafico.php',
        type: 'post',
    }).done(function(resp){
        // alert("entro2");
        if(resp.length>0){
            var titulo=[];
            var cantidad=[]; 
            var colores=[];
            var data= JSON.parse(resp);
            for(var i=0 ;i<data.length; i++){
                titulo.push(data[i][1]);
                cantidad.push(data[i][2]);
                colores.push(colorRGB());

            }
            creargrafico(titulo,cantidad,colores,'radar','GRAFICO EN RADAR DE PRODUCTOS','gaficobarhr');

        }
       

        
    })
}
function cargardatosgaficopie(){
    //   alert("entro1");
    $.ajax({
        url:'php/controlador_grafico.php',
        type: 'post',
    }).done(function(resp){
        // alert("entro2");
        if(resp.length>0){
            var titulo=[];
            var cantidad=[]; 
            var colores=[];
            var data= JSON.parse(resp);
            for(var i=0 ;i<data.length; i++){
                titulo.push(data[i][1]);
                cantidad.push(data[i][2]);
                colores.push(colorRGB());

            }
            creargrafico(titulo,cantidad,colores,'pie','GRAFICO PIE DE PRODUCTOS','gaficopie');

        }
 
    })
}
function grafico_general(){
cargardatosgaficobar(); 
cargardatosgaficobarradar();
cargardatosgaficopie();
gaficobar_polarArea();
gaficobar_line();
gafico_bubble();
}
///////////////crear graficos general//////////////////////////////////////
function creargrafico(titulo,cantidad,colores,tipo,encabezado,id){
    var ctx = document.getElementById(id);
    // var ctx1 = document.getElementById('graficobarhr');

    var myChart = new Chart(ctx,{
        type: tipo,///aca es el tipo de grafico
        data: {
            labels: titulo,
            ///aca se pone los titulos de los campos de la base de datoos
            datasets: [{
                label: encabezado,///aca se pone el encabezado
                data: cantidad,///aca se pone  la cantidad de valores quee tiene cada titulo
                backgroundColor:colores,
                borderColor:colores,
                borderWidth: 1
                
               
            }]
            
            
        },
        
        options: {
            legend: {
                labels: {
                    fontColor: "#fff",
                    fontSize: 13
                }
            },
            scales: {
                xAxes: [{
                  time: {
                    unit: 'date'
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    fontColor : "#fff", //Color eje X
                    maxTicksLimit: 7
                  }
                }],
                yAxes: [{
                    ticks: {
                    fontColor : "#fff", //Color eje Y
                      maxTicksLimit: 5,
                      padding: 10,
                    },
                    gridLines: {
                      color: "rgb(234, 236, 244)",
                      zeroLineColor: "rgb(234, 236, 244)",
                      drawBorder: false,
                      borderDash: [2],
                      zeroLineBorderDash: [2]
                    },
                    
                  }],
                 
            }
        }
        
    });
   
   
}

///////////////funcion colores rgb aleatorios/////////////////////////////////
function generarNumero(numero){
	return (Math.random()*numero).toFixed(0);
    }
function colorRGB(){
        var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
        return "rgb" + coolor;
}

    ////////////////////////////////////////////////////////////////////////////
    //////funciones para reportes con parametros///////////////////////////////
    function cargarchart_general_PARAMETROS(){
        cargardatosgaficodoughnut();
        gaficobarpolarArea();
        gaficoradar();
        Limpiarinput();
    }



    ///////////////trae la  busqueda por fecha/////////////////////////////////
    function traeranio(){
        $(function(){
            $("#fecha_inicio").on('change', function(){
                var fechainicio =$("#fecha_inicio").val();
                var fechafin =$("#fecha_fin").val();
                $.ajax({
                    url:'php/controlador_grafico_parametro.php',
                    type:'POST',
                    data:{
                        inicio:fechainicio,
                        fin:fechafin
                    },success: function(datos){
                        $("#fecha_inicio").html(datos);
                        $("#fecha_fin").html(datos);
                        
                    }
                   
                })
            });

            $("#fecha_fin").on('change', function(){
                var fechainicio =$("#fecha_inicio").val();
                var fechafin =$("#fecha_fin").val();
                $.ajax({
                    url:'php/controlador_grafico_parametro.php',
                    type:'POST',
                    data:{
                        inicio:fechainicio,
                        fin:fechafin
                    },success: function(datos){
                        $("#fecha_inicio").html(datos);
                        $("#fecha_fin").html(datos);
                        
                    }
                })
            })
           
        });
        
    }
function traermes(){
    ///////////corresponde a la busqueda de los meses
   
        var mifecha = new Date();
        // var mifecha1 = new Date();
        var mes = mifecha.getMonth();
        // var anio = mifecha1.getFullYear();
        var cadena="";
        // var cadena1="";
        var numeromes=['fecha por mes','enero','frebrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
        for(var i=0;i<mes+5;i++){
            Limpiarinput();
            cadena+="<option type='date' value="+i+">"+numeromes[i]+"</option>";
            
        }
        $("#mes_inicio").html(cadena);
        $("#mes_fin").html(cadena);
}
function Limpiarinput(){
    // $("#fecha_inicio").val("");
    // $("#fecha_fin").val("");
    // $("#mes_inicio").val("");
    // $("#mes_fin").val("");
    var elementos = document.getElementsByTagName('input');
    limpiar.onclick = (e)=> { 
    e.preventDefault();
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].value='';          
    }
    }

    $(document).ready(function() {
        $('#mes_inicio').select2({
        // placeholder: "Select Category",
        allowClear: true, // This is for clear get the clear button if wanted
        });
        $('#mes_fin').select2({
            // placeholder: "Select Category",
            allowClear: true, // This is for clear get the clear button if wanted
            });
            $('#fecha_fin').select2({
                // placeholder: "Select Category",
                allowClear: true, // This is for clear get the clear button if wanted
                });

                $('#fecha_fin').select2({
                    // placeholder: "Select Category",
                    allowClear: true, // This is for clear get the clear button if wanted
                    });
        });
}
    
    function cargardatosgaficodoughnut(){
        var fechainicio =$("#fecha_inicio").val();
        var fechafin =$("#fecha_fin").val();
        var mesinicio =$("#mes_inicio").val();
        var mesfin =$("#mes_fin").val();

        $.ajax({
            url:'php/controlador_grafico_parametro.php',
            type: 'post',
            data:{
                inicio:fechainicio,
                fin:fechafin,
                m_inicio:mesinicio,
                m_fin:mesfin

            }
        }).done(function(resp){
            //  alert(resp);
            if(resp.length>0){
                var titulo=[];
                var cantidad=[]; 
                var colores=[];
                var data= JSON.parse(resp);
                for(var i=0 ;i<data.length; i++){
                    titulo.push(data[i][0]);
                    cantidad.push(data[i][1]);
                    colores.push(colorRGB());
    
                }
                creargrafico(titulo,cantidad,colores,'doughnut','GRAFICO doughnut DE PRODUCTOS','gaficobardoughnut_parametros');
            } 
        })
    }
    
    function  gaficobarpolarArea(){
        var fechainicio =$("#fecha_inicio").val();
        var fechafin =$("#fecha_fin").val();
        var mesinicio =$("#mes_inicio").val();
        var mesfin =$("#mes_fin").val();

        $.ajax({
            url:'php/controlador_grafico_parametro.php',
            type: 'post',
            data:{
                inicio:fechainicio,
                fin:fechafin,
                m_inicio:mesinicio,
                m_fin:mesfin

            }
        }).done(function(resp){
            if(resp.length>0){
                var titulo=[];
                var cantidad=[]; 
                var colores=[];
                var data= JSON.parse(resp);
                for(var i=0 ;i<data.length; i++){
                    titulo.push(data[i][0]);
                    cantidad.push(data[i][1]);
                    colores.push(colorRGB());
    
                }
                creargrafico(titulo,cantidad,colores,'polarArea','GRAFICO POLARAREA DE PRODUCTOS','gaficobarpolarArea_parametros');
            } 
        })
    }

    function  gaficoradar(){
        var fechainicio =$("#fecha_inicio").val();
        var fechafin =$("#fecha_fin").val();
        var mesinicio =$("#mes_inicio").val();
        var mesfin =$("#mes_fin").val();

        $.ajax({
            url:'php/controlador_grafico_parametro.php',
            type: 'post',
            data:{
                inicio:fechainicio,
                fin:fechafin,
                m_inicio:mesinicio,
                m_fin:mesfin

            }
        }).done(function(resp){
            // alert("entro2");
            if(resp.length>0){
                var titulo=[];
                var cantidad=[]; 
                var colores=[];
                var data= JSON.parse(resp);
                for(var i=0 ;i<data.length; i++){
                    titulo.push(data[i][0]);
                    cantidad.push(data[i][1]);
                    colores.push(colorRGB());
    
                }
                creargrafico(titulo,cantidad,colores,'radar','GRAFICO RADAR DE PRODUCTOS','gaficoradar_parametros');
            } 
        })
    }
    

    ///////////////// modal registro 
    function AbrirmodalRegistro(){
        $('#modal_registro').modal('show');
    }


    function Registrar_Usuario(){
        var nombreproducto = $("#txt_nombre_producto").val();
        var cantidadproducto = $("#txt_cantidad_producto").val();
        var cantidadstok = $("#txt_cantidad_stok_producto").val();
        var ventacamtidad= $("#txt_venta_cantidad").val();
        var fecharegistro= $("#txt_fecha_procuto").val();
        if(nombreproducto.length==0 || cantidadproducto.length==0 || cantidadstok.length==0 || ventacamtidad.length==0 || fecharegistro.length==0){
            return Swal.fire("Mensaje De Advertencia","Llene los campos vacios","warning");
        }
        // if(contra != contra2){
        //     return Swal.fire("Mensaje De Advertencia","Las contraseñas deben coincidir","warning");        
        // }
        $.ajax({
            "url":"php/controlador_usuario_registro.php",
            type:'POST',
            data:{
                nombre_producto:nombreproducto,
                cantidad_producto:cantidadproducto,
                cantidad_stok:cantidadstok,
                venta_cantidad:ventacamtidad,
                fecha_registro:fecharegistro
            }
        }).done(function(resp){
            alert(resp);
            if(resp>0){
                if(resp ==1){
                    $("#modal_registro").modal('hide');
                    Swal.fire("Mensaje De Confirmacion","Datos correctamente, Nuevo Usuario Registrado","success")            
                }
            }else{
                Swal.fire("Mensaje De Error","Lo sentimos, no se pudo completar el registro","error");
            }
        })
    
    
    }
    // &///////////////////

    // ////////////////////databale y bd
var table;
function listar_usuario(){
     table = $("#tabla_productos").DataTable({
       "ordering":false,   
       "bLengthChange":false,
       "searching": { "regex": false },
       "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
       "pageLength": 10,
       "destroy":true,
       "async": false ,
       "processing": true,
       "ajax":{
           "url":"php/controlador_grafico_datatable.php",
           type:'POST'
       },
       "columns":[
           {"data":"id"},
           {"data":"nombre"},
           {"data":"cantidad"},
           {"data":"stok"},
           {"data":"vanta_cantidad"},  
           {"data":"venta_fecharegistro"},
           {"defaultContent":"<button style='font-size:13px;' type='button'  class='editar btn btn-primary'><i class='fa fa-edit'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='eliminar btn btn-danger'><i class='fa fa-trash'></i></button>"}
       ],

       "language":idioma_espanol,
       select: true
   })
//    document.getElementById("tabla_productos_filter").style.display="none";
//    $('input.global_filter').on( 'keyup click', function () {
//         filterGlobal();
//     } );
//     $('input.column_filter').on( 'keyup click', function () {
//         filterColumn( $(this).parents('tr').attr('data-column') );
//     });

}
// ////////////////////////////esto es para actualizar los productos
$('#tabla_productos').on('click','.editar',function(){
    // alert("entro");
    var data = table.row($(this).parents('tr')).data();
    if(table.row(this).child.isShown()){
        var data = table.row(this).data();
    }
    $('#modal_editar').modal('show');
    $('#txt_id').val(data.id);
    $('#txt_nombre_producto_editar').val(data.nombre);
    $('#txt_cantidad_producto_editar').val(data.cantidad);
    $('#txt_cantidad_stok_producto_editar').val(data.stok);
    $('#txt_venta_cantidad_editar').val(data.vanta_cantidad);
    $('#txt_fecha_procuto_editar').val(data.venta_fecharegistro);
})

function Modificar_Datos(){
    var id = $("#txt_id").val();
    var nombre= $("#txt_nombre_producto_editar").val();
    var cantidad = $("#txt_cantidad_producto_editar").val();
    var stok = $("#txt_cantidad_stok_producto_editar").val();
    var ventacantidad = $("#txt_venta_cantidad_editar").val();
    var ventafecha = $("#txt_fecha_procuto_editar").val();
    if(id.length==0 || nombre.length==0 || cantidad.length==0 || stok.length==0 || ventacantidad.length==0 || ventafecha.length==0 ){
        return Swal.fire("Mensaje De Advertencia","Llene los campos vacios","warning");
    }
    $.ajax({
        "url":"php/controlador_productos_modificar.php",
        type:'POST',
        data:{
            id:id,
            nombre:nombre,
            cantidad:cantidad,
            stok:stok,
            ventacantidad:ventacantidad,
            ventafecha:ventafecha
        }
    }).done(function(resp){
        // alert(resp);
        if(resp>0){
            // TraerDatosUsuario();
                $("#modal_editar").modal('hide');
                Swal.fire("Mensaje De Confirmacion","Datos actualizados correctamente","success")            
                .then ( ( value ) =>  {
                    table.ajax.reload();
                }); 
        }else{
            Swal.fire("Mensaje De Error","no se pudo completar la actualizacion","error");
        }
    })


}
// ////////////////////////eliminar el producto
$('#tabla_productos').on('click','.eliminar',function(){
    var data = table.row($(this).parents('tr')).data();
    if(table.row(this).child.isShown()){
        var data = table.row(this).data();
    }
    // alert(data.id);
    Swal.fire({
        title: 'Esta seguro de eliminar el producto?',
        text: "Una vez hecho esto el producto no estara en el sistema",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
       })
       .then((result) => {
        if (result.value) {
            eliminar_datos(data.id);
        }
      })
})

function eliminar_datos(id){
    $.ajax({
        "url":"php/controlador_delete_productos.php",
        type:'POST',
        data:{
            id:id
        }
    }).done(function(resp){
        // alert(resp);
        if(resp>0){
            Swal.fire("Mensaje De Confirmacion","EL producto se elimino con exito","success")            
                .then ( ( value ) =>  {
                    table.ajax.reload();
                }); 
        }
    })
}
// habilitar datosproductos
$('#tabla_productos').on('click','.habilitar',function(){
    var data = table.row($(this).parents('tr')).data();
    if(table.row(this).child.isShown()){
        var data = table.row(this).data();
    }
    // alert(data.id);
    Swal.fire({
        title: 'Esta seguro de eliminar el producto?',
        text: "Una vez hecho esto el producto no estara en el sistema",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
       })
       .then((result) => {
        if (result.value) {
            eliminar_datos(data.id);
        }
      })
})








// function filterGlobal() {
//     $('#tabla_productos').DataTable().search(
//         $('#global_filter').val(),
//     ).draw();
// }