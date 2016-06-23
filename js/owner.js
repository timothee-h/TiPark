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
  $('a[name="publish"]').on("click", function(){
    var newDesc = new Object;
    newDesc.img = "img/profil.jpg"
    newDesc.name = "Timothée Hatton";
    newDesc.desc = $('input[name="avis"]').val();
    storedDesc[storedDesc.length] = newDesc;
    localStorage.setItem("Descriptions ajoutées", JSON.stringify(storedDesc));
    NbrDesc++;
    localStorage.setItem("NbrDesc", NbrDesc);
    $("span[name='NbrDesc']").empty();
    $("span[name='NbrDesc']").append(NbrDesc);
  });
});