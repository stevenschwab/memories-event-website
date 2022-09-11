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