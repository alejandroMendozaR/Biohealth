let banderaFuncs = false;
let banderaParams = false;

function regresarVentana(){
    history.back();   
}

function desplegarOPlegarFuncs(){
    let aDesplegar = document.getElementById('listFuncs');
    let boton = document.getElementById('btnFuncs');
    if(!banderaFuncs){
        aDesplegar.classList.remove('listaPlegada');
        aDesplegar.classList.add('listaDesplegada');
        boton.textContent = '▲';
        banderaFuncs = true;
    }else{
        aDesplegar.classList.remove('listaDesplegada');
        aDesplegar.classList.add('listaPlegada');
        boton.textContent = '▼';
        banderaFuncs = false;
    }
}

function desplegarOPlegarParams(){
    let aDesplegar = document.getElementById('listParms');
    let boton = document.getElementById('btnParams');
    if(!banderaParams){
        aDesplegar.classList.remove('listaPlegada');
        aDesplegar.classList.add('listaDesplegada');
        boton.textContent = '▲';
        banderaParams = true;
    }else{
        aDesplegar.classList.remove('listaDesplegada');
        aDesplegar.classList.add('listaPlegada');
        boton.textContent = '▼';
        banderaParams = false;
    }
}

function mostrarImg (numElegido){
    for(let i=0; i<11; i++){
        let elemento = document.getElementById('elem'+(i+1));
        if((i+1)!=numElegido){
            elemento.style.zIndex = 0;
        }else{
            elemento.style.zIndex = 10;   
        }
    }
}