  var saveBtn = document.querySelectorAll('.saveBtn');
  var textValue = document.querySelectorAll('textarea')
  var nine = document.getElementById('9');
  var ten = document.getElementById('10');
  var eleven = document.getElementById('11');
  var twelve = document.getElementById('12');
  var one = document.getElementById('1');
  var two = document.getElementById('2');  
  var three = document.getElementById('3');  
  var four = document.getElementById('4');
  var five = document.getElementById('5');
  var six = document.getElementById('6');
  var seven = document.getElementById('7');
  var eight = document.getElementById('8');
  var time = document.querySelectorAll('time');



// date and time
  var dateAndTime = moment().format('LLLL');
  $("#currentDay").text(dateAndTime);

//storing values in local function
for (var i = 0; i < saveBtn.length; i++){
 

  saveBtn[i].addEventListener('click', function(event) {
    event.preventDefault(); 

   
        localStorage.setItem('inputNine', nine.value) 
        localStorage.setItem('inputTen', ten.value )
        localStorage.setItem('inputEleven', eleven.value);
        localStorage.setItem('inputTwelve', twelve.value);
        localStorage.setItem('inputOne', one.value);
        localStorage.setItem('inputTwo', two.value);
        localStorage.setItem('inputThree', three.value);
        localStorage.setItem('inputFour', four.value);
        localStorage.setItem('inputFive', five.value);
        localStorage.setItem('inputSix', six.value);
        localStorage.setItem('inputSeven', seven.value);
        localStorage.setItem('inputEight', eight.value);
    

 
    rowInput();


  })}
// getting values stored in local function
  function rowInput() {
   

var inputNine = localStorage.getItem('inputNine');
nine.textContent = inputNine;

var inputTen = localStorage.getItem('inputTen');
ten.textContent = inputTen;

var inputEleven = localStorage.getItem('inputEleven');
eleven.textContent = inputEleven;

var inputTwelve = localStorage.getItem('inputTwelve');
twelve.textContent = inputTwelve;

var inputOne = localStorage.getItem('inputOne');
one.textContent = inputOne;

var inputTwo = localStorage.getItem('inputTwo');
two.textContent = inputTwo;

var inputThree = localStorage.getItem('inputThree');
three.textContent = inputThree;

var inputFour = localStorage.getItem('inputFour');
four.textContent = inputFour;

var inputFive = localStorage.getItem('inputFive');
five.textContent = inputFive;

var inputSix = localStorage.getItem('inputSix');
six.textContent = inputSix;

var inputSeven = localStorage.getItem('inputSeven');
seven.textContent = inputSeven;

var inputEight = localStorage.getItem('inputEight');
eight.textContent = inputEight;

  }



  //background color update
function colorUpdate(){

 var currentTime = moment().format('LT');
 var hourPlus = moment().add(60, 'minutes').format('LT');

  for(var i = 0; i < time.length; i++){
     if(time[i].textContent >= currentTime && time[i].textContent < hourPlus){
     textValue[i].setAttribute('style', 'background:red');

     } else if(time[i].textContent < currentTime){
      textValue[i].setAttribute('style', 'background:grey');

     } else if(time[i].textContent > currentTime){
      textValue[i].setAttribute('style', 'background:green');
     }
   }
}


  rowInput();
  colorUpdate();

  
 
    
 
