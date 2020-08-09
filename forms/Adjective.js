//Create a class called AdjectivesInput
    class AdjectivesInput{
        //Create an empty constructor
            constructor(){
                //Empty Constructor
            }
        
        //Create display function
            display(){
                console.log("****entered class form AdjectivesInput****")
                responsiveVoice.speak(name+" Describe yourself using 3 adjectives.");
                var adjectivesInput = createInput("Adjective1 (Please read below 👇)");
                adjectivesInput.position(200,260);
                var options1 = createElement("h4")
                options1.html("Please choose between 'Loyal', 'Friendly', 'Helpful', 'Positive', 'Studious', 'Disciplined', 'Generous', 'Humorous' (without qoutes).")
                options1.position(10,400)
                var adjectives1Input = createInput("Adjective2 (Please read below 👇)");
                adjectives1Input.position(200,300);

                var adjectives2Input = createInput("Adjective3 (Please read below 👇)");
                adjectives2Input.position(200,340);

                var submit5Button = createButton("Submit");
                submit5Button.position(200,375);
                submit5Button.mousePressed(function (){
                    console.log("****Pressed SubmitButton in AdjectivesInput****")
                    adjectivesInput.hide();
                    adjectives1Input.hide();
                    adjectives2Input.hide();
                    submit5Button.hide();
                    options1.hide();
                    adjective=adjectivesInput.value();
                    adjective1=adjectives1Input.value();
                    adjective2=adjectives2Input.value();
                    profileFlag++
                    updateDetails();
                    read();
                    if(allUsers!=undefined && a==0){
                        a++;
                        findMatch();
                    }
                })
            }
        
    }