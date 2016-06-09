var currentPosBeginning;

google.maps.event.addDomListener(window, 'load', init);

function init() {

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      currentPosBeginning = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      var mapOptions = {
        zoom: 14,
        disableDefaultUI: true,
        center: currentPosBeginning,
        styles: [
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ececec"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#1abc9c"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#bababa"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ececec"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
              {
                "color": "#4D4D4D"
              },
              {
                "visibility": "simplified"
              },
              {
                "weight": 0.1
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "color": "#FFFFFF"
              },
              {
                "visibility": "off"
              }
            ]
          }, {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              },
              {
                "color": "#ffffff"
              }
            ]
          }, {
            "featureType": "transit.line",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "color": "#ececec"
              }
            ]
          }
        ]
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