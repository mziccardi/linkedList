var inputText = $('.inputText');
var inputURL = $('.inputURL');
var submitButton = $('.submitButton');

submitButton.on('click', function(){
  $('.bookmarks').prepend(inputText.val());
  $('.bookmarks').prepend('</br>');
});
