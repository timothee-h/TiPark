$(document).ready(function() {
  //menu
  $('#menu-btn').click( function(e) {
    e.preventDefault();
    $('#sideBar').toggleClass('sideBar-active');
    $('#home').toggleClass('home-active');
  });
  //search
  var state = close;
  $('#search, #search-close').click( function() {
    if ( state == close) {
      $('#search').toggleClass('home--map--toolbar--search-active2');
      setTimeout(function(){
        $('#home--search').toggleClass('home--search-active');
      }, 750);
      setTimeout(function(){
        $('#search-icon').toggleClass('home--map--toolbar--search--icon-active');
        $('#search').toggleClass('home--map--toolbar--search-active');
      }, 500);
      state = open;
    } else {
      $('#home--search').toggleClass('home--search-active');
      $('#search').toggleClass('home--map--toolbar--search-active');
      setTimeout(function(){
        $('#search-icon').toggleClass('home--map--toolbar--search--icon-active');
      }, 300);
      setTimeout(function(){
        $('#search').toggleClass('home--map--toolbar--search-active2');
      }, 100);
      state = close;
    }
  });
});
