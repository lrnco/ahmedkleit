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
      userId: '35211881',
      accessToken: '35211881.95346ed.2a001f82d61a4a999880b89007a4bcf7',
      links: true,
      limit: '12',
  });
  feed.run();
});
