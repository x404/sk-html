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
	});


	$('.grid').isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows',
		masonryHorizontal: {
			rowHeight: 360
		}
	});


	var panel = $('.header'),
		pos = panel.offset(),
		scrollCoef = 0.0018,
		width = $(window).width();

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
			if ( width <= 991) {
				$("body").addClass('bodyFixedSm')
			}
		}
		else {
			if ($this.scrollTop() <=13 && panel.hasClass('fixed')){
				panel.removeClass('fixed').addClass('default');
				$("body").removeClass('bodyFixed bodyFixedSm');
			}
		}
	})


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
			var top = block.offset().top - $(window).height(),
				 scroll_top = $(this).scrollTop();

			if (scroll_top > top + 100){
				if (!block.hasClass("animated")) {
					block.addClass("animated");
					block.trigger('animateIn');
				}
			}
		});
	});


	// slider on card page
	$("#foo3").owlCarousel({
		items : 1,
		singleItem : true,
		pagination : false,
		navigation : true,
		navigationText: ["", ""],
		transitionStyle : "fade",
		mouseDrag : false,
		afterAction : function(elem){
			cur = this.currentItem;
			$('.product-gallery li').eq(cur).trigger('click');
		}
	});


	$('.product-gallery li').click(function(e){
			var $this = $(this),
				cur = $this.index();
			$('#foo3').trigger("owl.goTo",cur);
	})

	$(".lavaLamp").lavaLamp({
		fx: "backout",
		speed: 700
	})
	// #slider on card page


	$('.question').click(function(e){
		e.preventDefault();
		var $this = $(this);
		$this.next('.answer').slideToggle("normal",function(){
			$this.parent().toggleClass('open');
		})
	})

	// styler
	$('#delivery').styler({
		onSelectClosed: function() {
			$('#delivery').trigger('refresh');
			$('#delivery-styler').removeClass('error').addClass('valid').append('<label class="valid">Успіх!</label>')
		}
	});

	$('#payment').styler({
		onSelectClosed: function() {
			$('#payment').trigger('refresh');
			$('#payment-styler').removeClass('error').addClass('valid').append('<label class="valid">Успіх!</label>')
		}
	});
	// #styler


	//  validation order form
	$('.order-form').validate({
		submitHandler: function(form){
			//  событие в случае успешной валидации (тут можно вызывать ajax)
		}
	})

	$('.order-form .form-control').on('change click keypress',function(){
		var $this = $(this);
		setTimeout(function() {
			$this.closest('.box').find('label.valid').remove();
			if ($this.hasClass('valid')) {
				$('<label class="valid">Успіх!</label>').insertAfter($this);
			}
		}, 1);
	})
	//  #validation order form


	$('.mobile-menu').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $this.find('.back'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				$('body').addClass('o-menu')
				// $this.addClass('o-menu');
			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
			};
		init();
	});

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

$(document).on('click', '.popup .close', function(e) {
	e.preventDefault();
	$(this).closest('.popup').fadeOut();
})


jQuery.extend(jQuery.validator.messages, {
	required: "Помилка",
	email: "Помилка"
})
