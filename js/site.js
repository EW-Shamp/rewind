//get value
function getValue() {
    let phrase = document.getElementById("phrase").value;
    let value = reverseValue(phrase);
    displayValue(value);
}

//reverse value
function reverseValue(phr) {
    let rValue = "";
    for (i = phr.length -1; i >=0; i--) {
        rValue += phr[i];
    }
    return rValue;
}

//display reversed value
function displayValue(val){
    let rphrase = `<div class="border border-2 border-dark rounded-pill p-1 d-flex justify-content-center
    bg-info bg-gradient text-dark align-content-center fw-bold">${val}</div>`;

    document.getElementById("result").innerHTML = rphrase;
}