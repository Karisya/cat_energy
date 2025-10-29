const slider = document.querySelector('.slider');
const range = document.querySelector('.slider__range-js');

range.addEventListener('input', () => {
  slider.style.setProperty('--value', range.value + '%');
});

ymaps.ready(init);
  function init(){
    var map = new ymaps.Map("map", {
      center: [59.938631, 30.323037],
      zoom: 18,
      controls: ['zoomControl']
    });
var placemark = new ymaps.Placemark([59.938631, 30.323037], {
    hintContent: 'Главный штаб',
    balloonContent: 'Главный штаб'
}, {
    iconLayout: 'default#image', 
    iconImageHref: "./img/map-icon.svg", 
    iconImageSize: [113, 106],       
    iconImageOffset: [-50, -70]  
});
map.geoObjects.add(placemark);
  }
