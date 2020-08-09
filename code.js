//Name Spacing Matter.js
    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;

//Create variables related to matter.js
    var engine, world;

//Create variables required to find a match for user.    
    var a = 0;
    var allUsers, ageM=false, adjC = 0, hobbyC=0, matched=false, matchA=[], displayFlag = 0, speakFlag=0;

//Create other variables
    var appState = 'toBeStarted'    
    //Variables for friends
        var friend, friend1, friend2;
    
    //Variables for sound
        var music;

    //Variables for Backrground Images
        var backgroundImg;
    
    //Variables for forms
        var nameForm, ageForm, standardForm, hobbyForm, adjectiveForm, startForm, avatarForm;
    
    //Variables to store user inputs
        var name, nameFlag=0, startFlag=0, avatarNumber, age, hobby, hobby1, hobby2, adjective, adjective1, adjective2, standard, profileFlag=0;
    
    //Variables related to index.
        var index, userIndex = "";
    
    //Variables related to database
        var database;

//Load sounds, images and other things in the function preload    
    function preload(){
        music = loadSound("audio/BackgroundMusic1.mp3");
    }

function setup(){       
    //Create database
     database = firebase.database();
     
    read();

    //Create canvas of width 800 and height 400
        var canvas = createCanvas(800,400);
    
    //Create engine and world
        engine = Engine.create();
        world = engine.world;

    //Create cartoon friend(s)    
        friend = new FriendSayingHi(700,340,90,120);
        friend1 = new FriendSayingHi(350,340,90,120)
        friend2 = new FriendSmiling(95,340,80,120);
        friend3 = new FriendSmiling(450,340,80,120)
    //Play background music
        music.play();
        
    //Create forms
        nameForm = new NameInput(); 
        ageForm = new AgeInput();
        hobbyForm = new HobbiesInput();
        standardForm = new StandardInput();
        adjectiveForm = new AdjectivesInput();
        startForm = new StartButton();
}

function draw(){


    //Draw a background
        background(18, 2, 48);
    
    if (appState=='toBeStarted'){
        startForm.display();
        fill('limegreen')
        textSize(26)
        text("Important Message:",30,100)
        textSize(13)
        text("Please turn up volume and unmute site/computer",30,150);
        text("If background music is not playing right now, please change volume and then reload.",30,170)
        text('The characters are meant to be speaking. If there is awkward silence after you press start, or between dialogues, please reload.',30,190)
        text("There should be a character to the bottom right of this text. If not, reload.",30,210)
        text('Please click Start if you have finished reading this message.', 30, 230)
    }
    //Play sounds from responsiveVoice.org
        if (frameCount === 20 && appState=='Started') {
            responsiveVoice.speak("hello");
        }
        if (frameCount === 130 && appState=='Started') {
            responsiveVoice.cancel();
            responsiveVoice.speak("my name is friendabot");
        }
        if (frameCount === 230 && appState=='Started') {
            responsiveVoice.cancel();
            responsiveVoice.speak("Meet my friend Sam");
        }
        //Display cartoon friend 'sam'
        if (frameCount > 230 && appState=='Started')
            if(matchA[0]==undefined){
                friend2.display();
            }
            else if (matchA[0]!=undefined) {
                friend3.display();
            }
        if (frameCount === 330 && appState=='Started') {
            responsiveVoice.cancel();
            responsiveVoice.speak("Hey! Enough Introduction about ourselves! What is your name?", "Australian Male");
        }    
    
    if (frameCount>330 && appState=='Started') {
        fill('limegreen')
        textSize(26)
        text("Your Profile:",30,100)
        if(profileFlag>0){
            fill('limegreen')
            textSize(13);
            text("Name: "+name,30,150);
        }
        if(profileFlag>1 && appState=='Started'){
            fill('limegreen')
            textSize(13);
            text("Age: "+age,30,170);
        }
        if(profileFlag>2 && appState=='Started'){
            fill('limegreen')
            textSize(13);
            text("Hobbies: "+hobby+", "+hobby1+", "+hobby2,30,190);
        }
        if(profileFlag>3 && appState=='Started'){
            fill('limegreen')
            textSize(13);
            text("Standard: "+standard,30,210);
        }
        if(profileFlag>4 && appState=='Started'){
            fill('limegreen')
            textSize(13);
            text("Adjectives: "+adjective+", "+adjective1+", "+adjective2,30,230);
        }
    }
    
    //DisplayNameForm    
        if (frameCount === 330 && appState=='Started') {
            nameForm.display();
        }

    //Update engine
        Engine.update(engine);
            
    //Display cartoon friend 'friendabot'
        if (matchA[0]==undefined){
            friend.display();
        }
        else if (matchA[0]!=undefined) {
            friend1.display();
        }
        fill(255, 77, 0)
        if (matchA[0]!=undefined && appState=='Started'){
            fill(127, 219, 218)
            textSize(13)
            text("Profiles might be repeated because their might be a same profile matching multiple entries.",130, 50)
            text("Names might be repeated because there are multiple entries with the same name.", 140, 70)
            textSize(26)
            fill(127, 219, 218)
            text("Matched Profile:",530,100)
            textSize(13)
            text("Name: "+matchA[0],530,150)
            text("Age: "+matchA[1],530,170)
            text("Hobbies: "+matchA[2]+", "+matchA[3]+", "+matchA[4],530,190)
            text("Standard: "+matchA[5],530,210)
            text("Adjectives: "+matchA[6]+", "+matchA[7]+", "+matchA[8],530,230) 
        }
}
