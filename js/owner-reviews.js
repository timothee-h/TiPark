if(localStorage["Descriptions ajoutées"]){
  storedDesc = JSON.parse(localStorage.getItem("Descriptions ajoutées"));
}
else{
  storedDesc = [];
  localStorage.setItem("Descriptions ajoutées", JSON.stringify(storedDesc));
}
if(localStorage["NbrDesc"]){
  NbrDesc = JSON.parse(localStorage.getItem("NbrDesc"));
}
else{
  NbrDesc = 2;
  localStorage.setItem("NbrDesc", JSON.stringify(NbrDesc));
}

$(document).ready(function(){
  $("span[name='NbrDesc']").empty();
  $("span[name='NbrDesc']").append(NbrDesc);
  for(var i=0; i<1; i++){
    printReviews(storedDesc, i);
  }
  function printReviews(listReviews, counter){
    var stringToPrint = '';
    stringToPrint += '<li class="owner--reviews--list--item">';
    stringToPrint += '<img src="' + listReviews[counter].img + '" alt="reviewer" class="owner--reviews--list--item--photo"/>';
    stringToPrint += '<div>';
    stringToPrint += '<div class="owner--reviews--list--item--stars stars"><!--';
    stringToPrint += '--><span title="5">☆</span><!--';
    stringToPrint += '--><span title="4">☆</span><!--';
    stringToPrint += '--><span title="3">☆</span><!--';
    stringToPrint += '--><span title="2">☆</span><!--';
    stringToPrint += '--><span title="1">☆</span>';
    stringToPrint += '</div>';
    stringToPrint += '<h4 class="owner--reviews--list--item--reviewer">' + listReviews[counter].name + '</h4>';
    stringToPrint += '<p class="owner--reviews--list--item--review">' + listReviews[counter].desc + '</p>';
    stringToPrint += '<li/>';
    $(".owner--reviews--list").append(stringToPrint);
  }
});