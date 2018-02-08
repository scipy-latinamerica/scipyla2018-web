$(function() {
  $('#contact-form').submit(function(event) {
    event.preventDefault()
    var data = $(this).serialize()
    $('#contact-form input').each(function() {
      if (!$.inArray($(this).attr('name'), ['name', 'email', 'subject', 'message']) && !$(this).val()) {
        $(this).parent().addClass('has-error')
        $('#contact-form-errors').removeClass('alert-success')
        $('#contact-form-errors').addClass('alert-danger')
        $('#contact-form-errors').html('<strong>* CAMPOS REQUERIDOS.</strong> Por favor verifique campos incompletos o incorrectos.')
      }
      else {
        $.ajax({
          url: 'https://formspree.io/contact@cuban.tech',
          method: 'POST',
          data: data,
          dataType: 'json'
        })
          .done(function() {
            $('#contact-form-errors').removeClass('text-danger')
            $('#contact-form-errors').addClass('text-success')
            $('#contact-form-errors').html('<strong><span class="glyphicon glyphicon-envelope"></span> ENVIADO CORRECTAMENTE.</strong> Su mensaje ha llegado con &eacute;xito a su destino.')
          })
          .fail(function() {
            $('#contact-form-errors').removeClass('text-success')
            $('#contact-form-errors').addClass('text-danger')
            $('#contact-form-errors').html('<strong>ERROR!.</strong> Ocurri&oacute; un error al enviar su mensaje, por favor, intentelo de nuevo.')
          })
          .always(function() {
            $('#contact-form-errors').show()
            setTimeout(function() {
              $('#contact-form-errors').hide()
            }, 3000)
            console.log("complete")
          });
      }
    });
  });
});

