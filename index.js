document.getElementById("username").addEventListener("focusin", () => {
    if (!document.getElementById("username").value)
        document.getElementById("usernameLabel").classList.toggle("active");
});

document.getElementById("username").addEventListener("focusout", () => {
    if (!document.getElementById("username").value)
        document.getElementById("usernameLabel").classList.toggle("active");
});

document.getElementById("password").addEventListener("focusin", () => {
    if (!document.getElementById("password").value)
        document.getElementById("passwordLabel").classList.toggle("active");
});

document.getElementById("password").addEventListener("focusout", () => {
    if (!document.getElementById("password").value)
        document.getElementById("passwordLabel").classList.toggle("active");
});
