function validate() {
    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var valid = false;


    var storedUsernames = ["admin", "admin2"];
    var storedPasswords = ["12345", "45678"];

    localStorage.setItem("username", JSON.stringify(storedUsernames));
    localStorage.setItem("password", JSON.stringify(storedPasswords));

    var retrivedName = localStorage.getItem("username");
    var retrievedPass = localStorage.getItem("password");
    var usernames = JSON.parse(retrivedName);
    var passwords = JSON.parse(retrievedPass);

    for (var i = 0; i < usernames.length; i++) {
        if ((un == usernames[i]) && (pw == passwords[i])) {
            valid = true;
            break;
        }
    }

    if (valid) {
        alert("Login was successful");
        window.location = "backlog.html";
        return false;
    }
    else {
        alert("Wrong password or username")
    }
}

window.onload = function () {
    document.getElementById("username").focus();
};

var loginBtn = document.getElementById("loginBtn");
var password = document.getElementById("password");
loginBtn.addEventListener("click", validate);
password.addEventListener("keyup", function (event) {
    var code = event.keyCode;
    if (code === 13) {
        validate();
    }
});

