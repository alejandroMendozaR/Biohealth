$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $($(this).attr('href'));
    
  
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800); // Duración del desplazamiento en milisegundos (800ms en este caso)
      }
    });


});

  let bandera = false 
  function abrirMenu(){
    let botonIcono = document.getElementById('icono');
    let listaMenu = document.getElementById('menu');


    if(!bandera){
        let nuevoIcono = document.createElement('i');
        nuevoIcono.id = 'icono';
        nuevoIcono.className = 'fa-solid fa-xmark'
        botonIcono.parentNode.replaceChild(nuevoIcono, botonIcono);
        listaMenu.style.transitionDelay= '0.3s'
        listaMenu.style.width = '100%';
        listaMenu.style.padding = '20px';
        bandera = true;
    }else{
        let nuevoIcono = document.createElement('i');
        nuevoIcono.id = 'icono';
        nuevoIcono.className = 'fa-solid fa-bars'
        botonIcono.parentNode.replaceChild(nuevoIcono, botonIcono);
        listaMenu.style.transitionDelay= '0.3s'
        listaMenu.style.width = '0%';
        listaMenu.style.padding = '0px';
        bandera = false;
    }
  }