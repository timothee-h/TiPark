$(document).ready(function(){function e(){$("#menu-btn").click(function(e){e.preventDefault(),$("#sideBar").toggleClass("sideBar-active"),$("#home").toggleClass("home-active")})}function o(){var e=close;$("#search, #search-close").click(function(){e==close?($(".home--map").removeClass("home--map-active"),$("#search").removeClass("home--map--toolbar--search-active3"),$("#search").toggleClass("home--map--toolbar--search-active2"),setTimeout(function(){$("#home--search").toggleClass("home--search-active")},750),setTimeout(function(){$("#search-icon").toggleClass("home--map--toolbar--search--icon-active"),$("#search").toggleClass("home--map--toolbar--search-active")},500),e=open):($("#home--search").toggleClass("home--search-active"),$("#search").toggleClass("home--map--toolbar--search-active"),setTimeout(function(){$("#search-icon").toggleClass("home--map--toolbar--search--icon-active")},300),setTimeout(function(){$("#search").toggleClass("home--map--toolbar--search-active2")},100),e=close)})}function a(){var e=new Date,o=e.getHours(),a=e.getMinutes();$(".home--map--toolbar--endHour").html("Fin : "+o+"h"+a),$(".home--map--toolbar--control--more").click(function(){var e=$(".home--map--toolbar--hour").html();e++,o++,o>=24&&(o=0),$(".home--map--toolbar--hour").html(e),$(".home--map--toolbar--endHour").html("Fin : "+o+"h"+a)}),$(".home--map--toolbar--control--less").click(function(){var e=$(".home--map--toolbar--hour").html();e>1&&(e--,o--,0>o&&(o=23),$(".home--map--toolbar--hour").html(e),$(".home--map--toolbar--endHour").html("Fin : "+o+"h"+a))})}function t(){$(".home--map--api").click(function(){$(".home--map").toggleClass("home--map-active"),$("#search").toggleClass("home--map--toolbar--search-active3")}),$(".home--map--toolbar").click(function(){$(".home--map").removeClass("home--map-active")})}function c(){var e=close;$(".home--content--item").click(function(){e==close?($(this).addClass("home--content--item-active"),$(".home--map").addClass("home--map-active2"),$(".home--content").addClass("home--content-active"),$("#search").addClass("home--map--toolbar--search-active4"),e=open):e==open&&$(this).hasClass("home--content--item-active")?($(this).removeClass("home--content--item-active"),$(".home--map").removeClass("home--map-active2"),$(".home--content").removeClass("home--content-active"),$("#search").removeClass("home--map--toolbar--search-active4"),e=close):e==open&&($(".home--content--item").removeClass("home--content--item-active"),$(this).addClass("home--content--item-active"),e=open)})}function m(){$(".home--content--item--reservation--btn").click(function(){$(".home--content--item").toggleClass("home--content--item-activeLoc"),$(".home--content").toggleClass("home--content-activeLoc"),$(".home--map--toolbar--search").toggleClass("home--map--toolbar-activeLoc"),$(".home--map--toolbar").toggleClass("home--map--toolbar-activeLoc"),$(".home--map").toggleClass("home--map-activeLoc")})}e(),o(),a(),t(),c(),m()});