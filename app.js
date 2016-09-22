for (var count = 1; count < 101; count++){
if (count % 15 == 0) {  
 $('.fizz').append('<li> fizzbuzz </li>');
}
else if (count % 5 == 0) {
$('.fizz').append('<li> fizz </li>');
}
else if (count % 3 == 0) {
$('.fizz').append('<li> buzz </li>');
}
else {
$('.fizz').append('<li>' +count+ '</li>');
}
}