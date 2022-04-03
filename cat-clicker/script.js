var elem = document.getElementById('my-elem');
var count = document.getElementById('count');
var clickedNumber = 0;

elem.addEventListener('click', function(){
    clickedNumber += 1
    count.innerHTML = clickedNumber
  }, false);

