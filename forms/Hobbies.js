//Create a class called HobbiesInput
    class HobbiesInput{
        //Create an empty constructor
            constructor(){
                //Empty Constructor
            }

        //Create a display function
            display(){
                console.log("****entered class form HobbiesInput****")
                var hobbiesInput = createInput("Hobby1 (Please read below 👇)");
                hobbiesInput.position(200,260);

                var options = createElement("h4")
                options.html("Please choose between 'Reading', 'Sports', 'Singing', 'Dancing', 'Cooking', 'Technology', 'Painting', 'Gaming', 'Travelling' (without qoutes).")
                options.position(10,400)
                var hobbies1Input = createInput("Hobby2 (Please read below 👇)");
                hobbies1Input.position(200,300);

                var hobbies2Input = createInput("Hobby3 (Please read below 👇)");
                hobbies2Input.position(200,340);

                var submit2Button = createButton("Submit");
                submit2Button.position(200,375);
                submit2Button.mousePressed(function (){
                    console.log("****pressed SubmitButton in HobbiesInput****")
                    hobbiesInput.hide();
                    hobbies1Input.hide();
                    hobbies2Input.hide();
                    submit2Button.hide();
                    options.hide();
                    hobby=hobbiesInput.value();
                    hobby1=hobbies1Input.value();
                    hobby2=hobbies2Input.value();
                    profileFlag++
                    standardForm.display();
                    updateDetails();
                    
                })
            }
            
    }