document.getElementById('input-cash-out-money')
    .addEventListener('click' , function(event){
        event.preventDefault();
        const cashOutAmount = document.getElementById('input-cash-out-amount').value;
        console.log(cashOutAmount);
        const cashOutPin = document.getElementById('input-cash-out-pin').value;
        console.log(cashOutPin);

        if( cashOutPin === '1234'){
            const cashOutBalance = document.getElementById('current-balance').innerText;
            console.log(cashOutBalance);

            const cashBalance = parseFloat(cashOutBalance);
            const cashAmount = parseFloat(cashOutAmount);
            const newBalance = cashBalance - cashAmount;
            console.log(newBalance);

            document.getElementById('current-balance').innerText = newBalance;
        }
        else{
            alert('Failed cash out ! Please try again letter');
        }
    })