var tags;
function load(){
    tags=document.getElementsByTagName('p');
}
function test(){
    var elemento=document.createElement("p");
    var text=document.createTextNode("Elemento"+(tags.length+6));
    elemento.appendChild(text);
    document.getElementById("caja").appendChild(elemento);
    load();
}