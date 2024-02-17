const cardElements = document.querySelectorAll('.card'); // Selecciona todos los elementos con la clase 'card'
const container = document.getElementById('container');
const allOverlayElements = document.querySelectorAll('.card__overlay'); // Selecciona todos los overlays

cardElements.forEach(function (card) {
    card.addEventListener('click', function () {
        const cardClass = card.classList.item(1); // Obtiene la segunda clase del elemento, la cual indica el tipo de tarjeta
        container.classList.toggle(`active${cardClass}`); // Agrega o quita la clase activa correspondiente al contenedor
        
        cardElements.forEach(function(selectCard){
            selectCard.classList.toggle(`active${cardClass}`);
        });
        
        allOverlayElements.forEach(function (overlay) {
            overlay.classList.toggle('active');
        });
    });
});
