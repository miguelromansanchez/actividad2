function toggleText() {
    
    const myText= document.getElementById("myText");
    myText.classList.toggle("additionalHidden");
    if(document.getElementById("myText").classList.contains("hidden")){
        document.getElementById("myButton").innerHTML="Seguir leyendo";
       } 
    else{
        document.getElementById("myButton").innerHTML="Ocultar exceso de texto";
       } 
    
}

