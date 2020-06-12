$(document).ready(function () {
  $('.show_pass').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).html('<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.6" d="M1 1.27L2.28 0L19 16.72L17.73 18L14.65 14.92C13.5 15.3 12.28 15.5 11 15.5C6 15.5 1.73 12.39 0 8C0.69 6.24 1.79 4.69 3.19 3.46L1 1.27ZM11 5C11.4801 4.99975 11.9532 5.11471 12.3796 5.33524C12.8061 5.55576 13.1733 5.8754 13.4506 6.26731C13.7279 6.65921 13.9071 7.11194 13.9731 7.58745C14.0391 8.06297 13.99 8.54738 13.83 9L10 5.17C10.3213 5.05698 10.6594 4.99949 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C21.1839 10.0732 19.7969 11.8727 18 13.19L16.58 11.76C17.9629 10.8034 19.0782 9.50906 19.82 8C19.0116 6.34994 17.7564 4.95977 16.1973 3.9875C14.6381 3.01524 12.8375 2.49988 11 2.5C9.91 2.5 8.84 2.68 7.84 3L6.3 1.47C7.74 0.85 9.33 0.5 11 0.5ZM2.18 8C2.98844 9.65006 4.24357 11.0402 5.80273 12.0125C7.36189 12.9848 9.16254 13.5001 11 13.5C11.69 13.5 12.37 13.43 13 13.29L10.72 11C10.0242 10.9254 9.37482 10.6149 8.87997 10.12C8.38512 9.62518 8.07458 8.97584 8 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8Z" fill="#BBBDC5" /></svg>');
      $(this).parent().find('input').attr('type', "password");

      $(this).removeClass('active');
    } else {
      $(this).html('<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.5C11.7956 4.5 12.5587 4.81607 13.1213 5.37868C13.6839 5.94129 14 6.70435 14 7.5C14 8.29565 13.6839 9.05871 13.1213 9.62132C12.5587 10.1839 11.7956 10.5 11 10.5C10.2044 10.5 9.44129 10.1839 8.87868 9.62132C8.31607 9.05871 8 8.29565 8 7.5C8 6.70435 8.31607 5.94129 8.87868 5.37868C9.44129 4.81607 10.2044 4.5 11 4.5ZM11 0C16 0 20.27 3.11 22 7.5C20.27 11.89 16 15 11 15C6 15 1.73 11.89 0 7.5C1.73 3.11 6 0 11 0ZM2.18 7.5C2.98825 9.15031 4.24331 10.5407 5.80248 11.5133C7.36165 12.4858 9.1624 13.0013 11 13.0013C12.8376 13.0013 14.6383 12.4858 16.1975 11.5133C17.7567 10.5407 19.0117 9.15031 19.82 7.5C19.0117 5.84969 17.7567 4.45925 16.1975 3.48675C14.6383 2.51424 12.8376 1.99868 11 1.99868C9.1624 1.99868 7.36165 2.51424 5.80248 3.48675C4.24331 4.45925 2.98825 5.84969 2.18 7.5Z" fill="#BABBC0" /></svg>');
      $(this).parent().find('input').attr('type', "text");
      $(this).addClass('active');

    }
  })



  $('#checkbox').on('change', function () {
    if ($('#checkbox').prop('checked')) {
      $('#submit').attr('disabled', false);
    } else {
      $('#submit').attr('disabled', true);
    }
  });

  if ($('input').hasClass('required-input')) {
    $('.submit').attr('disabled', true);
    $('.required-input').mask("9");

    var countAllInput = $('.required-input').length,
      countThisInput = 0;
    
    $('.required-input').attr('disabled', 'disabled');
    $($('.required-input').first()).removeAttr('disabled');


    $('.required-input').on('keyup', function (e) {

      if (e.keyCode == 8) {
//        $(this).prev('input').focus();
        countThisInput = countAllInput - 1;
        $('#submit').attr('disabled', true);
      }

      if ($(this).val().match(/^\d{1}$/) && $(this).val().length >= 1) {
        $(this).next('input').removeAttr('disabled').focus();
        countThisInput++;

        if (countThisInput >= countAllInput) {
          $('#submit').attr('disabled', false);
        } else {
          $('#submit').attr('disabled', true);
        }
      }


    console.log('countThisInput', countThisInput)




    });



  }

});