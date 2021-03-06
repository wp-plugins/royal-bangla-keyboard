﻿jQuery.noConflict();
( function ( $ ) {
	'use strict';

	var bnbijoy = {
		id: 'bn-bijoy',
		name: 'Unijoy Keyboard',
		description: 'Bijoy Keyboard input method',
		date: '2015-04-26',
		URL: 'http://www.royaltechbd.com',
		author: 'SM Mehdi Akram',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 2,
		maxKeyLength: 2,
		patterns: [
			['1', '১'],
			['2', '২'],
			['3', '৩'],
			['4', '৪'],
			['5', '৫'],
			['6', '৬'],
			['7', '৭'],
			['8', '৮'],
			['9', '৯'],
			['0', '০'],
		
			['্a','[^o`]', 'ঋ'],		
			['্s','[^o`]', 'উ'],
			['্S','[^o`]', 'ঊ'],
			['্d','[^o`]', 'ই'],
			['্D','[^o`]', 'ঈ'],
			['্f','[^o`]', 'আ'],
			['্x','[^o`]', '‌ও'],
			['্X','[^o`]', 'ঔ'],
			['্c','[^o`]', 'এ'],
			['্C','[^o`]', 'ঐ'],
				
			
			['q', 'ঙ'],
			['w', 'য'],
			['e', 'ড'],
			['r', 'প'],
			['t', 'ট'],
			['y', 'চ'],
			['u', 'জ'],
			['i', 'হ'],
			['o', 'গ'],
			['p', 'ড়'],

			['a', 'ৃ'],
			['s', 'ু'],
			['d', 'ি'],
			['f', 'া'],			
			['g', '্'],
			['h', 'ব'],			
			['j', 'ক'],
			['k', 'ত'],
			['l', 'দ'],

			['z', '্র'],
			['x', 'ো'],
			['c', 'ে'],
			['v', 'র'],
			['b', 'ন'],
			['n', 'স'],
			['m', 'ম'],

			['Q', 'ং'],
			['W', 'য়'],
			['E', 'ঢ'],
			['R', 'ফ'],
			['T', 'ঠ'],
			['Y', 'ছ'],
			['U', 'ঝ'],
			['I', 'ঞ'],
			['O', 'ঘ'],
			['P', 'ঢ়'],

			['A', 'র্'],
			['S', 'ূ'],
			['D', 'ী'],
			['F', 'অ'],
			['G', '।'],
			['H', 'ভ'],			
			['J', 'খ'],
			['K', 'থ'],
			['L', 'ধ'],

			['Z', '্য'],
			['X', 'ৌ'],
			['C', 'ৈ'],
			['V', 'ল'],
			['B', 'ণ'],
			['N', 'ষ'],
			['M', 'শ'],

			['!', '!'],
			['@', 'ঁ'],
			['#', '#'],
			['\\$', '৳'],
			['%', '%'],
			['^', 'ঃ'],
			['&', 'ৎ'],
			['*', '*'],
			['(', '('],
			[')', ')']
			
			]
	};

	$.ime.register( bnbijoy );
}( jQuery ) );
