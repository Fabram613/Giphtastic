$(document).ready(function(){

	// GLOBAL VARIABLES
	// ================

        //Defining an array variable that contains strings of superheroes:
        var heroes = [  
            "Iron Man",
            "Captain America",
            "Hulk",
            "Hawkeye",
            "Thor",
            "Black Widow",
            "Wolverine",
            "Jean Grey",
            "Spider Man",
            "Deadpool",
            "Black Panther",
            "Doctor Strange"
        ];

    // FUNCTIONS 
    // =========   
        
        //This function creates the buttons for the array of superheroes:
        function createButtons() {

            //This for loop creates buttons out of superheroes array:
            for (var i = 0; i < heroes.length; i++) {

                //Creates a new variable to contain the syntax to create each button
				var newButtons = $('<button type="button" value="' + topics[i] + '">' + topics[i] + "</button>").addClass("allButtons");

				//Adds data property to each new Button
				newButtons.attr({"data-show": topics[i] });

				//Adds each new button to the HTML element
				$("#buttonsDiv").append(newButtons);
			}
		}


           
  
        












});        