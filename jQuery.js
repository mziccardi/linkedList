// var inputText = $('.inputText').val();
// var inputURL = $('.inputURL').val();
var submitButton = $('.submitButton');
var table = $('.table');
var title = $('.title');
var url = $('.url');
var rowclass = $('.rowClass').size();


$('.inputText').on('keyup', function(){
  buttonCheck();
});

$('.inputURL').on('keyup', function() {
  buttonCheck();
});

function emptyInput() {
  $('.inputText').val('');
  $('.inputURL').val('');
}



submitButton.on('click', function(){
  var inputText = $('.inputText').val();
  var inputURL = $('.inputURL').val();
  clearFeedback();
  emptyField();
  if (inputURL === '' || inputText === '') {
    alert('Please complete both fields.');
    return;
  }
  else if (inputURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)) {
    $('.table tr:last').after(`
        <tr class ="rowClass">
          <td>${inputText}</td>
          <td><a href="${inputURL}" target="_blank">Link</a></td>
          <td>
            <input class="checkbox" type="checkbox">
            </td>
          <td>
            <button class="remove">Remove</button>
          </td>
        </tr>`);
      } else {
        $('.feedbackURL').html('</br>*Invalid URL');
      }
    emptyInput();
    buttonCheck();
    $('.totalLinks').html($('.rowClass').size());
    $('.linksRead').text($('.read').size());
});

function emptyField() {
  var feedback = $('.feedback');
  if($('.inputText').val() === ''){ $('.feedbackTitle').html('*Please insert a Title');
}
 if ($('.inputURL').val() ==='') {
  $('.feedbackURL').html('</br>*Please insert a valid URL');
}
}


function buttonCheck(){
  input = $('.inputText').val();
  url = $('.inputURL').val();
  var isThereStuffInBothFields = input && url;
  $('.submitButton').attr('disabled', !isThereStuffInBothFields);
}

function clearFeedback() {
  $('.feedbackTitle').text('');
  $('.feedbackURL').text('');
}





$('.table').on('click', '.checkbox', function(){
    $(this).toggleClass('read');
    $('.linksRead').text($('.read').size());
  });

$('.table').on('click', '.remove', function(){
    $(this).parents('.rowClass').remove();
    $('.totalLinks').text($('.rowClass').size());
    $('.linksRead').text($('.read').size());

    // $('.linksUnread').text(($('.rowClass').size() - ($('.linksRead').size())));
  });
