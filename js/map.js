var currentPosBeginning;
var map;
var valider = document.querySelector(".home--search--submit");
var geocoder = new google.maps.Geocoder;
var service = new google.maps.DistanceMatrixService();
var element = new Array;
var duration = new Array;
var distance = new Array;
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
        icon: "img/local.png"
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
    searchDuration([currentPosBeginning], [markerList[i].position], i);
  }
  setTimeout(function() { for(var i=0; i<markerList.length; i++){
    printMarkers(markerList, i);
    printItem(markerList, i);
    if(i==markerList.length-1){
      var state = close;
      $(".home--content--item").on("click", function(){
        if (state == close) {
          console.log("1");
          $(this).addClass('home--content--item-active');
          $('.home--map').addClass('home--map-active2');
          $('.home--content').addClass('home--content-active');
          $('#search').addClass('home--map--toolbar--search-active4');
          state = open;
        } else if (state == open && $(this).hasClass('home--content--item-active')) {
          console.log("2");
          $(this).removeClass('home--content--item-active');
          $('.home--map').removeClass('home--map-active2');
          $('.home--content').removeClass('home--content-active');
          $('#search').removeClass('home--map--toolbar--search-active4');
          state = close;
        } else if (state == open) {
          console.log("3");
          $(".home--content--item").removeClass('home--content--item-active');
          $(this).addClass('home--content--item-active');
          state = open;
        }
      });
    }
  }}, 3500);
}

function printMarkers(markerList, counter){
  var markerToPrint = new google.maps.Marker({
    position:{
      lat: markerList[counter].position.lat,
      lng: markerList[counter].position.lng
    },
    map: map,
    data: counter,
    icon: "img/marqueur.png"
  });
  markerToPrint.setMap(map);
  google.maps.event.addListener(markerToPrint, "click", function(event){
    var item = $(".home--content--item[data=" + counter + "]");
    $(".home--map").removeClass("home--map-active");
    $(".home--content--item").removeClass("home--content--item-active");
    $('.home--content').addClass('home--content-active');
    $('#search').removeClass('home--map--toolbar--search-active3');
    item.addClass("home--content--item-active");
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
  stringToPrint += '<div class="home--content--item--travel--duration">' + duration[counter] + '<span>min</span></div>';
  stringToPrint += '<div class="home--content--item--travel--distance">' + distance[counter] + '<span>km</span></div>';
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
  stringToPrint += '<span class="home--content--item--reservation--price--num">' + /*markerList[counter].time.price*hour()*/   '€</span>';
  stringToPrint += '</div>';
  stringToPrint += '<a class="home--content--item--reservation--btn">Je réserve</a>';
  stringToPrint += '</div>';
  stringToPrint += '</div>';
  $(".home--content").append(stringToPrint);
}

function hour(){
  var currentHour = document.querySelector(".home--map--toolbar--hour").value;
  return currentHour;
}

function resizeItem(toResize) {
  toResize.click( function() {
  });
}



function searchDuration(origin, destination, counter){
  service.getDistanceMatrix({
    origins: origin,
    destinations: destination,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status){
    if (status == google.maps.DistanceMatrixStatus.OK) {
      element[counter] = response.rows[0].elements;
      distance[counter] = parseInt(element[counter][0].distance.text);
      duration[counter] = parseFloat(element[counter][0].duration.text);
    }
  });
}
