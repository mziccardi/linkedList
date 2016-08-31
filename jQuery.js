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
  $('.table tr:last').after('<tr class="bookmarkRow"><td>'+inputText+'</td><td>'+inputURL+'</td><td class="checkbox"><input type="checkbox"></td><td><button class="removeButton">Remove</button></td></tr>');
});

// function addClass() {
//   var checkbox = $('.checkbox');
//   if (checkbox.checked) {
//     $('input:checked').addClass('read');
//   }
// }

$('input:checkbox').change(function(){
   if($(this).is(":checked")) {
       $('.bookmarkRow').addClass("read");
   }
});

// removeButton.on('click', function() {
//   var removeButton = $('.removeButton');
//   $('.removeButton').closest('tr').remove();
// });
