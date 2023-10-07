function informeacciones()
{
        // alert("entro")
        var table=$('#tabla2').DataTable();
        var fecha1=$('#fecha1etapa').val();                   
        var fecha2=$('#fecha2etapa').val();                   
        var etapas=$('#etapas').val();                   
        var rotulo=fecha1+" - "+fecha2+"  | "+etapas;
        var name = [];
        var marks = [];
        var color = ['#ffe4e1','#d8f8e1','#fcb7af', '#b0f2c2', '#b0c2f2'];
        var bordercolor = ['#ff6961', '#77dd77','#fdfd96', '#84b6f4', '#fdcae1'];
           var NombreProceso = "REPORTEETAPASACCIONES";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "etapas":etapas,
           "fecha1":fecha1,
           "fecha2":fecha2,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: 'php/proceso.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                                var registros ="";     
                                json = JSON.parse(response);
                                var totalvalores=0;
                                var promedio=0;
                                for (var i in json) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].CANTIDAD);
                                        }
                                for (var i in json) {
                                                if(json[i].nombre==null )
                                                {
                                                name.push("Sin Clasificar");
                                                json[i].nombre="Sin Clasificar";
                                                

                                                }
                                                else{
                                                name.push(json[i].nombre);
                                                }
                                marks.push(json[i].CANTIDAD);
                            //  alert(json[i].CANTIDAD);
                                promedio=Math.round((parseFloat(json[i].CANTIDAD)/totalvalores)*1000)/10;
                                    var registros =registros+'<tr id=' + json[i].nombre + '><td >' + json[i].nombre + '<td>'+json[i].CANTIDAD+'</td><td>'+promedio+'(%)</td></tr>';
                                   
                                }
                            //  alert("Guardo "+response);
                                      
                                     table.destroy();
                                     $('#tabla2 tbody').html(registros);
                                     $('#tabla2 ').DataTable( {
                                            pageLength : 3,
                                             dom: 'Bfrtip',
                                             buttons: [
                                                {
                                                extend: 'copy', 
                                                text:'<i class="fa fa-clone fa-2x"></i>',
                                                title: 'REPORTE ACCIONES PRODCUTOS     FECHA :',
                                                filename: 'REPORTE PRODCUTOS',
                                                exportOptions: {
                                                   columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                               },
                                               className: 'btn1 btn btn-primary',
                                                
                                              }, 
                                              {
                                                     extend: 'excel', 
                                                     text:'<i class="fas fa-regular fa-file-excel fa-2x"></i>',
                                                     title: 'REPORTE ACCIONES PRODCUTOS     FECHA :',
                                                     filename: 'REPORTE PRODCUTOS',
                                                     exportOptions: {
                                                        columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                                    },
                                                    className: 'btn btn1 btn-success',
                                                     
                                                   },
                                                   {
                                                    extend: 'pdf',
                                                    text:'<i class="fas fa-solid fa-file-pdf fa-2x"></i>',
                                                    title: 'REPORTE ACCIONES PRODCUTOS     FECHA :',
                                                    filename: 'REPORTE PRODCUTOS',
                                                    exportOptions: {
                                                       columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                                   },
                                                   className: 'btn btn1 btn-danger',
                                                    
                                                  },  {
                                                     extend: 'print',
                                                     text:'<i class="fa fa-print fa-2x"></i>',
                                                     title: 'REPORTE ACCIONES PRODCUTOS     FECHA :',
                                                     filename: 'REPORTE PRODCUTOS',
                                                     exportOptions: {
                                                        columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                                    },
                                                    className: 'btn btn1 btn-secondary ',
                                                   },
                                                   {
                                                    extend: 'colvis',
                                                    text:'Filtrar',
                                                    className: 'btn btn1 btn-secondary ',
                                                   
                                                  } 
                                          ]
                                         } );   
                                                     // //*** grafica */
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'ACCIONES ESTADOS',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                                    
                                
                                                    var graphTarget = $("#graphCanvasacciones");
                                                    // var graphTargetbar = $("#graphCanvasaccionesbar");


                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'doughnut',
                                                        data: chartdata
                                                    });
                                                    // var barGraphbar = new Chart(graphTargetbar, {
                                                    //     type: 'bar',
                                                    //     data: chartdata
                                                    // });     
                                                     //         //***fin grafica */
                             
                             }
                 });
}

