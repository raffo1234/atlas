import validation from 'jquery-validation';

export function formValidation() {
  $('.form-validate').validate();

  $.validator.addMethod(
    'regex',
    function(value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    'Please check your input.'
  );
}
