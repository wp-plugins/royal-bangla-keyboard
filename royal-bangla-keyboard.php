<?php

/*
Plugin Name: Royal Bangla Keyboard
Description: Bangla typing options for wordpress without using any 3rd party tool or keyboard. This plugin will let you (back-end) & your visitors type in Bangla (Unijoy & Avro)
Plugin URI: https://wordpress.org/plugins/royal-bangla-keyboard/
Author: SM Mehdi Akram
Author URI: http://www.royaltechbd.com
Version: 1.1
License: GPL2
*/



/*Some Set-up*/
define('RBK_PLUGIN_PATH', WP_PLUGIN_URL . '/' . plugin_basename( dirname(__FILE__) ) . '/' );



function royal_bangla_load_scripts_for_font_end() {
    wp_enqueue_script( 'royal_bangla_keyboard_sizzle',RBK_PLUGIN_PATH .'sizzle.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_imeselector1',RBK_PLUGIN_PATH .'imeselector1.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_imeselector2',RBK_PLUGIN_PATH .'imeselector2.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_inputmethods',RBK_PLUGIN_PATH .'inputmethods.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_bn-avro',RBK_PLUGIN_PATH .'bn-avro.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_bn-bijoy',RBK_PLUGIN_PATH .'bn-bijoy.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_english',RBK_PLUGIN_PATH .'english.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_call',RBK_PLUGIN_PATH .'keyboard.call.js', array('jquery'));
}
add_action('wp_enqueue_scripts', 'royal_bangla_load_scripts_for_font_end');




function royal_bangla_load_scripts() {
    wp_enqueue_script( 'royal_bangla_keyboard_imeselector1',RBK_PLUGIN_PATH .'imeselector1.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_imeselector2',RBK_PLUGIN_PATH .'imeselector2.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_inputmethods',RBK_PLUGIN_PATH .'inputmethods.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_bn-avro',RBK_PLUGIN_PATH .'bn-avro.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_bn-bijoy',RBK_PLUGIN_PATH .'bn-bijoy.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_english',RBK_PLUGIN_PATH .'english.js', array('jquery'));
    wp_enqueue_script( 'royal_bangla_keyboard_call',RBK_PLUGIN_PATH .'keyboard.call.js', array('jquery'));
}
add_action('admin_enqueue_scripts', 'royal_bangla_load_scripts' );
add_action('admin_head','royal_bangla_load_scripts');
add_action('wp_head','royal_bangla_load_scripts');
add_action('admin_init','royal_bangla_load_scripts');




function royal_bangla_load_style() {
	wp_enqueue_style( 'royal_bangla_keyboard_style', RBK_PLUGIN_PATH .'keyboard.style.css');
}
add_action('admin_enqueue_scripts', 'royal_bangla_load_style' );
add_action('init', 'royal_bangla_load_style');
add_action('wp_enqueue_scripts', 'royal_bangla_load_style');
add_action('admin_head','royal_bangla_load_style');
add_action('wp_head','royal_bangla_load_style');
add_action('admin_init','royal_bangla_load_style');

