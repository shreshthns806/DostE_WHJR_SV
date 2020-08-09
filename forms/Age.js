//Create a class called AgeInput
    class AgeInput{
        //Create an empty constructor
        constructor(){
            //Empty Constructor
        }
        
        //Create a display function
            display(){
                console.log("****entered class form AgeInput****")
                var ageInput = createInput("Age (Please read below 👇)");
                ageInput.position(200,340);
                var note = createElement("h4");
                note.html("Please enter your age as 11, 12, or 13 because there are not enough profiles (I have to create profiles by running this window again and again).")
                note.position(10,400);
                var submit1Button = createButton("Submit");

                submit1Button.position(200,375);
                submit1Button.mousePressed(function (){
                    console.log("****pressed SubmitButton in AgeInput****")
                    ageInput.hide();
                    note.hide();
                    submit1Button.hide();
                    age=ageInput.value();
                    age = Number(age);
                    profileFlag++;
                    responsiveVoice.speak("I like playing football, coding and Gaming. What are your Hobbies","Australian Male");
                    hobbyForm.display();
                    updateDetails();

                })
            }
        
    }
