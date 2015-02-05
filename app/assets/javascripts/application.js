// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require scripts.js
//= require lightbox.min.js
//= require twitterFetcher_v10_min.js
//= require isotope.min.js
//= require scrollReveal.min.js
//= require spectragram.min.js
//= require skrollr.min.js
//= require smooth-scroll.min.js
//= require jquery.flexslider-min.js
//= require bootstrap.min.js
//= require jquery.plugin.min.js
//= require jquery.min.js
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

$(document).ready(function(){
$('.navbar .dropdown').hover(function() {
$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
}, function() {
$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
});
})