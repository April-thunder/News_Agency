$(function MainMenu(){
			let burger = $('.burger-icon');
			let menu = $('.mobile-menu');
			let close = $('.close-icon');
		
		burger.on('click', function(event) {
			event.preventDefault();
			menu.addClass('mobile-menu__open');
		});

		close.on('click', function(event) {
			event.preventDefault();
			menu.removeClass('mobile-menu__open');
		});
	})
		