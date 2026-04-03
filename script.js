// =======================
// SIMPLE LOGIN SYSTEM
// =======================

// EMAIL LOGIN
function login() {
    const email = document.getElementById("emailInput").value.trim();

    if (email === "") {
        alert("Please enter your email");
        return;
    }

    localStorage.setItem("userEmail", email);

    window.location.href = "platform.html";
}


// GOOGLE LOGIN (SIMULATED)
function googleLogin() {
    alert("Google login simulated");

    localStorage.setItem("userEmail", "googleuser@gmail.com");
    localStorage.setItem("userName", "Google User");

    window.location.href = "platform.html";
}
