$(document).ready(function () {
    // Underline to remain in navbar after click using URL
    jQuery(function ($) {
      const path = window.location.href; // because the 'href' property of the DOM element is the absolute path
      $('header > nav > ul > li > a').each(function () {
        if (this.href === path) {
          $(this).addClass('active');
        }
      });
    });
});