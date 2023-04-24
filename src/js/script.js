$(document).ready(function(){
		$('.carousel__inner').slick({
				speed: 1200,
				prevArrow: '<button type="button" class="slick-prev"><img src="img/screen4_icon_chevron-left1-solid.png"></button>',
				nextArrow: '<button type="button" class="slick-next"><img src="img/screen4_icon_chevron-right2-solid.png"></button>',
				responsive: [
						{
							breakpoint: 992,
							settings: {
								arrows: false,
								dots: true
							}
						}
					]
		});

		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
			$(this)
				.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
				.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});


		function toggleSlide(item) {
			$(item).each(function(i) {
				$(this).on('click', function(e) {
					e.preventDefault();
					$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
					$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
				})
			})
		};

		toggleSlide('.catalog-item__link');
		toggleSlide('.catalog-item__back');

		//Modal

		$('[data-modal=consultation]').on('click', function(){
			$('.overlay, #consultation').fadeIn('slow');
		});
		$('.modal__close').on('click', function () {
			$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
		});

		$('.button_mini').each(function(i){
			$(this).on('click', function(){
				$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
				$('.overlay, #order').fadeIn('slow');
			})
		});


		function valideForms(form) {
			$(form).validate({
				rules: {
					name: "required",
					phone: "required",
					email: {
						required: true,
						email: true
					}
				},
				messages: {
					name: "Введите Ваше имя",
					phone: "Введите Ваш номер телефона",
					email: {
					  required: "Введите Ваш e-mail",
					  email: "Формат эл.почты name@domain.com"
					}
				}
			});
		};

		valideForms('#consultation-form');
		valideForms('#order form');
		valideForms('#consultation form');

		$('input[name=phone]').mask("+(999) 999-99-99");

		$('form').submit(function(e){
			e.preventDefault();
			if (!$(this).valid()) {
				return;
			}
			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");

				$('#consultation, #order').fadeOut();
				$('.overlay, #thanks').fadeIn();

				$('form').trigger('reset');
			});
			return false;
		});

		//Smooth scroll and pageUp
		$(window).scroll(function() {
			if ($(this).scrollTop() > 1600) {
				$('.pageup').fadeIn();
			} else {
				$('pageup').fadeOut();
			}

		});

		$(document).ready(function(){
			$("a").on('click', function(event) {
			  if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
				  scrollTop: $(hash).offset().top
				}, 800, function(){
				  window.location.hash = hash;
				});
			  } 
			});
		  }); 

		  wow = new WOW(
			{
			boxClass:     'wow',      // default
			animateClass: 'animated', // default
			offset:       0,          // default
			mobile:       true,       // default
			live:         true        // default
		  }
		  )
		  wow.init();
	});