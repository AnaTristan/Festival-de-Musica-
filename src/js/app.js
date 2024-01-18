document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
}

crearGaleria(){
    const galeria= document.querySelector('.galeria-imagenes');
    galeria.textContent= 'hello';
}