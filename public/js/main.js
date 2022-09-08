(function() {
    $('form input').on('keyup change', function() {

        let empty = false;
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
      const path = window.location.href; // because the 'href' property of the DOM element is the absolute path
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
    let T = document.getElementById("mediaImages");
    let Y = document.getElementById("addImages");

    T.classList.add("disabled");
    Y.classList.remove("disabled");
}

function enableImages() {
    let T = document.getElementById("mediaImages");
    let Y = document.getElementById("addImages");
    
    Y.classList.add("disabled");
    T.classList.remove("disabled");
}

function addStory() {
    let T = document.getElementById("stories");
    let Y = document.getElementById("addJournalEntry");

    T.classList.add("disabled");
    Y.classList.remove("disabled");
    $('#journalEntry').val('');
}

function showStories() {
    let T = document.getElementById("stories");
    let Y = document.getElementById("addJournalEntry");
    
    Y.classList.add("disabled");
    T.classList.remove("disabled");
    $('#journalEntry').val('');
}

(function() {
    $('.add-journal-entry-white-container input, textarea').on('keyup change', function() {

        let empty = false;
        $('.add-journal-entry-white-container input, textarea').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#postJournal').attr('disabled', 'disabled');
        } else {
            $('#postJournal').removeAttr('disabled');
        }
    });
})()

function onlyOne(checkbox) {
    const checkboxes = document.querySelectorAll('.add-image-checkbox')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}