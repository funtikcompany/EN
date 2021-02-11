$(function () {



	/* Слайдер  */
	$(".slider").slick({
		nextArrow: ' <button type="button" class=" slick-btn slick-next"></button>',
		prevArrow: ' <button type="button" class="slick-btn slick-prev"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 860,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					veriableWidth: true,
				}
			},
			{
				breakpoint: 673,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					veriableWidth: true,
				}
			},

		],


	});


	/* Слайдерчек */

	$(".slider").on("afterChange", function (event, slick, currentSlide, nextSlide) {
		let i = (currentSlide ? currentSlide : 0) + 1;
		$(".slide__check-pos").text(i + '/' + slick.slideCount);

	});
	$("#header__toggle").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$(".header__list").toggleClass("active");
	});





	/* ВАлидация */

	$('#form').submit(function(e){
		e.preventDefault();
	}).validate({
		rules: {
			name: {
				required: true,
				minlength: 5,
			},
			Codefilt: {
				required: true,
				minlength: 4,
			},
			tel: {
				required: true,
			
				minlength: 10,

			}
		},
		messages: {

			name: {
				required: "Введите имя !",
				minlength: "Имя должно быть больше 5 символов!",
			},

			Codefilt: {
				required: "Введите код товара !",
				minlength: "Код должен быть больше 5 символов!",


			},

			tel: {
				required: "Введите телефон!",
				minlength: "Должно быть больше 10 цифр!",
			},



		},
		submitHandler: function(form) {
			$.post('main.php', $(form).serialize(), function (data, textStatus) {
				 form.submit();
				 alert("Спасибо .Мы с вами свяжемся");
			},'json');
	  },
	});


	/*Инпут маска */

	let selector = $('#form input[type="tel"]');
	selector.inputmask('+(380) 999-99-99');











});