function informeacciones_cargarauto(){
        var name = [];
        var marks = [];
        var sum=[];
        var color = ['#ffe4e1','#d8f8e1','#fcb7af', '#b0f2c2', '#b0c2f2'];
        var bordercolor = ['#ff6961', '#77dd77','#fdfd96', '#84b6f4', '#fdcae1'];
           var NombreProceso = "REPORTEETAPASACCIONES_auto";
           var parametros = {  
           "NombreProceso":NombreProceso
           };
        // alert("aqer"+estado);
        $.ajax({
            data: parametros,
            url: 'php/proceso.php',
            type: 'post',
            beforeSend: function () {
            },
            success: function (response) {
                // alert(response)
                // var registros ="";     
                json = JSON.parse(response);
                var totalvalores=0;
                var promedio=0;
                for (var i in json) {
                    otalvalores=parseFloat(totalvalores)+parseFloat(json[i].cantidad);
                }
                for (var i in json) {
                    if(json[i].nombre==null)
                    {
                    name.push("Sin Clasificar");
                    json[i].nombre="Sin Clasificar";
                        }
                    else{
                    name.push(json[i].nombre);
                    }
                     marks.push(json[i].cantidad);
                //     promedio=Math.round((parseFloat(json[i].cantidad)/totalvalores)*1000)/10;
                //     var registros =registros+'<tr id=' + json[i].nombre + '><td >' + json[i].nombre + '<td>'+jsoncantidad+'</td><td>'+promedio+'(%)</td></tr>';
                //  }
                // grafica //
                 var chartdata1 = {
                    labels: name,
                    datasets: [
                        {
                             label: 'ACCIONES ESTADOS',
                            backgroundColor: color,
                            borderColor: color,
                             borderWidth: 2,
                            hoverBackgroundColor: color,
                            hoverBorderColor: bordercolor,
                            data: marks
                        }
                    ]
                    };          
                var graphTarget1 = $("#graphCanvasacciones_auto");
                var graphTargetbar1 = $("#graphCanvasaccionesbar_auto");
                var barGraph1 = new Chart(graphTarget1, {
                    type: 'doughnut',                   
                     data: chartdata1
                });
                 var barGraphbar1 = new Chart(graphTargetbar1, {
                    type: 'pie',
                    data: chartdata1
                });     
            //         //***fin grafica */
            }
        }
    });
                
}

