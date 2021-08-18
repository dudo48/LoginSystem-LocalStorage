document.getElementById("signup-button").onclick = signup;
localStorage.removeItem("loggedAccount");   // no account is logged in while you're in this page

function signup() {
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;

    if (!allFieldsFull()) {
        alert("All fields must be filled.");
        return;
    }

    let account = {
        name: userName,
        email: userEmail,
        password: userPassword
    };

    if (!getAccount(account.email)) {
        accountsList.push(account);
        localStorage.setItem("accountsList", JSON.stringify(accountsList));

        localStorage.setItem("loggedAccount", JSON.stringify(account));
        window.location.href = "home.html";
    }
    else {
        alert("Email already registered.");
    }
}