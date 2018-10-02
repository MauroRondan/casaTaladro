/*****************************************************************/
function inicio(){
    var url = "index.html";
    $("#main").show();
    $("#accesorio").hide();
    $("#detproducto").hide();
    $("#producto").hide();
    $("#relprod").hide();
    $("#empresa").hide();
    $("#carrito").hide();
    $("#servicio").hide();
    $("#user").hide();    
    $("#novedades").hide();    
    $("#frame1").attr({src:url});    
}

function prod(){
    var url = "frm/lisprod/product.html";
    $("#main").hide();
    $("#accesorio").hide();
    $("#detproducto").hide();
    $("#relprod").hide();
    $("#empresa").hide();
    $("#carrito").hide();
    $("#servicio").hide();
    $("#user").hide();
    $("#novedades").hide();    
    $("#producto").show();
    $("#frame1").attr({src:url});
}
function accs(){
    var url = "frm/lisacce/accesorio.html";
    $("#main").hide();
    $("#producto").hide();
    $("#detproducto").hide();
    $("#relprod").hide();
    $("#empresa").hide();
    $("#carrito").hide();
    $("#servicio").hide();
    $("#user").hide();
    $("#novedades").hide();    
    $("#accesorio").show();
    $("#frame2").attr({src:url});
}
function detalle(){
    var url = "frm/detproduct/detalle.html";
    var url2 = "frm/detproduct/relacion.html";
    $("#main").hide();
    $("#producto").hide();
    $("#accesorio").hide();
    $("#empresa").hide();
    $("#carrito").hide();
    $("#servicio").hide();
    $("#user").hide();
    $("#novedades").hide();    
    $("#detproducto").show();
    $("#relprod").show();
    $("#frame3").attr({src:url});    
    $("#frame4").attr({src:url2});    
}
function cart(){
    var url = "frm/carro/cart.html";
    $("#main").hide();
    $("#producto").hide();
    $("#detproducto").hide();
    $("#relprod").hide();
    $("#accesorio").hide();
    $("#empresa").hide();
    $("#servicio").hide();
    $("#user").hide();
    $("#novedades").hide();    
    $("#carrito").show();
    $("#frame5").attr({src:url});
    $('.js-show-header-dropdown').click();
}
function emp(){
    var url = "frm/empresa/empresa.html";
    $("#main").hide();
    $("#producto").hide();
    $("#detproducto").hide();
    $("#relprod").hide();
    $("#accesorio").hide();
    $("#carrito").hide();
    $("#servicio").hide();    
    $("#user").hide();
    $("#novedades").hide();    
    $("#empresa").show();    
    $("#frame6").attr({src:url});    
}
function serv(){
    var url = "frm/servicio/servicio.html";
    $("#main").hide();
    $("#producto").hide();
    $("#detproducto").hide();
    $("#relprod").hide();
    $("#accesorio").hide();
    $("#carrito").hide();
    $("#empresa").hide();    
    $("#user").hide();
    $("#novedades").hide();    
    $("#servicio").show();    
    $("#frame7").attr({src:url});    
}

function user(){
    var url = "frm/user/user.html";
    $("#main").hide();
    $("#producto").hide();
    $("#detproducto").hide();
    $("#relprod").hide();
    $("#accesorio").hide();
    $("#carrito").hide();
    $("#empresa").hide();    
    $("#servicio").hide();    
    $("#novedades").hide();    
    $("#user").show();    
    $("#frame8").attr({src:url});    
}

function nove(){
    var url = "frm/novedades/novedad.html";
    $("#main").hide();
    $("#producto").hide();
    $("#detproducto").hide();
    $("#relprod").hide();
    $("#accesorio").hide();
    $("#carrito").hide();
    $("#empresa").hide();    
    $("#servicio").hide();    
    $("#user").hide();    
    $("#novedades").show();    
    $("#frame9").attr({src:url});    
}

function fbm(url) {
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click();
}
function wtp(url) {
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click();
}   

