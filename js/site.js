// Get the string value from page
// Controller Function
function getValue(){
    // ensures the alert is invisible when the page starts
    document.getElementById("alert").classList.add("invisible");

    // set variable to the string users put into input field
    let userString = document.getElementById("userString").value;

    // pass string into reverseString function
    let reversedString = reverseString(userString);

    // pass reversed string to displayString function
    displayString(reversedString);
}

// Reverse the string
// Logic Function
function reverseString(userString){
    let reversedString = [];

    // use a for loop to reverse the string
    for (let index = userString.length - 1; index >= 0; index--) {
        reversedString += userString[index];
    }

    // return the reversedString array to getValue function
    return reversedString;
}

// Display the reversed string to page
// View Function
function displayString(reversedString){

    // write the message to the page

    document.getElementById("message").innerHTML = `"The reversed string is: ${reversedString}"`;

    // show the alert box

    document.getElementById("alert").classList.remove("invisible");
}