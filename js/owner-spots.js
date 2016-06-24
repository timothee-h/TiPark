if(localStorage["Marqueurs ajoutés"]){
  storedMarkers = JSON.parse(localStorage.getItem("Marqueurs ajoutés"));
}
else{
  storedMarkers = [];
  localStorage.setItem("Marqueurs ajoutés", JSON.stringify(storedMarkers));
}

$(document).ready(function(){
  for(var i=0; i<storedMarkers.length; i++){
    printSpots(storedMarkers, i);
  }
  function printSpots(listMarkers, counter){
    var stringToPrint = '';
    stringToPrint += '<li class="owner--spots--list--item">';
    stringToPrint += '<img src="' + listMarkers[counter].profil.img + '" alt="spot" class="owner--spots--list--item--photo"/>';
    stringToPrint += '<div>';
    stringToPrint += '<h4 class="owner--spots--list--item--spot">' + listMarkers[counter].rue + '</h4>';
    stringToPrint += '<p class="owner--spots--list--item--description">' + listMarkers[counter].price + '€/h - extérieure</p>';
    stringToPrint += '</div>';
    stringToPrint += '</li>';
    $(".owner--spots--list").append(stringToPrint);
  }
});