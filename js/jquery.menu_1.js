//  Toggle menu for mobile devices using jQuery //
$("#nav").prepend('<span id="menutoggle"><span>Menu</span></span>');
$(document).ready(function(){
  $("#menutoggle").click(function(event){
	$(this).toggleClass("active");
    $(this).next('ul').stop().slideToggle(100);
	$("#nav span.dropdown, #nav ul.drop").removeClass("active");
	event.preventDefault();
  });
  $("#nav span.dropdown").click(function(event){
	if( $("#menutoggle").is(':visible') ) {
	  $(this).toggleClass("active");
	  $(this).next('ul').slideToggle(100).toggleClass("active");
	}
    if( $("html").hasClass('touch') && $("#menutoggle").is(':hidden') ) {
	  if( !$(this).hasClass('active') ) {
		$('span.dropdown').removeClass('active hover');
		$('#nav span.dropdown').next('ul.drop').removeClass('active');
		$(this).addClass('active hover');
		$(this).next('ul.drop').addClass('active');
	  } else
	  if( $(this).hasClass('active') ) {
		$(this).removeClass('active hover');
		$(this).next('ul.drop').removeClass('active');
	  }
    }
	event.preventDefault();
  });
  if($("html").hasClass('touch')) {
	$(window).bind('orientationchange', function() {
      if ($("#menutoggle, #nav span.dropdown, #nav ul.drop").hasClass("active")){
	    $("#nav ul").slideUp(100);
      }
	  $("#menutoggle, #nav span.dropdown, #nav ul.drop").removeClass("active hover");
	});
  }
  var wWidth = $(window).width();
  $(window).resize(function() {
    if( wWidth != $(window).width() ) {
      if ($("#menutoggle, #nav span.dropdown, #nav ul.drop").hasClass("active")){
	    $("#nav ul.drop").slideUp(100);
      }
      if (!$("#menutoggle").is(':hidden')){
	    $("#nav ul").slideUp(100);
      }
      $("#menutoggle, #nav span.dropdown, #nav ul.drop").removeClass("active hover");
    }
  });
  //  Dropdown Select  
  $('ul.dropdown li ul.drop').css({display: 'none' , left: '-999em;'});
  $('ul.dropdown span.dropdown').click(function(){
	if( $(this).next('ul.drop').is(':hidden') ) {
	  $('ul.dropdown span.dropdown').removeClass('active').next('ul.drop').slideUp(100);
	  $(this).toggleClass('active').next('ul.drop').slideDown(100).css({display: 'block' , left: '0'});
	} else
	if( $(this).next('ul.drop').is(':visible') ) {
	  $(this).removeClass('active').next('ul.drop').slideUp(100).css({left: '-999em;'});
	}
	return false;
  });
  $(document).click(function(event) {
	if (!$(event.target).closest("#menutoggle, #nav ul").length) {
      if ($("#menutoggle, #nav span.dropdown, #nav ul.drop").hasClass("active")){
        if ($("#menutoggle").hasClass("active")){
	      $("#nav ul").slideUp(100);
        }
	    $("#nav ul.drop").slideUp(100);
      }
	  $("#menutoggle, #nav span.dropdown, #nav ul.drop").removeClass("active hover");
	}
	if (!$(event.target).closest("ul.dropdown span.dropdown").length) {
	  $("ul.dropdown ul.drop").slideUp(100);
	  $("ul.dropdown span.dropdown").removeClass('active');
	}
  });
});
