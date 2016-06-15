var currentPosBeginning;

google.maps.event.addDomListener(window, 'load', init);

function init() {

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      currentPosBeginning = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var mapOptions = {
        zoom: 14,
        disableDefaultUI: true,
        center: currentPosBeginning,
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: currentPosBeginning,
        map: map,
      });
    });
  }
}
