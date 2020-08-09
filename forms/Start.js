class StartButton {
    constructor(){}
    display(){
        if(startFlag===0){
            startFlag++
            var startButton = createButton('Start')
            startButton.position(30, 250)
            startButton.mousePressed(function (){
                startButton.hide();
                console.log("***Pressed Start Button***")
                frameCount = 0;
                appState = 'Started'
            })
        }
    }
}