//funcion carga pantallas en div principal
function ajax(ruta,opcionp) {
//  alert("muestre"+ruta);
        if(ruta=="#")
        {
                ruta="../modulos/404.php"
        }
        // var parametros = "";
        var parametros = {  
                "Opcion":opcionp,
        };
        $.ajax({
                data: parametros,
                url: ruta,
                type: 'post',
                beforeSend: function () {
                        // alert("iiissssadafaf");
                        $("#right-panel").html("Procesando, espere por favor...");
                },
                success: function (response) {
                        // alert("aquiiiis");
                        carga_funciones(opcionp);
                        $("#right-panel").html(response);
                }
        });
}
//********** fin carga pantallas */
function carga_funciones(opcionp) {
        // alert("muestre");            
                        // ruta="../modulos/404.php"
                        ruta="../contenido/funciones_menu.php";
                        var parametros = {
                           "Opcion":opcionp,
                        };
                $.ajax({
                        data: parametros,
                        url: ruta,
                        type: 'post',
                        beforeSend: function () {
                                $("#menu_funciones").html("Procesando, espere por favor...");
                        },
                        success: function (response) {
                                $("#menu_funciones").html(response);
                        }
                });
        }

 //********** fin carga pantallas */
function carga_configbas() {
        //   alert("muestre");            
                        // ruta="../modulos/404.php"
                        ruta="../modulos/admin/funciones.php";
                        var NombreProceso="CARGACONFIGBAS";
                        var parametros = {
                         "NombreProceso": NombreProceso,
                        };
                $.ajax({
                        data: parametros,
                        url: ruta,
                        type: 'post',
                        beforeSend: function () {
                                //$("#menu_funciones").html("Procesando, espere por favor...");
                        },
                        success: function (response) {
                                //  alert("ALe:"+response);
                                          var datos = JSON.parse(response);
                                        //   alert('N:'+datos[0].NombreDatosEmpresa);
                                          var tipodoc = datos[0].tipodoc;
                                          var nit = datos[0].NitDatosEmpresa;
                                          var nombre = datos[0].NombreDatosEmpresa;
                                          var sigla = datos[0].sigla;
                                          var telefono = datos[0].TelefonoDatosEmpresa;
                                          var correo = datos[0].CorreoDatosEmpresa;
                                          var direccion = datos[0].DireccionDatosEmpresa;
                                          var logo = datos[0].LogoDatosEmpresa;
                                          var web = datos[0].WebDatosEmpresa;
                                        //    alert('N:'+logo);
                                          $("#tipodoc").val(''+tipodoc);
                                          $("#documento").val(''+nit);
                                          $("#nombre").val(''+nombre);
                                          $("#sigla").val(''+sigla);
                                          $("#telefono").val(''+telefono);
                                          $("#correo").val(''+correo);
                                          $("#direccion").val(''+direccion);
                                          $("#web").val(''+web);
                                        //   $("#logo").val('../modulos/admin/logos/"'+logo);
                                          $("#imagenlogo").attr("src","../modulos/admin/logos/"+logo);
                                          
                        }
                });
        }  
//****** vencimuiento automatico de acciones, oportunidades y campañas */     
function cerrarautomaticoeventos ()
{
//     alert('jaja');    
 NombreProceso = "CERRAREVENTOS";
 var parametros = {  
        "NombreProceso":NombreProceso,
 }
 $.ajax({
        data: parametros,
        url: '../modulos/clientes/funciones.php',
        type: 'post',
        beforeSend: function () {
        },
        success: function (response) {
                //  alert("guardodddd"+response);
                // swal("¡Muy bien!", "Se ha Actualizado la informacion exitosamente", "success");
                // carga_configbas();
        }
});
}
//*** funcion guardar configuracion basica */
function guardaconfibas()
{
// alert("entro config");
        var tipodoc = $('#tipodoc').val();
        var documento = $('#documento').val();
        var nombre = $('#nombre').val();
        var sigla = $('#sigla').val();
        var correo = $('#correo').val();
        var telefono = $('#telefono').val();
        var direccion = $('#direccion').val();
        var web = $('#web').val();
        // var logo = $('#logo').val();
        NombreProceso = "GUARDARCONFIGBAS";
       
// **** carga fotos   
        var archivos = document.getElementById("logo");
        var filec = archivos.files[0];
        var parametros = new FormData();       
        parametros.append('archivocarga', filec);
        parametros.append('NombreProceso', NombreProceso);       
        parametros.append('tipodoc', tipodoc);       
        parametros.append('documento', documento); 
        parametros.append('nombre', nombre); 
        parametros.append('correo', correo); 
        parametros.append('telefono', telefono); 
        parametros.append('direccion', direccion); 
        parametros.append('web', web); 
        parametros.append('sigla', sigla); 
// ***********

//         var parametros = {  
//         "NombreProceso":NombreProceso,
//         "documento":documento,
//         "nombre":nombre,
//         "correo":correo,
//         "telefono":telefono,
//         "direccion":direccion,
//         "web":web,
//         "logo":logo,
//         "sigla":sigla,
//         "tipodoc":tipodoc,
// };
        $.ajax({
                data: parametros,
                url: '../modulos/admin/funciones.php',
                type: 'post',
                contentType: false,
                processData: false,
                beforeSend: function () {
                },
                success: function (response) {
                        // alert("guardodddd"+response);
                        swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                        carga_configbas();
                }
        });
}

function cambiacontra()
        {
               var pass1 = $('#contrasena').val();
               var pass2 = $('#contrasena2').val();
               var pass3 = $('#antcontrasena').val();
       if(pass1==pass2)
       {
               NombreProceso = "CAMBIARCONTRASENA";
               var parametros = {  
               "NombreProceso":NombreProceso,
               "pass1":pass1,
               "pass2":pass2,
               "pass3":pass3,
               };
               $.ajax({
                       data: parametros,
                       url: '../modulos/admin/funciones.php',
                       type: 'post',
                       beforeSend: function () {
                       },
                       success: function (response) {
                        //  alert("Guardo "+response);
                             if(response.trim()!="ERROR")
                             {
                               swal("¡Muy bien!", "Se ha guardado cambiado exitosamente las contraseña", "success");
                        //        guardainstrumentos_det(response);
                              LimpiarCampos();
                             }
                             if(response.trim()=="ERROR")
                             {
                               swal("¡Error!", "No se ha podido actualizar la contraseña exitosamente", "error");
                             }
                       }
               });
        }
        else{
                swal("¡Error!", "No coinciden las contraseñas", "error");
        }
}


function guardausuarios()
{
//  alert("entro cguarda");
        var tipodoc = $('#tipodoc').val();
        var documento = $('#documento').val();
        var nombre = $('#nombre').val();
        var apellidos = $('#apellidos').val();
        var correo = $('#correo').val();
        var telefono = $('#telefono').val();
        var rol = $('#rol').val();
        var contrasena = $('#contrasena').val();
        NombreProceso = "GUARDARUSUARIOS";

        var parametros = {  
        "NombreProceso":NombreProceso,
        "documento":documento,
        "nombre":nombre,
        "correo":correo,
        "telefono":telefono,
        "apellidos":apellidos,
        "rol":rol,
        "contrasena":contrasena,
        "tipodoc":tipodoc,
        };
        $.ajax({
                data: parametros,
                url: '../modulos/admin/funciones.php',
                type: 'post',
                beforeSend: function () {
                },
                success: function (response) {
                      // alert("Guardo"+response);
                        swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                }
        });
}


function guardaclasiclientes()
{
  //alert("entro cguarda");
        var nombre = $('#nombre').val();
        var nivel = $('#nivel').val();
        var descripcion = $('#descripcion').val();
        var color = $('#color').val();
        NombreProceso = "GUARDARCLASICLIENTES";
        var parametros = {  
        "NombreProceso":NombreProceso,
        "nombre":nombre,
        "nivel":nivel,
        "color":color,
        "descripcion":descripcion,
        };
        $.ajax({
                data: parametros,
                url: '../modulos/clientes/funciones.php',
                type: 'post',
                beforeSend: function () {
                },
                success: function (response) {
                      //  alert("Guardo "+response);
                        swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                }
        });
}

function guardaaccionesclientes()
{
//   alert("entro cguarda");
        var asunto = $('#asunto').val();
        var accion = $('#accion').val();
        var naccion = $('#accion option:selected').text();
        var fechainicio = $('#fecha1').val();
        var fechafin = $('#fecha2').val();
        var cliente = $('#IdTercero').val();
        var contacto = $('#contacto').val();
        var telcontacto = $('#telcontacto').val();
        var obs = $('#obsaccion').val();
        var estado = $('#estado').val();
        var email = $('#correo').val();
        var oportunidad = $('#oportunidad').val();

        NombreProceso = "GUARDARACCIONCLIENTES";
        var parametros = {  
        "NombreProceso":NombreProceso,
        "asunto":asunto,
        "accion":accion,
        "naccion":naccion,
        "fechainicio":fechainicio,
        "fechafin":fechafin,
        "cliente":cliente,
        "contacto":contacto,
        "telcontacto":telcontacto,
        "obs":obs,
        "email":email,
        "estado":estado,
        "oportunidad":oportunidad,
        };
        $.ajax({
                data: parametros,
                url: '../modulos/servclientes/funcionescrm.php',
                type: 'post',
                beforeSend: function () {
                },
                success: function (response) {
                        //  alert("Guardo "+response);
                      if(response.trim()!="NO")
                      {
                        swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                        LimpiarCampos();
                      }
                      else
                      {
                        swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                      }
                }
        });
}

function guardaclientes()
{
//  alert("entro cguarda");
        var tipopersona = $('#ProvTipoPersona').val();
        var tipocontribuyente = $('#ProveedoresRegimen').val();
        var tipodoc = $('#ProvTipo_doc').val();
        var documento = $('#documento').val();
        var codverificacion = $('#codverificacion').val();
        var nombre1 = $('#ProveedoresNombre').val();
        var nombre2 = $('#ProveedoresNombre2').val();
        var apellido1 = $('#ProveedoresApellido').val();
        var apellido2 = $('#ProveedoresApellido2').val();
        var razon = $('#razon').val();
        var correo = $('#correo').val();
        var direccion = $('#direccion').val();
        var telefono = $('#telefono').val();
        var clasificacion = $('#clasificacion').val();
        var celular = $('#telefono').val();
        var web = $('#web').val();
        var contacto1 = $('#contacto').val();
        var telcontacto1 = $('#Telcontacto').val();
        var cargocontacto1 = $('#cargocontacto').val();
        var obscontacto1 = $('#obscontacto').val();
        var contacto2 = $('#contacto2').val();
        var telcontacto2 = $('#Telcontacto2').val();
        var cargocontacto2 = $('#cargocontacto2').val();
        var obscontacto2 = $('#obscontacto2').val();
        var genero = $('#genero').val();
        var profesion = $('#profesion').val();
        var fechanac = $('#fechanac').val();
        var obs = $('#obs').val();
        var niveledu = $('#niveledu').val();
        var cargo = $('#cargo').val();
        var reprelegal = $('#representante').val();
        var fechacumple = $('#fechacumple').val();
        var facebook = $('#facebook').val();
        var twitter = $('#twitter').val();
        var instagram = $('#instagram').val();
        var otro = $('#otro').val();

        NombreProceso = "GUARDARCLIENTES";
     if(documento!="")
     {
        var parametros = {  
        "NombreProceso":NombreProceso,
        "tipodoc":tipodoc,
        "tipopersona":tipopersona,
        "tipocontribuyente":tipocontribuyente,
        "documento":documento,
        "codver":codverificacion,
        "nombre1":nombre1,
        "nombre2":nombre2,
        "apellido1":apellido1,
        "apellido2":apellido2,
        "razon":razon,
        "correo":correo,
        "telefono":telefono,
        "web":web,
        "clasificacion":clasificacion,
        "celular":celular,
        "direccion":direccion,
        "contacto1":contacto1,
        "telcontacto1":telcontacto1,
        "cargocontacto1":cargocontacto1,
        "obscontacto1":obscontacto1,
        "contacto2":contacto2,
        "telcontacto2":telcontacto2,
        "cargocontacto2":cargocontacto2,
        "obscontacto2":obscontacto2,
        "genero":genero,
        "profesion":profesion,
        "fechanac":fechanac,
        "obs":obs,
        "niveledu":niveledu,
        "cargo":cargo,
        "reprelegal":reprelegal,
        "fechacumple":fechacumple,
        "facebook":facebook,
        "twitter":twitter,
        "instagram":instagram,
        "otro":otro,

        };
        $.ajax({
                data: parametros,
                url: '../modulos/clientes/funciones.php',
                type: 'post',
                beforeSend: function () {
                },
                success: function (response) {
                        // alert("Guardo"+response);
                        // $('#sql').val(response);
                        if(response.trim()!="NO")
                        {
                        swal("¡Muy bien!", "Se ha registrado el Cliente exitosamente", "success");
                        guardaclientes_otros(response.trim());
                        // LimpiarCampos();
                        }
                        else
                        swal("¡Error!", "NO Se ha registrado el Cliente", "error");
                }
        });
      }
      else
      {
        swal("¡Error!", "Falta informacion, no se ha registrado el Cliente", "error");
      }  
}


function LimpiarCampos() {

        $('input').each(function () {
                $(this).val('');
        });
        $('select').each(function () {
                $(this).val("");
        });
        $('textarea').each(function () {
                $(this).val("");
                // alert("ggggg");
        });

}
//**** carga opciones perfiles */
function carga_opciones() {
        //alert("muestre"+ruta);
        NombreProceso = "BUSCAOPCIONES";
        var parametros = {  
                "NombreProceso":NombreProceso,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/admin/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                $('#opciones tbody').html(response);
                        }
                });
        }        
        function carga_perfil() {
                var idperfil=$('#idperfil').val();
                // alert("muestre"+idperfil);
                NombreProceso = "BUSCAINFOPERFIL";
                var parametros = {  
                        "NombreProceso":NombreProceso,
                        "idperfil":idperfil,
                };
                        $.ajax({
                                data: parametros,
                                url: '../modulos/admin/funciones.php',
                                type: 'post',
                                beforeSend: function () {
                                },
                                success: function (response) {
                                        var datos = JSON.parse(response);
                                        var nombre1 = datos[0].nombrerol;
                                        var descripcion = datos[0].descripcion;
                                        $('#perfil').val(nombre1);
                                        $('#descripcion').val(descripcion);
                                }
                        });
                }
        function carga_opciones_perfil() {
                var idperfil=$('#idperfil').val();
                // alert("muestre"+idperfil);

                NombreProceso = "BUSCAOPCIONESPERFIL";
                var parametros = {  
                        "NombreProceso":NombreProceso,
                        "idperfil":idperfil,
                };
                        $.ajax({
                                data: parametros,
                                url: '../modulos/admin/funciones.php',
                                type: 'post',
                                beforeSend: function () {
                                        // alert("mudsdsd");
                                },
                                success: function (response) {
                                // alert("muestre"+response);
                                        $('#opciones tbody').html(response);
                                }
                        });
                }  
//**** fin  */
//**** carga opciones perfiles */
function buscaperfiles() {
       
        var textop=$('#perfil').val();
        // alert("muestre"+ruta);
        NombreProceso = "BUSCAPERFILES";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "perfil":textop,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/admin/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                $('#resultadoperfiles tbody').html(response);
                        }
                });
        }        
function guardaperfil() {
       
                var idperfil=$('#idperfil').val();
                var textop=$('#perfil').val();
                var descripcion=$('#descripcion').val();
                if(idperfil=="N")
                {         
                // alert("muestre"+ruta);
                NombreProceso = "GUARDAPERFIL";
                var parametros = {  
                        "NombreProceso":NombreProceso,
                        "perfil":textop,
                        "descripcion":descripcion,
                };
                        $.ajax({
                                data: parametros,
                                url: '../modulos/admin/funciones.php',
                                type: 'post',
                                beforeSend: function () {
                                },
                                success: function (response) {
                                        if(response>0)
                                        {
                                          swal("¡Bien!", "Se ha registrado el perfil", "success");
                                          guardaperfil_det(response.trim());
                                        }
                                        else{
                                                swal("Error!", "No se ha registrado el perfil", "error");
                                        }
                                        // $('#resultadoperfiles tbody').html(response);
                                }
                        });
                }
                else
                {
                       
                        // alert("muestre"+ruta);
                        NombreProceso = "ACTUALIZAPERFIL";
                        var parametros = {  
                                "NombreProceso":NombreProceso,
                                "idperfil":idperfil,
                                "perfil":textop,
                                "descripcion":descripcion,
                        };
                                $.ajax({
                                        data: parametros,
                                        url: '../modulos/admin/funciones.php',
                                        type: 'post',
                                        beforeSend: function () {
                                        },
                                        success: function (response) {
                                                if(response.trim()=="SI")
                                                {
                                                  swal("¡Bien!", "Se ha actualizado el perfil", "success");
                                                  guardaperfil_det(idperfil);
                                                }
                                                else{
                                                        swal("Error!", "No se ha actualizado el perfil", "error");
                                                }
                                                // $('#resultadoperfiles tbody').html(response);
                                        }
                                });
                }
 }        

function guardaperfil_det(indice)
{
        // $('#opciones').DataTable();
        //   alert("muestre"+indice);

        var idrol=indice;
        var NombreProceso = "GUARDAPERFILDET";
        var idopcion = document.getElementsByName('selecciona[]');
        var crear = document.getElementsByName('crear[]');
        var buscar = document.getElementsByName('consulta[]');
        var modificar = document.getElementsByName('modifica[]');
        tam = idopcion.length;
        //  alert("SEL:"+tam);
    for (x = 0; x < tam; x++) {
            var vcrear=0;
            var vbuscar=0;
            var vmodificar=0;
        //      alert("IO:"+idopcion.item(x).checked);  
     if (idopcion.item(x).checked == true) {
             var opcion=idopcion[x].value;
        //      alert("op:"+opcion);
        if (crear.item(x).checked == true) {
        vcrear=1;
        // alert("crea:"+vcrear);

        }   
        if (buscar.item(x).checked == true) {
        // alert("busca:"+vbuscar);
        vbuscar=1;
          } 
        if (modificar.item(x).checked == true) {
        vmodificar=1;
        // alert("modifica:"+vmodificar);

         }  
        // alert("id"+opcion+"crea"+vcrear+"vbusca"+vbuscar+"modifica"+vmodificar);
        var parametros = {  
                "NombreProceso":NombreProceso,
                "idrol":idrol,
                "opcion":opcion,
                "vcrear":vcrear,
                "vbuscar":vbuscar,
                "vmodificar":vmodificar,
        };
        $.ajax({
                data: parametros,
                url: '../modulos/admin/funciones.php',
                type: 'post',
                beforeSend: function () {
                        // alert("antes de");
                },
                success: function (response) {
                        // alert(response);
                        // $('#resultadoperfiles tbody').html(response);
                        // table.destroy();
                        // $('#opciones tbody').html(response);
                        // $('#opciones').DataTable( {
                        //         dom: 'Bfrtip',
                        //         buttons: [
                        //             'copy', 'csv', 'excel', 'pdf', 'print'
                        //         ]
                        //     } );    

                }
        });

      }
     }
}

