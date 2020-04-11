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

				//Creating a new variable to contain the syntax for get the first row of the table
				var firstRowTds = $("table").children().eq(1).children("tr").eq(0).children("td");
				//Sets the inner content of each td in the first row
				firstRowTds.eq(0).html('<img src=' + response.data[0].images.fixed_height_still.url + '" alt="' + response.data[0].title + '">"');
				firstRowTds.eq(1).html('<img src=' + response.data[1].images.fixed_height_still.url + '" alt="' + response.data[1].title + '">"');
				firstRowTds.eq(2).html('<img src=' + response.data[2].images.fixed_height_still.url + '" alt="' + response.data[2].title + '">"');

				//Testing 
				console.log(response);

				//Creating a new variable to contain the syntax to get the second row of the table
				var secondRowTds = $("table").children().eq(1).children('tr').eq(1).children('td');
				//Sets the inner content of each td in the second row
				secondRowTds.eq(0).html("This gif is rated:" + response.data[0].rating);
				secondRowTds.eq(1).html("This gif is rated:" + response.data[1].rating);
				secondRowTds.eq(2).html("This gif is rated:" + response.data[2].rating);

				//Creating a new variable to contain the syntax to get the third row of the table
				var thirdRowTds = $("table").children().eq(1).children('tr').eq(2).children('td');
				//Sets the inner content of each td in the third row
				thirdRowTds.eq(0).html('<img src=' + response.data[3].images.fixed_height_still.url + '" alt="' + response.data[3].title + '">"');
				thirdRowTds.eq(1).html('<img src=' + response.data[4].images.fixed_height_still.url + '" alt="' + response.data[4].title + '">"');
				thirdRowTds.eq(2).html('<img src=' + response.data[5].images.fixed_height_still.url + '" alt="' + response.data[5].title + '">"');

				//Creating a new variable to contain the syntax to get the fourth row of the table
				var secondRowTds = $("table").children().eq(1).children('tr').eq(4).children('td');
				//Sets the inner content of each td in the fourth row
				fourthRowTds.eq(0).html("This gif is rated:" + response.data[3].rating);
				fourthRowTds.eq(1).html("This gif is rated:" + response.data[4].rating);
				fourthRowTds.eq(2).html("This gif is rated:" + response.data[5].rating);

				//Creating a new variable to contain the syntax to get the fifth row of the table
				var fifthRowTds = $("table").children().eq(1).children('tr').eq(2).children('td');
				//Sets the inner content of each td in the fifth row
				fifthRowTds.eq(0).html('<img src=' + response.data[6].images.fixed_height_still.url + '" alt="' + response.data[6].title + '">"');
				fifthRowTds.eq(1).html('<img src=' + response.data[7].images.fixed_height_still.url + '" alt="' + response.data[7].title + '">"');
				fifthRowTds.eq(2).html('<img src=' + response.data[8].images.fixed_height_still.url + '" alt="' + response.data[8].title + '">"');

				//Creating a new variable to contain the syntax to get the sixth row of the table
				var sixthRowTds = $("table").children().eq(1).children('tr').eq(4).children('td');
				//Sets the inner content of each td in the sixth row
				sixthRowTds.eq(0).html("This gif is rated:" + response.data[6].rating);
				sixthRowTds.eq(1).html("This gif is rated:" + response.data[7].rating);
				sixthRowTds.eq(2).html("This gif is rated:" + response.data[8].rating);

				//Applies a calls to all of the img elements
				$('img').addClass("allGiphyImages");

				//Testing
				console.log(userChoice);
				console.log(userChoiceEncoded);
				console.log(queryURL);

			});

		});

	//	
    


           
  
        












});        