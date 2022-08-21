document.getElementById('case-minus-btn').addEventListener('click',function(){
    value = minusBnt('case-number'); 
    phonePrice = 59;
    subTotal('case-per-price','phone-price','sub-price','totalSubPrice');

})

document.getElementById('case-plus-btn').addEventListener('click',function(){
    value = plusBnt('case-number'); 
    phonePrice = 59;
    subTotal('case-per-price','phone-price','sub-price','totalSubPrice');
})