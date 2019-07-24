$(document).ready(function() {

	$('.bbt').on('click', () => {
		$('.overlay').animate(
		{
			opacity: 'toggle'

		}, 2000
		),
		$('.modal').slideDown(1000)
		


	});

	$('.close').on('click', () => {
		$('.overlay').animate(
		{
			opacity: 'toggle'

		}, 1000
		),
		$('.modal').slideUp(1000)
	});
});


