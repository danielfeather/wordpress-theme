<?php

add_action('wp_enqueue_scripts', static function(){
    wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/css/main.css',false,'1.1','all');
});