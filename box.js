const myCheckBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const myCheckBmasterCardBtnox = document.getElementById("masterCardBtn")
const mySubmit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You have purchesed from us`
    }
else{
    subResult.textContent = `You havent purchesed from us`;
}

}
