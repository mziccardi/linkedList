// var inputText = $('.inputText').val();
// var inputURL = $('.inputURL').val();
var submitButton = $('.submitButton');
var table = $('.table');
var title = $('.title');
var url = $('.url');


submitButton.on('click', function(){
  var inputText = $('.inputText').val();
  var inputURL = $('.inputURL').val();
  $('.table tr:last').after('<tr><td>'+inputText+'</td><td>'+inputURL+'</td><td class="checkbox"><input type="checkbox"></td><td><button class="remove">Remove</button></td></tr>');

});
