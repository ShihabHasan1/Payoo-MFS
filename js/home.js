document.getElementById('input-add-money')
    .addEventListener('click' , function(event){
        event.preventDefault();
        const inputAddMoney = document.getElementById('input-add-amount').value;
        console.log(inputAddMoney);
        const inputPinNumber = document.getElementById('input-pin-number').value;
        console.log(inputPinNumber);

        if(inputPinNumber === '1234'){
            const balance = document.getElementById('current-balance').innerText;
            console.log(balance);

            const addMoney = parseFloat(inputAddMoney);
            const currentBalance = parseFloat(balance);
            const newBalance = addMoney + currentBalance;
            console.log(newBalance);

            document.getElementById('current-balance').innerText = newBalance;
        }
        else{
            alert('Fail to add money ! please try again letter');
        }
    })