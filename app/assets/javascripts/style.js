$('document').ready(function() {

	$(".btn-start").click(function() {
		$( ".btn-start" ).hide( "slow" );
		$( "#ibn-saoud, #faycal, #khaled, #fahd, #abdallah, #mouqrin, #salman" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#ibn-saoud").click(function() {
		$(".is-bis").slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#faycal").click(function() {
		$(".faycal-bis").slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#khaled").click(function() {
		$(".khaled-bis").slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#fahd").click(function() {
		$(".fahd-bis").slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#abdallah").click(function() {
		$(".abdallah-bis").slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#mouqrin-saoud").click(function() {
		$(".mouqrin-bis").slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#salman").click(function() {
		$(".salman-bis").slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});
});