var inputText = $('.inputText');
var inputURL = $('.inputURL');
var submitButton = $('.submitButton');

submitButton.on('click', function(){
  $('.title').append(inputText.val()+ '');  $('.title').append(inputURL.val());


  $('.title').append('</br>');

});