//**** carga opciones perfiles */
function buscausuarios() {
        var table=$('#tabla').DataTable();
        var textop=$('#perfil').val();
        // alert("muestre"+ruta);
        NombreProceso = "BUSCAUSUARIOS";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "perfil":textop,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/admin/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                // $('#resultadoperfiles tbody').html(response);
                                table.destroy();
                                $('#tabla tbody').html(response);
                                $('#tabla').DataTable( {
                                        dom: 'Bfrtip',
                                        buttons: [
                                            'copy', 'csv', 'excel', {
                                                extend: 'pdf',
                                                title: 'USUARIOS: ',
                                                filename: 'USUARIOS'
                                              }, {
                                                extend: 'print',
                                                title: 'USUARIOS: ',
                                                filename: 'USUARIOS'
                                              }
                                        ]
                                    } );    

                        }
                });
        }        


//**** carga opciones perfiles */
function buscaclasificacion() {
       
        var textop=$('#perfil').val();
        // alert("muestre"+ruta);
        NombreProceso = "BUSCACLASIFICACION";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "perfil":textop,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/clientes/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                $('#tabla tbody').html(response);
                        }
                });
        }
        
//**** carga opciones perfiles */
function buscaclientes() {
        var table=$('#tabla').DataTable(); 
        var textop=$('#perfil').val();
        // alert("muestre"+ruta);
        NombreProceso = "BUSCACLIENTES";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "perfil":textop,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/clientes/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                // alert(response)
                                // $('#resultadoperfiles tbody').html(response);
                                table.destroy();
                                $('#tabla tbody').html(response);
                                $('#tabla').DataTable( {
                                        dom: 'Bfrtip',
                                        buttons: [
                                            'copy', 'csv', 'excel', 'pdf', 'print'
                                        ]
                                    } );    

                        }
                });
        }        
function buscaclientes_informe() {
                var table=$('#tabla').DataTable(); 
                var textop=$('#perfil').val();
                // alert("muestre"+ruta);
                NombreProceso = "BUSCACLIENTESLISTA";
                var parametros = {  
                        "NombreProceso":NombreProceso,
                        "perfil":textop,
                };
                        $.ajax({
                                data: parametros,
                                url: '../modulos/clientes/funciones.php',
                                type: 'post',
                                beforeSend: function () {
                                },
                                success: function (response) {
                                        // alert(response)
                                        // $('#resultadoperfiles tbody').html(response);
                                        table.destroy();
                                        $('#tabla tbody').html(response);
                                        $('#tabla').DataTable( {
                                                dom: 'Bfrtip',
                                                buttons: [
                                                    'copy', 'csv', 'excel', 'pdf', 'print'
                                                ]
                                            } );    
        
                                }
                        });
                }        
        
function UsuarioRegistrar() {
    /*** PRIMERO SE VALIDA TODO Y DEPSUES SE REALIZA LA TRAIDA DE DATOS PARA ENVIARLAS A
     PHP ***/
    if (ValidacionCorreos($('#correo').val()) == 0) {
            if (ValidacionVaciosUsuario(0) == 0) {

                    var NombreUsuario = $('#nombre').val();
                    var ApellidoUsuario = $('#apellido').val();
                    var RolUsuario = $('#rol').val();
                    var TelefonoUsuario = $('#telefono').val();
                    var CorreoUsuario = $('#correo').val();
                    var ContrasenaUsuario = $('#contrasena').val();
                    var NombreProceso = "RegistrarUsuario";
                    var parametros = {
                            "NombreProceso": NombreProceso,
                            "NombreUsuario": NombreUsuario,
                            "ApellidoUsuario": ApellidoUsuario,
                            "RolUsuario": RolUsuario,
                            "TelefonoUsuario": TelefonoUsuario,
                            "CorreoUsuario": CorreoUsuario,
                            "ContrasenaUsuario": ContrasenaUsuario
                    };
                    $.ajax({
                            data: parametros,
                            url: '../modulos/parametrizacion/funciones.php',
                            type: 'post',
                            beforeSend: function () {
                                    $("#ResultadoRegistro").html("Procesando, espere por favor...");
                            },
                            success: function (response) {

                                    if (response.trim() == "REGISTRO") {
                                            swal("¡Bien!", "Se ha registrado el usuario", "success");
                                    }
                                    if (response.trim() == "NOREGISTRO") {
                                            swal("¡Error!", "NO Se ha registrado el usuario", "error");
                                    }
                                    if (response.trim() == "ERROR") {
                                            swal("¡Error!", "Se no se ha registrado, el usuario ya existe, verifique los campos", "error");
                                    }
                                    var url = "../modulos/parametrizacion/MostrarUsuarios.php"
                                    cargar(url, "TablaRecarga");
                            }
                    });
            } else {
                    swal("¡Error!", "¡Diligencie correctamente los campos!", "warning");
            }
    } else {
            swal("¡Error!", "¡La dirección de email " + $('#correo').val() + " es incorrecta...     !", "warning");
    }

}
/**--------------------------------- Registrar Usuarios---------------------------------------------------- */


/**--------------------------------- Actualizar Usuarios ---------------------------------------------------- */
function ActualizarDatosUsuario() {
    if ($('#NuevoCorreoUsuario').val() == "") {
            ActualizarDatosUsuario1();
    } else {
            if (ValidacionCorreos($('#NuevoCorreoUsuario').val()) == 0) {
                    ActualizarDatosUsuario1();
            } else {
                    swal("¡Error!", "¡La dirección de email " + $('#NuevoCorreoUsuario').val() + " es incorrecta...     !", "warning");
            }

    }

    function ActualizarDatosUsuario1() {
            var IdUsuario = $('#IdUsuario').val();
            var NombreUsuario = $('#NuevoNombreUsuario').val();
            var ApellidoUsuario = $('#NuevoApellidoUsuario').val();
            var RolUsuario = $('#NuevoRolUsuario').val();
            var TelefonoUsuario = $('#NuevoTelefonoUsuario').val();
            var CorreoUsuario = $('#NuevoCorreoUsuario').val();
            var ContrasenaUsuario = $('#NuevaContrasenaUsuario').val();
            var NombreProceso = "ActualizarDatosUsuario";
            var parametros = { "NombreProceso": NombreProceso, "IdUsuario": IdUsuario, "NombreUsuario": NombreUsuario, "ApellidoUsuario": ApellidoUsuario, "RolUsuario": RolUsuario, "TelefonoUsuario": TelefonoUsuario, "CorreoUsuario": CorreoUsuario, "ContrasenaUsuario": ContrasenaUsuario };
            $.ajax({
                    data: parametros,
                    url: '../modulos/parametrizacion/funciones.php',
                    type: 'post',
                    beforeSend: function () {
                            // $("#ResultadoActualizarDatos").html("Procesando, espere por favor...");
                    },
                    success: function (response) {

                            if (response.trim() == "ACTUALIZO") {
                                    swal("¡Bien!", "Se ha actualizado el usuario", "success");
                            }
                            if (response.trim() == "NOACTUALIZO") {
                                    swal("¡Error!", "No se ha actualizado el usuario", "error");
                            }
                            if (response.trim() == "ERROR") {
                                    swal("¡Error!", "El usuario ya existe verifique los campos", "warning");
                            }
                            var url = "../modulos/parametrizacion/MostrarUsuarios.php"
                            cargar(url, "TablaRecarga");
                    }
            });

    }


}
/**--------------------------------- Actualizar Usuarios ---------------------------------------------------- */
//**codigo verificacion */
function codigover() {
        //alert("entro");
        var vpri, x, y, z, i, nit1, dv1;
        nit1 = $("#documento").val();
        var tipodoc=$("#ProvTipo_doc").val();
        //alert("entro"+tipodoc);
        if (isNaN(nit1)) {
                $("#codverificacion").val("");
                //alert('El valor digitado no es un numero valido');		
        } else {
                if (tipodoc == 'NIT') {
                        vpri = new Array(16);
                        x = 0;
                        y = 0;
                        z = nit1.length;
                        vpri[0] = 3;
                        vpri[1] = 7;
                        vpri[2] = 13;
                        vpri[3] = 17;
                        vpri[4] = 19;
                        vpri[5] = 23;
                        vpri[6] = 29;
                        vpri[7] = 37;
                        vpri[8] = 41;
                        vpri[9] = 43;
                        vpri[10] = 47;
                        vpri[11] = 53;
                        vpri[12] = 59;
                        vpri[13] = 67;
                        vpri[14] = 71;
                        for (i = 0; i < z; i++) {
                                y = (nit1.substr(i, 1));
                                //document.write(y+"x"+ vpri[z-i] +":");
                                x += (y * vpri[z - i-1]);
                                // alert("y="+y+" vp="+vpri[z - i-1]+);
                                //document.write(x+"<br>");		
                        }
                        y = x % 11
                        //document.write(y+"<br>");
                        if (y > 1) {
                                dv1 = 11 - y;
                        } else {
                                dv1 = y;
                        }
                        $("#codverificacion").val(dv1);
                }
                else { $("#codverificacion").val("");; }
        }

}
/****** */
function agregaform(datos){
        //alert("entroddd");
	var d=datos.split('||');
	$('#idpersona').val(d[0]);
	$('#nombreu').val(d[1]);
	$('#descripcionu').val(d[2]);
	$('#nivelu').val(d[3]);
        $('#coloru').val(d[4]);
        //alert("entro");
}
/*** ACCIONES */
function agregaformacciones(datos){
        //alert("entroddd");
        var d=datos.split('||');
        // `id`, `idusuario`, `idtercero`, `fecha`, `asunto`, `accion`, `fechainicio`, `fechafin`, `contacto`, `telcontacto`, `observaciones`, `correo`, `estado`, `idoportunidad`
        // $datos=$fila[0]."||".$fila[4]."||".$fila[15]."||".$fila[6]."||".$fila[7]."||".$fila[2]."||".$nombretercero."||".$fila[8]."||".$fila[9]."||".$fila[10]."||".$fila[11]."||".$fila[12]."||".$nomoportunidad."||".$fila[5]."||".$fila[14]."||".$fila[15];
        
	$('#idpersona').val(d[0]);
	$('#asunto').val(d[1]);
	$('#accion').val(d[13]);
	$('#fecha1').val(d[3]);
        $('#fecha2').val(d[4]);
        $('#IdTercero').val(d[5]);
        $('#TerceroNombre').val(d[6]);
        $('#contacto').val(d[7]);
        $('#telcontacto').val(d[8]);
        $('#correo').val(d[10]);
        $('#obsaccion').val(d[9]);
        $('#estado').val(d[11]);
        $('#oportunidad').val(d[16]);
        
        //alert("entro");
}

function agregaformventaproductos(datos){
        //alert("entroddd");
	var d=datos.split('||');
	$('#idpersona').val(d[0]);
	$('#nombreu').val(d[1]);
	$('#descripcionu').val(d[2]);
	$('#productou').val(d[3]);
	$('#valoru').val(d[4]);
        $('#tipou').val(d[5]);
}
function agregaformcliente(datos){
        //alert("entroddd");`id_tercero`, `nombre1`, `nombre2`, `apellido1`, `apellido2`, `razonsocial`, `direccion`, `telefono`, `celular`, `email`, `web`, `tipodoc`, `cedulanit`, `codver`, `depto`, `mnpio`, `persona`, `regimen`, `id_clasificacion`, `contacto1`, `telcontacto1`, `cargocontacto1`, `obscontacto1`, `contacto2`, `telcontacto2`, `cargocontacto2`, `obscontacto2`, `obs`, `cliente`, `proveedor`, `empleado`, `estado`
	var d=datos.split('||');
	$('#idpersona').val(d[0]);
	$('#ProveedoresNombre').val(d[1]);
	$('#ProveedoresNombre2').val(d[2]);
	$('#ProveedoresApellido').val(d[3]);
        $('#ProveedoresApellido2').val(d[4]);
        $('#razon').val(d[5]);
	$('#direccion').val(d[6]);
	$('#telefono').val(d[7]);
        // $('#celular').val(d[8]);
        $('#correo').val(d[9]);
	$('#web').val(d[10]);
	$('#ProvTipo_doc').val(d[11]);
        $('#documento').val(d[12]);
        $('#codverificacion').val(d[13]);
	// $('#depto').val(d[14]);
	// $('#mnpio').val(d[15]);
        $('#ProvTipoPersona').val(d[16]);
        $('#ProveedoresRegimen').val(d[17]);
	$('#clasificacion').val(d[18]);
	$('#contacto').val(d[19]);
        $('#Telcontacto').val(d[20]);
        $('#cargocontacto').val(d[21]);
	$('#obscontacto').val(d[22]);
	$('#contacto2').val(d[23]);
        $('#Telcontacto2').val(d[24]);
        $('#cargocontacto2').val(d[25]);
	$('#obscontacto2').val(d[26]);
	$('#obs').val(d[27]);
        // $('#cliente').val(d[28]);
        // $('#proveedor').val(d[29]);
	// $('#empleado').val(d[30]);
	$('#estado').val(d[31]);
	$('#genero').val(d[32]);
	$('#profesion').val(d[33]);
        $('#fechanac').val(d[34]);
        $('#niveledu').val(d[35]);
        $('#fechacumple').val(d[36]);
        if(d[37]=="1")
        {
         $('#representante').attr("checked",true);     
        }
        else{
        $('#representante').attr("checked",false);     
        }
        // $('#representante').val(d[37]);
        $('#cargo').val(d[38]);
        $('#facebook').val(d[39]);
        $('#twitter').val(d[40]);
        $('#instagram').val(d[41]);
        $('#otro').val(d[42]);
        agregaformcliente_otros(d[0]);
        //alert("entro");
}
function actualizaaccionesclientes()
{
        var id=$('#idpersona').val();
	var asunto=$('#asunto').val();
	var oportunidad=$('#oportunidad').val();
	var fecha2=$('#fecha2').val();
	var correo=$('#correo').val();
	var obs=$('#obsaccion').val();
	var estado=$('#estado').val();
	var telcontacto=$('#telcontacto').val();
	var contacto=$('#contacto').val();
        NombreProceso = "ACTUALIZAACCIONESCLIENTES";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id":id,
                "asunto":asunto,
                "fecha2":fecha2,
                "correo":correo,
                "obs":obs,
                "oportunidad":oportunidad,
                "estado":estado,
                "telcontacto":telcontacto,
                "contacto":contacto,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/servclientes/funcionescrm.php',
                        type: 'post',
                        beforeSend: function () {
                                // alert("responsedddd");

                        },
                        success: function (response) {
                                  alert(response);
                                if(response.trim()=="SI")
                                {
                                swal("¡Muy bien!", "Se ha Actualizado la Accion exitosamente", "success");
                               // LimpiarCampos();
                               buscaaccionesclientes();
                                }
                                else{
                                swal("¡Error!", "NO Se ha actualizado la Accion"+response, "error");
                                }
                        }
                });
               
}
function actualizacliclasificacion()
{
        var id=$('#idpersona').val();
	var nombre=$('#nombreu').val();
	var descripcion=$('#descripcionu').val();
	var nivel=$('#nivelu').val();
        var color=$('#coloru').val();
        NombreProceso = "ACTUALIZACLASIFICACION";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id":id,
                "nombre":nombre,
                "descripcion":descripcion,
                "nivel":nivel,
                "color":color,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/clientes/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                //   alert(response)
                                if(response.trim()=="SI")
                                {
                                swal("¡Muy bien!", "Se ha Actualizado la Clasificacion exitosamente", "success");
                               // LimpiarCampos();
                               buscaclasificacion();
                                }
                                else
                                swal("¡Error!", "NO Se ha actualizado la Clasificacion", "error");
                        }
                });
               
}

function actualizanotas()
{
        var id=$('#idpersona').val();
	var nombre=$('#nombreu').val();
	var descripcion=$('#descripcionu').val();
        NombreProceso = "ACTUALIZANOTAS";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id":id,
                "nombre":nombre,
                "descripcion":descripcion,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/servclientes/funcionescrm.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                //   alert(response)
                                if(response.trim()=="SI")
                                {
                                swal("¡Muy bien!", "Se ha Actualizado la Nota exitosamente", "success");
                               // LimpiarCampos();
                               buscanotas();
                                }
                                else
                                swal("¡Error!", "NO Se ha actualizado la Nota", "error");
                        }
                });
               
}
function actualizaventaproductos()
{
        var id=$('#idpersona').val();
	var nombre=$('#nombreu').val();
	var descripcion=$('#descripcionu').val();
	var valor=$('#valoru').val();
        NombreProceso = "ACTUALIZAVENTAPRODUCTOS";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id":id,
                "nombre":nombre,
                "descripcion":descripcion,
                "valor":valor,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/ventas/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                //   alert(response)
                                if(response.trim()=="SI")
                                {
                                swal("¡Muy bien!", "Se ha Actualizado la venta exitosamente", "success");
                               // LimpiarCampos();
                               buscaventaproductos();
                                }
                                else
                                swal("¡Error!", "NO Se ha actualizado la venta", "error");
                        }
                });
               
}
function actualizaarchivos()
{
        var id=$('#idpersona').val();
	var nombre=$('#nombreu').val();
	var descripcion=$('#descripcionu').val();
        NombreProceso = "ACTUALIZAARCHIVOS";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id":id,
                "nombre":nombre,
                "descripcion":descripcion,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/servclientes/funcionescrm.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                //   alert(response)
                                if(response.trim()=="SI")
                                {
                                swal("¡Muy bien!", "Se ha Actualizado el Archivo exitosamente", "success");
                               // LimpiarCampos();
                               buscaarchivos();
                                }
                                else
                                swal("¡Error!", "NO Se ha actualizado el Archivo", "error");
                        }
                });
               
}

