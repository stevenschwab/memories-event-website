(function() {
    $('form input').on('keyup change', function() {

        var empty = false;
        $('form input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#submit').attr('disabled', 'disabled');
        } else {
            $('#submit').removeAttr('disabled');
        }
    });
})()

$(document).ready(function () {
    // Underline to remain in navbar after click using URL
    jQuery(function ($) {
      var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
      $('header > nav > ul > li > a').each(function () {
        if (this.href === path) {
          $(this).addClass('active');
        }
      });
    });
});

let journalIndex = 3
$('#journalScrollIcon').click(function() {
    //get list of all h1s on the page.
    const journal_list = document.querySelectorAll('.journal-entry');
    //convert to array so we can use .click() or .scrollIntoView() later...
    let arrayList = Array.from(journal_list);
    //scroll to journal entries
    if (arrayList[journalIndex] !== undefined){
        arrayList[journalIndex].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        journalIndex += 1;
    }
});

function disableImages() {
    var T = document.getElementById("mediaImages");
    var Y = document.getElementById("addImages");

    T.classList.add("disabled");
    Y.classList.remove("disabled");
}

function enableImages() {
    var T = document.getElementById("mediaImages");
    var Y = document.getElementById("addImages");
    
    Y.classList.add("disabled");
    T.classList.remove("disabled");
}