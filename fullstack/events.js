function popup()
{
    alert("you have clicked me!!")
}
var btn = document.getElementById("mybtn")
btn.addEventListener("click",function()
{
btn.textContent="changed"
}
)
var idl=document.getElementById("id1")
function changecolor(){
idl.style.backgroundColor="yellow"
}
function hide(){
    idl.style.backgroundColor="white"
}