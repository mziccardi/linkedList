// var inputText = $('.inputText').val();
// var inputURL = $('.inputURL').val();
var submitButton = $('.submitButton');
var table = $('.table');
var title = $('.title');
var url = $('.url');
var removeButton = $('.removeButton');
var bookmarkRow = $('.bookmarkRow');

submitButton.on('click', function(){
  var inputText = $('.inputText').val();
  var inputURL = $('.inputURL').val();

  $('.table tr:last').after('<tr class ="mike"><td>'+inputText+'</td><td>'+inputURL+'</td><td class="checkbox"><input type="checkbox"></td><td><button class="remove">Remove</button></td></tr>');

$('.table').on('click', '.checkbox', function(){
    $(this).addClass('read');
  });

$('.table').on('click', '.remove', function(){
    $(this).parents('.mike').remove();
  });
