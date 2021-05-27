// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQGAbVlLy88iQCGbf5SLu_qox-9XTuJpk",
    authDomain: "loginexamenu2.firebaseapp.com",
    projectId: "loginexamenu2",
    storageBucket: "loginexamenu2.appspot.com",
    messagingSenderId: "1023795073177",
    appId: "1:1023795073177:web:50eb44397d98aa325fe808"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function Registrar(){
    console.log("Probando, provando la funcionalidad");
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Pasword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        console.log("usarioregistrado");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorCode);
        console.log(errorMessage);
    });
  }