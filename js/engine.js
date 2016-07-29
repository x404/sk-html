$(document).ready(function(){

	$("#foo1").owlCarousel({
		items : 1,
		pagination : true,
		navigation : false,
		singleItem : true,
		navigationText: ["", ""],
		transitionStyle : "fade"
	});	


	$("#foo2").owlCarousel({
		items : 5,
		pagination : false,
		navigation : true,
		navigationText: ["", ""],
		itemsCustom:  [[0, 1], [600, 2], [800, 3], [1000, 4], [1600, 5]]

		// itemsDesktop : [1000,5], //5 items between 1000px and 901px
		// itemsDesktopSmall : [900,3], // betweem 900px and 601px
		// itemsTablet: [600,2], //2 items between 600 and 0
		// itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option

	});	


	// $('.home-slider').slick({
	// 	dots: true,
	// 	arrows : false,
	// 	autoplay: true,
	// 	autoplaySpeed : 5000		
	// })


	$('.grid').isotope({
		// options
		itemSelector: '.grid-item',
		masonryHorizontal: {
			rowHeight: 360
		}
	});


	var panel = $('.header'),
		pos = panel.offset(),
		scrollCoef = 0.0018;

	$(window).bind("scroll",function() {
		$this = $(this);

		// прозрачность верхнего слайдера на главной странице по мере прокрутки страницы
		opacity = 1 - $this.scrollTop() * scrollCoef;
		$('.home-slider').css('opacity', opacity);


		h = $(".header").height();
		/* =header */
		if($this.scrollTop() > 13 && panel.hasClass('default')) {
			// newsrc = $logo.attr("src").replace("logo", "logo-mini");
			panel.removeClass('default').addClass('fixed');
			$("body").addClass('bodyFixed');
			// $logo.attr("src", newsrc);
			// if (device.tablet()==false) {//для scrollParallax
			// 	$(".intro").css("marginTop", $(".homeSlider").height()); 
			// 	$(".main").css("marginTop", $("#foo4").height());
			// }

			// panel.height()
		}
		else {

			if ($this.scrollTop() <=13 && panel.hasClass('fixed')){
				// if($this.scrollTop() <= pos.top && panel.hasClass('fixed')) { // когда достигли самого начала страницы
					panel.removeClass('fixed').addClass('default');
					// newsrc = $logo.attr("src").replace("logo-mini", "logo");
					// $logo.attr("src", newsrc);
					$("body").removeClass('bodyFixed');
					// $homeSlider.css("top",0);
					// if (device.tablet()==true){$homeSlider.css("marginTop",0)}
					// introPosition();
				// }
			}
		}
	})

	

	// var prefix = $('.prefix').val();
		var mobile = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/);

		if(mobile != null) {
			// $('html').css('width', window.innerWidth + 'px');
		} else {
			$(".scroll").each(function () {
				var block = $(this);
				$(window).scroll(function() {
					var top = block.offset().top;
					var bottom = block.height()+top;
					top = top - $(window).height();
					var scroll_top = $(this).scrollTop();

					if ((scroll_top > top + 100) && (scroll_top < bottom)) {
						if (!block.hasClass("animated")) {
							block.addClass("animated");
							block.trigger('animateIn');
						}
					}
					//  else {
					// 	block.removeClass("animated");
					// 	block.trigger('animateOut');
					// }
				});
			});
		};


		$('.product-gallery a').click(function(e){
			e.preventDefault();
			var $this = $(this),
				newsrc = $this.attr('href');
				img = $('#product-foto-big');

			$('.product-gallery li').removeClass('active');
			$this.parent().addClass('active');

			img.animate({opacity : 0},200, function(){
					img.attr('src', newsrc);
					img.animate({opacity:1},200)
				}
			);
		})

		$(".lavaLamp").lavaLamp({
			fx: "backout",
			speed: 700
		})

	// =заглушка для IE
	var browser = navigator.userAgent.indexOf("MSIE");
	var version = parseInt(navigator.userAgent.substr(browser + 5, 2));
	if (version !== -1) var IE = true;
	if (IE && version < 9) {
		var IEhelp = document.createElement("div");
		IEhelp.style.width = "100%";
		IEhelp.style.padding = "11px";
		IEhelp.style.backgroundColor = "#CC3333";
		IEhelp.style.color = "#FFFFFF";
		IEhelp.style.textAlign = "center";
		IEhelp.style.font = "normal 14px/1.2 Helvetica Neue, Tahoma, Verdana, Arial, sans-serif";
		IEhelp.innerHTML = 'Внимание! Вы используете устаревший браузер. <a href="/ie6/ie6.html" target="_blank" style="color: #FFFFFF; text-decoration: underline;">Подробнее &#187;</a>';
		if (document.body.firstChild) {
			document.body.insertBefore(IEhelp, document.body.firstChild);
		}
		else {
			document.body.appendChild(IEhelp);
		}
	}
	// =/заглушка для IE		
})


// $(window).smartresize(function(){
//   $('.grid').isotope({
//     // update columnWidth to a percentage of container width
//     masonry: { columnWidth: $container.width() / 5 }
//   });
// });