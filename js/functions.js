// for minus count 

function minusBnt(param){
    const input = document.getElementById(param);
    const inputValue = input.value;
    if (inputValue >= 1){
        let newInputValue = inputValue - 1;
        const newValue = input.value = newInputValue;
        return  newValue;
    }
}

// for plus count

function plusBnt(param2){
    const input = document.getElementById(param2);
    const inputValue = input.value;
    if (inputValue >= 0 ){
        let newInputValue = parseInt(inputValue) + 1;
        const newValue = input.value = newInputValue;
        return  newValue;
    }
}

// function for total phone/casing price 

function totalPrice(param3){ 
    const totalPriceOfPhone = phonePrice * value;
    const totalPrice =document.getElementById(param3).innerText = totalPriceOfPhone;
    return totalPrice;
}

// total sub price

function subTotal(p1,p2,p3,p4){
    const totalPhonePrice = totalPrice(p1);
    const totalCasePrice = parseFloat(document.getElementById(p2).innerText);
    const totalSubPrice = totalPhonePrice + totalCasePrice;
    document.getElementById(p3).innerText = totalSubPrice;
    document.getElementById(p4).innerText = totalSubPrice;
}
