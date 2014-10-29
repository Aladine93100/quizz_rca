$('document').ready(function() {

	/*Départ*/

	$(".btn-start").click(function() {
		$( ".btn-start" ).hide( "slow" );
		$( ".question1").slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	/*Question1*/

	$(".reponse-bongo, .reponse-patasse").click(function() {
		$( ".question1" ).hide( "slow" );
		$( ".faux1" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".reponse-bozize").click(function() {
		$( ".question1" ).hide( "slow" );
		$( ".vrai1" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".video1").click(function() {
		$( ".vrai1, .faux1" ).hide( "slow" );
		$( ".video-bozize" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".suivant-video1").click(function() {
		$( ".video-bozize" ).hide( "slow" );
		$( ".question2-bis" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".suivant1").click(function() {
		$( ".vrai1, .faux1" ).hide( "slow" );
		$( ".question2-bis" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".reponse-bokassa, .reponse-deby").click(function() {
		$( ".question2-bis" ).hide( "slow" );
		$( ".faux2-bis" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".reponse-catherine").click(function() {
		$( ".question2-bis" ).hide( "slow" );
		$( ".vrai2-bis" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".suivant2-bis").click(function() {
		$( ".vrai2-bis, .faux2-bis" ).hide( "slow" );
		$( ".question3" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	/*Question2*/

	$(".reponse-pachtoune, .reponse-ms13").click(function() {
		$( ".question2" ).hide( "slow" );
		$( ".faux2" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".reponse-seleka").click(function() {
		$( ".question2" ).hide( "slow" );
		$( ".vrai2" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".suivant2").click(function() {
		$( ".vrai2, .faux2" ).hide( "slow" );
		$( ".question3" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	/*Question3*/

	$(".reponse-disparus, .reponse-repartis").click(function() {
		$( ".question3" ).hide( "slow" );
		$( ".faux3" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".reponse-retournes").click(function() {
		$( ".question3" ).hide( "slow" );
		$( ".vrai3" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".temoignage3").click(function() {
		$( ".vrai3, .faux3" ).hide( "slow" );
		$( ".temoignage" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".suivant-temoignage").click(function() {
		$( ".temoignage" ).hide( "slow" );
		$( ".question4" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".suivant3").click(function() {
		$( ".vrai3, .faux3" ).hide( "slow" );
		$( ".question4" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	/*Question4*/

	$(".reponse-aigle, .reponse-epervier").click(function() {
		$( ".question4" ).hide( "slow" );
		$( ".faux4" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".reponse-sangaris").click(function() {
		$( ".question4" ).hide( "slow" );
		$( ".vrai4" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".suivant4").click(function() {
		$( ".vrai4, .faux4" ).hide( "slow" );
		$( ".question5" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".video4").click(function() {
		$( ".vrai4, .faux4" ).hide( "slow" );
		$( ".video-sangaris" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".suivant-video4").click(function() {
		$( ".video-sangaris" ).hide( "slow" );
		$( "" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});



});