function traerdatos(){
     // alert("entro")
    var table=$('#tabla_productos').DataTable();
       
     var name = [];
     var marks = [];
    //  var rotulo="";
        var NombreProceso = "CARGARDATOS";
        var parametros = {  
        "NombreProceso":NombreProceso,
        
        };
     // alert("aqer"+estado);
                  $.ajax({
                          data: parametros,
                          url: 'php/proceso.php',
                          type: 'post',
                          beforeSend: function () {
                             // alert("si ");
                          },
                          success: function (response) {
                           
                             var registros ="";    
                             json = JSON.parse(response);
                             var totalvalores=0;
                             var promedio=0;
                                for (var i in json) {
                                  totalvalores=parseFloat(totalvalores)+parseFloat(json[i].vanta_cantidad);
                                } 
                             json = JSON.parse(response);
                            var registros="<thead><tr><th scope='col'>#</th> <th scope='col'>Nombre Producto</th> <th scope='col'>Cantidad</th><th scope='col'>Stock</th><th scope='col'>Venta cantidad</th><th scope='col'>Porcentaje de ventas</th> <th scope='col'>Venta Fecha</th><th scope='col'>AC</th></tr></thead><tbody>";
                             for (var i in json) {
                                             if(json[i].id==null ||json[i].nombre==null ||json[i].cantidad==null ||json[i].stok==null||json[i].vanta_cantidad==null||json[i].venta_fecharegistro==null)
                                             {
                                             name.push("Sin Clasificar");
                                             json[i].id="Sin Clasificar";
                                             json[i].nombre="Sin Clasificar";
                                             json[i].cantidad="Sin Clasificar";
                                             json[i].stok="Sin Clasificar";
                                             json[i].vanta_cantidad="Sin Clasificar";
                                             json[i].venta_fecharegistro="Sin Clasificar";
                                            
                                             }
                                             else{
                                             name.push(json[i].id,json[i].nombre,json[i].cantidad,json[i].stok,json[i].vanta_cantidad,json[i].venta_fecharegistro);
                                             }
                             marks.push(json[i].id,json[i].nombre,json[i].cantidad,json[i].stok,json[i].vanta_cantidad,json[i].venta_fecharegistro);

                         //  alert(json[i].CANTIDAD);
                             var ac_botom=[json[i].id+"||"+json[i].nombre +"||"+json[i].cantidad+"||"+json[i].stok+"||"+json[i].vanta_cantidad+"||"+json[i].venta_fecharegistro];

                             promedio=Math.round((parseFloat(json[i].vanta_cantidad)/totalvalores)*1000)/10;
                                registros +='<tr><td>'+json[i].id+'</td><td>' + json[i].nombre + '</td><td>'+json[i].cantidad+'</td><td>'+json[i].stok+'</td><td>'+json[i].vanta_cantidad+'</td><td>'+promedio+'(%)</td><td>'+json[i].venta_fecharegistro+'</td><td><button style="font-size:10px;" type="button"  class="editar btn btn-primary" onclick="editar_productos(\''+ac_botom+'\')"><i class="fa fa-edit"></i></button>&nbsp;<button style="font-size:10px;" type="button" class="eliminar btn btn-danger" onclick=" modaleliminar(\''+ac_botom+'\')"><i class="fa fa-times"></i></button></button>&nbsp;<button style="font-size:10px;" type="button" class="eliminar btn btn-success" onclick=" modalhabilitar(\''+ac_botom+'\')"><i class="fa fa-check"></i></button></td></tr>';
                                
                             }
                             registros+='</tbody><tfoot><tr><th class="col bg-success text-light">Totales :</th><td class=" col bg-success text-light"></td><td class=" col bg-success text-light" ></td><td class="col bg-success text-light"></td><td class=" col bg-success text-light">'+totalvalores+'</td><td class=" col bg-success text-light"></td><td class=" col bg-success text-light"></td><td class=" col bg-success text-light"></td></tr></tfoot>';
                           
                        //   console.log("fecha :  "+fecha_a);
                                var fecha_datos=new Date();
                                var fecha=fecha_datos.getFullYear()+"-"+fecha_datos.getMonth()+"-"+fecha_datos.getDay();
                                  table.destroy();
                                  $('#tabla_productos').html(registros);
                                //   console.log("fecha2:  "+fecha_a);
                                  $('#tabla_productos').DataTable( {
                                          dom: 'Bfrtip',
                                          buttons: [
                                                {
                                                extend: 'copy', 
                                                text:'<i class="fa fa-clone fa-2x"></i>',
                                                title: 'REPORTE ACCIONES PRODCUTOS     FECHA :'+fecha,
                                                filename: 'REPORTE PRODCUTOS',
                                                exportOptions: {
                                                   columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                               },
                                               className: 'btn1 btn btn-primary',
                                                
                                              }, 
                                              {
                                                     extend: 'excel', 
                                                     text:'<i class="fas fa-regular fa-file-excel fa-2x"></i>',
                                                     title: 'REPORTE ACCIONES PRODCUTOS     FECHA :'+fecha,
                                                     filename: 'REPORTE PRODCUTOS',
                                                     exportOptions: {
                                                        columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                                    },
                                                    className: 'btn btn1 btn-success',
                                                     
                                                   },
                                                   {
                                                    extend: 'pdf',
                                                    text:'<i class="fas fa-solid fa-file-pdf fa-2x"></i>',
                                                    title: 'REPORTE ACCIONES PRODCUTOS     FECHA :'+fecha,
                                                    filename: 'REPORTE PRODCUTOS',
                                                    exportOptions: {
                                                       columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                                   },
                                                   className: 'btn btn1 btn-danger',
                                                    
                                                  },  {
                                                     extend: 'print',
                                                     text:'<i class="fa fa-print fa-2x"></i>',
                                                     title: 'REPORTE ACCIONES PRODCUTOS     FECHA :'+fecha,
                                                     filename: 'REPORTE PRODCUTOS',
                                                     exportOptions: {
                                                        columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                                    },
                                                    className: 'btn btn1 btn-secondary ',
                                                   },
                                                   {
                                                    extend: 'colvis',
                                                    text:'Filtrar',
                                                    className: 'btn btn1 btn-secondary ',
                                                   
                                                  }
                                                   
                                          ]
                                      } )  
                          }
              });    
}

