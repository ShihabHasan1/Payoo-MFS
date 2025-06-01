document.getElementById('click-cash-out-btn')
    .addEventListener('click' , function(){
        document.getElementById('cash-out-btn-show').classList.remove('hidden');
        document.getElementById('add-money-btn-show').classList.add('hidden');
    })

document.getElementById('click-add-money-btn')
    .addEventListener('click' , function(){
        document.getElementById('add-money-btn-show').classList.remove('hidden');
        document.getElementById('cash-out-btn-show').classList.add('hidden');

    })