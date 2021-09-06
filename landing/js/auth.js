
    // ....



// Função Anonima config para o firebase
(function(){
    // Your web app's Firebase configuration
    var config = {
        apiKey: "AIzaSyA9kSpOTVc6FyMm-C0P4-bzuukuEJAEsN4",
        authDomain: "praia-app-2.firebaseapp.com",
        databaseURL: "https://praia-app-2-default-rtdb.firebaseio.com",
        projectId: "praia-app-2",
        storageBucket: "praia-app-2.appspot.com",
        messagingSenderId: "1069341547607",
        appId: "1:1069341547607:web:cc867f4e3fed72e86a1712"
    };
    
    // Initialize Firebase
    firebase.initializeApp(config);
})()
window.addEventListener("load", function(){
    // Identifica se o usuário está logado
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

                }, 2000)
                gratifyUser(user)
        
        } else {
            // No user is signed in.
            main.style.display = 'none';
            landing.style.display = 'block';
        }
    });
});

function login(){
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
        console.log("Signed out");
    }).catch(function(error) {
        console.log(error.message);
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
        // Faz o Cadastro
        firebase.auth().createUserWithEmailAndPassword(email_cadastro, password_cadastro)
        .then((userCredential) => {
            var user = userCredential.user;

            // chamada do banco de dados
            addDataBase(user, email_cadastro, nome_cadastro);

            // Envia email de verificação
            user.sendEmailVerification().then(function() {
                // Email sent.
                console.log('Email sent');
            })
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

// Adicionar dados do usuário no banco de dados
var db = firebase.firestore();
function addDataBase(user, email, nome){

    db.collection("usuários").doc(email).set({
        name: nome,
        first_name: firstName(nome),
        email: email,
        id: user.uid

    }).then(() => {
        console.log("Document written sucessfully!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

function firstName(name){
    let name_split = name.split(' ');
    
    return name_split[0];
}


// Gratificando o usuário
function gratifyUser(user){
    let hour = new Date().getHours();
    let greeting_span = document.getElementById('greeting');
    let greeting = '';
    let nome

    var doc_usuarios = db.collection('usuários').doc(user.email);

    doc_usuarios.get().then((doc) => {
        // Se ele achar o documento do usuário
        if (doc.exists) {
            console.log("Document data:", doc.data());

            if(hour >= 5 && hour < 12){
                greeting = `Bom dia, ${doc.data().first_name}.`
            }
            else if(hour >= 12 && hour < 18){
                greeting = `Boa tarde, ${doc.data().first_name}.`
            }
            else{
                greeting = `Boa noite, ${doc.data().first_name}.`
            }

            greeting_span.innerHTML = greeting
        
        } else {
            logout()
            alert('Usuário não encontrado');
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    

    
}

