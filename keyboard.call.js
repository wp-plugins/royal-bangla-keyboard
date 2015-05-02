jQuery.noConflict();
(function($){
  $(function() {
	$('input[type="text"]').ime();
	$('input[type="search"]').ime();
	$('textarea').ime();
  });
})(jQuery);	
	
	
	
jQuery.noConflict();	
(function ($){
	'use strict';

	$.extend( $.ime.sources, {
		'bn-bijoy': {
			name: 'ইউনিজয়',
			source: 'bn-bijoy.js'
		},	
		
		'bn-avro': {
			name: 'অভ্র ফনেটিক',
			source: 'bn-avro.js'
		},
				
		'bn-english': {
			name: 'English',
			source: 'english.js'
		}
		
	} );

	$.extend( $.ime.languages, {
		'bn': {
			autonym: 'Change Keyboard',
			inputmethods: ['bn-bijoy','bn-avro','bn-english' ]
		}
	} );

}(jQuery ));
	