$('document').ready(function() {

	/*Départ*/

	$(".btn-start").click(function() {
		$( ".btn-start, .image-home, .navbar" ).hide( "slow" );
		$( ".launch, .intro").slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".launch").click(function() {
		$( ".intro, .launch" ).hide( "slow" );
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
		$( ".question2-ter" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".reponse-chretien, .reponse-animiste").click(function() {
		$( ".question2-ter" ).hide( "slow" );
		$( ".vrai2-ter" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".reponse-muslim").click(function() {
		$( ".question2-ter" ).hide( "slow" );
		$( ".faux2-ter" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	// $(".suivant2-ter").click(function() {
	// 	$( ".vrai2-ter, .faux2-ter" ).hide( "slow" );
	// 	$( ".question2-bis" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	// });

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
		$( ".question2" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
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
		$( ".question5" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	/*Question5*/

	$(".reponse-1956, .reponse-1962").click(function() {
		$( ".question5" ).hide( "slow" );
		$( ".faux5" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".reponse-1960").click(function() {
		$( ".question5" ).hide( "slow" );
		$( ".vrai5" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".video5").click(function() {
		$( ".question5, .vrai5, .faux5" ).hide( "slow" );
		$( ".video-richesse" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".suivant-video5").click(function() {
		$( ".video-richesse" ).hide( "slow" );
		$( ".centrafrique" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".suivant5").click(function() {
		$( ".question5" ).hide( "slow" );
		$( ".centrafrique" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$(".suivant-end").click(function() {
		$( ".centrafrique" ).hide( "slow" );
		$( ".chrono" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});



	/* pagination */
    
    $("#next1").click(function() {
		$( ".faux2-ter" ).hide( "slow" );
		$( ".faux2-ter2" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#next2").click(function() {
		$( ".faux2-ter2" ).hide( "slow" );
		$( ".faux2-ter3" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#preview2").click(function() {
		$( ".faux2-ter2" ).hide( "slow" );
		$( ".faux2-ter1" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#next3").click(function() {
		$( ".faux2-ter3" ).hide( "slow" );
		$( ".faux2-ter4" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#preview3").click(function() {
		$( ".faux2-ter3" ).hide( "slow" );
		$( ".faux2-ter2" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#next4").click(function() {
		$( ".faux2-ter4" ).hide( "slow" );
		$( ".question2-bis" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#preview4").click(function() {
		$( ".faux2-ter4" ).hide( "slow" );
		$( ".faux2-ter3" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});





	$("#q1").click(function() {
		$( ".end, .question2, .question2-bis, .question2-ter, .question3, .question4, .question5, .suivant1, .suivant-video1" ).hide( "slow" );
		$( ".question1" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#q2").click(function() {
		$( ".end, .question1, .question2-bis, .question2-ter, .question3, .question4, .question5, .vrai1, .vrai2, .vrai2-bis, .vrai2-ter, .vrai3, .vrai4, .vrai5" ).hide( "slow" );
		$( ".question2" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#q3").click(function() {
		$( ".end, .question1, .question2, .question2-bis, .question3 .question4, .question5, .vrai1, .vrai2, .vrai2-bis, .vrai2-ter, .vrai3, .vrai4, .vrai5" ).hide( "slow" );
		$( ".question2-ter" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#q4").click(function() {
		$( ".end, .question2, .question1, .question2-ter, .question3 .question5, .vrai1, .vrai2, .vrai2-bis, .vrai2-ter, .vrai3, .vrai4, .vrai5" ).hide( "slow" );
		$( ".question2-bis" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#q5").click(function() {
		$( ".end, .question2, .question2-bis, .question2-ter, .question1, .question4, .vrai1, .vrai2, .vrai2-bis, .vrai2-ter, .vrai3, .vrai4, .vrai5" ).hide( "slow" );
		$( ".question3" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#q6").click(function() {
		$( ".end, .question2, .question2-bis, .question2-ter, .question3, .question4, .question5, .question1, .vrai1, .vrai2, .vrai2-bis, .vrai2-ter, .vrai3, .vrai4, .vrai5" ).hide( "slow" );
		$( ".question4" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});

	$("#q7").click(function() {
		$( ".end, .question2, .question2-bis, .question2-ter, .question3, .question4, .question1, .vrai1, .vrai2, .vrai2-bis, .vrai2-ter, .vrai3, .vrai4, .vrai5" ).hide( "slow" );
		$( ".question5" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	});


	// $(".suivant4").click(function() {
	// 	$( ".vrai4, .faux4" ).hide( "slow" );
	// 	$( ".question5" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	// });

	// $(".video4").click(function() {
	// 	$( ".vrai4, .faux4" ).hide( "slow" );
	// 	$( ".video-sangaris" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	// });

	// $(".suivant-video4").click(function() {
	// 	$( ".video-sangaris" ).hide( "slow" );
	// 	$( "" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
	// });




});