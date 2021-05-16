// document.querySelector("button").addEventListener("click",handleClick);
//using a pair of paranthesis here like this handleClick() would call the method handleClick when the javascript loads up without even waiting for the eventListener to even listen for the event specified.

//here we are passing this function as an input so that it can be called at a later time when the condition is satisfied

// function handleClick(){
//     alert("yup, definitely clicked")
// }

var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        
        //set of instructions to do when clicked
        //in the form of an anonymous function instead of a named one like handleClick
        var buttonPressed=this.innerHTML;

        makeSound(buttonPressed);
        buttonAnimation(buttonPressed);
    });
}

//applying the event listener to the keyboard
document.addEventListener("keydown", function(event){
    //event gives the details of the listened event in the form of an object.
    //key is the property of event which tells which key was pressed.
    var keyPressed= event.key;

    makeSound(keyPressed);
    buttonAnimation(keyPressed);

    //instead of calling the event we can call it by any name and still it would give us the info about the event
    //this is because it is the input that the event listener is providing to the anonymous function.
    
   
});

function makeSound(key){
    switch (key) {
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();     
            break;
        
        case "a":
            var kick_bass=new Audio("sounds/kick-bass.mp3");
            kick_bass.play();  
            break;
        
        case "s":
            var snare =new Audio("sounds/snare.mp3");
            snare.play();
            break;    
    
        case "d":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            
        case "j":
            var tom2 =new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "k":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "l":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
            
        default:
            console.log(buttonPressed)
            break;
    }
   
}

function buttonAnimation(key){

    var pressed= document.querySelector("."+key);

    pressed.classList.add("pressed");

    //timeout function is used to execute a certain function after a certain duration of time passed as arguement in miliseconds.
    setTimeout(function(){
        pressed.classList.remove("pressed");
    },100);

}
