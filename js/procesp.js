
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
///////////////crear graficos general//////////////////////////////////////
function creargrafico(titulo,cantidad,colores,tipo,encabezado,id){
    var ctx = document.getElementById(id);
    // var ctx1 = document.getElementById('graficobarhr');

    var myChart = new Chart(ctx,{
        type: tipo,///aca es el tipo de grafico
        data: {
            labels: titulo,///aca se pone los titulos de los campos de la base de datoos
            datasets: [{
                label: encabezado,///aca se pone el encabezado
                data: cantidad,///aca se pone  la cantidad de valores quee tiene cada titulo
                backgroundColor:colores,
                borderColor:colores,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
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
        gaficoradar()
    }
    ///////////////trae la  busqueda por fecha/////////////////////////////////
    function traermes(){
        var mifecha = new Date();
        // var anio = mifecha.getFullYear();
        var anio = mifecha.getMonth();
        var cadena="";
        var numeromes=['fecha por mes','enero','frebrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
        for(var i=0+1;i<anio+5;i++){
            cadena+="<option  value="+i+">"+numeromes[i]+"</option>";
        }
        $("#fecha_inicio").html(cadena);
        

        $("#fecha_fin").html(cadena);
        
    }
    function traeranio(){
        var mifecha = new Date();
        var anio = mifecha.getFullYear();
        var cadena="";
        for(var i=2015;i<anio+1;i++){
            cadena+="<option  value="+i+">"+i+"</option>";
        }
        $("#anio_inicio").html(cadena);
        

        $("#anio_fin").html(cadena);
        
    }

    // $('.date').datepicker({
    //     multidate: true,
    //       format: 'dd-mm-yyyy'
    //   });
      

    function cargardatosgaficodoughnut(){
        var fechainicio =$("#fecha_inicio").val();
        var fechafin =$("#fecha_fin").val();
        var anio_inicio =$("#anio_inicio").val();
        var anio_fin =$("#anio_fin").val();
        //   alert("entro1");
        $.ajax({
            url:'php/controlador_grafico_parametro.php',
            type: 'post',
            data:{
                inicio:fechainicio,
                fin:fechafin,
                anioinicio:anio_inicio,
                aniofin:anio_fin
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
                creargrafico(titulo,cantidad,colores,'doughnut','GRAFICO doughnut DE PRODUCTOS','gaficobardoughnut_parametros');
            } 
        })
    }
    

    function  gaficobarpolarArea(){
        var fechainicio =$("#fecha_inicio").val();
        var fechafin =$("#fecha_fin").val();
        var anio_inicio =$("#anio_inicio").val();
        var anio_fin =$("#anio_fin").val();
        //   alert("entro1");
        $.ajax({
            url:'php/controlador_grafico_parametro.php',
            type: 'post',
            data:{
                inicio:fechainicio,
                fin:fechafin,
                anioinicio:anio_inicio,
                aniofin:anio_fin
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
                creargrafico(titulo,cantidad,colores,'polarArea','GRAFICO POLARAREA DE PRODUCTOS','gaficobarpolarArea_parametros');
            } 
        })
    }

    function  gaficoradar(){
        var fechainicio =$("#fecha_inicio").val();
        var fechafin =$("#fecha_fin").val();
        var anio_inicio =$("#anio_inicio").val();
        var anio_fin =$("#anio_fin").val();
        //   alert("entro1");
        $.ajax({
            url:'php/controlador_grafico_parametro.php',
            type: 'post',
            data:{
                inicio:fechainicio,
                fin:fechafin,
                anioinicio:anio_inicio,
                aniofin:anio_fin
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