let menuVisible = false;
// Fincion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // oculta el menu una ves que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


//defecto el scroll para aplicar animacion a la barra de habilidad

window.onscroll = function(){
    efectoHabilidades();
}