$(document).ready(function () {
    $("#trip").submit(function (event) {
        // Prevent default posting of form - put here to work in case of errors
        event.preventDefault();
        var request;
        // setup some local variables
        var $form = $(this);

        // Let's select and cache all the fields
        var $inputs = $form.find("input, select, button, textarea");

        // Serialize the data in the form
        var serializedData = $form.serialize();

        // Let's disable the inputs for the duration of the Ajax request.
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);

        var url = "http://techtrips.com.br/email/home/send";

        // Fire off the request to /form.php
        request = $.ajax({
            url: url,
            type: "POST",
            data: serializedData
        });

        $('.alertbox').css('display', 'block');
        $('.footer-form').css('display', 'none');



        // Callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR) {
            // Log a message to the console
            $('.alertbox').css('display', 'none');
            $('.okbox').css('display', 'block');
        });

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown) {
            // Log the error to the console
            $('.alertbox').css('display', 'none');
            $('.failbox').css('display', 'block');
            //$('.alert-danger').html('<p>' + jqXHR.responseText + '</p>');
        });


        // Callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // Reenable the inputs
            $inputs.prop("disabled", false);
        });
        
    });
});