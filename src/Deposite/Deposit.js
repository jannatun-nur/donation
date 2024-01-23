console.log(' everything is ok');

document.getElementById('btn-deposit').addEventListener('click', function(){
    console.log(' ok bye');
    const depositMoney = document.getElementById('input-id');
    const depositAmount = depositMoney.value;
    console.log(depositAmount);

    const totalDepo = document.getElementById('total-depo');
    const CountMoney = totalDepo.innerText;
    console.log(CountMoney);
    totalDepo.innerText = depositAmount

})