function actualizaclientes()
{
        //alert("entroddd");`id_tercero`, `nombre1`, `nombre2`, `apellido1`, `apellido2`, `razonsocial`, `direccion`, `telefono`, `celular`, `email`, `web`, `tipodoc`, `cedulanit`, `codver`, `depto`, `mnpio`, `persona`, `regimen`, `id_clasificacion`, `contacto1`, `telcontacto1`, `cargocontacto1`, `obscontacto1`, `contacto2`, `telcontacto2`, `cargocontacto2`, `obscontacto2`, `obs`, `cliente`, `proveedor`, `empleado`, `estado`
	// var d=datos.split('||');
	var n1=$('#idpersona').val();
	var n2=$('#ProveedoresNombre').val();
	var n3=$('#ProveedoresNombre2').val();
	var n4=$('#ProveedoresApellido').val();
        var n5=$('#ProveedoresApellido2').val();
        var n6=$('#razon').val();
	var n7=$('#direccion').val();
	var n8=$('#telefono').val();
        //var n9= $('#celular').val(d[8]);
        var n10=$('#correo').val();
	var n11=$('#web').val();
	var n12=$('#ProvTipo_doc').val();
        var n13=$('#documento').val();
        var n14=$('#codverificacion').val();
	//var n15= $('#depto').val(d[14]);
	//var n16= $('#mnpio').val(d[15]);
        var n17=$('#ProvTipoPersona').val();
        var n18=$('#ProveedoresRegimen').val();
	var n19=$('#clasificacion').val();
	var n20=$('#contacto').val();
        var n21=$('#Telcontacto').val();
        var n22=$('#cargocontacto').val();
	var n23=$('#obscontacto').val();
	var n24=$('#contacto2').val();
        var n25=$('#Telcontacto2').val();
        var n26=$('#cargocontacto2').val();
	var n27=$('#obscontacto2').val();
	var n28=$('#obs').val();
        // var n29=$('#cliente').val(d[28]);
        // var n30=$('#proveedor').val(d[29]);
	// var n31=$('#empleado').val(d[30]);
        var n32=$('#estado').val();
	var n33=$('#genero').val();
	var n34=$('#profesion').val();
        var n35=$('#fechanac').val();
	var n36=$('#niveledu').val();
	var n37=$('#fechacumple').val();
        var n38=$('#representante').val();
        if($('#representante').is(":checked"))
        {
         n38=$('#representante').val();  
        }
        else
        {
         n38="";
        }
	var n39=$('#cargo').val();
	var n40=$('#facebook').val();
	var n41=$('#twitter').val();
	var n42=$('#instagram').val();
	var n43=$('#otro').val();
        NombreProceso = "ACTUALIZACLIENTES";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "n1":n1,
                "n2":n2,
                "n3":n3,
                "n4":n4,
                "n5":n5,
                "n6":n6,
                "n7":n7,
                "n8":n8,
                "n10":n10,
                "n11":n11,
                "n12":n12,
                "n13":n13,
                "n14":n14,
                "n17":n17,
                "n18":n18,
                "n19":n19,
                "n20":n20,
                "n21":n21,
                "n22":n22,
                "n23":n23,
                "n24":n24,
                "n25":n25,
                "n26":n26,
                "n27":n27,
                "n28":n28,
                "n32":n32,
                "n33":n33,
                "n34":n34,
                "n35":n35,
                "n36":n36,
                "n37":n37,
                "n38":n38,
                "n39":n39,
                "n40":n40,
                "n41":n41,
                "n42":n42,
                "n43":n43,

        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/clientes/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                //   alert(response)
                                if($.trim(response)=="SI")
                                {
                                swal("¡Muy bien!", "Se ha Actualizado el cliente exitosamente", "success");
                                actualizaclientes_otros(n1);
                               // LimpiarCampos();
                               buscaclientes();
                                }
                                else
                                swal("¡Error!", "NO Se ha actualizado el cliente", "error");
                        }
                });
               
}


function agregaformusuarios(datos){
        //alert("entroddd");
	var d=datos.split('||');
	$('#idpersona').val(d[0]);
	$('#nombreu').val(d[1]);
	$('#descripcionu').val(d[2]);
	$('#rol').val(d[3]);
        $('#estado').val(d[4]);
        //alert("entro");
}

function actualizausuarios()
{
        var id=$('#idpersona').val();
	var nombre=$('#nombreu').val();
	var apellido=$('#descripcionu').val();
	var rol=$('#rol').val();
        var estado=$('#estado').val();
        var passu=$('#passu').val();
        NombreProceso = "ACTUALIZAUSUARIO";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id":id,
                "nombre":nombre,
                "apellido":apellido,
                "rol":rol,
                "estado":estado,
                "passu":passu,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/admin/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                //  alert(response)
                                if(response=="SI")
                                {
                                swal("¡Muy bien!", "Se ha Actualizado el usuario exitosamente", "success");
                               // LimpiarCampos();
                               buscausuarios();
                                }
                                if(response=="NO")
                                swal("¡Error!", "NO Se ha actualizado el usuario", "error");
                                if(response=="ERR")
                                swal("¡Error!", "Este usuario No es Permitido modificarse", "error");
                        }
                });           
}
function buscaterceros(tipo, idtexto) {
        var ndocumento = $('#IdTercero').val();
        var tipoT = tipo;
        //alert("dd:"+ndocumento);
        if (ndocumento != "") {
                var NombreProceso = "BUSCATERCERO";
                var parametros = {
                        "NombreProceso": NombreProceso,
                        "Documento": ndocumento,
                        "Tipo": tipoT,
                };
                $.ajax({
                        data: parametros,
                        url: '../modulos/controles/funciones2.php',
                        type: 'post',

                        beforeSend: function () {
                                // alert("aqui");
                        },
                        success: function (response) {
                                // alert("ALe:"+response);
                                if (response.trim() != "ERROR" && response.trim() != "") {
                                        // swal("¡Bien!", "El Articulo se registrado correctamente", "success");
                                        $("#" + idtexto).val(response);
                                }
                                else {
                                        swal("¡Error!", "El Tercero no se ha encontrado", "error");
                                }
                                //var url="../modulos/inventario/MostrarBienes.php";                        
                                //cargar(url,"TablaRecarga1");                                               
                        }
                });
        }
}

function buscaterceros_contacto(tipo, idtexto, nomtexto,teltexto,mailtexto) {
        var ndocumento = $('#IdTercero').val();
        var tipoT = tipo;
        //alert("dd:"+ndocumento);
        if (ndocumento != "") {
                var NombreProceso = "BUSCATERCEROCONTACTO";
                var parametros = {
                        "NombreProceso": NombreProceso,
                        "Documento": ndocumento,
                        "Tipo": tipoT,
                };
                $.ajax({
                        data: parametros,
                        url: '../modulos/controles/funciones2.php',
                        type: 'post',

                        beforeSend: function () {
                                // alert("aqui");
                        },
                        success: function (response) {
                                // alert("ALe:"+response);
                                if (response.trim() != "ERROR") {
                                        // swal("¡Bien!", "El Articulo se registrado correctamente", "success");    
                                        var datos = JSON.parse(response);
                                        var nombre1 = datos[0].nombre1;
                                        var nombre2 = datos[0].nombre2;
                                        var apell1 = datos[0].apellido1;
                                        var apell2 = datos[0].apellido2;
                                        var razon = datos[0].razonsocial;
                                        var contacto = datos[0].contacto1;
                                        var telcontacto = datos[0].telcontacto1;
                                        var mailcontacto = datos[0].email;
                                        var nomtercero=nombre1+" "+nombre2+" "+apell1+" "+apell2+" "+razon;
                                        $("#" + idtexto).val(nomtercero);
                                        $("#" + nomtexto).val(contacto);
                                        $("#" + teltexto).val(telcontacto);
                                        $("#" + mailtexto).val(mailcontacto);
                                }
                                else {
                                        swal("¡Error!", "El Tercero no se ha encontrado", "error");
                                }
                                //var url="../modulos/inventario/MostrarBienes.php";                        
                                //cargar(url,"TablaRecarga1");                                               
                        }
                });
        }
}

function buscaaccionesclientes() {
        
        var table=$('#tabla').DataTable();
        // alert("e");
        var textop=$('#perfil').val();
        var fechai=$('#fechaini').val();
        var fechaf=$('#fechafin').val();
        //   alert("muestre"+fechai+" "+fechaf);
        var rotulo=fechai+" - "+fechaf;
        NombreProceso = "BUSCAACCIONES";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "textop":textop,
                "fechai":fechai,
                "fechaf":fechaf,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/servclientes/funcionescrm.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                //    alert(response)
                                // $('#resultadoperfiles tbody').html(response);
                                table.destroy();
                                $('#tabla tbody').html(response);
                                $('#tabla').DataTable( {
                                        dom: 'Bfrtip',
                                        buttons: [
                                            'copy', 'csv', 'excel', {
                                                extend: 'pdf',
                                                title: 'ACCIONES: '+rotulo,
                                                filename: 'ACCIONES'
                                              }, 'print'
                                        ]
                                    } );      

                        }
                });
        } 
 function agregapregunta()
 {
        var tipopregunta=$('#tipopregunta').val();
        var textotipo=$('#tipopregunta option:selected').text();
        var totpregunta=$('#totalpreguntas').val();
        if(tipopregunta!="")
        {
        if (totpregunta =="")
        {
        totpregunta=0;
        totpregunta=1+parseFloat(totpregunta);
        }
        else
        {totpregunta=1+parseFloat(totpregunta);}
        switch(tipopregunta)
        {
        case '1':
                //PREGUNTA BINARIA
        var textohtml='<div id="npregunta'+totpregunta+'" class="col-lg-12"><div class="card"><div class="card-header bg-secondary text-light"><strong >Pregunta </strong><small>'+totpregunta+' '+textotipo+'</small><button type="button" class="close" onclick="eliminarpregunta('+totpregunta+')"><i class="fa fa-times"></i></button></div><div id="preguntas_contenido" class="card-body card-block">';
        textohtml+='<div class="form-group col-lg-10"><label for="enunciado'+totpregunta+'" class=" form-control-label">Enunciado:</label><input type="text" id="enunciado'+totpregunta+'" placeholder="Ingresa pregunta" class="form-control"></div>';

        var tablahtml='<div class="col-lg-12"><div class="card"><div class="card-header "><strong class="card-title">Respuestas</strong></div><div class="card-body"><table id="tablaP'+totpregunta+'" class="table table-striped"><thead><tr><th scope="col">#</th><th scope="col">Texto Respuesta</th><th scope="col">Valor</th><th scope="col">Tipo</th></tr></thead><tbody><tr><td>1</td><td><input type="text" id="textobin_a_'+totpregunta+'" size="10"></td><td><input type="text" id="valorbin_a_'+totpregunta+'"  size="10"></td><td><input type="radio"> Radio Boton</td></tr><tr><td>2</td><td><input type="text" id="textobin_b_'+totpregunta+'" size="10"></td><td><input type="text" id="valorbin_b_'+totpregunta+'"  size="10"></td><td><input type="radio">Radio Boton</td></tr><tr><td>3</td><td><input type="text" id="textobin_c_'+totpregunta+'" size="10" value="Cual o Porque"></td><td><input type="text" id="valorbin_c_'+totpregunta+'"  size="10"></td><td><input type="text" size="3" readonly> Caja de Texto</td></tr></tbody></table></div></div></div>';
        textohtml+=tablahtml;
        textohtml+='</div></div></div>';
        
        break;
        case '2': 
                //PREGUNTA ABIERTA
                var textohtml='<div id="npregunta'+totpregunta+'" class="col-lg-12"><div class="card"><div class="card-header bg-secondary text-light"><strong>Pregunta </strong><small>'+totpregunta+' '+textotipo+'</small><button type="button" class="close" onclick="eliminarpregunta('+totpregunta+')"><i class="fa fa-times"></i></button></div><div id="preguntas_contenido" class="card-body card-block">';
                textohtml+='<div class="form-group col-lg-10"><label for="enunciado'+totpregunta+'" class=" form-control-label">Enunciado:</label><input type="text" id="enunciado'+totpregunta+'" placeholder="Ingresa pregunta" class="form-control"></div>';
                var tablahtml='<div class="col-lg-12"><div class="card"><div class="card-header "><strong class="card-title">Respuestas </strong><button type="button" class="btn btn-outline-warning btn-sm" id="addrespuesta'+totpregunta+'" data-toggle="modal" data-target="#agregarnuevosdatosmodal'+totpregunta+'"><i class="fa fa-plus"></i></button></div><div class="card-body"><table id="tablaP'+totpregunta+'" class="table table-striped"><thead><tr><th scope="col">#</th><th scope="col">Texto Respuesta</th><th scope="col">Valor</th><th scope="col">Tipo</th><th scope="col">Eliminar</th></tr></thead><tbody></tbody></table></div></div></div>';
                textohtml+=tablahtml;
                textohtml+='</div></div></div>';

                var agregarmodal='<div class="modal fade" id="agregarnuevosdatosmodal'+totpregunta+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Agregar Respuesta</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><form id="frmnuevo"><label>Texto Respuesta</label><input type="text" class="form-control input-sm" id="textrespuesta'+totpregunta+'" name="textrespuesta'+totpregunta+'"><label>Valor</label><input type="text" class="form-control input-sm" id="valor'+totpregunta+'" name="valor'+totpregunta+'"><label>Tipo</label><input type="text" class="form-control input-sm" id="tipo'+totpregunta+'" name="tipo'+totpregunta+'" value="Texto" readonly></form></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button><button type="button" id="btnAgregarnuevo" class="btn btn-primary" onclick="agregarespuesta('+totpregunta+')">Agregar</button></div></div></div></div>';
                textohtml+=agregarmodal;
        break;
        case '3':
                //PREGUNTA CALIFICACION
                var textohtml='<div id="npregunta'+totpregunta+'" class="col-lg-12"><div class="card"><div class="card-header bg-secondary text-light"><strong>Pregunta </strong><small>'+totpregunta+' '+textotipo+'</small><button type="button" class="close" onclick="eliminarpregunta('+totpregunta+')"><i class="fa fa-times"></i></button></div><div id="preguntas_contenido" class="card-body card-block">';
                textohtml+='<div class="form-group col-lg-10"><label for="enunciado'+totpregunta+'" class=" form-control-label">Enunciado:</label><input type="text" id="enunciado'+totpregunta+'" placeholder="Ingresa pregunta" class="form-control"></div>';
                var tablahtml='<div class="col-lg-12"><div class="card"><div class="card-header "><strong class="card-title">Respuestas</strong><button type="button" class="btn btn-outline-warning btn-sm" id="addrespuesta'+totpregunta+'" data-toggle="modal" data-target="#agregarnuevosdatosmodal'+totpregunta+'"><i class="fa fa-plus"></i></button></div><div class="card-body"><table id="tablaP'+totpregunta+'" class="table table-striped"><thead><tr><th scope="col">#</th><th scope="col">Texto Respuesta</th><th scope="col">Valor</th><th scope="col">Tipo</th><th scope="col">Eliminar</th></tr></thead><tbody></tbody></table></div></div></div>';
                textohtml+=tablahtml;
                textohtml+='</div></div></div>';
                var agregarmodal='<div class="modal fade" id="agregarnuevosdatosmodal'+totpregunta+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Agregar Respuesta</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><form id="frmnuevo"><label>Texto Respuesta</label><input type="text" class="form-control input-sm" id="textrespuesta'+totpregunta+'" name="textrespuesta'+totpregunta+'"><label id="valor-range">Valor()</label><input  type="range" min="1" max="5" step="1" class="form-control input-sm" id="valor'+totpregunta+'" name="valor'+totpregunta+'" onchange=$("#valor-range").html("Valor("+$(this).val()+")")><label>Tipo</label><input type="text" class="form-control input-sm" id="tipo'+totpregunta+'" name="tipo'+totpregunta+'" value="Rango" readonly></form></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button><button type="button" id="btnAgregarnuevo" class="btn btn-primary" onclick="agregarespuesta('+totpregunta+')">Agregar</button></div></div></div></div>';
                textohtml+=agregarmodal;
        break;
        case '4':
                //PREGUNTA SELECCION UNICA
                var textohtml='<div id="npregunta'+totpregunta+'" class="col-lg-12"><div class="card"><div class="card-header bg-secondary text-light"><strong>Pregunta </strong><small>'+totpregunta+' '+textotipo+'</small><button type="button" class="close" onclick="eliminarpregunta('+totpregunta+')"><i class="fa fa-times"></i></button></div><div id="preguntas_contenido" class="card-body card-block">';
                textohtml+='<div class="form-group col-lg-10"><label for="enunciado'+totpregunta+'" class=" form-control-label">Enunciado:</label><input type="text" id="enunciado'+totpregunta+'" placeholder="Ingresa pregunta" class="form-control"></div>';
                var tablahtml='<div class="col-lg-12"><div class="card"><div class="card-header "><strong class="card-title">Respuestas</strong><button type="button" class="btn btn-outline-warning btn-sm" id="addrespuesta'+totpregunta+'" data-toggle="modal" data-target="#agregarnuevosdatosmodal'+totpregunta+'"><i class="fa fa-plus"></i></button></div><div class="card-body"><table id="tablaP'+totpregunta+'" class="table table-striped"><thead><tr><th scope="col">#</th><th scope="col">Texto Respuesta</th><th scope="col">Valor</th><th scope="col">Tipo</th><th scope="col">Eliminar</th></tr></thead><tbody></tbody></table></div></div></div>';
                textohtml+=tablahtml;
                textohtml+='</div></div></div>';
                var agregarmodal='<div class="modal fade" id="agregarnuevosdatosmodal'+totpregunta+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Agregar Respuesta</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><form id="frmnuevo"><label>Texto Respuesta</label><input type="text" class="form-control input-sm" id="textrespuesta'+totpregunta+'" name="textrespuesta'+totpregunta+'"><label>Valor</label><input type="text" class="form-control input-sm" id="valor'+totpregunta+'" name="valor'+totpregunta+'"><label>Tipo</label><input type="text" class="form-control input-sm" id="tipo'+totpregunta+'" name="tipo'+totpregunta+'" value="Radio" readonly></form></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button><button type="button" id="btnAgregarnuevo" class="btn btn-primary" onclick="agregarespuesta('+totpregunta+')">Agregar</button></div></div></div></div>';
                textohtml+=agregarmodal;
        break;
        case '5':
                //PREGUNTA MULTIPLE SELECCION
                var textohtml='<div id="npregunta'+totpregunta+'" class="col-lg-12"><div class="card"><div class="card-header bg-secondary text-light"><strong>Pregunta </strong><small>'+totpregunta+' '+textotipo+'</small><button type="button" class="close" onclick="eliminarpregunta('+totpregunta+')"><i class="fa fa-times"></i></button></div><div id="preguntas_contenido" class="card-body card-block">';
                textohtml+='<div class="form-group col-lg-10"><label for="enunciado'+totpregunta+'" class=" form-control-label">Enunciado:</label><input type="text" id="enunciado'+totpregunta+'" placeholder="Ingresa pregunta" class="form-control"></div>';
                var tablahtml='<div class="col-lg-12"><div class="card"><div class="card-header "><strong class="card-title">Respuestas</strong><button type="button" class="btn btn-outline-warning btn-sm" id="addrespuesta'+totpregunta+'" data-toggle="modal" data-target="#agregarnuevosdatosmodal'+totpregunta+'"><i class="fa fa-plus"></i></button></div><div class="card-body"><table id="tablaP'+totpregunta+'" class="table table-striped"><thead><tr><th scope="col">#</th><th scope="col">Texto Respuesta</th><th scope="col">Valor</th><th scope="col">Tipo</th><th scope="col">Eliminar</th></tr></thead><tbody></tbody></table></div></div></div>';
                textohtml+=tablahtml;
                textohtml+='</div></div></div>';
                var agregarmodal='<div class="modal fade" id="agregarnuevosdatosmodal'+totpregunta+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Agregar Respuesta</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><form id="frmnuevo"><label>Texto Respuesta</label><input type="text" class="form-control input-sm" id="textrespuesta'+totpregunta+'" name="textrespuesta'+totpregunta+'"><label>Valor</label><input type="text" class="form-control input-sm" id="valor'+totpregunta+'" name="valor'+totpregunta+'"><label>Tipo</label><input type="text" class="form-control input-sm" id="tipo'+totpregunta+'" name="tipo'+totpregunta+'" value="Chequeo" readonly></form></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button><button type="button" id="btnAgregarnuevo" class="btn btn-primary" onclick="agregarespuesta('+totpregunta+')">Agregar</button></div></div></div></div>';
                textohtml+=agregarmodal;
        break;                  
        }
        //  alert("texto"+textohtml +" tp"+tipopregunta);
        $('#preguntas_contenido').append(textohtml);
        $('#totalpreguntas').val(totpregunta);
        }        
 }      
 function agregarespuesta(indice)
 {
        
        var nfila = $("#TablaP"+indice+" tbody tr").length;
        var idfila = nfila+1;
        var textoresp=$("#textrespuesta" + indice).val();
        var valor=$("#valor" + indice).val(); 
        var tipo=$("#tipo" + indice).val(); 
        // alert("entrosssss"+indice);
        if (tipo=="Texto")
        {
        var tipoinput='<input type="text" size="3" readonly> Caja de Texto';
        }
        if (tipo=="Rango")
        {
        var tipoinput='<input  type="range" name="red" min="1" max="5" step="1" value="'+valor+'"> Rango';
        }
        if (tipo=="Radio")
        {
        var tipoinput='<input type="radio"> Radio Boton';
        }
        if (tipo=="Chequeo")
        {
        var tipoinput='<input type="checkbox"> Caja de Chequeo';
        }       
        var htmlTags = '<tr id="' + idfila + '">' +
        '<td id="">' + idfila + '</td>' +
        '<td id="respuesta">'+textoresp+ '</td>' +
        '<td id="valrespuesta">' + valor + '</td>' +
        '<td id="tiporespuesta">' + tipoinput + '</td>' +
        '<td>' + '<button class="btn btn-danger " value="Eliminar" onclick="eliminarespuesta(' + indice + ',' + idfila + ')"><i class="fa fa-trash"></i></button>' + '</td>' +
        '</tr>';       
        // alert("entrossssdddddd"+indice);
  $("#tablaP"+indice+' tbody').append(htmlTags);
 }
 function eliminarespuesta(indice,posicion)
 {
        $('#tablaP'+indice+' tr#' + posicion).remove();
 }
 function eliminarpregunta(indice)
 {
        $("#npregunta"+indice).remove(); 
 }
 function guardainstrumentos()
 {
        var nombre = $('#nombre').val();
        var descripcion = $('#descripcion').val();

        NombreProceso = "GUARDAINSTRUMENTOS";
        var parametros = {  
        "NombreProceso":NombreProceso,
        "nombre":nombre,
        "descripcion":descripcion,
        };
        $.ajax({
                data: parametros,
                url: '../modulos/servclientes/funcionescrm.php',
                type: 'post',
                beforeSend: function () {
                },
                success: function (response) {
                        // alert("Guardo "+response);
                      if(response.trim()!="ERROR")
                      {
                        swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                        guardainstrumentos_det(response);
                        // LimpiarCampos();
                      }
                      if(response.trim()=="ERROR")
                      {
                        swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                      }
                }
        });
 }
 function guardainstrumentos_det(indice)
 {
        var totpreguntas= $('#totalpreguntas').val();
        var numeroid = indice;
        var x=0;
   for(x=1;x<=totpreguntas;x++)
    {        
        var enunciado= $('#enunciado'+x).val();
        if (enunciado!="")
        {
        NombreProceso = "GUARDAINSTRUMENTOS_DET";
        var parametros = {  
        "NombreProceso":NombreProceso,
        "id":numeroid,
        };
        $.ajax({
                data: parametros,
                url: '../modulos/servclientes/funcionescrm.php',
                type: 'post',
                beforeSend: function () {
                },
                success: function (response) {
                        // alert("Guardo "+response);
                      if(response.trim()!="ERROR")
                      {
                        // swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                        guardainstrumentos_resp(numeroid,response);
                      }
                      if(response.trim()=="ERROR")
                      {
                        swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                      }
                }
        });
        }
   }
}
function guardainstrumentos_resp(indice,detalle)
{
       var totpreguntas= $('#totalpreguntas').val();
       var numeroid = indice;
       var x=0;
  for(x=1;x<=totpreguntas;x++)
   {        
       var enunciado= $('#enunciado'+x).val();
       if (enunciado!="")
       {
       NombreProceso = "GUARDAINSTRUMENTOS_DET";
       var parametros = {  
       "NombreProceso":NombreProceso,
       "id":numeroid,
       };
       $.ajax({
               data: parametros,
               url: '../modulos/servclientes/funcionescrm.php',
               type: 'post',
               beforeSend: function () {
               },
               success: function (response) {
                       // alert("Guardo "+response);
                     if(response.trim()!="ERROR")
                     {
                       swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                       guardainstrumentos_resp(response);
                     }
                     if(response.trim()=="ERROR")
                     {
                       swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                     }
               }
       });
       }
  }
}

