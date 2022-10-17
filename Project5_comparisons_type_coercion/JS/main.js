function word() {
  document.write(typeof "Word");
}
function expression () {
  document.write("10" + 5); //type coercion converts the value to the type it chooses.
}

function not_Function() {  //  (! not) operator checks whether or not something is true.
  document.getElementById("Not") .innerHTML = !(5 > 10);
}
function compare() {
  document.write(10 == 10);
}
function Magnus() {
  A = "Magnus";
  B = "Magnus";
  document.write(A === B);
}
function bigger () {
  document.write(10 > 2)
}
function and() {
  document.write(5 > 10 && 10 > 4)//AND  both must be true to return true, if one or both is false, the code will return false
}
function or() {
  document.write(5 > 10 || 10 >20)//OR
}



//document.write(typeof "Word");

//document.write(typeof 3);

//document.write(2E310)  //infinity

//document.write(-3E310) //-infinity

//document.write(10 > 2) //The Boolean values in JavaScript are true and false.

//document.write(10 < 2)

//console.log(2 + 2) //display data in the console within the browser

//document.write("10" + 5); //type coercion converts the value to the type it chooses.

// [first item to be compared] == [second item to be compared]
//document.write(10 == 10);
//document.write(3 == 11);

/*X = 10;
Y = 10;
document.write(X === Y);*/

/*X = 82;
Y = "82";
document.write(X === Y);*/

/*A = "Magnus";
B = "Magnus";
document.write(A === B);*/


//document.write(5 > 2 && 10 > 4)

//document.write(5 > 10 && 10 > 4)

//document.write(5 > 10 || 10 > 4)

//document.write(5 > 10 || 10 >20)


/*function not_Function() {  //  (! not) operator checks whether or not something is true.
  document.getElementById("Not") .innerHTML = !(5 > 10);
}*/


/*function not_Function() {
  document.getElementById("Not") .innerHTML = !(20 > 10);
}*/


