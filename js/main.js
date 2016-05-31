var count= 2;
function validate()
{
    var un = document.login.username.value;
    var pw = document.login.password.value;
    var valid = false;

    var usernames = ["admin", "admin2"];
    var passwords = ["12345", "45678"];

    localStorage.setItem("username", JSON.stringify(usernames));
    localStorage.setItem("password", JSON.stringify(passwords));

    var retrivedName = localStorage.getItem("username");
    var retrievedPass = localStorage.getItem("password");
    var usernames = JSON.parse(retrivedName);
    var passwords = JSON.parse(retrievedPass);

    for (var i = 0; i < usernames.length; i++)
    {
        if ((un == usernames[i]) && (pw == passwords[i]))
        {
            valid = true;
            break;
        }
    }

    if (valid)
    {
        alert("Login was successful");
        window.location.href = "test.html";
        return false;
    }
    var again = " tries";
    if (count ==1)
    {
        again = " try"
    }
    if (count >= 1)
    {
        alert("Wrong password or username")
        count--;
    }
    else
    {
        alert("Incorrect password or username you are now blocked");
        document.login.username.value = "You are now Blocked";
        document.login.password.value = "Fool you can't see this";
        document.login.username.disabled = true;
        document.login.password.disabled = true;
        return false;
    }
}
 var loginBtn = document.getElementById("loginBtn");
 var password = document.getElementById("password");
 loginBtn.addEventListener("click", validate);
 password.addEventListener("keyup", function(event){
 var code = event.keyCode;
 if(code === 13){
 validate();
 }})

