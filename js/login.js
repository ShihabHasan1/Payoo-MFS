// console.log('Button clicked file added');

document.getElementById('click-btn').
    addEventListener('click', function(event){
        event.preventDefault();
        console.log('log in button clicked')

        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(phoneNumber, pinNumber)

        if(phoneNumber === '5' && pinNumber === '1234'){
            console.log('You are log in')
            window.location.href = '/home.html'
        }
        else{
            alert('Wrong password');
        }
    })