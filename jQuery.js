var inputText = $('.inputText');
var inputURL = $('.inputURL');
var submitButton = $('.submitButton');
var table = $('.table');
var title = $('.title');
var url = $('.url');


submitButton.on('click', function(){
  $('.table').after('<tr>'+inputText+'</tr><tr>'+inputURL+'</tr>');
  // $('.title').append(inputText.val()+ '');  $('.title').append(inputURL.val());
  //
  //
  // $('.title').append('</br>');

});