function traerdatoshabilitado(){
    // alert("entro")
      var table=$('#tabla_productos_habilitados').DataTable();
   
    var name = [];
    var marks = [];
   //  var rotulo="";
       var NombreProceso = "CARGARDATOSHABILITADOS";
       var parametros = {  
       "NombreProceso":NombreProceso,
       
       };
    // alert("aqer"+estado);
                 $.ajax({
                         data: parametros,
                         url: 'php/proceso.php',
                         type: 'post',
                         beforeSend: function () {
                            // alert("si ");
                         },
                         success: function (response) {
                            var registros ="";    
                            json = JSON.parse(response);
                            var totalvalores=0;
                            var promedio=0;
                            var sumatoria=0;
                            var totalsum=0;
                               for (var i in json) {
                                 totalvalores=parseFloat(totalvalores)+parseFloat(json[i].vanta_cantidad);
                               } 
                            json = JSON.parse(response);
                           var registros="<thead><tr><th scope='col'>#</th> <th scope='col'>Nombre Producto</th> <th scope='col'>Cantidad</th><th scope='col'>Stock</th><th scope='col'>Venta cantidad</th><th scope='col'>Porcentaje de ventas</th> <th scope='col'>Venta Fecha</th><th scope='col'>AC</th></tr></thead><tbody>";
                            for (var i in json) {
                                            if(json[i].id==null ||json[i].nombre==null ||json[i].cantidad==null ||json[i].stok==null||json[i].vanta_cantidad==null||json[i].venta_fecharegistro==null)
                                            {
                                            name.push("Sin Clasificar");
                                            json[i].id="Sin Clasificar";
                                            json[i].nombre="Sin Clasificar";
                                            json[i].cantidad="Sin Clasificar";
                                            json[i].stok="Sin Clasificar";
                                            json[i].vanta_cantidad="Sin Clasificar";
                                            json[i].venta_fecharegistro="Sin Clasificar";
                                            }
                                            else{
                                            name.push(json[i].id,json[i].nombre,json[i].cantidad,json[i].stok,json[i].vanta_cantidad,json[i].venta_fecharegistro);
                                            }
                            marks.push(json[i].id,json[i].nombre,json[i].cantidad,json[i].stok,json[i].vanta_cantidad,json[i].venta_fecharegistro);

                        //  alert(json[i].CANTIDAD);
                            var ac_botom=json[i].id+"||"+json[i].nombre +"||"+json[i].cantidad+"||"+json[i].stok+"||"+json[i].vanta_cantidad+"||"+json[i].venta_fecharegistro;
                            promedio=Math.round((parseFloat(json[i].vanta_cantidad)/totalvalores)*1000)/10;
                               registros +='<tr><td>'+json[i].id+'</td><td>' + json[i].nombre + '</td><td>'+json[i].cantidad+'</td><td>'+json[i].stok+'</td><td>'+json[i].vanta_cantidad+'</td><td>'+promedio+'(%)</td><td>'+json[i].venta_fecharegistro+'</td><td><button style="font-size:10px;" type="button"  class="editar btn btn-primary" onclick="editar_productos(\''+ac_botom+'\')"><i class="fa fa-edit"></i></button>&nbsp;<button style="font-size:10px;" type="button" class="eliminar btn btn-danger" onclick=" modaleliminar(\''+ac_botom+'\')"><i class="fa fa-times"></i></button></td></tr>';
                               var fecha_ac=json[i].fecha_p;

                            }
                            registros+="</tbody><tfoot><tr><th class='col bg-success'>Totales :</th><td class=' col bg-success'></td><td class=' col bg-success' ></td><td class='col bg-success'></td><td class=' col text-ligth bg-success'>"+totalvalores+"</td><td class=' col bg-success'></td><td class=' col bg-success'></td><td class=' col bg-success'></td></tr></tfoot>";
                            fecha_a=fecha_ac;
                       //   console.log("Guardo "+registros);

                                 table.destroy();
                                 $('#tabla_productos_habilitados').html(registros);
                                 $('#tabla_productos_habilitados').DataTable( {
                                         dom: 'Bfrtip',
                                       //   buttons:{
                                       //         className:'btn btn-primary'
                                       //   },
                                       buttons: [
                                        {
                                        extend: 'copy', 
                                        text:'<i class="fa fa-clone fa-2x"></i>',
                                        title: 'REPORTE ACCIONES PRODCUTOS     FECHA :'+fecha_a,
                                        filename: 'REPORTE PRODCUTOS',
                                        exportOptions: {
                                           columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                       },
                                       className: 'btn1 btn btn-primary',
                                        
                                      }, 
                                      {
                                             extend: 'excel', 
                                             text:'<i class="fas fa-regular fa-file-excel fa-2x"></i>',
                                             title: 'REPORTE ACCIONES PRODCUTOS     FECHA :'+fecha_a,
                                             filename: 'REPORTE PRODCUTOS',
                                             exportOptions: {
                                                columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                            },
                                            className: 'btn btn1 btn-success',
                                             
                                           },
                                           {
                                            extend: 'pdf',
                                            text:'<i class="fas fa-solid fa-file-pdf fa-2x"></i>',
                                            title: 'REPORTE ACCIONES PRODCUTOS     FECHA :'+fecha_a,
                                            filename: 'REPORTE PRODCUTOS',
                                            exportOptions: {
                                               columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                           },
                                           className: 'btn btn1 btn-danger',
                                            
                                          },  {
                                             extend: 'print',
                                             text:'<i class="fa fa-print fa-2x"></i>',
                                             title: 'REPORTE ACCIONES PRODCUTOS     FECHA :'+fecha_a,
                                             filename: 'REPORTE PRODCUTOS',
                                             exportOptions: {
                                                columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                            },
                                            className: 'btn btn1 btn-secondary ',
                                           },
                                           {
                                            extend: 'colvis',
                                            text:'Filtrar',
                                            className: 'btn btn1 btn-secondary ',
                                           
                                          }
                                           
                                  ]
                                     } );   
                         }
             });    
}

