
let number=document.getElementById("number");
let counter=0;
setInterval(()=>{
    if (counter == 65) {
        clearInterval(0);
        
    }else{
 counter +=1;
    number.innerHTML= counter + "%"
    }
   
},30);


button=document.querySelector("button");
button.onclick=function(){
    this.innerHTML="<circle ">
    setTimeout


}