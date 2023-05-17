function passwordShow() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function passwordCheck() {
    var x = document.getElementById("pass").value;
    if ((x.length < 8)||(!/[a-z]/.test(x))||(!/[A-Z]/.test(x))||(!/\d/.test(x))||(!/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(x))) {
        window.alert("Password does not satisfy the conditions.\nPassword must have the following :-\n1. Minimum length of 8 characters.\n2. At least one lowercase letter.\n3. At least one uppercase letter.\n4. At least one number.\n5. At least one punctuation symbol.");
    } else {
        window.alert("Account created successfully.\nPlease close this tab and login your account.");
    }
}

function mailCheck() {
    var b = document.getElementById("mail").value;
    if (!/[@]/.test(x)) {
        window.alert("Enter valid Email ID.");
    }
}
