(function() {
    $('#addImages input').on('keyup change', function() {

        let empty = false;
        if ($('#mediaImagesUpload').val() == '') {
            empty = true;
        } else if ($('input[name="addCredit"]').prop('checked') === true && document.getElementById('mediaCredit').value === '') {
            empty = true;
        } else if ($('input[name="addCredit"]').prop('checked') === false && $('input[name="anonymous"]').prop('checked') === false) {
            empty = true;
        }

        if (empty) {
            $('#addMediaUploadButton').attr('disabled', 'disabled');
        } else {
            $('#addMediaUploadButton').removeAttr('disabled');
        }
    });
})()

function showname() {
    const name = document.getElementById('mediaImagesUpload');
    console.log(name.files);
    // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
    if (name.files.length > 0) {
        // RUN A LOOP TO CHECK EACH SELECTED FILE.
        for (let i = 0; i <= name.files.length - 1; i++) {
            if (i >= 0 && i < name.files.length - 1){
                document.getElementById('media-file-names').innerHTML =
                document.getElementById('media-file-names').innerHTML
                +
                ' ' + name.files[i].name
                +
                ','
            } else {
                document.getElementById('media-file-names').innerHTML =
                document.getElementById('media-file-names').innerHTML
                +
                ' ' + name.files[i].name
            }
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

$(function () {
    $('input[name="mediaCredit"]').hide();

    //show it when the checkbox is clicked
    $('input[name="addCredit"]').on('click', function () {
        if ($(this).prop('checked')) {
            $('input[name="mediaCredit"]').fadeIn();
        } else {
            document.getElementById('mediaCredit').value = '';
            $('input[name="mediaCredit"]').hide();
        }
    });
});

function onlyOne(checkbox) {
    const checkboxes = document.querySelectorAll('.add-image-checkbox');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    });
    //hide media credit input if anonymous selected
    $('input[name="anonymous"]').on('click', function () {
        if ($(this).prop('checked')) {
            document.getElementById('mediaCredit').value = '';
            $('input[name="mediaCredit"]').hide();
        }
    });
}

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
    $('input[name="mediaCredit"]').hide();
    document.getElementById('mediaCredit').value = '';
    
    Y.classList.add("disabled");
    T.classList.remove("disabled");
}

function disableUploadButton() {
    const btn = document.getElementById('addMediaUploadButton');

    btn.disabled = true;
    btn.innerText = 'Posting...';

    document.getElementById("addImages").submit();
}

$(document).ready(function(){
    const container = document.querySelector('.media-images');

    container.scrollTo({top: container.scrollHeight, behavior: 'smooth'});
});