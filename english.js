jQuery.noConflict();
( function ( $ ) {
	'use strict';

	var english = {
		id: 'bn-english',
		name: 'English Keyboard',
		description: 'English Keyboard input method',
		date: '2015-04-26',
		URL: 'http://www.royaltechbd.com',
		author: 'SM Mehdi Akram',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 0,
		patterns: []
	};

	$.ime.register( english );
}( jQuery ) );
