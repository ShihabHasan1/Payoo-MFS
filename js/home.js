document.getElementById('input-add-money')
    .addEventListener('click' , function(event){
        event.preventDefault();
        const inputAddMoney = document.getElementById('input-add-amount').value;
        console.log(inputAddMoney);
        const inputPinNumber = document.getElementById('input-pin-number').value;
        console.log(inputPinNumber);
    })