function traerdatosdeshabilitado(){
    // alert("entro")
      var table=$('#tabla_productos_deshabilitados').DataTable();
   
    var name = [];
    var marks = [];
   //  var rotulo="";
       var NombreProceso = "CARGARDATOSDESHABILITADOS";
       var parametros = {  
       "NombreProceso":NombreProceso,
       
       };
    // alert("aqer"+estado);
                 $.ajax({
                         data: parametros,
                         url: 'php/proceso.php',
                         type: 'post',
                         beforeSend: function () {
                            // alert("si ");
                         },
                         success: function (response) {
                            var registros ="";    
                            json = JSON.parse(response);
                            var totalvalores=0;
                            var promedio=0;
                            var sumatoria=0;
                            var totalsum=0;
                               for (var i in json) {
                                 totalvalores=parseFloat(totalvalores)+parseFloat(json[i].vanta_cantidad);
                               } 
                            json = JSON.parse(response);
                           var registros="<thead><tr><th scope='col'>#</th> <th scope='col'>Nombre Producto</th> <th scope='col'>Cantidad</th><th scope='col'>Stock</th><th scope='col'>Venta cantidad</th><th scope='col'>Porcentaje de ventas</th> <th scope='col'>Venta Fecha</th><th scope='col'>AC</th></tr></thead><tbody>";
                            for (var i in json) {
                                            if(json[i].id==null ||json[i].nombre==null ||json[i].cantidad==null ||json[i].stok==null||json[i].vanta_cantidad==null||json[i].venta_fecharegistro==null)
                                            {
                                            name.push("Sin Clasificar");
                                            json[i].id="Sin Clasificar";
                                            json[i].nombre="Sin Clasificar";
                                            json[i].cantidad="Sin Clasificar";
                                            json[i].stok="Sin Clasificar";
                                            json[i].vanta_cantidad="Sin Clasificar";
                                            json[i].venta_fecharegistro="Sin Clasificar";
                                            }
                                            else{
                                            name.push(json[i].id,json[i].nombre,json[i].cantidad,json[i].stok,json[i].vanta_cantidad,json[i].venta_fecharegistro);
                                            }
                            marks.push(json[i].id,json[i].nombre,json[i].cantidad,json[i].stok,json[i].vanta_cantidad,json[i].venta_fecharegistro);

                        //  alert(json[i].CANTIDAD);
                            var ac_botom=json[i].id+"||"+json[i].nombre +"||"+json[i].cantidad+"||"+json[i].stok+"||"+json[i].vanta_cantidad+"||"+json[i].venta_fecharegistro;
                            promedio=Math.round((parseFloat(json[i].vanta_cantidad)/totalvalores)*1000)/10;
                               registros +='<tr><td>'+json[i].id+'</td><td>' + json[i].nombre + '</td><td>'+json[i].cantidad+'</td><td>'+json[i].stok+'</td><td>'+json[i].vanta_cantidad+'</td><td>'+promedio+'(%)</td><td>'+json[i].venta_fecharegistro+'</td><td><button style="font-size:10px;" type="button"  class="editar btn btn-primary" onclick="editar_productos(\''+ac_botom+'\')"><i class="fa fa-edit"></i></button>&nbsp;</button>&nbsp;<button style="font-size:10px;" type="button" class="eliminar btn btn-success" onclick=" modalhabilitar(\''+ac_botom+'\')"><i class="fa fa-check"></i></button></td></tr>';
                               var fecha_ac=json[i].fecha_p;

                            };
                            registros+="</tbody><tfoot><tr><th class='col bg-success'>Totales :</th><td class=' col bg-success'></td><td class=' col bg-success' ></td><td class='col bg-success'></td><td class=' col text-ligth bg-success'>"+totalvalores+"</td><td class=' col bg-success'></td><td class=' col bg-success'></td><td class=' col bg-success'></td></tr></tfoot>";
                            fecha_a=fecha_ac;
                            
                       //   console.log("Guardo "+registros);

                                 table.destroy();
                                 $('#tabla_productos_deshabilitados').html(registros);
                                 $('#tabla_productos_deshabilitados').DataTable( {
                                         dom: 'Bfrtip',
                                       //   buttons:{
                                       //         className:'btn btn-primary'
                                       //   },
                                       buttons: [
                                        {
                                        extend: 'copy', 
                                        text:'<i class="fa fa-clone fa-2x"></i>',
                                        title: 'REPORTE ACCIONES PRODCUTOS     FECHA :'+fecha_a,
                                        filename: 'REPORTE PRODCUTOS',
                                        exportOptions: {
                                           columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                       },
                                       className: 'btn1 btn btn-primary',
                                        
                                      }, 
                                      {
                                             extend: 'excel', 
                                             text:'<i class="fas fa-regular fa-file-excel fa-2x"></i>',
                                             title: 'REPORTE ACCIONES PRODCUTOS     FECHA :'+fecha_a,
                                             filename: 'REPORTE PRODCUTOS',
                                             exportOptions: {
                                                columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                            },
                                            className: 'btn btn1 btn-success',
                                             
                                           },
                                           {
                                            extend: 'pdf',
                                            text:'<i class="fas fa-solid fa-file-pdf fa-2x"></i>',
                                            title: 'REPORTE ACCIONES PRODCUTOS     FECHA :'+fecha_a,
                                            filename: 'REPORTE PRODCUTOS',
                                            exportOptions: {
                                               columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                           },
                                           className: 'btn btn1 btn-danger',
                                            
                                          }, 
                                           {
                                             extend: 'print',
                                             text:'<i class="fa fa-print fa-2x"></i>',
                                             title: 'REPORTE ACCIONES PRODCUTOS     FECHA :'+fecha_a,
                                             filename: 'REPORTE PRODCUTOS',
                                             exportOptions: {
                                                columns: [0,1,2,3,4,5,6] //exportar solo la primera y segunda columna
                                            },
                                            className: 'btn btn1 btn-secondary ',
                                           },
                                           {
                                            extend: 'colvis',
                                            text:'Filtrar',
                                            className: 'btn btn1 btn-secondary ',
                                           
                                          }
                                           
                                  ]
                                     } );
                         }
             });    
}

