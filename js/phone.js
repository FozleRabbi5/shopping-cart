document.getElementById('minus-btn').addEventListener('click',function(){
    value = minusBnt('input-value'); 
    phonePrice = 1219;
    subTotal('phone-price','case-per-price','sub-price','totalSubPrice');
   

})

document.getElementById('plus-btn').addEventListener('click',function(){
    value = plusBnt('input-value'); 
    phonePrice = 1219;
    subTotal('phone-price','case-per-price','sub-price','totalSubPrice');   
})


