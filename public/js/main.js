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
    document.getElementById('media-file-names').innerHTML = '';
    document.getElementById('mediaImagesUpload').value = '';
    document.getElementById('image-previews').innerHTML = '';
    const checkboxes = document.querySelectorAll('.add-image-checkbox');
    checkboxes.forEach((item) => {
        item.checked = false;
    });
    document.getElementById('image-previews').classList.add("disabled");
    document.querySelector('.add-image-white-container-image-button').classList.remove("disabled");
    
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
    const checkboxes = document.querySelectorAll('.add-image-checkbox');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    });
}

function showname() {
    const name = document.getElementById('mediaImagesUpload');
    console.log(name.files);
    // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
    if (name.files.length > 0) {
        // RUN A LOOP TO CHECK EACH SELECTED FILE.
        for (let i = 0; i <= name.files.length - 1; i++) {
            document.getElementById('media-file-names').innerHTML =
            document.getElementById('media-file-names').innerHTML
            +
            ' ' + name.files[i].name
            +
            ','
        };
        // show image previews
        const imagePreviewContainer = document.getElementById('image-previews');
        for (let i = 0; i <= name.files.length - 1; i++) {
            let imagePreview = document.createElement("img");
            imagePreview.className = "add-image-white-container-image-preview";
            imagePreview.src = URL.createObjectURL(name.files[i]);
            imagePreviewContainer.appendChild(imagePreview);
        };
        document.querySelector('.add-image-white-container-image-button').classList.add("disabled");
        imagePreviewContainer.classList.remove("disabled");
    }
};