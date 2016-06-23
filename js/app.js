$(document).ready(function() {
  //menu
  function menu() {
    $('#menu-btn').click( function(e) {
      e.preventDefault();
      $('#sideBar').toggleClass('sideBar-active');
      $('#home').toggleClass('home-active');
      $('.header--btn--humburger').toggleClass('close');
    });
  }
  menu();
  //search
  function searchAnimation() {
    var state = close;
    $('#search, #search-close').click( function() {
      if ( state == close) {
        $('.home--map').removeClass('home--map-active');
        $('#search').removeClass('home--map--toolbar--search-active3');
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
  }
  searchAnimation();
  //toolbar time
  function toolbarTime() {
    var date = new Date();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    $('.home--map--toolbar--endHour').html('Fin : ' + currentHour + "h" + currentMinute);
    $('.home--map--toolbar--control--more').click( function() {
      var hour = $('.home--map--toolbar--hour').html();
      hour++;
      currentHour++;
      if (currentHour >= 24) {
        currentHour = 0;
      }
      $('.home--map--toolbar--hour').html(hour);
      $('.home--map--toolbar--endHour').html('Fin : ' + currentHour + "h" + currentMinute);
    });
    $('.home--map--toolbar--control--less').click( function() {
      var hour = $('.home--map--toolbar--hour').html();
      if (hour > 1) {
        hour--;
        currentHour--;
        if (currentHour < 0) {
          currentHour = 23;
        }
        $('.home--map--toolbar--hour').html(hour);
        $('.home--map--toolbar--endHour').html('Fin : ' + currentHour + "h" + currentMinute);
      }
    });
  }
  toolbarTime();
  //resize map
  function resizeMap() {
    $('.home--map--api').click( function() {
      $('.home--map').toggleClass('home--map-active');
      $('#search').toggleClass('home--map--toolbar--search-active3');
    });
    $('.home--map--toolbar').click( function() {
      $('.home--map').removeClass('home--map-active');
    });
  }
  resizeMap();
  //resizeItem
  function resizeItem(toResize) {
    var state = close;
    toResize.click( function() {
      if (state == close) {
        $(this).addClass('home--content--item-active');
        $('.home--map').addClass('home--map-active2');
        $('.home--content').addClass('home--content-active');
        $('#search').addClass('home--map--toolbar--search-active4');
        state = open;
      } else if (state == open && $(this).hasClass('home--content--item-active')) {
        $(this).removeClass('home--content--item-active');
        $('.home--map').removeClass('home--map-active2');
        $('.home--content').removeClass('home--content-active');
        $('#search').removeClass('home--map--toolbar--search-active4');
        state = close;
      } else if (state == open) {
        toResize.removeClass('home--content--item-active');
        $(this).addClass('home--content--item-active');
        state = open;
      }
    });
  }
  resizeItem($('.home--content--item'));
  //selectPlace
  function selectPlace() {
    $('.home--content--item--reservation--btn').click( function() {
      $('.home--content--item').toggleClass('home--content--item-activeLoc');
      $('.home--content').toggleClass('home--content-activeLoc');
      $('.home--map--toolbar--search').toggleClass('home--map--toolbar-activeLoc');
      $('.home--map--toolbar').toggleClass('home--map--toolbar-activeLoc');
      $('.home--map').toggleClass('home--map-activeLoc');
      $('.home--content--item--time').fadeOut();
      $('.home--content--item--travel').fadeOut();
      $('.home--content--item--adresse').toggleClass('home--content--item--adresse-active');
      $('.home--time').fadeIn();
    });
  }
  selectPlace();
});
