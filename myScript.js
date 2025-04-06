function Evaluvate_form(){

    //Check Postal code to match a0a0a0 format
    var postalCode = document.getElementById("pcode").value;

    var postal_regex = /\w\d\w\d\w\d/;
    var result = postal_regex.test(postalCode);

    if (!result){
        console.log("Please enter a valid postal code");
    }
    
    //Check is Province is matching
    var city = document.getElementById("provice").value;

    switch(city.toUpperCase()){
        case 'QC':
        case 'ON':
        case 'MN':
        case 'SK':
        case 'AB':
        case 'BC': console.log("A ok!");
            break;
        default:
            console.log("Not valid");
    }

    //Age above 18yrs
    var age = document.getElementById("age").value;

    if(parseInt(age) < 18){
        console.log("You are younger that 18yrs!")
    }

    //The Email field must contain the @ and . characters

    //The Confirm Password and Password fields should have identical input.
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    if(password!=confirm){
        console.log("Password and confirm is not matching!");
    }
}