function editar_productos(parametros)
{
    alert(parametros)
    $('#tabla_productos').on('click','.editar',function(){
    var datos=parametros.split("||");
         $('#modal_editar').modal('show');
        $('#txt_id').val(datos[0]);
        $('#txt_nombre_producto_editar').val(datos[1]);
    	$('#txt_cantidad_producto_editar').val(datos[2]);
    	$('#txt_cantidad_stok_producto_editar').val(datos[3]);
        $('#txt_venta_cantidad_editar').val(datos[4]);
        $('#txt_fecha_procuto_editar').val(datos[5]);
    })
}


function actualizaproductos()
{
    var id=$('#txt_id').val();
    var nombre=$('#txt_nombre_producto_editar').val();
	var cantidad=$('#txt_cantidad_producto_editar').val();
	var stock=$('#txt_cantidad_stok_producto_editar').val();
    var v_cantidad=$('#txt_venta_cantidad_editar').val();
    var v_fecha=$('#txt_fecha_procuto_editar').val();
        NombreProceso = "ACTUALIZARPRODUCTOS";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id":id,
                "nombre":nombre,
                "cantidad":cantidad,
                "stock":stock,
                "v_cantidad":v_cantidad,
                "v_fecha":v_fecha
        };
                $.ajax({
                        data: parametros,
                        url: "php/proceso.php",
                        type: 'post'
                }).done(function(resp){
                    // alert(resp);
                    if(resp.trim()==1){
                        // TraerDatosUsuario();
                            $("#modal_editar").modal('hide');
                            Swal.fire("Mensaje De Confirmacion","Datos actualizados correctamente","success")            
                            .then ( ( value ) =>  {
                                table.ajax.reload();
                            }); 
                       
                    }else{
                        Swal.fire("Mensaje De Error","no se pudo completar la actualizacion","error");
                    }
                });
               
}


