//while loop

 function Call_Loop() {
   var Digit = "";
   var X = 1;
   while (X < 11) {
     Digit += "<br>" + X;
     X++;
   }
   document.getElementById("Loop") .innerHTML = Digit;
 }

//for loop

 var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
 var Content = "";
 function for_Loop() {
   for (Y = 0; Y < Instruments.length; Y++) {
     Content += Instruments[Y] + "<br>";
   }
   document.getElementById("List_of_Instruments") .innerHTML = Content;
 }

//Arrays and Objects

 function array_Function() {
   var Cat_Picture = [];
   Cat_Picture[0] = "sleeping";
   Cat_Picture[1] = "playing";
   Cat_Picture[2] = "eating";
   Cat_Picture[3] = "purring";
 document.getElementById("Array") .innerHTML = "In this picture, the cat is " + Cat_Picture[2] + " . "
 }

//Constant

// function constant_function() {
//   const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
//   Musical_Instrument.color = "blue";
//   Musical_Instrument.price = "$900";
//   document.getElementById("Constant") .innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + " . ";
// }


//let
 var X = 82;           //variables written within curly brackets using var do not have block scope
 document.write(X);    //the let keyword cannot be accessed outside of the block.
 {
   let X = 33;
   document.write("<br>" + X);
 }
 document.write("<br>" + X);


// var X = 82;       //var keyword cannot have block scope (access limited to inside the block),
//                   // while the let keyword can.
// document.write(X);
// {
//   var X = 33;
//   document.write("<br>" + X);
// }
// document.write("<br>" + X);

//objects

// let car = {       //the properties are: make, model, year and color.
//   make: "Dodge ", //The method is the description function
//   model: "Viper ",
//   year: "2021 ",
//   color: "red ",
//   description : function() {
//     return "The car is a " + this.year + this.color + this.make + this.model + " . ";
//   }
// };
// document.getElementById("Car_Object") .innerHTML = car.description();