function agregarcampocliente()
 {
        //  alert("entro");
        var nfila = $("#tablaP tbody tr").length;
        var textoresp=$("#textrespuesta").val();
        var valor=$("#valor").val(); 
        // alert("si "+nfila);
       if (textoresp!="")
       {
       NombreProceso = "GUARDACAMPOSCLIENTES";
       var parametros = {  
       "NombreProceso":NombreProceso,
       "valor":valor,
       "nombre":textoresp,
       };
       $.ajax({
               data: parametros,
               url: '../modulos/clientes/funciones.php',
               type: 'post',
               beforeSend: function () {
                // alert("si ");
               },
               success: function (response) {
                        // alert("Guardo "+response);
                     if(response.trim()!="ERROR")
                     {
                        nfila=nfila+1;
                       var htmlTags='<tr id='+response+'><td>'+nfila+'</td><td>'+textoresp+'</td><td>'+valor+'</td><td>'+'<button class="btn btn-danger " value="Eliminar" onclick="eliminacampocliente(' + response + ')"><i class="fa fa-trash"></i></button></td></tr>';      
                       swal("¡Muy bien!", "Se ha agregado la informacion exitosamente", "success");
                       $("#tablaP tbody").append(htmlTags);
                        }
                     if(response.trim()=="ERROR")
                     {
                       swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                     }
               }
       });
       }
       else{
        swal("¡Error!", "Falta informacion para poder agregar el campo de cliente", "error");     
       }
}
function eliminacampocliente(indice)
{
        var posicion=indice;
        // alert ("entro"+posicion);
        if (posicion!="")
       {
       NombreProceso = "ELIMINACAMPOSCLIENTES";
       var parametros = {  
       "NombreProceso":NombreProceso,
       "posicion":posicion,
       };
       $.ajax({
               data: parametros,
               url: '../modulos/clientes/funciones.php',
               type: 'post',
               beforeSend: function () {
                // alert("si ");
               },
               success: function (response) {
                        //  alert("borro "+posicion+" "+response);
                     if(response.trim()=="SI")
                     {
                        // nfila=nfila+1;
                       swal("¡Muy bien!", "Se ha eliminado la informacion exitosamente", "success");
                       $('#tablaP tr#'+posicion).remove();
                        }
                     if(response.trim()=="ERROR")
                     {
                       swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                     }
               }
       });
       }
       else{
        swal("¡Error!", "Falta informacion para poder eliminar el campo de cliente", "error");     
       }     
}
 function guardaclientes_otros(id_tercero)
 {
         var campos=[];
         var valorcampos=[];
         var nombre="";
         var contenido;
        $('#otroscampos ').find('input').each(function () {   
                nombre=$(this).attr('id');
                contenido=$(this).val();
                campos.push(nombre);
                valorcampos.push(contenido);
                //  alert("Nombre:"+nombre+" C:"+contenido);     
        });
        NombreProceso = "GUARDAOTROSCAMPOSCLIENTES";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id_tercero":id_tercero,
                campos,
                valorcampos
                };
        $.ajax({
                data: parametros,
                url: '../modulos/clientes/funciones.php',
                method: 'POST',
                beforeSend: function () {
                //   alert("si ");
                },
                success: function (response) {
                        //    alert("borro: "+response);
                LimpiarCampos();
                }
        });
         
 }

 function agregaformcliente_otros(id_tercero)
 {
        NombreProceso = "BUSCAOTROSCAMPOSCLIENTES";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id_tercero":id_tercero,
                };
        $.ajax({
                data: parametros,
                url: '../modulos/clientes/funciones.php',
                method: 'POST',
                beforeSend: function () {
                //   alert("si ");
                },
                success: function (response) {
                // **** CARGA EN LOS CAMPOS DE TEXTO
                // alert(response);
                var datos = JSON.parse(response);
                var tama=datos.length;
                // alert(tama);
                for(var i=0;i<tama;i++)
                {
                var idtexto=datos[i].idcampo;
                var valor=datos[i].valor;
                //      alert("indice:"+idtexto+" valor:"+valor);
                $("#"+idtexto).val(valor);
                }
     
                }
        });    
         
 }

 function actualizaclientes_otros(id_tercero)
 {
         var campos=[];
         var valorcampos=[];
         var nombre="";
         var contenido;
        $('#otroscampos ').find('input').each(function () {   
                nombre=$(this).attr('id');
                contenido=$(this).val();
                campos.push(nombre);
                valorcampos.push(contenido);
                //  alert("Nombre:"+nombre+" C:"+contenido);     
        });
        NombreProceso = "ACTUALIZAOTROSCAMPOSCLIENTES";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id_tercero":id_tercero,
                campos,
                valorcampos
                };
        $.ajax({
                data: parametros,
                url: '../modulos/clientes/funciones.php',
                method: 'POST',
                beforeSend: function () {
                //   alert("si ");
                },
                success: function (response) {
                        //    alert("borro: "+response);
                // LimpiarCampos();
                }
        });
         
 }
 function guardaoportunidades()
 {
//     alert("entro cguarda");
         var nombre = $('#nombre').val();
         var etapa = $('#etapas').val();
         var fechainicio = $('#fecha1').val();
         var fechafin = $('#fecha2').val();
         var cliente = $('#IdTercero').val();
         var tipo = $('#tipo').val();
         var probabilidad = $('#probabilidad').val();
         var valor = $('#valor').val();
         var perdida = $('#perdida').val();
         var origen = $('#origen').val();
         var obs = $('#obs').val();
        
         NombreProceso = "GUARDAROPORTUNIDADES";
         var parametros = {  
         "NombreProceso":NombreProceso,
         "nombre":nombre,
         "etapa":etapa,
         "fechainicio":fechainicio,
         "fechafin":fechafin,
         "cliente":cliente,
         "tipo":tipo,
         "probabilidad":probabilidad,
         "obs":obs,
         "valor":valor,
         "perdida":perdida,
         "origen":origen,
         };
         $.ajax({
                 data: parametros,
                 url: '../modulos/ventas/funciones.php',
                 type: 'post',
                 beforeSend: function () {
                 },
                 success: function (response) {
                        //   alert("Guardo "+response);
                       if(response.trim()=="SI")
                       {
                         swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                         LimpiarCampos();
                       }
                       else
                       {
                         swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                       }
                 }
         });
 }

 //**** busca oportunidades */
function buscaoportunidades() {
        var table=$('#tabla').DataTable(); 
        var textop=$('#perfil').val();
        // alert("muestre"+ruta);
        NombreProceso = "BUSCAOPORTUNIDADES";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "perfil":textop,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/ventas/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                // alert(response)
                                // $('#resultadoperfiles tbody').html(response);
                                table.destroy();
                                $('#tabla tbody').html(response);
                                $('#tabla').DataTable( {
                                        dom: 'Bfrtip',
                                        buttons: [
                                            'copy', 'csv', 'excel', 'pdf', 'print'
                                        ]
                                    } );    

                        }
                });
        }

function guardanotas()
        {
               var titulo = $('#titulo').val();
               var oportunidad = $('#oportunidad').val();
               var descripcion = $('#descripcion').val();
       
               NombreProceso = "GUARDANOTAS";
               var parametros = {  
               "NombreProceso":NombreProceso,
               "titulo":titulo,
               "oportunidad":oportunidad,
               "descripcion":descripcion,
               };
               $.ajax({
                       data: parametros,
                       url: '../modulos/servclientes/funcionescrm.php',
                       type: 'post',
                       beforeSend: function () {
                       },
                       success: function (response) {
                                // alert("Guardo "+response);
                             if(response.trim()!="ERROR")
                             {
                               swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                        //        guardainstrumentos_det(response);
                              LimpiarCampos();
                             }
                             if(response.trim()=="ERROR")
                             {
                               swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                             }
                       }
               });
        }

        function guardaventaproductos()
        {
                // alert("entro");
               var titulo = $('#titulo').val();
               var oportunidad = $('#oportunidad').val();
               var productos = $('#productos').val();
               var descripcion = $('#descripcion').val();
               var valor = $('#valor').val();
       
               NombreProceso = "GUARDAVENTAPRODUCTOS";
               var parametros = {  
               "NombreProceso":NombreProceso,
               "titulo":titulo,
               "oportunidad":oportunidad,
               "descripcion":descripcion,
               "productos":productos,
               "valor":valor,
               };
               $.ajax({
                       data: parametros,
                       url: '../modulos/ventas/funciones.php',
                       type: 'post',
                       beforeSend: function () {
                       },
                       success: function (response) {
                                //  alert("Guardo "+response);
                             if(response.trim()!="ERROR")
                             {
                               swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                        //        guardainstrumentos_det(response);
                              LimpiarCampos();
                             }
                             if(response.trim()=="ERROR")
                             {
                               swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                             }
                       }
               });
        }       

        function guardaproductos()
        {
               var titulo = $('#titulo').val();
               var valor = $('#valor').val();
               var descripcion = $('#descripcion').val();
       
               NombreProceso = "GUARDAPRODUCTOS";
               var parametros = {  
               "NombreProceso":NombreProceso,
               "titulo":titulo,
               "valor":valor,
               "descripcion":descripcion,
               };
               $.ajax({
                       data: parametros,
                       url: '../modulos/ventas/funciones.php',
                       type: 'post',
                       beforeSend: function () {
                       },
                       success: function (response) {
                                // alert("Guardo "+response);
                             if(response.trim()!="ERROR")
                             {
                               swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                        //        guardainstrumentos_det(response);
                              LimpiarCampos();
                             }
                             if(response.trim()=="ERROR")
                             {
                               swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                             }
                       }
               });
        }      
        
        function guardalistagastos()
        {
               var titulo = $('#titulo').val();
               var descripcion = $('#descripcion').val();
       
               NombreProceso = "GUARDALISTAGASTOS";
               var parametros = {  
               "NombreProceso":NombreProceso,
               "titulo":titulo,
               "descripcion":descripcion,
               };
               $.ajax({
                       data: parametros,
                       url: '../modulos/ventas/funciones.php',
                       type: 'post',
                       beforeSend: function () {
                       },
                       success: function (response) {
                                // alert("Guardo "+response);
                             if(response.trim()!="ERROR")
                             {
                               swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                        //        guardainstrumentos_det(response);
                              LimpiarCampos();
                             }
                             if(response.trim()=="ERROR")
                             {
                               swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                             }
                       }
               });
        }           
function guardaarchivos()
        {
               var NombreProceso = "GUARDAARCHIVOS";       
               var nombre = $('#nombre').val();
               var oportunidad = $('#oportunidad').val();
        //        var archivos = $('#archivos').val();
               var archivos = document.getElementById("archivos");
               var filec = archivos.files[0];
               var parametros = new FormData();       
        //        alert("entro new");
               parametros.append('archivocarga', filec);
               parametros.append('NombreProceso', NombreProceso);       
               parametros.append('nombre', nombre);       
               parametros.append('oportunidad', oportunidad);         
        // alert("entro fin");

        //        parametros.append('IDCOMP', idcomp);       
        //     var parametros = { "NombreProceso":NombreProceso,"nombre":nombre,"oportunidad":oportunidad,"archivos":archivos,};
               $.ajax({
                       data: parametros,
                       url: '../modulos/servclientes/funcionescrm.php',
                       type: 'post',
                       contentType: false,
                       processData: false,
                       beforeSend: function () {
                        // alert("antes de ");
                       },
                       success: function (response) {
                                // alert("Guardo "+response);
                             if(response.trim()!="ERROR")
                             {
                               swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                        //        guardainstrumentos_det(response);
                                LimpiarCampos();
                             }
                             if(response.trim()=="ERROR")
                             {
                               swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                             }
                       }
               });
        }

 //**** carga opciones perfiles */
function buscanotas() {
        var table=$('#tabla').DataTable(); 
        var textop=$('#perfil').val();
        // alert("muestre"+ruta);
        NombreProceso = "BUSCANOTAS";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "perfil":textop,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/ventas/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                //  alert(response)
                                // $('#resultadoperfiles tbody').html(response);
                                table.destroy();
                                $('#tabla tbody').html(response);
                                $('#tabla').DataTable( {
                                        dom: 'Bfrtip',
                                        buttons: [
                                            'copy', 'csv', 'excel', 'pdf', 'print'
                                        ]
                                    } );    

                        }
                });
        }

        function buscaproductos() {
                var table=$('#tabla').DataTable(); 
                var textop=$('#perfil').val();
                // alert("muestre"+ruta);
                NombreProceso = "BUSCAPRODUCTOS";
                var parametros = {  
                        "NombreProceso":NombreProceso,
                        "perfil":textop,
                };
                        $.ajax({
                                data: parametros,
                                url: '../modulos/ventas/funciones.php',
                                type: 'post',
                                beforeSend: function () {
                                },
                                success: function (response) {
                                        //  alert(response)
                                        // $('#resultadoperfiles tbody').html(response);
                                        table.destroy();
                                        $('#tabla tbody').html(response);
                                        $('#tabla').DataTable( {
                                                dom: 'Bfrtip',
                                                buttons: [
                                                    'copy', 'csv', 'excel', 'pdf', 'print'
                                                ]
                                            } );    
        
                                }
                        });
                }  
                
