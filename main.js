
var likeBtn = document.querySelectorAll(".like")

for (let i=0; i<likeBtn.length; i++)
{ 
    likeBtn[i].addEventListener("click", function(){
    if( likeBtn[i].style.color != "red")  { 
         likeBtn[i].style.color ="red"
    }else {
        likeBtn[i].style.color ="black"
    }
})
}

  ////////////////////////////////////LIKE/////////////  
  var delBtn = document.querySelectorAll(".delete")
    
  for(let k=0; k<delBtn.length; k++){ 
    delBtn[k].addEventListener("click",function()
  {
    delBtn[k].parentElement.remove();
    
    totalprice();
    
    });
  
  }    
   
///////////////DELETE/////////////////////////////
var minusBtn = document.querySelectorAll(".minus-btn")


     for(let j=0; j<minusBtn.length; j++)
     { 
        minusBtn[j].addEventListener("click",function(){
            if(minusBtn[j].nextElementSibling.value>1)
            {
                minusBtn[j].nextElementSibling.value--;
                totalprice(); 
            }
            
           }) }
  ////////////////////BOTTON MINUS////////////////////        
      
 

 var plusBtn = document.querySelectorAll(".plus-btn")
 for(let s=0; s<plusBtn.length;s++)
{
        plusBtn[s].addEventListener("click",function(){
        plusBtn[s].previousElementSibling.value++
        totalprice()
    })} 
///////////////////BOTTON PLUS////////////////



function totalprice()
{
  let Price = document.querySelectorAll(".price")
  let val = document.querySelectorAll(".Quant")
  let final = document.getElementById("finalPrice") 
  
  let sum = 0    
    for(let h=0; h<val.length && Price.length ;h++)
   {

    a = parseInt(val[h].value)
    b = parseFloat(Price[h].innerHTML)
   
    sum = sum+(a*b)
    
    
   }
   

   final.value = sum.toFixed(2)
}
/////////////total price///////////////////
