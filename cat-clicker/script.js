// First Cat
var elem = document.getElementById('my-elem');
var count = document.getElementById('count');
var clickedNumber = 0;

elem.addEventListener('click', function(){
    clickedNumber += 1
    count.innerHTML = clickedNumber
  }, false);

//Second Cat
var elem2 = document.getElementById('my-elem2');
var count2 = document.getElementById('count2');
var clickedNumber2 = 0;

elem2.addEventListener('click', function(){
    clickedNumber2 += 1
    count2.innerHTML = clickedNumber2
  }, false);