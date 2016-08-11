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


	$("#foo3").owlCarousel({
		items : 4,
		pagination : false,
		navigation : false,
		navigationText: ["", ""]
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
			panel.removeClass('default').addClass('fixed');
			$("body").addClass('bodyFixed');
		}
		else {

			if ($this.scrollTop() <=13 && panel.hasClass('fixed')){
				panel.removeClass('fixed').addClass('default');
				$("body").removeClass('bodyFixed');
			}
		}
	})



	// var prefix = $('.prefix').val();
		// var mobile = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/);


		//
		// if ((scroll_top > top + 100) && (scroll_top < bottom)) {
		// 	if (!block.hasClass("animated")) {
		// 		block.addClass("animated");
		// 		block.trigger('animateIn');
		// 	}
		// }



			$(".scroll").each(function () {
				var block = $(this);

				// начальная позиция
				var start_top = block.offset().top - $(window).height(),
					 start_scroll_top = $(this).scrollTop();
				if (start_scroll_top > start_top + 100){
						block.addClass("animated");
						block.trigger('animateIn');
				}


				$(window).scroll(function() {
					// var top = block.offset().top,
						// bottom = block.height()+top,
					var top = block.offset().top - $(window).height(),
						 scroll_top = $(this).scrollTop();

					// if ((scroll_top > top + 100) && (scroll_top < bottom)) {
					if (scroll_top > top + 100){
						if (!block.hasClass("animated")) {
							block.addClass("animated");
							block.trigger('animateIn');
						}
					}
				});
			});



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
