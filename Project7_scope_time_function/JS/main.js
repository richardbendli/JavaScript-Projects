//scope of variables is either local or global
//global variable ( outside of function )
var X = 10;//outside
function Add_numbers_1() {
  document.write(20 + X + "<br>");
}
function Add_numbers_2() {
  document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//local variable ( inside of function )
function Add_numbers_1() {
  var X = 10;//inside
  document.write(20 + X + "<br>");
}
function Add_numbers_2() {
  document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//=================================

//error
function Add_numbers_1() {
  var X = 10; 
  console.log(15 + X);
}
function Add_numbers_2() {//X is not defined
console.log(X + 100) 
}
Add_numbers_1();
Add_numbers_2();

//=================================

//if statement
if (1 < 2 ) {
  document.write("The left number is smaller then the number on the right.")
}

//If it is before (less then) 17,display "How are you today?". After nothing would display.
function get_Date() {
  if (new Date() .getHours() < 17) {
    document.getElementById("Greeting"). innerHTML = "How are you today?"
  }
}

