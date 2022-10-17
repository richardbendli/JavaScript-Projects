function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Eric = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function my_Function() {
  document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + "manufactured in " + Eric.Vehicle_Year;
}

function Ride_Function() {
  //ternary operation: it operates on three values.
  var Height, Can_Ride;
  Height = document.getElementById("Height").value;
  Can_Ride = Height < 52 ? "You are too short" : "You are tall enough";
  document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}
function count_Function() {
   //nested function
   document.getElementById("Counting").innerHTML = Count();
   function Count() {
     var Starting_point = 9;
     function Plus_one() {
       Starting_point += 1;
     }
     Plus_one();
     return Starting_point;
   }
  }
