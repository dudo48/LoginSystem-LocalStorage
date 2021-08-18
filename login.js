document.getElementById("login-button").onclick = login;
localStorage.removeItem("loggedAccount");   // no account is logged in while you're in this page

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
        
    if(!allFieldsFull()) {
        alert("All fields must be filled.");
        return;
    }

    account = getAccount(email);
    if(account) {
        if(account.password === password) {
            localStorage.setItem("loggedAccount", JSON.stringify(account));
            window.location.href = "home.html";
        }
        else {
            alert("Wrong password.");
        }
    }
    else {
        alert("Email is not registered.");
    }
}