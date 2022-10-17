function my_Dictionary() {
  var Animal = {
    Species:"Dog",
    Color:"Black",
    Breed:"Labrador",
    Age:5,
    Sound:"Bark!"
  };
  delete Animal.Sound;  //output: “undefined” since the value no longer exists in our “dictionary”.
  document.getElementById("Dictionary") .innerHTML = Animal.Sound;
}

