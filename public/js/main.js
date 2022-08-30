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
            console.log(empty);
            $('#submit').removeAttr('disabled');
        }
    });
})()