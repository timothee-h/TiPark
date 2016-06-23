$(document).ready(function(){

  // UPLOAD PHOTO :
  $('.triggerUpload').click(function() {
    $('.inputUpload').trigger('click');
    console.log($(".inputUpload"));
  });

  // DELETE PHOTO :
  $('.triggerDelete').click(function() {
    $(this).closest("li").remove();
  });

  // ADD PHOTO :

  var newPhoto = "<li class='entry--photos--list--item'><img class='entry--photos--list--item--photo' src='img/parking1.jpg' alt='parking'/><input type='file' class='entry--photos--list--item--actions--action--input' class='inputUpload'/><div class='entry--photos--list--item--actions'><a class='entry--photos--list--item--actions--action' class='triggerUpload' href='#' title='Upload'><i class='fa fa-picture-o' aria-hidden='true'></i></a><a class='entry--photos--list--item--actions--action' class='triggerDelete' href='#' title='Remove'><i class='fa fa-trash' aria-hidden='true'></i></a></div></li>";

  $('.entry--photos--list').on("click", "#addPhoto", function() {
    $("#addPhoto").before(newPhoto);
  });


  // PLUS MINUS

  $('.qtyplus').click(function(e){
    e.preventDefault();
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name='+fieldName+']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name='+fieldName+']').val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $('input[name='+fieldName+']').val(0);
    }
    $("span[name='priceAfter']").empty();
    var priceAfter = $("input[name='price']").val()*0.97;
    $("span[name='priceAfter']").append(priceAfter);
  });
  $(".qtyminus").click(function(e) {
    e.preventDefault();
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name='+fieldName+']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $('input[name='+fieldName+']').val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $('input[name='+fieldName+']').val(0);
    }
    $("span[name='priceAfter']").empty();
    var priceAfter = $("input[name='price']").val()*0.97;
    $("span[name='priceAfter']").append(priceAfter);
  });

  // personalised periods


  // add period :

  $(".addPeriod").on("click", function(){
    var emptyPeriod = $("#emptyPeriod").html();
    $(".entry--form--periods").append(emptyPeriod);
  });


  //open/close :


  $("body").on("click", ".togglePeriod", function(){
    var section = $(this).parent().parent();
    if(section.hasClass("opened")) {
      section.removeClass("opened")
      section.addClass("closed");
    }
    else {
      /*var otherSections = $(".entry--form--periods").children();
			for(var i=0; i< otherSections.length; i++) {
				if(otherSections[i].hasClass("opened")) {
					otherSections[i].addClass("closed");
					otherSections[i].removeClass("opened");
				}
			}*/
      section.removeClass("closed")
      section.addClass("opened");
    }
  });

  $("body").on("click", ".deletePeriod", function(){
    $(this).animate({
      color: "#f00",
      fontSize: "30px",
      opacity: 0
    }, 200, function() {
      $(this).parent().parent().remove();
    });
  });

  // select days perso interval :

  $("select[name='yearDays']").on("change", function(){
    $(this).parent().parent().parent().toggleClass("persoInterval");
  });

  // POPUP signalement :
  $(".buyer--spots--flag").on("click", function(){
    confirm("Voulez-vous vraiment signaler cet utilisateur ?");
  });

  if(localStorage["Marqueurs ajoutés"]){
    storedMarkers = JSON.parse(localStorage.getItem("Marqueurs ajoutés"));
  }
  else{
    storedMarkers = [];
    localStorage.setItem("Marqueurs ajoutés", JSON.stringify(storedMarkers));
  }

  var geocoder = new google.maps.Geocoder;

  $("input[value='Publier']").on("click", function(){
    addSpot();
  });
  function addSpot(){
    spot = new Object;
    foundAddress(geocoder);
    spot.price = $("input[name='price']").val();
    spot.desc = $("textarea[name='description']").val();
    spot.profil.name = "Moi";
    spot.profil.img = "img/profil.jpg";
    storedMarkers[storedMarkers.length] = spot;
    localStorage.setItem("Marqueurs ajoutés", JSON.stringify(storedMarkers));
  }
  function foundAddress(geocoder){
    var address = $("input[name='address']").val();
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        spot.adresse = results[0].geometry.location;
      } 
      else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
});