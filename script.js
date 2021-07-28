var names = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var count = 3;

var sName = localStorage.getItem('storageNames');
sName = JSON.parse(sName);
console.log(sName);

var sPasword = localStorage.getItem('storagePasswords');
sPasword = JSON.parse(sPasword);
console.log(sPasword);

var sEmail = localStorage.getItem('storageEmails');
sEmail = JSON.parse(sEmail);
console.log(sEmail);

// var storageUsers = JSON.parse(localStorage.getItem('storageUsers'));

// var user = {
//     name: "names.value",
//     email: "email.value",
//     password: "password.value"
// }
// // localStorage.setItem("storageUSers", JSON.stringify(user));

// // console.log(localStorage.setItem("storageUSers", JSON.stringify(user)))




// stuff = JSON.parse(localStorage.getItem('Stuff'));

// stuff.push.apply(stuff, [{ "username": names.value, "mail": email.value, "password": password.value }]);
// localStorage.setItem('Stuff', JSON.stringify(stuff));



// var storageUsers = [];
// var storageUser = {
//     storageName: names,
//     storageEmail: email,
//     storagePassword: password

// }

// storageUser.storageName.push(names.value)

// storageUser


// a.push(JSON.parse(localStorage.getItem('session')));
// localStorage.setItem('session', JSON.stringify(a));

// let stuff = JSON.parse(localStorage.getItem('Stuff'));

// stuff.push.apply(stuff, [{ "username": inputUser.value, "mail": inputEmail.value, "password": inputPass.value }]);
// localStorage.setItem('Stuff', JSON.stringify(stuff));

// localStorage.setItem('Stuff', JSON.stringify([{ "username": inputUser.value, "mail": inputEmail.value, "password": inputPass.value }]))

// var storageUser = {
//     storageName: names.value,
//     storageEmail: email.value,
//     storagePassword: password.value

// }

function createAccount() {

    var storageNames = [];
    storageNames.push(names.value);
    var storageNames = JSON.parse(localStorage.getItem('storageNames')) || [];
    storageNames.push(names.value);
    localStorage.setItem('storageNames', JSON.stringify(storageNames));

    var storagePasswords = [];
    storagePasswords.push(password.value);
    var storagePasswords = JSON.parse(localStorage.getItem('storagePasswords')) || [];
    storagePasswords.push(password.value);
    localStorage.setItem('storagePasswords', JSON.stringify(storagePasswords));

    var storageEmails = [];
    storageEmails.push(email.value);
    var storageEmails = JSON.parse(localStorage.getItem('storageEmails')) || [];
    storageEmails.push(email.value);
    localStorage.setItem('storageEmails', JSON.stringify(storageEmails));
    // window.location.reload();


    var storageUsers = [];
    storageUsers.push(storageUser.value);
    var storageUsers = JSON.parse(localStorage.getItem('storageUsers')) || [];
    storageUsers.push(storageUser.value);
    localStorage.setItem('storageUsers', JSON.stringify(storageUsers));
    // window.location.reload();


}




function checkSignUp() {

    if (sName === null && sEmail === null && sPasword === null) {
        createAccount();
        toSignIn();
        return;
    }
    else if (!(checkFormSignUp())) {
        for (let i in sName) {
            if (names.value === sName[i] && email.value === sEmail[i] && password.value === sPasword[i]) {
                document.getElementById("accountError").innerHTML = "Account already exists!";
                toSignIn();
                return;
            }
        }
        for (let i in sName) {
            if (names.value === sName[i] && email.value != sEmail[i] && password.value === sPasword[i]) {
                document.getElementById("nameError").innerHTML = "Username already exist";
                // window.location.reload();
                return;
            }
        }
        for (let i in sName) {
            if (names.value !== sName[i] && email.value === sEmail[i] && password.value === sPasword[i]) {
                document.getElementById("emailError").innerHTML = "Email is alrady used";
                // window.location.reload();
                return;
            }
        }
        for (let i in sName) {
            if (names.value !== sName[i] && email.value !== sEmail[i] && password.value !== sPasword[i]) {
                createAccount();
                toSignIn();
                return;
            }
        }
    }

}



function checkLogin() {

    if (sName === null && sEmail === null && sPasword === null) {
        document.getElementById("accountError").innerHTML = "Your account doesnt exist, please Sign Up";
        toSignUp();
        return;
    }
    else if (!(checkFormSignIn())) {
        for (let i in sName) {
            if (names.value === sName[i] && password.value === sPasword[i]) {
                alert("You have logged");
                // window.location.reload();
                return;
            }
        }
        for (let i in sName) {
            if (names.value === sName[i] && password.value != sPasword[i]) {
                document.getElementById("passwordError").innerHTML = "Wrong password";
                // window.location.reload();
                return;
            }
        }
        for (let i in sName) {
            if (names.value != sName[i] && password.value != sPasword[i]) {
                document.getElementById("accountError").innerHTML = "Your account doesnt exist, please Sign Up";
                toSignUp();
                return;
            }

        }
    }
}






function checkFormSignUp() {
    let isValidCount = 0;
    if (names.value == "") {
        document.getElementById("nameError").innerHTML = "Username cannot be blank!";
        names.focus();
        isValidCount++;
    }
    reN =/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])$/;
    if (!reN.test(names.value)) {
        document.getElementById("nameError").innerHTML = "Username must contain only letters, numbers and underscores!";
        names.focus();
        isValidCount++;
    }
    if (email.value == "") {
        document.getElementById("emailError").innerHTML = "Eamil cannot be blank!";
        email.focus();
        isValidCount++;
    }
    reE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reE.test(email.value)) {
        document.getElementById("emailError").innerHTML = "Unvalid email!";
        email.focus();
        isValidCount++;
    }
    if (password.value == "") {
        document.getElementById("passwordError").innerHTML = "Password cannot be blank!";
        password.focus();
        isValidCount++;
    }

    if (isValidCount) {
        return true
    } else {
        return false;
    }


}

function checkFormSignIn() {
    let isValidCount = 0;
    if (names.value == "") {
        document.getElementById("nameError").innerHTML = "Username cannot be blank!";
        names.focus();
        isValidCount++;
    }
    reN = /^\w+$/;
    if (!reN.test(names.value)) {
        document.getElementById("nameError").innerHTML = "Username must contain only letters, numbers and underscores!";
        names.focus();
        isValidCount++;
    }
    if (password.value == "") {
        document.getElementById("passwordError").innerHTML = "Password cannot be blank!";
        password.focus();
        isValidCount++;
    }
    if (isValidCount) {
        return true
    } else {
        return false;
    }

}


function toSignUp() {

    var counter = setInterval(timer, 1000);
    function timer() {
        count = count - 1;
        if (count == 0) {
            alert("Want to Sign Up?", window.location.assign("index1.html"));
            return;
        }
    }
}

function toSignIn() {

    var counter = setInterval(timer, 1000);
    function timer() {
        count = count - 1;
        if (count == 0) {
            alert("Want to Sign In?", window.location.assign("index.html"));
            return;
        }
    }
}