// ELIMINAR DATOS////////////////
function modaleliminar(id){
    // alert(id[0]);
        var datos=id.split("||");
        Swal.fire({
            title: 'Esta seguro de desactivar al usuario?',
            text: "Una vez hecho esto el usuario no tendra acceso al sistema",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
          }).then((result) => {
            if (result.value) {
                eliminar_productos(datos[0]);
            }
          })
}


function eliminar_productos(datos)
{
        // console.log(datos);
        var NombreProceso = "ELIMINARDATOS";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id":datos,
        };
                $.ajax({
                        data: parametros,
                        url: 'php/proceso.php',
                        type: 'POST',
                        beforeSend: function (){
                            // alert(datos)
                        }
                }).done(function(resp){
                    // alert(resp);
                    if(resp.trim()==1){
                        Swal.fire("Mensaje De Confirmacion","EL producto se elimino con exito","success")            
                            .then ( ( value ) =>  {
                                table.ajax.reload();
                            }); 
                    }else{
                        Swal.fire("Mensaje De Error","no se pudo completar la eliminarcion","error");
                    }
                })

       
               
}

// habilitar datos
function modalhabilitar(id){
    // alert(id[0]);
        var datos=id.split("||");
        Swal.fire({
            title: 'Esta seguro de activar al usuario?',
            text: "Una vez hecho esto el producto aparecera en el sistema",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
          }).then((result) => {
            if (result.value) {
                habilitarar_productos(datos[0]);
            }
          })
}

