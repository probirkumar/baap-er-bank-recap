/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
4-5. set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6-5. set the new balance total
7. clear the input field

*/
// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawTotalString = withdrawField.value;
    const newWithdrawTotalAmount = parseFloat(newWithdrawTotalString);
    // console.log(newWithdrawTotalAmount)

    // step-3:
    withdrawField.value = '';

    // 
    if(isNaN(newWithdrawTotalAmount)){
        alert('please provide a valid number');
        return;
    };

    // step-4:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal)

    // step-5:
    const currentTotalWithdrawAmount = previousWithdrawTotal + newWithdrawTotalAmount;
    withdrawTotalElement.innerText = currentTotalWithdrawAmount;

    // step-6: 
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(balanceTotalAmountString);
    // 
    if(newWithdrawTotalAmount > previousBalanceTotalAmount){
        alert('This bank you have not enough balance');
        return;
    }

    // step-7:
    const currentTotalBalance = previousBalanceTotalAmount - newWithdrawTotalAmount;
    balanceTotalElement.innerText = currentTotalBalance;

});