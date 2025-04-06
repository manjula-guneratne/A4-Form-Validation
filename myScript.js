function Evaluvate_form(e){

    e.preventDefault();
    var final = false;

    //Check Postal code to match a0a0a0 format
    var postalCode = document.getElementById("pcode").value;

    var postal_regex = /^\w\d\w\d\w\d$/;
    var result = postal_regex.test(postalCode);

    if (!result){
        alert("Please enter a valid postal code");
        document.getElementById("pcode").value = "";
        final = false;
    } else {
        final = true;
    }
    
    //Check is Province is matching
    var city = document.getElementById("province").value;

    switch(city.toUpperCase()){
        case 'QC':
        case 'ON':
        case 'MN':
        case 'SK':
        case 'AB':
        case 'BC': final = true;
            break;
        default:
            alert("Not a valid Province");
            document.getElementById("province").value = "";
            final = false;
    }

    //Age above 18yrs
    var age = document.getElementById("age").value;

    if(parseInt(age) < 18){
        alert("You are younger that 18yrs!");
        document.getElementById("age").value = "";
        final = false;
    } else {
        final = true;
    }

    //The Email field must contain the @ and . characters
    var email = document.getElementById("email").value;

    var email_regex = /^[^@]+@[^@]+\.[^@]+$/;
    result = email_regex.test(email);

    if (!result){
        alert("Please enter a valid email");
        document.getElementById("email").value = "";
        final = false;
    } else {
        final = true;
    }

    //The Confirm Password and Password fields should have identical input.
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters and contain at least one digit and one uppercase letter.");
        document.getElementById("password").value = "";
        final = false;
    } else if(password!=confirm){
        console.log("Password and confirm is not matching!");
        document.getElementById("password").value = "";
        document.getElementById("confirm").value = "";
        final = false;
    } else {
        final = true;
    }

    // By the end
    if (final){   //i.e. it's all correct
        alert("Thanks for registering with our website, your customer record was created successfully");
    }
}