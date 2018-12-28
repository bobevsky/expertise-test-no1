$(function () {
	$('#trigger-menu-main').on('click', function() {
		$('.icon-bar, .nav, #menu-main, .login, body').toggleClass('state-open');
		$('.logo-wrap a img').toggleClass('state-hidden');
	})
});