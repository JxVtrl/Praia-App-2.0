
var config = {
    apiKey: "AIzaSyA9kSpOTVc6FyMm-C0P4-bzuukuEJAEsN4",
    authDomain: "praia-app-2.firebaseapp.com",
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    
    var landing = document.getElementById('landing');
    var main = document.getElementById('main');

    if (user) {
        // User is signed in.
        setTimeout(()=>{
            main.style.display = "block";
            landing.style.display = "none";

            // Limpar valores do formulário
            document.getElementById('email').value = ''
            document.getElementById('password').value = ''
            document.getElementById("email").style.border = 'none' 
            document.getElementById("password").style.border = 'none' 

        }, 3000)
    
    } else {
        // No user is signed in.
        main.style.display = 'none';
        landing.style.display = 'block';
    }
});

function logIn(){

    var email       = document.getElementById("email").value;       //  joaoviniciusvitral@hotmail.com
    var password    = document.getElementById("password").value;   //  comoFicarRico
    
    if(email === "" || password === "" || email < 5 || password < 5){
        if(email === "" || email < 5){
            document.getElementById("email").style.border = "2px solid" 
            document.getElementById("email").style.borderColor = "red";
        }
        if(password === "" || password < 5){
            document.getElementById("password").style.border = "2px solid" 
            document.getElementById("password").style.borderColor = "red";
        }
    }else{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            if(user){
                document.getElementById("email").style.border = "2px solid" 
                document.getElementById("email").style.borderColor = "green";
                document.getElementById("password").style.border = "2px solid" 
                document.getElementById("password").style.borderColor = "green"; 

                console.log('User logged');
            }
        })
        .catch((error) => {
            // Handle Errors here.
            console.log(error.code);
            alert(error.message);
        });
    }
}

// TROCA DE LOGIN PRA CADASTRO
document.getElementById('cadastro').addEventListener('click', () => {
    let login_section = document.getElementById('login-section');
    let cadastro_section = document.getElementById('cadastro-section');

    login_section.style.display = 'none';
    cadastro_section.style.display = 'block';
})

// LOG OUT
function logout() {
    firebase.auth().signOut().then(function() {
        document.getElementById("message").innerHTML = "Signed out";
        clearForm()
    }).catch(function(error) {
        document.getElementById("message").innerHTML = error.message;
    })
}

// SIGN IN
function signIn(){
    let email_cadastro = document.getElementById("email-cadastro").value;
    let password_cadastro = document.getElementById("password-cadastro").value;
    let nome_cadastro = document.getElementById('nome-cadastro').value;

    if(email_cadastro == "" || password_cadastro == "" || nome_cadastro == ""){
        if(email_cadastro == ""){
            document.getElementById("email-cadastro").style.border = "2px solid" 
            document.getElementById("email-cadastro").style.borderColor = "red";
        }
        if(password_cadastro == ""){
            document.getElementById("password-cadastro").style.border = "2px solid" 
            document.getElementById("password-cadastro").style.borderColor = "red";
        }
        if(nome_cadastro == ""){
            document.getElementById("nome-cadastro").style.border = "2px solid" 
            document.getElementById("nome-cadastro").style.borderColor = "red";
        }
    }
    else{
        firebase.auth().createUserWithEmailAndPassword(email_cadastro, password_cadastro)
        .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log('User' + user + 'And' + email + 'created');
        location.reload();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + ' ' + errorMessage);

            document.getElementById("nome-cadastro").style.border = "2px solid" 
            document.getElementById("nome-cadastro").style.borderColor = "red";

            document.getElementById("email-cadastro").style.border = "2px solid" 
            document.getElementById("email-cadastro").style.borderColor = "red";
            
            document.getElementById("password-cadastro").style.border = "2px solid" 
            document.getElementById("password-cadastro").style.borderColor = "red";
        });
    }
}