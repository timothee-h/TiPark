$(document).ready(function(){

	// PLUS MINUS

	jQuery(document).ready(function(){
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
				console.log("zero");
			}
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
				console.log("zero");
			}
		});
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
	

});