function buscalistagastos() {
                        var table=$('#tabla').DataTable(); 
                        var textop=$('#perfil').val();
                        // alert("muestre"+ruta);
                        NombreProceso = "BUSCALISTAGASTOS";
                        var parametros = {  
                                "NombreProceso":NombreProceso,
                                "perfil":textop,
                        };
                                $.ajax({
                                        data: parametros,
                                        url: '../modulos/ventas/funciones.php',
                                        type: 'post',
                                        beforeSend: function () {
                                        },
                                        success: function (response) {
                                                //  alert(response)
                                                // $('#resultadoperfiles tbody').html(response);
                                                table.destroy();
                                                $('#tabla tbody').html(response);
                                                $('#tabla').DataTable( {
                                                        dom: 'Bfrtip',
                                                        buttons: [
                                                            'copy', 'csv', 'excel', 'pdf', 'print'
                                                        ]
                                                    } );    
                
                                        }
                                });
                        } 

function buscaventaproductos() {
 var table=$('#tabla').DataTable();
 var textop=$('#perfil').val();
                                // alert("muestre"+ruta);
                                NombreProceso = "BUSCAVENTAPRODUCTOS";
                                var parametros = {  
                                        "NombreProceso":NombreProceso,
                                        "perfil":textop,
                                };
                                        $.ajax({
                                                data: parametros,
                                                url: '../modulos/ventas/funciones.php',
                                                type: 'post',
                                                beforeSend: function () {
                                                },
                                                success: function (response) {
                                                        //  alert(response)
                                                        // $('#resultadoperfiles tbody').html(response);
                                                        table.destroy();
                                                        $('#tabla tbody').html(response);
                                                        $('#tabla').DataTable( {
                                                                dom: 'Bfrtip',
                                                                buttons: [
                                                                    'copy', 'csv', 'excel', 'pdf', 'print'
                                                                ]
                                                            } );    
                        
                                                }
                                        });
} 
 //**** carga opciones perfiles */
 function buscaarchivos() {
        var table=$('#tabla').DataTable(); 
        var textop=$('#perfil').val();
        // alert("muestre"+ruta);
        // alert("muestre");

        NombreProceso = "BUSCAARCHIVOS";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "perfil":textop,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/ventas/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                // alert(response)
                                // $('#resultadoperfiles tbody').html(response);
                                table.destroy();
                                $('#tabla tbody').html(response);
                                $('#tabla').DataTable( {
                                        dom: 'Bfrtip',
                                        buttons: [
                                            'copy', 'csv', 'excel', 'pdf', 'print'
                                        ]
                                    } );    

                        }
                });
        }
function agregaformnotas(datos){
                //alert("entroddd");
                var d=datos.split('||');
                $('#idpersona').val(d[0]);
                $('#nombreu').val(d[1]);
                $('#descripcionu').val(d[2]);
                $('#toportunidadu').val(d[3]);
                $('#oportunidadu').val(d[4]);
                //alert("entro");
}
function agregaformarchivos(datos){
        //alert("entroddd");
        var d=datos.split('||');
        $('#idpersona').val(d[0]);
        $('#nombreu').val(d[1]);
        $('#descripcionu').val(d[2]);
        $('#toportunidadu').val(d[3]);
        $('#oportunidadu').val(d[4]);
        //alert("entro");
}
function agregaformproductos(datos){
        // alert("entroddd"+datos);

        var d=datos.split('||');
        $('#idpersona').val(d[0]);
        $('#nombreu').val(d[1]);
        $('#valoru').val(d[3]);
        // $('#descripcionu').val(d[2]);
        // alert("entro"+d[2]);
        var cadena=d[2].replace ('<br>','');
        $('#descripcionu').val(cadena);
        
}

function agregaformgastos(datos){
        // alert("entroddd"+datos);

        var d=datos.split('||');
        $('#idpersona').val(d[0]);
        $('#nombreu').val(d[1]);
        // $('#descripcionu').val(d[2]);
        // alert("entro"+d[2]);
        var cadena=d[2].replace ('<br>','');
        $('#descripcionu').val(cadena);     
}
function actualizaproducto()
{
        var id=$('#idpersona').val();
	var nombre=$('#nombreu').val();
	var descripcion=$('#descripcionu').val();
	var valor=$('#valoru').val();
	
        NombreProceso = "ACTUALIZAPRODUCTO";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "id":id,
                "nombre":nombre,
                "valor":valor,
                "descripcion":descripcion,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/ventas/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                //   alert(response)
                                if(response.trim()=="SI")
                                {
                                swal("¡Muy bien!", "Se ha Actualizado el producto exitosamente", "success");
                               // LimpiarCampos();
                               buscaproductos();
                                }
                                else
                                swal("¡Error!", "NO Se ha actualizado el producto", "error");
                        }
                });
               
}

function guardacampana()
{
       var nombre = $('#nombre').val();
       var estado = $('#estado').val();
       var fecha1 = $('#fecha1').val();
       var fecha2 = $('#fecha2').val();
       var tipos = $('#tipos').val();
       var cual = $('#cual').val();
       var activar = $('#activar').val();
       var numenviados = $('#numenviados').val();
       var costoppto = $('#costoppto').val();
       var costoreal = $('#costoreal').val();
       var porcrespuesta = $('#porcrespuesta').val();
       var ingresoprev = $('#ingresoprev').val();
       var obs = $('#obs').val();
       var campanappal = $('#campanappal').val();

       NombreProceso = "GUARDACAMPANA";
       var parametros = {  
       "NombreProceso":NombreProceso,
       "nombre":nombre,
       "estado":estado,
       "fecha1":fecha1,
       "fecha2":fecha2,
       "tipos":tipos,
       "cual":cual,
       "activar":activar,
       "numenviados":numenviados,
       "costoppto":costoppto,
       "costoreal":costoreal,
       "porcrespuesta":porcrespuesta,
       "ingresoprev":ingresoprev,
       "obs":obs,
       "campanappal":campanappal,
       };
       $.ajax({
               data: parametros,
               url: '../modulos/marketing/funciones.php',
               type: 'post',
               beforeSend: function () {
               },
               success: function (response) {
                         alert("Guardo "+response);
                     if(response.trim()=="SI")
                     {
                       swal("¡Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                //        guardainstrumentos_det(response);
                      LimpiarCampos();
                     }
                     if(response.trim()=="ERROR")
                     {
                       swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                     }
               }
       });
} 

function buscacampana() {
        var table=$('#tabla').DataTable(); 
        var textop=$('#perfil').val();
        // alert("muestre"+ruta);
        // alert("muestre");

        NombreProceso = "BUSCACAMPANAS";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "perfil":textop,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/marketing/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                // alert(response)
                                // $('#resultadoperfiles tbody').html(response);
                                table.destroy();
                                $('#tabla tbody').html(response);
                                $('#tabla').DataTable( {
                                        dom: 'Bfrtip',
                                        buttons: [
                                            'copy', 'csv', 'excel', 'pdf', 'print'
                                        ]
                                    } );    

                        }
                });
        }
        function agregaroportunidadcampana()
        {
                //  alert("entro");
        //        var ndiv = $("#tablaP tbody tr").length;
               var oportunidadB=$("#oportunidadB").val();
               var oportunidadBnombre=$('#oportunidadB option:selected').text();
               var campana=$("#idcampanaactual").val();
        //        alert("idc:"+campana);

        //        var valor=$("#valor").val(); 
               // alert("si "+nfila);
             NombreProceso = "GUARDACAMPANASOPORTUNIDADES";
              var parametros = {  
              "NombreProceso":NombreProceso,
              "campana":campana,
              "oportunidadB":oportunidadB,
              };
              $.ajax({
                      data: parametros,
                      url: '../modulos/marketing/funciones.php',
                      type: 'post',
                      beforeSend: function () {
                        // alert("si ");
                      },
                      success: function (response) {
                                // alert("Guardo "+response);
                            if(response.trim()!="ERROR")
                            {
                        //        nfila=nfila+1;
                        //       var htmlTags='<div id="'+oportunidadB+'"><a href="#">Id: '+oportunidadB+' <p class="card-text">Nombre: '+oportunidadBnombre+'</p> </a></div>';    

                              var htmlTags= '<div class="col-lg-6 col-md-6  id="'+oportunidadB+'"><div class="card"><div class="card-body"><i class="ti-cup"></i> <small>'+oportunidadBnombre+'</small></div></div></div>';
                              swal("¡Muy bien!", "Se ha agregado la informacion exitosamente", "success");
                              $("#oportunidades ").append(htmlTags);
                               }
                            if(response.trim()=="ERROR")
                            {
                              swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                            }
                      }
              });
       }

       function agregargastoscampana()
       {
        var d = new Date(); 
        var month = d.getMonth()+1;
        var day = d.getDate(); 
        var output = d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;

        
              var titulo=$('#titulog option:selected').text();
              var idgasto=$("#titulog").val();
              var valor=$("#valorg").val();
              var tipon=$("#tipon").val();
              if(tipon=='CAMPANA')
              {
              var campana=$("#idcampanaactual").val();
              }
              if(tipon=='OPORTUNIDAD')
              {
              var campana=$("#idoportunidadactual").val();
              }
            NombreProceso = "GUARDACAMPANASGASTOS";
             var parametros = {  
             "NombreProceso":NombreProceso,
             "campana":campana,
             "titulo":titulo,
            "tipon":tipon,
            "valor":valor,
            "idgasto":idgasto,
             };
             $.ajax({
                     data: parametros,
                     url: '../modulos/marketing/funciones.php',
                     type: 'post',
                     beforeSend: function () {
                        // alert("si ");
                     },
                     success: function (response) {
                                //  alert("Guardo "+response);
                           if(response.trim()!="ERROR")
                           {
                             var idgasto=response.trim();
                                //     alert(idnota);
                             var tipodiv=2;
                             var htmlTags= '<div class="col-lg-6 col-md-6"  id="Gasto_'+response.trim()+'"><div class="card"><div class="card-body"><button class="close text-danger border-danger" value="Eliminar" onclick="eliminaelementoscampana('+idgasto+','+tipodiv+')"><i class="fa fa-trash"></i></button><small><div class="stat-text"><i class="fa fa-usd"></i> '+titulo+'</div><div class="stat-digit"><h5><small>'+output+'</small></h5></div><div class="stat-digit"><h5><small>'+valor+'</small></h5></div></small> </div></div></div>';

                             swal("¡Muy bien!", "Se ha agregado la informacion exitosamente", "success");
                             $("#gastos ").append(htmlTags);
                              }
                           if(response.trim()=="ERROR")
                           {
                             swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                           }
                     }
             });
      }

      function agregarventascampana()
      {
       var d = new Date(); 
       var month = d.getMonth()+1;
       var day = d.getDate(); 
       var output = d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;

       
             var nombreproducto=$('#productov option:selected').text();
             var titulo=$("#titulov").val();
             var producto=$("#productov").val();
             var valor=$("#valorv").val();
             var descripcion=$("#descripcionv").val();
             var tipon=$("#tipon").val();
             if(tipon=='CAMPANA')
             {
             var campana=$("#idcampanaactual").val();
             }
             if(tipon=='OPORTUNIDAD')
             {
             var campana=$("#idoportunidadactual").val();
             }
           NombreProceso = "GUARDACAMPANASVENTAS";
            var parametros = {  
            "NombreProceso":NombreProceso,
            "campana":campana,
            "titulo":titulo,
            "tipon":tipon,
            "valor":valor,
            "producto":producto,
            "descripcion":descripcion,
            };
            $.ajax({
                    data: parametros,
                    url: '../modulos/marketing/funciones.php',
                    type: 'post',
                    beforeSend: function () {
                       // alert("si ");
                    },
                    success: function (response) {
                               //  alert("Guardo "+response);
                          if(response.trim()!="ERROR")
                          {
                            var tipodiv=4;
                            var idventa=response.trim();
                            var htmlTags= '<div class="col-lg-6 col-md-6"  id="'+idventa+'"><div class="card"><div class="card-body"><button class="close text-danger border-danger" value="Eliminar" onclick="eliminaelementoscampana('+idventa+','+tipodiv+')"><i class="fa fa-trash"></i></button><small><div class="stat-text"><i class="fa fa-usd"></i> '+titulo+'</div><div class="stat-digit"><h5><small>'+output+'</small></h5></div><div class="stat-digit"><h5><small>'+nombreproducto+'</small></h5></div><div class="stat-digit"><h5><small>'+descripcion+'</small></h5></div><div class="stat-digit"><h5><small>'+valor+'</small></h5></div></small> </div></div></div>';

                            swal("¡Muy bien!", "Se ha agregado la informacion exitosamente", "success");
                            $("#ventaproductos ").append(htmlTags);
                             }
                          if(response.trim()=="ERROR")
                          {
                            swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                          }
                    }
            });
     }

      function agregarnotascampana()
      {
        var d = new Date(); 
        var month = d.getMonth()+1;
        var day = d.getDate(); 
        var output = d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;
              var titulog=$("#titulon").val();
              var tipon=$("#tipon").val();
             var descripcion=$("#descripcionn").val();
             if(tipon=='CAMPANA')
             {
             var campana=$("#idcampanaactual").val();
             }
             if(tipon=='OPORTUNIDAD')
             {
             var campana=$("#idoportunidadactual").val();
             }
             // alert("si "+nfila);
           NombreProceso = "GUARDACAMPANASNOTAS";
            var parametros = {  
            "NombreProceso":NombreProceso,
            "campana":campana,
            "titulo":titulog,
            "tipon":tipon,
            "descripcion":descripcion,
            };
            $.ajax({
                    data: parametros,
                    url: '../modulos/marketing/funciones.php',
                    type: 'post',
                    beforeSend: function () {
                //        alert("si ");
                    },
                    success: function (response) {
                                // alert("Guardo "+response);
                          if(response.trim()!="ERROR")
                          {
                            var idnota=response.trim();
                        //     alert(idnota);
                            var tipodiv=0;
                            var htmlTags= '<div class="col-lg-6 col-md-6"  id="Nota_'+idnota+'"><div class="card"><div class="card-body"><button class="close text-danger border-danger" value="Eliminar" onclick="eliminaelementoscampana('+idnota+','+tipodiv+')"><i class="fa fa-trash"></i></button><small><div class="stat-text"><i class="fa fa-pencil-square-o"></i> '+titulog+'</div><div class="stat-digit"><h5><small>'+output+'</small></h5></div><div class="stat-digit"><h5><small>'+descripcion+'</small></h5></div></small> </div></div></div>';

                        //     <button class="close text-danger border-danger" value="Eliminar" onclick="eliminaelementoscampana('.$fila[0].','.$tipodiv.')"><i class="fa fa-trash"></i></button>

                            swal("¡Muy bien!", "Se ha agregado la informacion exitosamente", "success");
                            $("#notas ").append(htmlTags);
                           }
                          if(response.trim()=="ERROR")
                          {
                            swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                          }
                    }
            });
     }
