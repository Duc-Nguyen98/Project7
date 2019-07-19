document.addEventListener("DOMContentLoaded",function(){
	//code o day
	//calling Brand Crousel
		$(".main-banner").owlCarousel({
			loop:true,
			margin:5,
			responsiveClass:true,
			slideSpeed : 2000,
			smartSpeed:2500,
			nav: true,
			// autoplay: true,
			// autoplayTimeout:5000,
			// responsiveRefreshRate : 200,
			rewind:true,
			responsive:{
				0:{
					items:1,
					nav:false,
					navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
				},
				600:{
					items:1,
					nav:false,
					navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
				},
				1000:{
					items:1,
					nav:false,
					navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
					loop:true
				}
			}
		});		
},false)