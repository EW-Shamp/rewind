//get value
//controller function
function getValue() {
    //ensures the "alert" element is not visible
    document.getElementById("alert").classList.add("invisible")
    let phrase = document.getElementById("phrase").value;
    let value = reverseValue(phrase);
    displayValue(value);
}

//reverse value
//logic function
function reverseValue(phr) {
    let rValue = "";
    //reverse string with for loop
    for (i = phr.length -1; i >=0; i--) {
        rValue += phr[i];
    }
    return rValue;
}

//display reversed value
//view function
function displayValue(val){
    let rPhrase = val;
    //makes the "alert" element visible to display the msg
    document.getElementById("alert").classList.remove("invisible")
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${rPhrase}`;
}