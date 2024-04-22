function initMap() {
    const location = { lat: -34.397, lng: 150.644 }; // Modifiez avec vos coordonnées
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: location
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
  
  // Ajout d'un écouteur pour initialiser la carte lorsque la modale est ouverte
  $('#mapModal').on('shown.bs.modal', function () {
    google.maps.event.trigger(map, "resize");
    map.setCenter(location); // Assurez-vous que le centre de la carte est correct après le redimensionnement
  });
  