function eliminaelementoscampana(elemento,tipo)
{
        var tiposdiv = ["Nota_", "Archivo_", "Gasto_","Contacto_","Venta_"];   
        var tablas=["notas","archivos","gastos","campanas_contactos","ventaproductos"];
        var llaves=["idnota","idarchivos","idgasto","idcampaconta","idventa"];
        NombreProceso = "ELIMINACAMPANASELEMENTOS";
        var tabla=tablas[tipo];
        var llave=llaves[tipo];
        var parametros = {  
                "NombreProceso":NombreProceso,
                "tabla":tabla,
                "llave":llave,
                "valor":elemento,
                };
        $.ajax({
                data: parametros,
                url: '../modulos/marketing/funciones.php',
                type: 'post',
                beforeSend: function () {
                },
                success: function (response) {
                        //   alert(response)
                        if(response.trim()=="SI")
                        {
                        // swal("¡Muy bien!", "Se ha Actualizado la Clasificacion exitosamente", "success");
                       // LimpiarCampos();
                        $('#'+tiposdiv[tipo]+""+elemento).remove();                 
                        }
                        else
                        swal("¡Error!", "NO se ha ELIMINADO el elemento", "error");
                }
        });
        // alert("EL"+tiposdiv[tipo]+""+elemento);
}
     function agregararchivoscampana()
     {
      var d = new Date(); 
      var month = d.getMonth()+1;
      var day = d.getDate(); 
      var output = d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;
     //        var ndiv = $("#tablaP tbody tr").length;
            var titulo=$("#tituloa").val();
            var tipon=$("#tipon").val();
            if(tipon=='CAMPANA')
            {
            var campana=$("#idcampanaactual").val();
            }
            if(tipon=='OPORTUNIDAD')
            {
            var campana=$("#idoportunidadactual").val();
            }
            NombreProceso = "GUARDACAMPANASARCHIVOS";
        //     alert("entroaed");

        var archivos = document.getElementById("archivoscarga");
        var filec = archivos.files[0];
        var parametros = new FormData();       
 //        alert("entro new");
                parametros.append('archivocarga', filec);
                parametros.append('NombreProceso', NombreProceso);       
                parametros.append('campana', campana);       
                parametros.append('tipon', tipon); 
                parametros.append('titulo', titulo); 
                // alert("aqui");
           
           $.ajax({
                   data: parametros,
                   url: '../modulos/marketing/funciones.php',
                   type: 'post',
                   contentType: false,
                   processData: false,
                   beforeSend: function () {
                //        alert("si ");
                   },
                   success: function (response) {
                        //        alert("Guardo "+response);
                         if(response.trim()!="ERROR")
                         {
                   
                           var datos=response.split('@');
                           var tipodiv=1;
                        //      alert("d"+datos[0]);
                           var htmlTags= '<div class="col-lg-6 col-md-6"  id="Archivo_'+datos[0]+'"><div class="card"><div class="card-body"><button class="close text-danger border-danger" value="Eliminar" onclick="eliminaelementoscampana('+datos[0]+','+tipodiv+')"><i class="fa fa-trash"></i></button><small><div class="stat-text"><i class="fa fa-download"></i> '+titulo+'</div><div class="stat-digit"><h5><small>'+output+'</small></h5></div><div class="stat-digit"><a href="../archivos/'+datos[1]+'" target="_blank"><h5><small>'+datos[1]+'</small></h5></a></div></small> </div></div></div>';

                           swal("¡Muy bien!", "Se ha agregado la informacion exitosamente", "success");
                           $("#archivos ").append(htmlTags);
                            }
                         if(response.trim()=="ERROR")
                         {
                           swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                         }
                   }
           });
    }



       function ocultardiv(iddiv)
       {
        $("#"+iddiv).toggle();
       }



       function showGraphcontacto()
        {
            // alert("entro");
            {
            // alert("entro dsdaca");
                $.post("../modulos/controles/datosgrafico.php",
                function (data)
                {
            // alert("kiki");
            // alert("kiki"+data)
                    console.log(data);
                     var name = [];
                     var marks = [];
                     var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
                     var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
            
                    var info=JSON.parse(data);
                    for (var i in info) {
                            if(info[i].clasificacion==null)
                            {
                                name.push("Sin Clasificar");
                            }
                            else{
                        name.push(info[i].clasificacion);
                            }
                        marks.push(info[i].valores);
                        //  alert(info[i].clasificacion);
                    }

                    var chartdata = {
                        labels: name,
                        datasets: [
                            {
                                label: 'CONTACTOS',
                                backgroundColor: color,
                                borderColor: color,
                                borderWidth: 2,
                                hoverBackgroundColor: color,
                                hoverBorderColor: bordercolor,
                                data: marks
                            }
                        ]
                    };

                    var graphTarget = $("#graphCanvascontactos");

                    var barGraph = new Chart(graphTarget, {
                        type: 'doughnut',
                        data: chartdata
                    });
                });
            }
        }


        function showGraphaccion()
        {
            // alert("entro");
            {
            // alert("entro dsdaca");
                $.post("../modulos/controles/datosgraficoaccion.php",
                function (data)
                {
            // alert("kiki");
            // alert("kiki"+data)
                    console.log(data);
                     var name = [];
                     var marks = [];
                     var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
                     var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
            
                    var info=JSON.parse(data);
                    for (var i in info) {
                        if(info[i].tipoaccion==null)
                        {
                            name.push("Sin Clasificar");
                        }
                        else{
                                name.push(info[i].tipoaccion);
                        }
                        // name.push(info[i].tipoaccion);
                        marks.push(info[i].valores);
                        //  alert(info[i].clasificacion);
                    }

                    var chartdata = {
                        labels: name,
                        datasets: [
                            {
                                label: 'ACCIONES',
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

                    var barGraph = new Chart(graphTarget, {
                        type: 'pie',
                        data: chartdata
                    });
                });
            }
        }

        function showGraphoportunidades()
        {
            // alert("entro");
            {
            // alert("entro dsdaca");
                $.post("../modulos/controles/datosgraficooportunidades.php",
                function (data)
                {
            // alert("kiki");
            // alert("kiki"+data)
                    console.log(data);
                     var name = [];
                     var marks = [];
                     var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
                     var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
            
                    var info=JSON.parse(data);
                    for (var i in info) {
                        if(info[i].tipoaccion==null)
                        {
                            name.push("Sin Clasificar");
                        }
                        else{
                                name.push(info[i].tipoaccion);
                        }
                        // name.push(info[i].tipoaccion);
                        marks.push(info[i].valores);
                        //  alert(info[i].clasificacion);
                    }

                    var chartdata = {
                        labels: name,
                        datasets: [
                            {
                                label: 'OPORTUNIDADES',
                                backgroundColor: color,
                                borderColor: color,
                                borderWidth: 2,
                                hoverBackgroundColor: color,
                                hoverBorderColor: bordercolor,
                                data: marks
                            }
                        ]
                    };

                    var graphTarget = $("#graphCanvasoportunidades");

                    var barGraph = new Chart(graphTarget, {
                        type: 'pie',
                        data: chartdata
                    });
                });
            }
        }

        function informeclientesestado()
        {
                // alert("entro")
                var table=$('#tabla').DataTable();
                var estado=$('#estado').val();                   
                var name = [];
                var marks = [];
                var rotulo=estado;
                var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
                var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
                   var NombreProceso = "REPORTECLIENTESESTADO";
                   var parametros = {  
                   "NombreProceso":NombreProceso,
                   "estado":estado,
                   };
                // alert("aqer"+estado);
                             $.ajax({
                                     data: parametros,
                                     url: '../modulos/clientes/funciones.php',
                                     type: 'post',
                                     beforeSend: function () {
                                        // alert("si ");
                                     },
                                     success: function (response) {
                                //      alert("Guardo "+response);
                                     
                                        var registros ="";     
                                        json = JSON.parse(response);
                                        var promedio=0;
                                        var totalvalores=0;
                                        for (var i in json) {
                                                totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                                }

                                        for (var i in json) {
                                                        if(json[i].estado==null)
                                                        {
                                                        name.push("Sin Clasificar");
                                                        }
                                                        else{
                                                        if(json[i].estado=="S"){        
                                                        name.push("ACTIVO");
                                                        json[i].estado='ACTIVO';}
                                                        if(json[i].estado=="N"){       
                                                        name.push("INACTIVO");
                                                        json[i].estado='INACTIVO';
                                                        }
                                                        }
                                                        marks.push(json[i].total);
                                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;

                                            var registros =registros+'<tr id=' + json[i].estado + '><td >' + json[i].estado + '</td><td>'+json[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                        }
                                             table.destroy();
                                             $('#tabla tbody').html(registros);
                                             $('#tabla').DataTable( {
                                                     dom: 'Bfrtip',
                                                     buttons: [
                                                         'copy', 'csv', 'excel',  {
                                                                extend: 'pdf',
                                                                title: 'CLIENTES POR ESTADO: '+rotulo,
                                                                filename: 'CLIENTES POR ESTADO'
                                                              },  {
                                                                extend: 'print',
                                                                title: 'CLIENTES POR ESTADO: '+rotulo,
                                                                filename: 'CLIENTES POR ESTADO'
                                                              }
                                                     ]
                                                 } );   
                                     
                                                             // //*** grafica */
                                                          
             
                                                        var chartdata = {
                                                                labels: name,
                                                                datasets: [
                                                                    {
                                                                        label: 'CLIENTES POR ESTADO',
                                                                        backgroundColor: color,
                                                                        borderColor: color,
                                                                        borderWidth: 2,
                                                                        hoverBackgroundColor: color,
                                                                        hoverBorderColor: bordercolor,
                                                                        data: marks
                                                                    }
                                                                ]
                                                            };
                                        
                                                            var graphTarget = $("#graphCanvasestadosclientes");
                                        
                                                            var barGraph = new Chart(graphTarget, {
                                                                type: 'pie',
                                                                data: chartdata
                                                            });
                                                                     
                                                             //         //***fin grafica */
                                
                                     
                                     }
                         });
}

function informeclasclientesestado()
{
        // alert("entro")
        var table=$('#tabla2').DataTable();
        var clasificacion=$('#clasificacion').val();                   
        var name = [];
        var marks = [];
        var rotulo=clasificacion;
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
           var NombreProceso = "REPORTECLIENTESCLASIFICACION";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "clasificacion":clasificacion,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/clientes/funciones.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                        //      alert("Guardo "+response);
                             
                                var registros ="";     
                                json = JSON.parse(response);
                                var promedio=0;
                                var totalvalores=0;
                                for (var i in json) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                                if(json[i].clasificacion==null)
                                                {
                                                name.push("Sin Clasificar");
                                                json[i].clasificacion="Sin Clasificar";
                                                }
                                                else{

                                                name.push(json[i].clasificacion);
                                                }
                                                marks.push(json[i].total);
                                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;

                                    var registros =registros+'<tr id=' + json[i].clasificacion + '><td >' + json[i].clasificacion + '<td>'+json[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                }
                                     table.destroy();
                                     $('#tabla2 tbody').html(registros);
                                     $('#tabla2').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv', 'excel',  {
                                                        extend: 'pdf',
                                                        title: 'CLASIFICACION DE CLIENTES POR ESTADO: '+rotulo,
                                                        filename: 'CLASIFICACION DE CLIENTES POR ESTADO'
                                                      },  {
                                                        extend: 'print',
                                                        title: 'CLASIFICACION DE CLIENTES POR ESTADO: '+rotulo,
                                                        filename: 'CLASIFICACION DE CLIENTES POR ESTADO'
                                                      }
                                             ]
                                         } );   
                             
                                                     // //*** grafica */
                                                  
     
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'CLIENTES POR ESTADO',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                
                                                    var graphTarget = $("#graphCanvasclasclientes");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'pie',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}

function informeclasclientesestado()
{
        // alert("entro")
        var table=$('#tabla2').DataTable();
        var clasificacion=$('#clasificacion').val();                   
        var name = [];
        var marks = [];
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
           var NombreProceso = "REPORTECLIENTESCLASIFICACION";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "clasificacion":clasificacion,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/clientes/funciones.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                        //      alert("Guardo "+response);
                             
                                var registros ="";     
                                json = JSON.parse(response);
                                var promedio=0;
                                var totalvalores=0;
                                for (var i in json) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                                if(json[i].clasificacion==null)
                                                {
                                                name.push("Sin Clasificar");
                                                json[i].clasificacion="Sin Clasificar";
                                                }
                                                else{

                                                name.push(json[i].clasificacion);
                                                }
                                                marks.push(json[i].total);
                                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;

                                    var registros =registros+'<tr id=' + json[i].clasificacion + '><td >' + json[i].clasificacion + '<td>'+json[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                }
                                     table.destroy();
                                     $('#tabla2 tbody').html(registros);
                                     $('#tabla2').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv', 'excel', 'pdf', 'print'
                                             ]
                                         } );   
                             
                                                     // //*** grafica */
                                                  
     
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'CLIENTES POR ESTADO',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                
                                                    var graphTarget = $("#graphCanvasclasclientes");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'pie',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}


function informepqrs()
{
        // alert("entro")
        var table=$('#tabla').DataTable();
        var fecha1=$('#fecha1pqrs').val();                   
        var fecha2=$('#fecha2pqrs').val();                   
        var estado=$('#estado').val();                   
        var estadopq=$('#estadopq').val();                   
        var name = [];
        var marks = [];
        var marks2 = [];
        var rotulo= fecha1+"  a  "+fecha2+" "+estadopq;
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
        // var color1=rgba(151,249,190,0.5);
        // var color2=rgba(252,147,65,0.5);
           var NombreProceso = "REPORTEPQRS";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "estado":estado,
           "estadopq":estadopq,
           "fecha1":fecha1,
           "fecha2":fecha2,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/servclientes/funcionescrm.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                        //      alert("Guardo "+response);
                             
                                var registros ="";     
                                var repetido="";
                                var etiquetas=[];
                                var todostipos=[];
                                json = JSON.parse(response);
                                for(var i in json)
                                {
                                  if(json[i].estado!=repetido)
                                  {
                                        etiquetas.push(json[i].estado);
                                        repetido=json[i].estado;
                                  }      
                                       
                                }
                                for(var i = etiquetas.length -1; i >=0; i--){
                                        if(etiquetas.indexOf(etiquetas[i]) !== i) etiquetas.splice(i,1);
                                      }
                                repetido="";
                                for(var i in json)
                                {
                                  if(json[i].tipo!=repetido)
                                  {
                                        todostipos.push(json[i].tipo);
                                        repetido=json[i].tipo;
                                  }      
                                }
                                for(var i = todostipos.length -1; i >=0; i--){
                                        if(todostipos.indexOf(todostipos[i]) !== i) todostipos.splice(i,1);
                                      }
                                var tama=etiquetas.length;
                                var tamab=todostipos.length;
                                // alert("Tama:"+tama);
                                // var formateo=[];
                                var z=0;
                                var b=0;
                                 var multi=[];
                                
                                for (b=0; b < tamab; b++) {
                                        multi[b]=[];
                                 for (z=0; z < tama; z++)
                                 {
                                        multi[b][z]=0;
                                        for(var i in json)
                                        {
                                        // alert("estadoE:"+etiquetas[z]+"estaj"+json[i].estado+"Tiposb"+todostipos[b]+"Tiposj"+json[i].tipo);      
                                        if(json[i].estado==etiquetas[z] && json[i].tipo==todostipos[b])
                                                {

                                                multi[b][z]=json[i].total;
                                                // alert("estadoE:"+etiquetas[z]+"estaj"+json[i].estado+"Tiposb"+todostipos[b]+"Tiposj"+json[i].tipo+"  Valor:"+multi[b][z]);      
                                         }
                                        
                                        }
                                        // alert("v:"+multi[b][z])  ;                             

                                 }    
                                }   
                                // console.log(multi);                               
                               
                                var totalvalores=0;
                                for (var i in json) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                        var promedio=0;
                                        if(json[i].estado==null)
                                        {
                                        name.push("Sin Clasificar");
                                        json[i].estado="Sin Clasificar";
                                        }
                                        else{
                                        name.push(json[i].estado);
                                        }
                                        marks.push(json[i].total);
                                        marks2.push(json[i].tipo);
                                        promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;
                            var registros =registros+'<tr id=' + json[i].estado + '><td >' + json[i].estado + '</td><td >' + json[i].tipo + '</td><td>'+json[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                }
                                     table.destroy();
                                     $('#tabla tbody').html(registros);
                                     $('#tabla').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv', 'excel',  {
                                                        extend: 'pdf',
                                                        title: 'PQRSF: '+rotulo,
                                                        filename: 'PQRSF'
                                                      },  {
                                                        extend: 'print',
                                                        title: 'PQRSF: '+rotulo,
                                                        filename: 'PQRSF'
                                                      }
                                             ]
                                         } );   
                             
/*** a crear el dataset */
var colors = [];
colors.push(                        
{
           fillColor : "rgba(95,137,250,0.2)",
           strokeColor : "rgba(95,137,250,1)",
           highlightFill: "rgba(95,137,250,0.75)",
           highlightStroke: "rgba(95,137,250,1)"
});
colors.push(                        
{
           fillColor : "rgba(245,75,75,0.2)",
           strokeColor : "rgba(245,75,75,1)",
           highlightFill : "rgba(245,75,75,0.75)",
           highlightStroke : "rgba(245,75,75,1)"
});
colors.push(                        
{
           fillColor : "rgba(98,223,114,0.2)",
           strokeColor : "rgba(98,223,114,1)",
           highlightFill : "rgba(98,223,114,0.75)",
           highlightStroke : "rgba(98,223,114,1)",
});

colors.push(                        
        {
                   fillColor : "rgba(89,24,11,0.2)",
                   strokeColor : "rgba(89,24,11,1)",
                   highlightFill : "rgba(89,24,11,0.75)",
                   highlightStroke : "rgba(89,24,11,1)",
        });
 colors.push(                        
                {
                           fillColor : "rgba(198,23,14,0.2)",
                           strokeColor : "rgba(198,23,14,1)",
                           highlightFill : "rgba(198,23,14,0.75)",
                           highlightStroke : "rgba(198,23,14,1)",
                });
                        


var valores=0;
var labeldg="";
var rojo=255;
var verde=99;
var azul=132;
var colorfondo = ['rgba('+rojo+','+verde+','+azul+', 0.2)','rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
var colorborde = ['rgba('+rojo+','+verde+','+azul+', 1)'];
var datasetiandos=[];
for (b=0; b < tamab; b++) {
var datasss=[];

        for (z=0; z < tama; z++)
        {
         valores=multi[b][z];
         datasss.push(valores);
                         
        }
     
        labeldg=todostipos[b];
        
var micolor=b%5;
        colorfondo = ['rgba('+(rojo)+','+verde+','+azul+', 0.2)','rgba('+(54)+', '+(162)+', 235, 0.2)', 'rgba('+(255)+', '+(206)+', 86, 0.2)', 'rgba('+(75)+', 192, 192, 0.2)', 'rgba('+(153)+', 102, 255, 0.2)', 'rgba('+(255)+', 159, 64, 0.2)'];
        colorborde = ['rgba('+(rojo/(b+1))+','+verde+','+azul+', 1)','rgba('+(54/(b+1))+', '+(162/(b+1))+', 235, 1)', 'rgba('+(255/(b+1))+', '+(206/(b+1))+', 86, 1)', 'rgba('+(75/(b+1))+', 192, 192,1)', 'rgba('+(153/(b+1))+', 102, 255, 1)', 'rgba('+(255/(b+1))+', 159, 64, 1)'];         
        
    

        var datasetiando={
        label:labeldg ,
        backgroundColor: colors[micolor].fillColor,
         hoverBorderColor: colors[micolor].strokeColor,
        data:datasss
        }; 
        datasetiandos.push(datasetiando);
        console.log(datasetiandos);

                // alert("set"+datasetiando);           
        //  delete datasss;
}

/***fin dataset */

                                                     // //*** grafica */
                                                //      var chartdata = {
                                                //         labels: etiquetas,
                                                //         datasets: [
                                                //             {
                                                //                 label: marks2,
                                                //                 backgroundColor: color,
                                                //                 borderColor: color,
                                                //                 borderWidth: 2,
                                                //                 hoverBackgroundColor: color,
                                                //                 hoverBorderColor: bordercolor,
                                                //                 data: marks
                                                //             }
                                                //         ]
                                                //     };
                                
                                                var chartdata = {
                                                        labels: etiquetas,
                                                        datasets:datasetiandos,
                                                    };
                                                    var graphTarget = $("#graphCanvaspqrs");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'bar',
                                                        data: chartdata
                                                    });
                                                //      //         //***fin grafica */
                        
                             
                             }
                 });
}

function informepqrstipo()
{
        // alert("entro")
        var table=$('#tabla4').DataTable();
        var fecha1=$('#fecha1pqrs2').val();                   
        var fecha2=$('#fecha2pqrs2').val();                   
        var estado=$('#estado2').val();                   
        var name = [];
        var marks = [];
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
           var NombreProceso = "REPORTEPQRSTIPO";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "estado":estado,
           "fecha1":fecha1,
           "fecha2":fecha2,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/servclientes/funcionescrm.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                        //      alert("Guardo "+response);
                             
                                var registros ="";     
                                json = JSON.parse(response);

                                var totalvalores=0;
                                var promedio=0;
                                for (var i in json) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                                if(json[i].tipo==null)
                                                {
                                                name.push("Sin Clasificar");
                                                json[i].tipo="Sin Clasificar";
                                                }
                                                else{
                                                name.push(json[i].tipo);
                                                }
                                                marks.push(json[i].total);
                                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;

                                    var registros =registros+'<tr id=' + json[i].tipo + '><td >' + json[i].tipo + '<td>'+json[i].total+'</td><td>'+promedio+'(%)</td></tr>';
                                }
                                     table.destroy();
                                     $('#tabla4 tbody').html(registros);
                                     $('#tabla4').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv', 'excel', 'pdf', 'print'
                                             ]
                                         } );   
                             
                                                     // //*** grafica */
                                                  
     
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'PQRS TIPO',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                
                                                    var graphTarget = $("#graphCanvaspqrs2");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'pie',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}

