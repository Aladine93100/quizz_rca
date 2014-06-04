$('document').ready(function() {

	$(".btn-start").click(function() {
		$( ".btn-start" ).hide( "slow" );
		$( "#ibn-saoud, #faycal, #khaled, #fahd, #abdallah, #mouqrin, #salman, .btn-wahab" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
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

	$ (".btn-wahab").click(function() {
		$("#ibn-saoud, #faycal, #khaled, #fahd, #abdallah, #mouqrin, #salman, .is-bis, .khaled-bis, .faycal-bis, .fahd-bis, .mouqrin-bis, .salman-bis, .abdallah-bis").hide("slow");
		$(".media").slideUp( 300 ).delay( 800 ).fadeIn( 400 );

	});

	function doIt() {
		$( ".quest1, .rep1" ).show( "slow" );
	}
// Can pass in function name
$( ".start1" ).click( doIt );

$( "form" ).submit(function( event ) {
	if ( $( "input" ).val() === "yes" ) {
		$( "#rep1" ).show( 4000, function() {
			$( this ).text( "Ok, DONE! (now showing)" );
		});
	}
	$( ".quest1, .rep1" ).hide( "fast" );
});
});