function habilitarar_productos(datos)
{
        // console.log(datos);
        var NombreProceso = "HABILITARDATOS";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id":datos,
        };
                $.ajax({
                        data: parametros,
                        url: 'php/proceso.php',
                        type: 'POST',
                        beforeSend: function (){
                            // alert(datos)
                        }
                }).done(function(resp){
                    // alert(resp);
                    if(resp.trim()==1){
                        Swal.fire("Mensaje De Confirmacion","EL producto se habilito con exito","success")            
                            .then ( ( value ) =>  {
                                table.ajax.reload();
                            }); 
                    }else{
                        Swal.fire("Mensaje De Error","no se pudo completar","error");
                    }
                })

       
               
}


// registrar productos


 function registroproductos(){

    var nombre_p=$('#txt_nombre_producto').val();
    var cantidad_p=$('#txt_cantidad_producto').val();
    var stock_p=$('#txt_cantidad_stok_producto').val();
    var v_cantidad_p=$('#txt_venta_cantidad').val();
    var v_fecha_p=$('#txt_fecha_procuto').val();
    if(nombre_p.length==0 || cantidad_p.length==0 || stock_p.length==0 || v_cantidad_p.length==0 || v_fecha_p.length==0){
        return Swal.fire("Mensaje De Advertencia","Llene los campos vacios","warning");
    }
    // alert(nombre_p+"||"+cantidad_p+"||"+stock_p+"||"+v_cantidad_p+"||"+v_fecha_p);
     NombreProceso = "REGISTRARDATOS";
    var parametros = {
        "NombreProceso":NombreProceso,
        "nombre_p":nombre_p,
        "cantidad_p":cantidad_p,
        "stock_p":stock_p,
        "v_cantidad_p":v_cantidad_p,
        "v_fecha_p":v_fecha_p,
        
    };
    console.log(parametros);
    $.ajax({
            data : parametros,
            url : "php/proceso.php",
            type : 'POST'
    }).done(function(resp){
        alert("envio :"+resp);
            if(resp.trim()==1){
                    $("#modal_registrar").modal('hide');
                    Swal.fire("Mensaje De Confirmacion","Datos ingresados correctamente","success")        
                    .then ( ( value ) =>{
                        table.ajax.reload();
                    }); 
            }else{
                Swal.fire("Mensaje De Error","no se pudo completar el registro","error");
            }

    });

 }