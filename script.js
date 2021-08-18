// common code between pages

// set accountsList to empty list or to local storage list
let accountsList = localStorage.getItem("accountsList")
                    ? JSON.parse(localStorage.getItem("accountsList"))
                    : [];

let loggedAccount = null;

function allFieldsFull() {
    return document.getElementById("email").value &&
        document.getElementById("password").value &&
        (!document.getElementById("name") || document.getElementById("name").value);
}

function getAccount(email) {
    for(const account of accountsList) {
        if(account.email.toUpperCase() === email.toUpperCase()) {
            return account;
        }
    }
    return null;
}