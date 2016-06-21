var currentPosBeginning;
var map;
var valider = document.querySelector(".home--search--submit");
var geocoder = new google.maps.Geocoder;
if(localStorage["Marqueurs ajoutés"]){
  storedMarkers = JSON.parse(localStorage.getItem("Marqueurs ajoutés"));
}
else{
  storedMarkers = [];
  localStorage.setItem("Marqueurs ajoutés", JSON.stringify(storedMarkers));
}

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
      google.maps.event.addListener(marker, "click", function(event){
        alert("Vous êtes ici");
      });
      print(allMarkers);
      print(storedMarkers);
    });
  }
  valider.addEventListener("click", function(){
    search(geocoder, map);
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

function print(markerList){
  for(var i=0; i<markerList.length; i++){
    printMarkers(markerList, i);
    printItem(markerList, i);
  }
}

function printMarkers(markerList, counter){
  var markerToPrint = new google.maps.Marker({
    position:{
      lat: markerList[counter].position.lat,
      lng: markerList[counter].position.lng
    },
    map: map,
    data: counter
  });
  markerToPrint.setMap(map);
  google.maps.event.addListener(markerToPrint, "click", function(event){
    $(".home--content--item[data=" + counter + "]").addClass('home--content--item-active');
    $('.home--map').addClass('home--map-active2');
    $('.home--content').addClass('home--content-active');
    $('#search').addClass('home--map--toolbar--search-active4');
  });
}

function printItem(markerList, counter){
  var stringToPrint = '';
  stringToPrint += '<div class="home--content--item" data="' + counter + '">';
  stringToPrint += '<img class="home--content--item--img" src="' + markerList[counter].img + '" alt="parking">';
  stringToPrint += '<div class="home--content--item--time">';
  stringToPrint += '<div class="home--content--item--time--hour">' + markerList[counter].time.hour + '</div>';
  stringToPrint += '<div class="home--content--item--time--price">' + markerList[counter].time.price + '€ - heure</div>';
  stringToPrint += '</div>';
  stringToPrint += '<div class="home--content--item--travel">';
  stringToPrint += '<div class="home--content--item--travel--duration"><span>min</span></div>';
  stringToPrint += '<div class="home--content--item--travel--distance">Km</div>';
  stringToPrint += '</div>';
  stringToPrint += '<div class="home--content--item--adresse">';
  stringToPrint += '<span class="home--content--item--adresse--rue">' + markerList[counter].adresse.rue + '</span>';
  stringToPrint += '<span class="home--content--item--adresse--code">' + markerList[counter].adresse.code +'</span>';
  stringToPrint += '</div>';
  stringToPrint += '<div class="home--content--item--profil">';
  stringToPrint += '<img src="' + markerList[counter].profil.img + '" alt="" class="home--content--item--profil--img">';
  stringToPrint += '<div class="home--content--item--profil--rating">';
  stringToPrint += '<span class="home--content--item--profil--rating--name">';
  stringToPrint += markerList[counter].profil.name;
  stringToPrint += '</span>';
  stringToPrint += '<div class="home--content--item--profil--rating--star"><!--';
  stringToPrint += '--><span title="5">☆</span><!--';
  stringToPrint += '--><span title="4">☆</span><!--';
  stringToPrint += '--><span title="3">☆</span><!--';
  stringToPrint += '--><span title="2">☆</span><!--';
  stringToPrint += '--><span title="1">☆</span>';
  stringToPrint += '</div>';
  stringToPrint += '</div>';
  stringToPrint += '<a class="home--content--item--profil--link" href="profil.html">Voir le profil</a>';
  stringToPrint += '</div>';
  stringToPrint += '<div class="home--content--item--reservation">';
  stringToPrint += '<div class="home--content--item--reservation--price">';
  stringToPrint += '<span class="home--content--item--reservation--price--total">Total</span>';
  stringToPrint += '<span class="home--content--item--reservation--price--num">' + /*markerList[counter].time.price*(document.querySelector("..home--map--toolbar--hour")) */ '€</span>';
  stringToPrint += '</div>';
  stringToPrint += '<a href="reservation.html" class="home--content--item--reservation--btn">Je réserve</a>';
  stringToPrint += '</div>';
  stringToPrint += '</div>';
  $(".home--content").append(stringToPrint);
}