function informeaccionescanal()
{
        // alert("entro")
        var table=$('#tabla3').DataTable();
        var fecha1=$('#fecha1canal').val();                   
        var fecha2=$('#fecha2canal').val();                   
        var etapas=$('#acciones').val();                   
        var name = [];
        var marks = [];
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
           var NombreProceso = "REPORTEETAPASACCIONESTIPOS";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "etapas":etapas,
           "fecha1":fecha1,
           "fecha2":fecha2,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/servclientes/funcionescrm.php',
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
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                                if(json[i].estados==null)
                                                {
                                                name.push("Sin Clasificar");
                                                json[i].estados="Sin Clasificar";
                                                }
                                                else{
                                                name.push(json[i].estados);
                                                }
                                                marks.push(json[i].total);
                                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;
                                    var registros =registros+'<tr id=' + json[i].estados + '><td >' + json[i].estados + '<td>'+json[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                }
                        //      alert("Guardo "+response);

                                     table.destroy();
                                     $('#tabla3 tbody').html(registros);
                                     $('#tabla3').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv', 'excel', 'pdf', 'print'
                                             ]
                                         } );   
                             
                                                     // //*** grafica */
                                                  
     
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'ACCIONES TIPOS',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                
                                                    var graphTarget = $("#graphCanvasaccionescanal");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'doughnut',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}
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
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
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
                             url: '../modulos/servclientes/funcionescrm.php',
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
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                                if(json[i].estados==null)
                                                {
                                                name.push("Sin Clasificar");
                                                json[i].estados="Sin Clasificar";
                                                }
                                                else{
                                                name.push(json[i].estados);
                                                }
                                marks.push(json[i].total);
                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;
                                    var registros =registros+'<tr id=' + json[i].estados + '><td >' + json[i].estados + '<td>'+json[i].total+'</td><td>'+promedio+'(%)</td></tr>';
                                }
                        //      alert("Guardo "+response);

                                     table.destroy();
                                     $('#tabla2 tbody').html(registros);
                                     $('#tabla2').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv', 'excel',  {
                                                        extend: 'pdf',
                                                        title: 'REPORTE ACCIONES POR ETAPAS: '+rotulo,
                                                        filename: 'REPORTE ACCIONES'
                                                      },  {
                                                        extend: 'print',
                                                        title: 'REPORTE ACCIONES POR ETAPAS: '+rotulo,
                                                        filename: 'REPORTE ACCIONES'
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
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'doughnut',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}


function informeoportunidadetapas()
{
        // alert("entro")
        var table=$('#tabla').DataTable();
        var fecha1=$('#fecha1pqrs').val();                   
        var fecha2=$('#fecha2pqrs').val();                   
        var estado=$('#estado').val();               
        var rotulo=fecha1+" - "+fecha2+"  | "+estado;

        var name = [];
        var marks = [];
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
           var NombreProceso = "REPORTEOPORTUNIDADETAPA";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "estado":estado,
           "fecha1":fecha1,
           "fecha2":fecha2,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/ventas/funciones.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                        //      alert("Guardo "+response);
                             
                                var registros ="";     
                                json = JSON.parse(response);

                                var totalvalores=0;
                                var promedio=0;
                                for (var i in json) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                                if(json[i].estado==null)
                                                {
                                                name.push("Sin Clasificar");
                                                json[i].estado="Sin Clasificar";
                                                }
                                                else{
                                                name.push(json[i].estado);
                                                }
                                                marks.push(json[i].total);
                                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;

                                    var registros =registros+'<tr id=' + json[i].estado + '><td >' + json[i].estado + '</td><td>'+json[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                }
                                var rotulo="Reporte de Ventas de Oportunidades por Etapa";
                                     table.destroy();
                                     $('#tabla tbody').html(registros);
                                     $('#tabla').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv', {
                                                        extend: 'excel',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'REPORTEOPORTUNIDADETAPA'
                                                      }, {
                                                        extend: 'pdf',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'REPORTEOPORTUNIDADETAPA'
                                                      }, {
                                                        extend: 'print',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'REPORTEOPORTUNIDADETAPA'
                                                      }
                                             ]
                                         } );   
                             
                                                     // //*** grafica */
                                                  
     
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'OPORTUNIDADES ETAPAS',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                
                                                    var graphTarget = $("#graphCanvasoporetapa");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'doughnut',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}

function informecampanasetapas()
{
        // alert("entro")
        var table=$('#tablac').DataTable();
        var fecha1=$('#fecha1pqrs').val();                   
        var fecha2=$('#fecha2pqrs').val();                   
        var estado=$('#estado').val();                   
        var rotulo=fecha1+" - "+fecha2+" |"+estado;
        var name = [];
        var marks = [];
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
           var NombreProceso = "REPORTECAMPANAETAPA";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "estado":estado,
           "fecha1":fecha1,
           "fecha2":fecha2,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/marketing/funciones.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                        //      alert("Guardo "+response);
                             
                                var registros ="";     
                                json = JSON.parse(response);

                                var totalvalores=0;
                                var promedio=0;
                                for (var i in json) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                                if(json[i].estado==null)
                                                {
                                                name.push("Sin Clasificar");
                                                json[i].estado="Sin Clasificar";
                                                }
                                                else{
                                                name.push(json[i].estado);
                                                }
                                                marks.push(json[i].total);
                                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;

                                    var registros =registros+'<tr id=' + json[i].estado + '><td >' + json[i].estado + '</td><td>'+json[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                }
                                     table.destroy();
                                     $('#tablac tbody').html(registros);
                                     $('#tablac').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv', 'excel', {
                                                        extend: 'pdf',
                                                        title: 'REPORTE CAMPAÑAS POR ETAPAS: '+rotulo,
                                                        filename: 'REPORTE CAMPAÑAS'
                                                      },  {
                                                        extend: 'print',
                                                        title: 'REPORTE CAMPAÑAS POR ETAPAS: '+rotulo,
                                                        filename: 'REPORTE CAMPAÑAS'
                                                      }
                                             ]
                                         } );   
                             
                                                     // //*** grafica */
                                                  
     
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'CAMPANAS ETAPAS',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                
                                                    var graphTarget = $("#graphCanvasoporetapa");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'doughnut',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}
function informecampanasoportunidades()
{
        // alert("entro")
        var table=$('#tablao').DataTable();
        var fecha1=$('#fecha1pqrso').val();                   
        var fecha2=$('#fecha2pqrso').val();                   
        var estado=$('#estadoo').val();                   
        var name = [];
        var marks = [];
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
           var NombreProceso = "REPORTECAMPANAOPORTUNIDAD";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "estado":estado,
           "fecha1":fecha1,
           "fecha2":fecha2,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/marketing/funciones.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                        //      alert("Guardo "+response);
                             
                                var registros ="";     
                                json = JSON.parse(response);

                                var totalvalores=0;
                                var promedio=0;
                                for (var i in json) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                                if(json[i].estado==null)
                                                {
                                                name.push("Campañas");
                                                json[i].estado="Campañas";
                                                }
                                                else{
                                                name.push(json[i].estado);
                                                }
                                                marks.push(json[i].total);
                                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;

                                    var registros =registros+'<tr id=' + json[i].estado + '><td >' + json[i].estado + '</td><td>'+json[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                }
                                     table.destroy();
                                     $('#tablao tbody').html(registros);
                                     $('#tablao').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv', 'excel', 'pdf', 'print'
                                             ]
                                         } );   
                             
                                                     // //*** grafica */
                                                  
     
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'CAMPANAS OPORTUNIDADES',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                
                                                    var graphTarget = $("#graphCanvasoporcampana");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'doughnut',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}

function informeventasoportunidades()
{
        // alert("entro")
        var table=$('#tablao').DataTable();
        var fecha1=$('#fecha1pqrso').val();                   
        var fecha2=$('#fecha2pqrso').val();                   
        var estado=$('#estadoo').val();                   
        var name = [];
        var marks = [];
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
           var NombreProceso = "REPORTEVENTASOPORTUNIDAD";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "estado":estado,
           "fecha1":fecha1,
           "fecha2":fecha2,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/ventas/funciones.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                        //      alert("Guardo "+response);
                             
                                var registros ="";     
                                json = JSON.parse(response);

                                var totalvalores=0;
                                var promedio=0;
                                for (var i in json) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                                if(json[i].estado==null)
                                                {
                                                name.push("Oportunidades");
                                                json[i].estado="Oportunidades";
                                                }
                                                else{
                                                name.push(json[i].estado);
                                                }
                                                marks.push(json[i].total);
                                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;

                                    var registros =registros+'<tr id=' + json[i].estado + '><td >' + json[i].estado + '</td><td>'+json[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                }
                                var rotulo="Reporte de Ventas por Oportunidades";
                                     table.destroy();
                                     $('#tablao tbody').html(registros);
                                     $('#tablao').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv', {
                                                        extend: 'excel',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'REPORTEVENTASOPORTUNIDAD'
                                                      }, {
                                                        extend: 'pdf',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'REPORTEVENTASOPORTUNIDAD'
                                                      }, {
                                                        extend: 'print',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'REPORTEVENTASOPORTUNIDAD'
                                                      }
                                             ]
                                         } );   
                             
                                                     // //*** grafica */
                                                  
     
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'VENTAS POR OPORTUNIDADES',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                
                                                    var graphTarget = $("#graphCanvasoporcampana");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'doughnut',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}

function informeventasoportunidadesvendedor()
{
        // alert("entro")
        var table=$('#tablaov').DataTable();
        var fecha1=$('#fecha1pqrsov').val();                   
        var fecha2=$('#fecha2pqrsov').val();                   
        var estado=$('#estadoov').val();                   
        var name = [];
        var marks = [];
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
           var NombreProceso = "REPORTEVENTASOPORTUNIDADVENDEDOR";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "estado":estado,
           "fecha1":fecha1,
           "fecha2":fecha2,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/ventas/funciones.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                        //      alert("Guardo "+response);
                             
                                var registros ="";     
                                json = JSON.parse(response);

                                var totalvalores=0;
                                var promedio=0;
                                for (var i in json) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                                if(json[i].estado==null)
                                                {
                                                name.push("Vendedor");
                                                json[i].estado="Vendedor";
                                                }
                                                else{
                                                name.push(json[i].estado);
                                                }
                                                marks.push(json[i].total);
                                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;

                                    var registros =registros+'<tr id=' + json[i].estado + '><td >' + json[i].estado + '</td><td>'+json[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                }
                                var rotulo="Reporte de Ventas por Oportunidades por Vendedor";
                                     table.destroy();
                                     $('#tablaov tbody').html(registros);
                                     $('#tablaov').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv', {
                                                        extend: 'excel',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'REPORTEVENTASOPORTUNIDADVENDEDOR'
                                                      }, {
                                                        extend: 'pdf',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'REPORTEVENTASOPORTUNIDADVENDEDOR'
                                                      }, {
                                                        extend: 'print',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'REPORTEVENTASOPORTUNIDADVENDEDOR'
                                                      }
                                             ]
                                         } );   
                             
                                                     // //*** grafica */
                                                  
     
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'VENTAS POR OPORTUNIDADES',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                
                                                    var graphTarget = $("#graphCanvasoporcampanavendedor");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'doughnut',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}
function informeventasoportunidadesgastos()
{
        // alert("entro")
        var table=$('#tablagt').DataTable();
        var fecha1=$('#fecha1pqrsgt').val();                   
        var fecha2=$('#fecha2pqrsgt').val();                   
        var estado=$('#estadogt').val();                   
        var name = [];
        var marks = [];
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
           var NombreProceso = "REPORTEGASTOSOPORTUNIDAD";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "estado":estado,
           "fecha1":fecha1,
           "fecha2":fecha2,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/ventas/funciones.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                        //      alert("Guardo "+response);
                             
                                var registros ="";     
                                json = JSON.parse(response);

                                var totalvalores=0;
                                var promedio=0;
                                for (var i in json) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                                if(json[i].estado==null)
                                                {
                                                name.push("Oportunidades");
                                                json[i].estado="Oportunidades";
                                                }
                                                else{
                                                name.push(json[i].estado);
                                                }
                                                marks.push(json[i].total);
                                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;

                                    var registros =registros+'<tr id=' + json[i].estado + '><td >' + json[i].estado + '</td><td>'+json[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                }
                                var rotulo="Reporte de Oportunidades y Gastos";
                                     table.destroy();
                                     $('#tablagt tbody').html(registros);
                                     $('#tablagt').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv',  {
                                                        extend: 'excel',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'reporte_oportunidad_gastos'
                                                      }, {
                                                        extend: 'pdf',
                                                        title: ''+rotulo+'\n | Fecha:'+fecha1+' a '+fecha2,
                                                        filename: 'reporte_oportunidad_gastos'
                                                      }, {
                                                        extend: 'print',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'reporte_oportunidad_gastos'
                                                      }
                                             ]
                                         } );   
                             
                                                     // //*** grafica */
                                                  
     
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'GASTOS POR OPORTUNIDADES',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                
                                                    var graphTarget = $("#graphCanvasoporgastos");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'doughnut',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}


function informecampanasgastos()
{
        // alert("entro")
        var table=$('#tablacg').DataTable();
        var fecha1=$('#fecha1pqrsg').val();                   
        var fecha2=$('#fecha2pqrsg').val();                   
        var estado=$('#estadog').val();    
        // alert("estado"+);               
        var name = [];
        var marks = [];
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
           var NombreProceso = "REPORTECAMPANAGASTOS";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "estado":estado,
           "fecha1":fecha1,
           "fecha2":fecha2,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/marketing/funciones.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                             alert("Guardo "+response);
                             
                                var registros ="";     
                                json = JSON.parse(response);

                                var totalvalores=0;
                                var promedio=0;
                                for (var i in json) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(json[i].total);
                                        }
                                for (var i in json) {
                                                if(json[i].estado==null)
                                                {
                                                name.push("CAMPAÑAS");
                                                json[i].estado="CAMPAÑAS";
                                                }
                                                else{
                                                name.push(json[i].estado);
                                                }
                                                marks.push(json[i].total);
                                                promedio=Math.round((parseFloat(json[i].total)/totalvalores)*1000)/10;

                                    var registros =registros+'<tr id=' + json[i].estado + '><td >' + json[i].estado + '</td><td>'+json[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                }
                                     table.destroy();
                                     $('#tablacg tbody').html(registros);
                                     $('#tablacg').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv', 'excel', 'pdf', 'print'
                                             ]
                                         } );   
                             
                                                     // //*** grafica */
                                                  
     
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'CAMPANAS GASTOS',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                
                                                    var graphTarget = $("#graphCanvasoporgastos");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'doughnut',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}

function informeventasproductos()
{
        // alert("entro")
        var table=$('#tablav').DataTable();
        var fecha1=$('#fecha1vp').val();                   
        var fecha2=$('#fecha2vp').val();                   
        var estado=$('#estadovp').val();                   
        var name = [];
        var marks = [];
        var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
        var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
           var NombreProceso = "REPORTEVENTASPRODUCTOS";
           var parametros = {  
           "NombreProceso":NombreProceso,
           "estado":estado,
           "fecha1":fecha1,
           "fecha2":fecha2,
           };
        // alert("aqer"+estado);
                     $.ajax({
                             data: parametros,
                             url: '../modulos/ventas/funciones.php',
                             type: 'post',
                             beforeSend: function () {
                                // alert("si ");
                             },
                             success: function (response) {
                        //      alert("Guardo "+response);
                             
                                var registros ="";     
                                jsonr = JSON.parse(response);
                                // alert("bbbb");
                                var totalvalores=0;
                                var promedio=0;
                                for (var i in jsonr) {
                                        totalvalores=parseFloat(totalvalores)+parseFloat(jsonr[i].total);
                                        }
                                for (var i in jsonr) {
                                        // alert("siiii");
                                                if(jsonr[i].producto==null)
                                                {
                                                name.push("Sin Clasificar");
                                                jsonr[i].producto="Sin Clasificar";
                                                }
                                                else{
                                                name.push(jsonr[i].producto);
                                                }
                                                marks.push(jsonr[i].total);
                                                promedio=Math.round((parseFloat(jsonr[i].total)/totalvalores)*1000)/10;
                                    var registros =registros+'<tr id=' + jsonr[i].producto + '><td >' + jsonr[i].producto + '</td><td>'+jsonr[i].total+'</td><td>'+promedio+' (%)</td></tr>';
                                //     alert("en"+registros);
                                }
                                var rotulo="Reporte de Ventas por Productos";
                                     table.destroy();
                                     $('#tablav tbody').html(registros);
                                     $('#tablav').DataTable( {
                                             dom: 'Bfrtip',
                                             buttons: [
                                                 'copy', 'csv',  {
                                                        extend: 'excel',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'REPORTEVENTASPRODUCTOS'
                                                      }, {
                                                        extend: 'pdf',
                                                        title: ''+rotulo+'\n | Fecha:'+fecha1+' a '+fecha2,
                                                        filename: 'REPORTEVENTASPRODUCTOS', 
                                                        exportOptions: {
                                                                // columns: [ 0, 1, 5, 6, 7, 8 ],
                                                                stripHtml: false, /* Aquí indicamos que no se eliminen las imágenes */
                                                            },
                                                        customize:function(doc) {
                                                                
                                                                doc.styles.title = {
                                                                    color: 'black',
                                                                    fontSize: '16',
                                                                    alignment: 'center'
                                                                }
                                                                doc.styles['td:nth-child(2)'] = { 
                                                                    width: '100px',
                                                                    'max-width': '100px'
                                                                }
                                                                doc.styles.tableHeader = {
                                                                        fillColor:'orange',
                                                                        color:'white'
                                                                      }
                                                            }
                                                      }, {
                                                        extend: 'print',
                                                        title: ''+rotulo+'\n | Fecha: '+fecha1+' a '+fecha2,
                                                        filename: 'REPORTEVENTASPRODUCTOS'
                                                      }
                                             ]
                                         } );   
                             
                                                     // //*** grafica */
                                                  
     
                                                var chartdata = {
                                                        labels: name,
                                                        datasets: [
                                                            {
                                                                label: 'VENTA PRODUCTOS',
                                                                backgroundColor: color,
                                                                borderColor: color,
                                                                borderWidth: 2,
                                                                hoverBackgroundColor: color,
                                                                hoverBorderColor: bordercolor,
                                                                data: marks
                                                            }
                                                        ]
                                                    };
                                
                                                    var graphTarget = $("#graphCanvasventaproducto");
                                
                                                    var barGraph = new Chart(graphTarget, {
                                                        type: 'doughnut',
                                                        data: chartdata
                                                    });
                                                             
                                                     //         //***fin grafica */
                        
                             
                             }
                 });
}


