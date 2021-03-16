


window.onload = function() {
document.getElementById("headermac").style.fontSize= "85px";
}


window.onclick = function(){
  document.getElementById('headermac').style.color = "#fcedd8";
}
notes.style.display = 'none';
// ingredients.style.visibility = 'hidden';
// equipment.style.visibility = 'hidden';
// directions.style.visibility = 'hidden';

var notesdiv = document.getElementById("notes");
var ingred = document.getElementById("ingredients");
var equipmenta = document.getElementById("equipment");
var direc = document.getElementById("directions");

function hideshownotes() {
  if (notesdiv.style.display === "none") {
    notesdiv.style.display = "block";
  } else if (notesdiv.style.display === "block") {
    notesdiv.style.display = "none";
  }
}

function hideshowingred() {
  if (ingred.style.visibility === "hidden") {
    ingred.style.visibility = "visible";
  } else if (ingred.style.visibility === "visible") {
    ingred.style.display = "hidden";
  }
}

function hideshow3() {
  if (equipmenta.style.visibility === "hidden") {
    equipmenta.style.visibility = "visible";
  } else if (equipmenta.style.visibility === "hidden") {
    equipmenta.style.visibility = "visible";
  }
}

function hideshow4() {
  if (direc.style.visibility === "hidden") {
    direc.style.visibility = "visible";
  } else if (direc.style.visibility === "visible") {
    direc.style.display = "hidden";
  }
}

function showall (elements, ingred, direc, equipmenta) {
  elements = elements.length ? elements : [ingred, direc, equipmenta];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.visibility === "visible";
  }
}

//dog pic

// document.getElementById('awoo').innerHTML = '<img width="500" height="500" src="https://cdn.shopify.com/s/files/1/0086/6320/3921/products/Filou_Eating_800x.gif?v=1604302415">';


//Tp6 START


// JavaScript for TP6

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {
				document.getElementById(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
				
			}
		
	} // end ajax.onreadystatechange

	// now that everything is set, initiate request
	ajax.send();

}

//load default preview files
window.onload = function() {

  loadFileInto("ingredientsde.html", "ingredients");

  loadFileInto("equipmentde.html", "equipment");

  loadFileInto("directionsde.html", "directions");

};


//obj construct for recipe

function Recipe(recipeName, imageURL, contributorName, ingredientFilename, equipmentFilename, directionsFilename, notesStuff){
  this.recipeName = recipeName;
  this.imgsrc = imageURL;
  this.contributor = contributorName;
  this.ingFile = ingredientFilename;
  this.equipfile = equipmentFilename;
  this.dirfile = directionsFilename;
  this.notesStuff = notesStuff;
  
  //update the screen with this obj recipe info
  this.displayRecipe = function(){
    document.querySelector("#headermac").innerHTML = this.recipeName;
    document.querySelector("#contr").innerHTML =  "Contributed by: " + this.contributor;
    document.querySelector("#notescontent").innerHTML =  this.notesStuff;
    
    loadFileInto(this.ingFile, "ingredients");
    loadFileInto(this.equipfile, "equipment");
    loadFileInto(this.dirfile, "directions");
    
    document.querySelector("#macawoni").style.backgroundImage = "rgba(250, 236, 188, 0.45), rgba(127, 63, 191, 0.45)," + "url(" + this.imageUrl + ")";
  }
}

FrenchMacarons = new Recipe("French Macarons", 
                            "https://www.sweetandsavorybyshinee.com/wp-content/uploads/2013/01/Basic-French-Macarons-1.jpg",
                            "Max Ciot",
                            "ingredients.html",
                            "equipment.html",
                            "directions.html",
                            "<li>To ensure macarons are the same size, you can trace 1-inch circles with a pencil on parchment paper, then flip the paper and use the circles as a guide when piping.</li> <li>If you want to dye the macaron batter, add food coloring to egg whites in step 2; make the mixture a few shades darker than desired as baking will lighten the color. Use colors in powders or gel form - liquid food coloring may add too much moisture to the egg mixture and change the consistency.</li> <li>Make sure you bake only 1 baking sheet at a time.</li>"
                           );
