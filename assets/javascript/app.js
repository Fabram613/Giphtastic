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
				var newButtons = $('<button type="button" value="' + heroes[i] + '">' + heroes[i] + "</button>").addClass("allButtons");

				//Adds data property to each new Button
				newButtons.attr({"data-show": heroes[i] });

				//Adds each new button to the HTML element
				$("#buttonsDiv").append(newButtons);
			}
        }
        
        //This calls the function to create the buttons at the beginning of the load page event.
		createButtons();

		//This function grabs the user input and adds it to the array of buttons
		$("#submitButton").on("click", function(event) {

			// event.preventDefault() prevents submit button from trying to send a form.
    		// Using a submit button instead of a regular button allows the user to hit
    		// "Enter" instead of clicking the button if desired
    		event.preventDefault();

    		//Create a new variable that holds the user's input
			var newUserButton = document.forms["inputForm"]["userInput"].value;

			//Add new button to the Array
			heroes.push(newUserButton);
			
			//First, we need to empty the div that contains the buttons
			$("#buttonsDiv").empty();
			
			//Create all buttons again
			createButtons();

			//Testing & Debugging
			console.log(newUserButton);
			console.log(heroes);
        });
		
		//This function captures the user's choice and runs the AJAX API
		$(document).on("click", ".allButtons", function() {
			//Save user's choice variable new value
			var userChoice = $(this).data("show");

			//Converts user's choice variable to an encoded string for URL purposes
			var userChoiceEncoded = encodeURI(userChoice);

			//Create a new variable fo the GIPHY API query URL search
			var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userChoiceEncoded + "&limit=9&api_key=Tvo82nkMez1DGbcZ8FSVqojBMydBpDzi";

			//AJAX call
			$.ajax({
				url: queryURL,
				method: "GET"
			}).done(function(response) {

				//Testing
				console.log(response);

			});

		});
    


           
  
        












});        