function agregarcambiaretapacampana()
        {
                //  alert("entro");
        //        var ndiv = $("#tablaP tbody tr").length;
               var etapaB=$("#etapaB").val();
        //        var etapaBnombre=$('#etapaB option:selected').text();
               var campana=$("#idcampanaactual").val();
        //        alert("idc:"+campana);

        //        var valor=$("#valor").val(); 
               // alert("si "+nfila);
             NombreProceso = "ACTUALIZACAMPANASESTADOS";
              var parametros = {  
              "NombreProceso":NombreProceso,
              "campana":campana,
              "etapaB":etapaB,
              };
              $.ajax({
                      data: parametros,
                      url: '../modulos/marketing/funciones.php',
                      type: 'post',
                      beforeSend: function () {
                        // alert("si ");
                      },
                      success: function (response) {
                                // alert("Guardo "+response);
                            if(response.trim()!="ERROR")
                            {
                       
                              swal("¡Muy bien!", "Se ha agregado la informacion exitosamente", "success");
                              var valores= {  
                                "idcampana":campana,
                              }
                              $.ajax({
                                data: valores,
                                url: '../modulos/controles/etapascampana.php',
                                type: 'get',
                                beforeSend: function () {
                                  // alert("si ");
                                },
                                success: function (pagina) {
                                        $("#cintacampana").html(pagina);
                                }
                                });
                        //       $("#oportunidades ").append(htmlTags);
                               }
                            if(response.trim()=="ERROR")
                            {
                              swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                            }
                      }
              });
       }

       function agregarcambiaretapaoportunidad()
       {
               //  alert("entro");
       //        var ndiv = $("#tablaP tbody tr").length;
              var etapaB=$("#etapaB").val();
       //        var etapaBnombre=$('#etapaB option:selected').text();
              var campana=$("#idoportunidadactual").val();
       //        alert("idc:"+campana);

       //        var valor=$("#valor").val(); 
              // alert("si "+nfila);
            NombreProceso = "ACTUALIZAOPORTUNIDADETAPAS";
             var parametros = {  
             "NombreProceso":NombreProceso,
             "campana":campana,
             "etapaB":etapaB,
             };
             $.ajax({
                     data: parametros,
                     url: '../modulos/ventas/funciones.php',
                     type: 'post',
                     beforeSend: function () {
                       // alert("si ");
                     },
                     success: function (response) {
                                // alert("Guardo "+response);
                           if(response.trim()!="ERROR")
                           {
                             swal("¡Muy bien!", "Se ha agregado la informacion exitosamente", "success");
                             var valores= {  
                               "idoportunidad":campana,
                             }
                             $.ajax({
                               data: valores,
                               url: '../modulos/controles/etapasoportunidad.php',
                               type: 'get',
                               beforeSend: function () {
                                 // alert("si ");
                               },
                               success: function (pagina) {
                                       $("#cintaoportunidad").html(pagina);
                               }
                               });
                       //       $("#oportunidades ").append(htmlTags);
                              }
                           if(response.trim()=="ERROR")
                           {
                             swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                           }
                     }
             });
      }



       function actualizalistagastos()
       {
               var id=$('#idpersona').val();
               var nombre=$('#nombreu').val();
               var descripcion=$('#descripcionu').val();
               NombreProceso = "ACTUALIZALISTAGASTOS";
               var parametros = {  
                       "NombreProceso":NombreProceso,
                       "id":id,
                       "nombre":nombre,
                       "descripcion":descripcion,
               };
                       $.ajax({
                               data: parametros,
                               url: '../modulos/ventas/funciones.php',
                               type: 'post',
                               beforeSend: function () {
                               },
                               success: function (response) {
                                       //   alert(response)
                                       if(response.trim()=="SI")
                                       {
                                       swal("¡Muy bien!", "Se ha Actualizado la Clasificacion exitosamente", "success");
                                      // LimpiarCampos();
                                      buscalistagastos();
                                       }
                                       else
                                       swal("¡Error!", "NO Se ha actualizado la Clasificacion", "error");
                               }
                       });
                      
       }

       function agregarcontactoscampana()
       {
         var d = new Date(); 
         var month = d.getMonth()+1;
         var day = d.getDate(); 
         var output = d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;
             var titulocontac=$("#titulocontac").val();
             var nombretituloconta=$('#titulocontac option:selected').text();
              var tipon=$("#tipon").val();
              var enviocontacto=$("#enviocontacto").val();
              if(tipon=='CAMPANA')
              {
              var campana=$("#idcampanaactual").val();
              }
              if(tipon=='OPORTUNIDAD')
              {
              var campana=$("#idoportunidadactual").val();
              }
        //        alert("si "+titulocontac);
            NombreProceso = "GUARDACAMPANASCONTACTOS";
             var parametros = {  
             "NombreProceso":NombreProceso,
             "campana":campana,
             "titulocontac":titulocontac,
             "tipon":tipon,
             "enviocontacto":enviocontacto,
             };
             $.ajax({
                     data: parametros,
                     url: '../modulos/marketing/funciones.php',
                     type: 'post',
                     beforeSend: function () {
                 //        alert("si ");
                     },
                     success: function (response) {
                                //  alert("Guardo "+response);
                           if(response.trim()!="ERROR")
                           {
                             var idnota=response.trim();
                        //     alert(idnota);
                             var tipodiv=3;
                             var htmlTags= '<div class="col-lg-6 col-md-6"  id="Contacto_'+idnota+'"><div class="card"><div class="card-body"><button class="close text-danger border-danger" value="Eliminar" onclick="eliminaelementoscampana('+idnota+','+tipodiv+')"><i class="fa fa-trash"></i></button><small><div class="stat-text"><i class="fa fa-pencil-square-o"></i> '+nombretituloconta+'</div><div class="stat-digit"><h5><small>'+output+'</small></h5></div><div class="stat-digit"><h5><small>'+enviocontacto+'</small></h5></div></small> </div></div></div>';
 
                         //     <button class="close text-danger border-danger" value="Eliminar" onclick="eliminaelementoscampana('.$fila[0].','.$tipodiv.')"><i class="fa fa-trash"></i></button>
 
                             swal("¡Muy bien!", "Se ha agregado la informacion exitosamente", "success");
                             $("#contactos ").append(htmlTags);
                            }
                           if(response.trim()=="ERROR")
                           {
                             swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                           }
                     }
             });
      }
//*** buzon */
      function agregabuzon()
      {
             var nombre = $('#nombre').val();
             var asunto = $('#asunto').val();
             var documento = $('#documento').val();
             var empresa = $('#empresa').val();
             var cargo = $('#cargo').val();
             var telefono = $('#telefono').val();
             var mail = $('#mail').val();
             var comentario = $('#comentario').val();
             var tipopqrs = $('#tipopqrs').val();
        if(nombre!="" && asunto!="" && comentario!="" && tipopqrs!="")
        {
                NombreProceso = "GUARDABUZON";
                var archivos = document.getElementById("archivoscarga");
                var filec = archivos.files[0];
                var parametros = new FormData();       
                parametros.append('archivocarga', filec);
                parametros.append('NombreProceso', NombreProceso);       
                parametros.append('nombre', nombre);       
                parametros.append('documento', documento); 
                parametros.append('asunto', asunto); 
                parametros.append('empresa', empresa); 
                parametros.append('cargo', cargo); 
                parametros.append('telefono', telefono); 
                parametros.append('mail', mail); 
                parametros.append('comentario', comentario);
                parametros.append('tipopqrs', tipopqrs);
                $.ajax({
                     data: parametros,
                     url: '../contenido/funciones.php',
                     type: 'post',
                     contentType: false,
                     processData: false,
                     beforeSend: function () {
                        //  alert("antesioto");
                        },
                     success: function (response) {
                        //        alert("Guardo "+response);
                           if(response.trim()!="ERROR")
                           {
                             swal("¡Muy bien!", "Se ha enviado su solicitud exitosamente", "success");
                      //        guardainstrumentos_det(response);
                            LimpiarCampos();
                           }
                           if(response.trim()=="ERROR")
                           {
                             swal("¡Error!", "No se ha podido enviar su solicitud exitosamente", "error");
                           }
                     }
             });
        }
        else
        {
                swal("¡Error!", "Datos insuficientes", "error");

        }
      }   

//**** carga opciones perfiles */
function buscabuzon() {
        var table=$('#tabla').DataTable(); 
        var textop=$('#perfil').val();
        // alert("muestre"+ruta);
        // alert("muestre");

        NombreProceso = "BUSCABUZON";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "perfil":textop,
        };
                $.ajax({
                        data: parametros,
                        url: '../modulos/servclientes/funcionescrm.php',
                        type: 'post',
                        beforeSend: function () {
                        },
                        success: function (response) {
                                //  alert(response)
                                // $('#resultadoperfiles tbody').html(response);
                                table.destroy();
                                $('#tabla tbody').html(response);
                                $('#tabla').DataTable( {
                                        dom: 'Bfrtip',
                                        buttons: [
                                            'copy', 'csv', 'excel', 'pdf', 'print'
                                        ]
                                    } );    

                        }
                });
        }
function agregaformrespuestabuzon(datos){
                //alert("entroddd");
                var d=datos.split('||');
                $('#idpersona').val(d[0]);
                $('#fecha1u').val(d[1]);
                $('#fecha2u').val(d[2]);
                $('#tipou').val(d[16]);
                $('#estadou').val(d[15]);
                $('#asuntou').val(d[3]);
                $('#nombreu').val(d[4]);
                $('#documentou').val(d[5]);
                $('#empresau').val(d[6]);
                $('#cargou').val(d[7]);
                $('#telefonou').val(d[8]);
                $('#correou').val(d[9]);
                $('#comentariou').val(d[10]);
                $('#archivou').val(d[11]);
                $('#fechasignau').val(d[12]);
                $('#asignou').val(d[18]);
                //alert("entro");
}

function agregaformverbuzon(datos){
        //alert("entroddd");
        var d=datos.split('||');
                 $('#idpersonav').val(d[0]);
                $('#fecha1v').val(d[1]);
                $('#fecha2v').val(d[2]);
                $('#tipov').val(d[16]);
                $('#estadov').val(d[15]);
                $('#asuntov').val(d[3]);
                $('#nombrev').val(d[4]);
                $('#documentov').val(d[5]);
                $('#empresav').val(d[6]);
                $('#cargov').val(d[7]);
                $('#telefonov').val(d[8]);
                $('#correov').val(d[9]);
                $('#comentariov').val(d[10]);
                $('#archivov').val(d[11]);
                $('#fechasignav').val(d[12]);
                $('#asignov').val(d[18]);
                $('#asignadov').val(d[19]);
                $('#respuestav').val(d[17]);


        //alert("entro");
}
function agregaformasignabuzon(datos){
        // alert("entroddd");
        var d=datos.split('||');
        $('#idpersonaB').val(d[0]);
        // alert("salio"+d[0]);
}



function actualizabuzon()
{
        var idbuzon=$('#idpersona').val();
        var respuesta=$('#respuestau').val();
        var NombreProceso = "ACTUALIZABUZON";
        //        alert("RS"+respuesta);
              var parametros = {  
              "NombreProceso":NombreProceso,
              "idbuzon":idbuzon,
              "respuesta":respuesta,
              };
        $.ajax({
                data: parametros,
                url: '../modulos/servclientes/funcionescrm.php',
                type: 'post',
                beforeSend: function () {
                //    alert("antesioto");
                   },
                success: function (response) {
                        //   alert("Guardo "+response);
                      if(response.trim()!="ERROR")
                      {
                        swal("¡Muy bien!", "Se ha respondido la solicitud exitosamente", "success");
                 //        guardainstrumentos_det(response);
                        buscabuzon();    
                //        LimpiarCampos();
                      }
                      if(response.trim()=="ERROR")
                      {
                        swal("¡Error!", "No se ha podido responder la solicitud exitosamente", "error");
                      }
                }
        });
}

function asignaresponsablebuzon()
{
        // alert("RS");

        var idbuzon=$('#idpersonaB').val();
        var usuarioasignado=$('#usuariosB').val();
        var NombreProceso = "ASIGNAUSUARIOBUZON";
              var parametros = {  
              "NombreProceso":NombreProceso,
              "idbuzon":idbuzon,
              "usuarioasignado":usuarioasignado,
              };
        $.ajax({
                data: parametros,
                url: '../modulos/servclientes/funcionescrm.php',
                type: 'post',
                beforeSend: function () {
                //    alert("antesioto");
                   },
                success: function (response) {
                        //    alert("Guardo "+response);
                      if(response.trim()!="ERROR")
                      {
                        swal("¡Muy bien!", "Se ha asignado el usuario a la solicitud exitosamente", "success");
                 //        guardainstrumentos_det(response);
                        buscabuzon();
                //        LimpiarCampos();
                      }
                      if(response.trim()=="ERROR")
                      {
                        swal("¡Error!", "No se ha podido asignar al usuario a la solicitud exitosamente", "error");
                      }
                }
        });
}
/****fin buzon */

function reportecampana()
{
//    var table=$('#tabla').DataTable();
   var fecha1=$('#fecha1').val();     
   var fecha2=$('#fecha2').val();     
   var tiporeporte=$('#tiporeporte').val();    

      var NombreProceso = "REPORTECAMPANAS";
//       alert("entro");
      var parametros = {  
      "NombreProceso":NombreProceso,
      "fecha1":fecha1,
      "fecha2":fecha2,
      "tiporeporte":tiporeporte,
      };
   alert("aqer");
                $.ajax({
                        data: parametros,
                        url: '../modulos/marketing/funciones.php',
                        type: 'post',
                        beforeSend: function () {
                           alert("si ");
                        },
                        success: function (response) {
                        alert("Guardo "+response);   
                        }
        });
}


function reportecampana1()
{
   var table=$('#tabla').DataTable();
   var fecha1=$('#fecha1').val();     
   var fecha2=$('#fecha2').val();     
//    var tipos=$('#tipos').val();     
//    var estado=$('#estado').val();     
   var tiporeporte=$('#tiporeporte').val();    
//    var nombretiporeporte=$('#tiporeporte option:selected').text();    

//    if($('#tipocheck').is(":checked"))
//         {
//          var chktipo=$('#tipocheck').val();  
//         } 
//        else
//        {
//         var chktipo="";
//        } 
//    if($('#estadocheck').is(":checked"))
//        {
//         var chkestado=$('#estadocheck').val();  
//        } 
//       else
//       {
//        var chkestado="";
//       } 
      var NombreProceso = "REPORTECAMPANAS";
//       alert("entro");

      var parametros = {  
      "NombreProceso":NombreProceso,
      "tabla":table,
      "fecha1":fecha1,
      "fecha2":fecha2,
//       "tipos":tipos,
//       "estado":estado,
//       "chktipo":chktipo,
//       "chkestado":chkestado,
      "tiporeporte":tiporeporte,
      };
   alert("aqer");
                $.ajax({
                        data: parametros,
                        url: '../modulos/marketing/funciones.php',
                        type: 'post',
                        // contentType: false,
                        // processData: false,
                        beforeSend: function () {
                           alert("si ");
                        },
                        success: function (response) {
                        alert("Guardo "+response);
                        if(response.trim()!="ERROR")
                        {
                                // table.destroy();
                                // $('#tabla tbody').html(response);
                                // $('#tabla').DataTable( {
                                //         dom: 'Bfrtip',
                                //         buttons: [
                                //             'copy', 'csv', 'excel', 'pdf', 'print'
                                //         ]
                                //     } );   
                        
                                                // //*** grafica */
                                                // var name = [];
                                                // var marks = [];
                                                // var color = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
                                                // var bordercolor = ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];
                                        
                                                // var info=JSON.parse(response);
                                                // for (var i in info) {
                                                //         if(info[i].estado==null)
                                                //         {
                                                //         name.push("Sin Clasificar");
                                                //         }
                                                //         else{
                                                //                 name.push(info[i].estado);
                                                //         }
                                                //         // name.push(info[i].tipoaccion);
                                                //         marks.push(info[i].valores);
                                                //         //  alert(info[i].clasificacion);
                                                // }

                                                // var chartdata = {
                                                //         labels: name,
                                                //         datasets: [
                                                //         {
                                                //                 label: 'CAMPAÑAS: '+nombretiporeporte,
                                                //                 backgroundColor: color,
                                                //                 borderColor: color,
                                                //                 borderWidth: 2,
                                                //                 hoverBackgroundColor: color,
                                                //                 hoverBorderColor: bordercolor,
                                                //                 data: marks
                                                //         }
                                                //         ]
                                                // };

                                                // var graphTarget = $("#graphCanvasmarketing");

                                                // var barGraph = new Chart(graphTarget, {
                                                //         type: 'pie',
                                                //         data: chartdata
                                                // });
                                                        
                                                //         //***fin grafica */
                        }
                        if(response.trim()=="ERROR")
                        {
                                swal("¡Error!", "No se ha guardado la informacion exitosamente", "error");
                        }
                        }
        });
}

function agregaagenda()
{
        // alert("entro");
        var fecha1=$('#fromers').val();     
        var fecha2=$('#totes').val();         
        var tipo=$('#tipo').val();     
        var titulo=$('#title').val();     
        var evento=$('#event').val();     
        var accion=$('#tipo option:selected').text();     
        var oportunidad=$('#oportunidad').val();   
        // alert(accion);  
        var NombreProceso = "GUARDAAGENDA";
        var parametros = {  
                "NombreProceso":NombreProceso,
                "fecha1":fecha1,
                "fecha2":fecha2,
                "tipo":tipo,
                "titulo":titulo,
                "evento":evento,
                "accion":accion,
                "oportunidad":oportunidad,
                };
        $.ajax({
                data: parametros,
                url: '../modulos/servclientes/funcionescrm.php',
                type: 'post',
                // contentType: false,
                // processData: false,
                beforeSend: function () {
                        // alert("si ");
                     },
                     success: function (response) {
                //      alert("Guardo "+response);   
                        // swal("Muy bien!", "Se ha guardado la informacion exitosamente"+response, "success");
                     
                if(response.trim()=="SI")
                {
                        swal("Muy bien!", "Se ha guardado la informacion exitosamente", "success");
                        LimpiarCampos();
                        //       $('#cancelarboton').trigger('click');
                        

                }
                }
        });
}

