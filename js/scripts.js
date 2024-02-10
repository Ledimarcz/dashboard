$( document ).ready(function() {

	/* esconde a barra de navegação ao carregar a página caso a resolução da mesma seja maior que 768px*/
	if ($(document).width()<768) {
		$( "#sidebar" ).hide();
	} else {
        $( "#navbar" ).hide();
    }

    /* mostra e esconde a barra de navegação baseado na mudança de resolução da tela */
	$(window).on('resize', function(){
    	var win = $(this);
    	if (win.width()<768) {
    		$( "#sidebar" ).hide();
    		$( "#navbar" ).show();
    	} else {
    		$( "#sidebar" ).show();
    		$( "#navbar" ).hide();
    	}
	});

    /* esconde a barra de navegação ao carregar a página */
    $( "#menu" ).hide();

    /* mostra e esconde a barra de navegação */
	$( "#btn-menu" ).on( "click", function() {
        $( "#menu" ).slideToggle( "slow" );
        $(this).toggleClass('fa-bars fa-xmark');
    });

    /* esconde a barra de navegação quando acontece um evento de scroll */
    $( window ).on( "scroll", function() {
        $( "#menu" ).slideUp( "slow" );
        if($("#btn-menu").hasClass("fa-xmark")) {
            $("#btn-menu").toggleClass('fa-bars fa-xmark');
        }
  } );

});