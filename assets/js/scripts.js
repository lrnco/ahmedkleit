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
			if (window.location.pathname === '/' || window.location.pathname === '/ahmedkleit/') {
		    e.preventDefault();
		    goToByScroll(this.id);
			}
	});

	$("#scroll-up").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});


	var feed = new Instafeed({
      get: 'user',
      userId: '801384',
      accessToken: '801384.886a748.b302716650804d56973632771462700a',
      links: true,
      limit: '12',
			resolution: 'low_resolution'
  });
	if (window.location.pathname === '/' || window.location.pathname === '/ahmedkleit/') {
	  feed.run();
	}
});
