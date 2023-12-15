function initMap() {
    const maps = document.querySelectorAll('.location-map');
    
    maps.forEach(mapElement => {
        const lat = parseFloat(mapElement.getAttribute('data-lat'));
        const lng = parseFloat(mapElement.getAttribute('data-lng'));
        
        const map = new google.maps.Map(mapElement, {
            center: { lat, lng },
            zoom: 15 
        });

        
        new google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: 'Dental Professional Location'
        });
    });
}

let nav = document.querySelector('nav');
let Togbtn = document.getElementById('tog-btn');

Togbtn.addEventListener('click', function(){
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        Togbtn.innerHTML = '<i class="fa-solid fa-bars x-logo"></i>';
    } else {
        nav.style.display = 'flex';
        Togbtn.innerHTML = '<i class="fa-solid fa-times x-logo"></i>';
    }
});