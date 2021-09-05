var config = {
    apiKey: "AIzaSyA9kSpOTVc6FyMm-C0P4-bzuukuEJAEsN4",
    authDomain: "praia-app-2.firebaseapp.com",
};
window.onload = function() {
    firebase.initializeApp(config);
};

const main = document.getElementById('main');
const landing = document.getElementById('landing');


document.getElementById('login').addEventListener('click', () => {

    let email       //  joaoviniciusvitral@hotmail.com
    let password    //  comoFicarRico
    let errorCode, errorMessage, log;
    
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if(email == "" || password == ""){
        if(email == ""){
            document.getElementById("email").style.border = "2px solid" 
            document.getElementById("email").style.borderColor = "red";
        }
        if(password == ""){
            document.getElementById("password").style.border = "2px solid" 
            document.getElementById("password").style.borderColor = "red";
        }
    }else{
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            errorCode = error.code;
            errorMessage = error.message;
            
            console.log(errorCode);
            console.log(errorMessage);
            // Wrong Password Error
            if (errorCode) {
                document.getElementById("password").style.border = "2px solid" 
                document.getElementById("password").style.borderColor = "red";
            }
        });
        
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                if(errorCode === undefined){
                    document.getElementById("email").style.border = "2px solid" 
                    document.getElementById("email").style.borderColor = "green";
                    document.getElementById("password").style.border = "2px solid" 
                    document.getElementById("password").style.borderColor = "green";      
    
                    setTimeout(showMain(), 2000);
                }
    
            } else {
                alert('not logged')
            }
        });
    }
    
})

function showMain(){
    landing.classList.add('hide');
    main.classList.remove('hide');
}

document.getElementById('cadastro').addEventListener('click', () => {
    let login_section = document.getElementById('login-section');
    let cadastro_section = document.getElementById('cadastro-section');

    login_section.style.display = 'none';
    cadastro_section.style.display = 'block';
})

async function signIn(){
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

    firebase.auth().createUserWithEmailAndPassword(email_cadastro, password_cadastro).then(function() {
        document.getElementById("message").innerHTML = 'User' + email + 'created';
        location.reload();
    });

}

function logout() {
    firebase.auth().signOut().then(function() {
        document.getElementById("message").innerHTML = "Signed out";
        clearForm()
    }).catch(function(error) {
        document.getElementById("message").innerHTML = error.message;
    })
}