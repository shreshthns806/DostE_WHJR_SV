//Create a class called StandardInput
    class StandardInput{
        //Create an empty constructor
            constructor(){
                //Empty Constructor
            }
        
        //Create a display function
            display(){
                console.log("****entered class form called StandardInput****")
                responsiveVoice.speak("In Which Standard do you study?","Hindi Male");
                var standardInput = createInput("Standard");
                standardInput.position(200,340);
                var submit3Button = createButton("Submit");
                submit3Button.position(200,375);
                submit3Button.mousePressed(function (){
                    console.log("****pressed SubmitButton in StandardInput****")
                    standardInput.hide();
                    submit3Button.hide();
                    standard=standardInput.value();
                    profileFlag++
                    adjectiveForm.display();
                    updateDetails();
                })
            }
        
    }
