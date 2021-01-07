let text= document.getElementById("text");
let delet = document.getElementById("DD");
let play = document.getElementById("NN");
let result= document.getElementById("vov");

play .onclick =() =>{
    result.innerHTML = text.value;
    localStorage.setItem("result",text.value)
}
delet.onclick =() =>{
    result.innerHTML = "";
    text.value= "" ;
}
onload =() =>{
    text.value=localStorage.getItem("result");
    result.innerHTML = text.value;
}