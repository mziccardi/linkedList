var submitButton = $('.submitButton');
var table = $('.table');
var title = $('.title');
var url = $('.url');
var rowclass = $('.rowClass').size();


//functions called on event

//disables submit if title field is empty
$('.inputText').on('keyup', function(){
  buttonCheck();
});

//disables submit if url field is empty
$('.inputURL').on('keyup', function() {
  buttonCheck();
});

//submit button functionality
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
        return;
      }
    emptyInput();
    buttonCheck();
    totalLinks();
    linksRead();
    linksUnread();
});




//functions

//empties title and url inputs
function emptyInput() {
  $('.inputText').val('');
  $('.inputURL').val('');
}

//total link calc
function totalLinks() {
    $('.totalLinks').text($('.rowClass').size());
}

//total read calc
function linksRead() {
  $('.linksRead').text($('.read').size());
}

//total unread calc
function linksUnread(){
  var linksUnread = $('.rowClass').size() - $('.read').size();
  $('.linksUnread').text(linksUnread);
}

//user feedback function on invalid title or url
function emptyField() {
  var feedback = $('.feedback');
  if($('.inputText').val() === ''){ $('.feedbackTitle').html('*Please insert a Title');
} if ($('.inputURL').val() ==='') {
  $('.feedbackURL').html('</br>*Please insert a valid URL');
  }
}

//Prevents enabled Submit button from submitting empty title or url field
function buttonCheck(){
  input = $('.inputText').val();
  url = $('.inputURL').val();
  var isThereStuffInBothFields = input && url;
  $('.submitButton').attr('disabled', !isThereStuffInBothFields);
}

//clears feedback inputs
function clearFeedback() {
  $('.feedbackTitle').text('');
  $('.feedbackURL').text('');
}

//toggles class on checkbox
$('.table').on('click', '.checkbox', function(){
    $(this).toggleClass('read');
    linksRead();
    linksUnread();
});

//removes row from table
$('.table').on('click', '.remove', function(){
    $(this).parents('.rowClass').remove();
    totalLinks();
    linksRead();
    linksUnread();
});
