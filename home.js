document.getElementById("logout-button").onclick = logout;
loggedAccount = JSON.parse(localStorage.getItem("loggedAccount"));
document.getElementById("logged-email").innerHTML = `Logged account email: ${loggedAccount.email}`;

function logout() {
    localStorage.removeItem("loggedAccount");
}