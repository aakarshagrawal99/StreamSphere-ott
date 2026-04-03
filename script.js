// Firebase configuration (your real values)
const firebaseConfig = {
  apiKey: "AIzaSyCe5KOK2e_5DuTsSkCmMvzSOdc5q0n-v2g",
  authDomain: "streamsphere-b8a5e.firebaseapp.com",
  projectId: "streamsphere-b8a5e",
  storageBucket: "streamsphere-b8a5e.firebasestorage.app",
  messagingSenderId: "667078410126",
  appId: "1:667078410126:web:980f0a1ce51915065d2edf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Auth
const auth = firebase.auth();
// Test
console.log("Firebase connected");


function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Signup Successful");
        })
        .catch((error) => {
            alert(error.message);
        });
}


function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login Successful");
        })
        .catch((error) => {
            alert(error.message);
        });
}


function logout() {
    auth.signOut()
        .then(() => {
            alert("Logged out");
        });
}


auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User logged in:", user.email);
    } else {
        console.log("No user logged in");
    }
});


function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            alert("Login Successful");

            // Redirect
            window.location.href = "platform.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}