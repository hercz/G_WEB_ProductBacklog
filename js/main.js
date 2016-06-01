function validate() {
    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var valid = false;

    var usernames = ["admin", "admin2"];
    var passwords = ["12345", "45678"];

    localStorage.setItem("username", JSON.stringify(usernames));
    localStorage.setItem("password", JSON.stringify(passwords));

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
        window.location.href = "backlog.html";
        return false;
    }
    else {
        alert("Wrong password or username")
    }
}
var loginBtn = document.getElementById("loginBtn");
var password = document.getElementById("password");
loginBtn.addEventListener("click", validate);
password.addEventListener("keyup", function (event) {
    var code = event.keyCode;
    if (code === 13) {
        validate();
    }
});

