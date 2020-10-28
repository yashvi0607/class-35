class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);
        var input = createInput("name");
        input.position(130,150);
        var button = createButton("play");
        button.position(250,200);
        var greeting = createElement("h2");
        button.mousePressed(function() {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello"+ name);
            greeting.position(200,250);
        })
    }
}