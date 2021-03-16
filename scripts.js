


window.onload = function() {
document.getElementById("headermac").style.fontSize= "85px";
}


window.onclick = function(){
  document.getElementById('headermac').style.color = "#fcedd8";
}
notes.style.display = 'none';
ingredients.style.visibility = 'hidden';
equipment.style.visibility = 'hidden';
directions.style.visibility = 'hidden';

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

// window.onload = function() {

//   loadFileInto("ingredients.html", "ingredients");

//   loadFileInto("equipment.html", "equipment");

//   loadFileInto("directions.html", "directions");

// };


//obj construct for recipe

function Recipe(recipeName, imageURL, contributorName, ingredientFilename, equipmentFilename, directionsFilename){
  this.recipeName = recipeName;
  this.imgsrc = imageURL;
  this.contributor = contributorName;
  this.ingFile = ingredientFilename;
  this.equipfile = equipmentFilename;
  this.dirfile = directionsFilename;
  
  //update the screen with this obj recipe info
  this.displayRecipe = function(){
    document.querySelector("#headermac").innerHTML = this.recipeName;
    document.querySelector("#contr").innerHTML = this.contributor;
    document.querySelector("#ingredients").innerHTML = this.ingredientsFilename;
    document.querySelector("#directions").innerHTML = this.directionsFilename;
    document.querySelector("#equipment").innerHTML = this.equipmentFilename;
  }
}

FrenchMacarons = new Recipe("French Macarons", 
                            "https://www.sweetandsavorybyshinee.com/wp-content/uploads/2013/01/Basic-French-Macarons-1.jpg",
                            "Max Ciot",
                            "ingredients.html",
                            "equipment.html",
                            "directions.html"
                           );
