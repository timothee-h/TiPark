var currentPosBeginning;
var map;
var valider = document.querySelector(".home--search--submit");
var geocoder = new google.maps.Geocoder;

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
      map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: currentPosBeginning,
        map: map,
      });
    });
  }
  valider.addEventListener("click", function(){
    search(geocoder, map)
  });
}

function search(geocoder, resultsMap){
  var address = document.getElementById('adresse').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
    }
    else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
