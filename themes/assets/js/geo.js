function initMap() {

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
              zoom: 12
        });

      new google.maps.Marker({

            icon: "",
            animation: google.maps.Animation.DROP,
            position: pos,
            map: map,
            title: "Estas Acá!"
        });

        

      map.setCenter(pos);
    });
  } 
}
