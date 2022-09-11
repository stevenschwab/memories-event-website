(function() {
    $('#eventIndexForm input').on('keyup change', function() {

        let empty = false;
        $('#eventIndexForm input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#eventIndexSubmit').attr('disabled', 'disabled');
        } else {
            $('#eventIndexSubmit').removeAttr('disabled');
        }
    });
})()