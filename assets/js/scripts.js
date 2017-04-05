$(document).ready(function(){
	$('#nav-icon, #nav-close').click(function(){
		$('#nav-menu').toggleClass('open');
	});

	function goToByScroll(id){
    id = id.replace("link-", "");
		var offset = $("#"+id).offset().top - 60;
    $('html,body').animate({ scrollTop: offset }, 'slow');
	}

	$("#nav-menu > a").click(function(e) {
			if (window.location.pathname === '/') {
		    e.preventDefault();
		    goToByScroll(this.id);
			}
	});

	$("#scroll-up").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});
});
