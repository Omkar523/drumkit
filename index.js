
  
//for click

for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{

    document.querySelectorAll("button")[i].addEventListener("click",mouseC)
    
        function mouseC () 
        {
            var buttonInnerhtml = this.innerHTML;
            sound(buttonInnerhtml)

            buttonAnimation(buttonInnerhtml)
        }

}


//for keyboard press
    
document.addEventListener("keydown",keyP)
    function keyP (event) 
    {
        sound(event.key)

        buttonAnimation(event.key)
    }
        

//for input action

function sound(key) 
{
    if(key==="w")
    {
        var audio = new Audio('sounds/tom-1.mp3')
        audio.play()
    }
    else if(key==="a")
        {
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play()
        }
        else if(key==="s")
            {
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play()
            }

            else if(key==="d")
                {
                var audio = new Audio('sounds/tom-4.mp3')
                audio.play()
                }
                else if(key==="l")
                    {
                        var audio = new Audio('sounds/kick-bass.mp3')
                        audio.play()
                    }
                    else if(key==="k")
                        {
                        var audio = new Audio('sounds/crash.mp3')
                        audio.play()
                        }
                        else if(key==="j")
                            {
                                var audio = new Audio('sounds/snare.mp3')
                                audio.play()
                            }
}

//animation

function buttonAnimation(currentKey) {
 
    var activeBtn = document.querySelector("."+currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(fade,100) 
    function fade() 
        {
        
        activeBtn.classList.remove("pressed")
        
        }
    
}