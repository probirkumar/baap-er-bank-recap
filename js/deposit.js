// step-1:
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // console.log(typeof newDepositAmount)
    // console.log(newDepositAmount)

    // step-3:
    depositField.value = '';

    // step-4:
    const depositTotalElement = document.getElementById('deposit-amount');
    const previousDepositTotalString = depositTotalElement.innerText;
    // console.log(previousDepositTotalString)
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(previousDepositTotal)

    // step-5:
    const totalDepositAmount = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = totalDepositAmount;

    // step-6:
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotalElement.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);
    // console.log(balanceTotalAmount)

    // step-7:
    const newBalanceTotalAmount = balanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotalAmount;


});