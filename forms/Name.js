//Create a class called NameInput
    class NameInput{
        //Create an empty Constructor
            constructor(){
                //Empty Constructor
            }

        //Create a display function
            display(){
                if(nameFlag==0){
                    console.log("****entered class form called NameInput****")
                    var nameInput = createInput("Name");
                    nameInput.position(200,340);
                    var submitButton = createButton("Submit");
                    submitButton.position(200,375);
                    submitButton.mousePressed(function (){
                        console.log("****pressed SubmitButton in NameInput****")
                        getIndex();
                        index++;
                        updateIndex();
                        userIndex="users/user"+index;
                        nameInput.hide();
                        submitButton.hide();
                        name=nameInput.value();
                        profileFlag++;
                        responsiveVoice.speak();
                        responsiveVoice.speak("Welcome! "+name+" How old are you?");
                        ageForm.display();
                        updateDetails();
                    })
    
                }
            }

    }
    
