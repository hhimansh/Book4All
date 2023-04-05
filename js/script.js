
// declaring total quantity of books and there total amount to 0 initially
var quantityScars, quantityTrouve, quantitySabino, quantityBati, quantitySato, quantityPassion = 0;
var totalAmountScars, totalAmountTrouve, totalAmountSabino, totalAmountBati, totalAmountSato, totalAmountPassion = 0;
 
// Calculating total amount for selected book
function calScars() {
    // Parsing quantity input
    quantityScars = parseInt(document.getElementById("quantityScars").value);
    // validating for non integer and empty input
    if(isNaN(quantityScars) || quantityScars == ""){
        document.getElementById("message").innerHTML = "Please enter valid numeric quantity for Strength in our scars book!!";
    }
    // calculating total price for given number of books
    else{
        totalAmountScars = quantityScars * 8;
        document.getElementById("message").innerHTML = "Your order for "+quantityScars+" Strength in our scars book have been added to cart!!";
    }
}

function calTrouve() {
    // Parsing quantity input
    quantityTrouve = parseInt(document.getElementById("quantityTrouve").value);
    // validating for non integer and empty input
    if(isNaN(quantityTrouve) || quantityTrouve == ""){
        document.getElementById("message").innerHTML = "Please enter valid numeric quantity for Trouve book!!";
    }
    
    else{
        totalAmountTrouve = quantityTrouve * 12;
        document.getElementById("message").innerHTML = "Your order for "+quantityTrouve+" Trouve book have been added to cart!!";
    }
}


function calSabino() {
    // Parsing quantity input
    quantitySabino = parseInt(document.getElementById("quantitySabino").value);
    // validating for non integer and empty input
    if(isNaN(quantitySabino) || quantitySabino == ""){
        document.getElementById("message").innerHTML = "Please enter valid numeric quantity for Sabino!!";
    }
    else{
        totalAmountSabino = quantitySabino * 12;
        document.getElementById("message").innerHTML = "Your order for "+quantitySabino+" Sabino have been added to cart!!";
    }
}


function calBati() {
    // Parsing quantity input
    quantityBati = parseInt(document.getElementById("quantityBati").value);
    // validating for non integer and empty input
    if(isNaN(quantityBati) || quantityBati == ""){
        document.getElementById("message").innerHTML = "Please enter valid numeric quantity for Bati!!";
    }
    else{
        totalAmountBati = quantityBati * 12;
        document.getElementById("message").innerHTML = "Your order for "+quantityBati+" Bati have been added to cart!!";
    }
}

function calSato() {
    // Parsing quantity input
    quantitySato = parseInt(document.getElementById("quantitySato").value);
    // validating for non integer and empty input
    if(isNaN(quantitySato) || quantitySato == ""){
        document.getElementById("message").innerHTML = "Please enter valid numeric quantity for Cam Sato!!";
    }
    else{
        totalAmountSato = quantitySato * 12;
        document.getElementById("message").innerHTML = "Your order for "+quantitySato+" Cam Sato have been added to cart!!";
    }
}


function calPassion() {
    // Parsing quantity input
    quantityPassion = parseInt(document.getElementById("quantityPassion").value);
    // validating for non integer and empty input
    if(isNaN(quantityPassion) || quantityPassion == ""){
        document.getElementById("message").innerHTML = "Please enter valid numeric quantity for Passion Within book!!";
    }
    else{
        totalAmountPassion = quantityPassion * 12;
        document.getElementById("message").innerHTML = "Your order for "+quantityPassion+" Passion Within have been added to cart!!";
    }
}

function customerInfo()
{
    let form2Error = "";
    let receiptDisplay = "";
    var totalAmount = totalAmountScars + totalAmountTrouve + totalAmountSabino + totalAmountBati + totalAmountSato + totalAmountPassion;
    // console.log(totalAmount);
    let orderName = document.getElementById("name").value;
    orderName = orderName.trim();
    let phoneNumberExp = /^[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;
    let phoneNumber = document.getElementById("phone").value;
    phoneNumber = phoneNumber.trim();
    let cardNumberExp = /^[0-9]{4}[\s\-]?[0-9]{4}[\s\-]?[0-9]{4}[\s\-]?[0-9]{4}$/;
    let cardNumber = document.getElementById("cardNumber").value;
    cardNumber = cardNumber.trim();
    let expiryMonthExp = /^[0-9]{2}$/;
    let expiryMonth = document.getElementById("cardMonthExpiry").value;
    expiryMonth = expiryMonth.trim();
    let expiryYearExp = /^[0-9]{4}$/;
    let expiryYear = document.getElementById("cardYearExpiry").value;
    expiryYear = expiryYear.trim();
    if(orderName === ""){
        form2Error += `Please enter your name <br>`;
    }
    if (phoneNumber == ""){
        form2Error += `Please do not leave phone number field empty<br>`;
    }
    else if(!phoneNumberExp.test(phoneNumber)){
        form2Error += `Please enter 10 digit phone number in correct format<br>`;
    }
    if(cardNumber == ""){
        form2Error += "";
    }
    else if(!cardNumberExp.test(cardNumber)){
        form2Error += `Please enter card Number in correct format (16 digit)<br>`;
    }
    if(expiryMonth == ""){
        form2Error += "";
    }
    else if(!expiryMonthExp.test(expiryMonth)){
        form2Error += `Please enter expiry month in correct format (2 digit) <br>`;
    }
    if(expiryYear == ""){
        form2Error += "";
    }
    else if(!expiryYearExp.test(expiryYear)){
        form2Error += `Please enter expiry year in correct format (4 digit)<br>`;
    }
    if(form2Error != ""){
        document.getElementById("errDisplay2").innerHTML = form2Error;
    }
    else{
        receiptDisplay = `
        Customer Name    : ${orderName}<br>
        Phone Number     : ${phoneNumber}<br>
        Apple Drinks     : ${quantityScars}      : $${totalAmountScars}<br>
        Strawberry Drinks: ${quantityTrouve}: $${totalAmountTrouve}<br>
        Lemon Drinks     : ${quantitySabino}     : $${totalAmountSabino}<br>
        Peach Drinks     : ${quantityBati}     : $${totalAmountBati}<br>
        Lester Drinks    : ${quantitySato}    : $${totalAmountSato}<br> 
        Passion          : $${quantityPassion} : $${totalAmountPassion}<br>
        Total: $${totalAmount}
        `;
        document.getElementById("finalReceipt").innerHTML = receiptDisplay;
    }

    return false;
}
