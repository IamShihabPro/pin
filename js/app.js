function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4){
        return pin;
    }
    else{
        console.log("not 3 digit", pin);
        return getPin();
    }

}

function generatePin(){
    const random = Math.round(Math.random()*10000)
    return random
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    
    // display pin 
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
    

})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumbersField = document.getElementById('typed-numbers')
    const previousTypedNumber = typedNumbersField.value;

    if(isNaN(number)){
        if(number == 'C'){
            typedNumbersField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainDigits = digits.join('');
            typedNumbersField.value = remainDigits;

        }
    }
    else{ 
        const numberTypedNumber = previousTypedNumber + number;
        typedNumbersField.value = numberTypedNumber
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin')
    const currentPin = displayPinField.value;
    const typedNumbersField = document.getElementById('typed-numbers')
    const typedNumber = typedNumbersField.value;


    const pinSuccessMeg = document.getElementById('pin-success');

    const pinFailMsg = document.getElementById('pin-failure')

    if(typedNumber === currentPin){
       
        pinSuccessMeg.style.display = 'block';
        pinFailMsg.style.display = 'none';
    }
    else{
        
        pinFailMsg.style.display = 'block';
        pinSuccessMeg.style.display = 'none';
    }
})