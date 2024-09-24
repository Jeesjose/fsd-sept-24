var head = document.getElementById("head1");
console.log(head);
head.style.color="red"
head.textContent="text content changed"
head.innerhtml="<h6>changed in to h6 </h6>";
var c= document.getElementsByClassName("list");
for(let i=0;i<c.length;i++)
{
    c[i].style.backgroundColor="red"
}
var t = document.getElementsByTagName('li');
t[1].style.color="blue"
//using query selector
let val= document.queryselector("input");
val.value="name"
var savebtn=document.queryselector("#savebtn")
savebtn.style.backgroundColor="green"