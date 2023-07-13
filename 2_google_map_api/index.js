// Set map
function initialize() {
    let mapOptions = {
        // Zoom de la carte au démarrage
        zoom: 10,
        // Initialisation des coordonnées de départ (Paris)
        center: new google.maps.LatLng(47.90653902005475, 1.9022554422309257),
        // Type of map (ROADMAP, SATELLITE, HYBRID, TERRAIN) 
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Zoom minimum de la carte
        minZoom: 2
    };

    // Création d'nouvelle instance de carte à l'aide des options fournies
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Création d'une fenêtre d'informations pour afficher les informations de localisation
    let infoWindow = new google.maps.InfoWindow();

    // Creation d'un marqueur (exemple) : France, Lailly en Val
    let marker = new google.maps.Marker({
        // Coordonnées de : France, Lailly en Val
        position: new google.maps.LatLng(47.76274766952086, 1.6832902951709414),
        // Attacher le marqueur
        map: map,
        // Info-bulle au survol
        title: 'PopCorn Digital',
        image: 'images/test.jpg'
    });

    // Ajout de l'addEventListener click pour le marqueur
    marker.addListener('click', function () {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
    });

    // Ajuster le centre de la carte lorsque la fenêtre est redimensionnée
    google.maps.event.addDomListener(window, "resize", function () {
        map.setCenter(mapOptions.center);
    });

}

// Initialisation de la carte quand la fenêtre a terminé de se charger
google.maps.event.addDomListener(window, 'load', initialize);