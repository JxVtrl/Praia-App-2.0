
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
                    document.getElementById('username').value = ''
                    document.getElementById('password').value = ''
                    document.getElementById("username").style.border = 'none' 
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

function loginUser(){
    var username    = document.getElementById("username").value;    //  joaovitral
    var password    = document.getElementById("password").value;   //  comoFicarRico
    
    if(username === "" || password === "" || username < 5 || password < 5){
        if(username === "" || username < 5){
            document.getElementById("username").style.border = "2px solid" 
            document.getElementById("username").style.borderColor = "red";
        }
        if(password === "" || password < 5){
            document.getElementById("password").style.border = "2px solid" 
            document.getElementById("password").style.borderColor = "red";
        }
    }else{
        db.collection("usuários").where("username", "==", username).get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let email = doc.data().email;
                console.log(email);

                firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    if(user){
                        document.getElementById("username").style.border = "2px solid" 
                        document.getElementById("username").style.borderColor = "green";
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
            })
        })

        // Se não encontrar o usuário no banco de dados
        db.collection("usuários").where("username", "!=", username).get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                document.getElementById("username").style.border = "2px solid" 
                document.getElementById("username").style.borderColor = "red";
            })
        })
    }
}

// TROCA DE LOGIN PRA CADASTRO e ESQUECI SENHA
document.getElementById('cadastro-link').addEventListener('click', () => {
    let login_section = document.getElementById('login-section');
    let cadastro_section = document.getElementById('cadastro-section');

    login_section.style.display = 'none';
    cadastro_section.style.display = 'flex';
})
document.getElementById('esqueci-senha').addEventListener('click', () => {
    let login_section = document.getElementById('login-section');
    let esqueci_section = document.getElementById('esqueci-section');

    login_section.style.display = 'none';
    esqueci_section.style.display = 'flex';
})

// IR PARA TELA LOGIN
document.getElementById("cadastro-back").addEventListener('click', () => {
    let login_section = document.getElementById('login-section');
    let cadastro_section = document.getElementById('cadastro-section');
    
    cadastro_section.style.display = 'none';
    login_section.style.display = 'flex';
})
document.getElementById("esqueci-back").addEventListener('click', () => {
    let login_section = document.getElementById('login-section');
    let esqueci_section = document.getElementById('esqueci-section');

    esqueci_section.style.display = 'none';
    login_section.style.display = 'flex';
})

// LOG OUT
function logout() {
    firebase.auth().signOut().then(function() {
        console.log("Signed out");
        location.reload();
    }).catch(function(error) {
        console.log(error.message);
    })
}

// SIGN IN
function signIn(){
    let nome_cadastro = document.getElementById('nome-cadastro').value;
    let username_cadastro = document.getElementById('username-cadastro').value;
    let email_cadastro = document.getElementById("email-cadastro").value;
    let password_cadastro = document.getElementById("password-cadastro").value;
    let confirm_password_cadastro = document.getElementById("conf-password-cadastro").value;

    // Confere se as senhas são iguais ou Curtas
    if(email_cadastro == "" || password_cadastro == "" || nome_cadastro == "" || username_cadastro == ""){
        if(nome_cadastro == ""){
            document.getElementById("nome-cadastro").style.border = "2px solid" 
            document.getElementById("nome-cadastro").style.borderColor = "red";
        }
        if(username_cadastro == ""){
            document.getElementById("username-cadastro").style.border = "2px solid" 
            document.getElementById("username-cadastro").style.borderColor = "red";
        }
        if(email_cadastro == ""){
            document.getElementById("email-cadastro").style.border = "2px solid" 
            document.getElementById("email-cadastro").style.borderColor = "red";
        }
        if(password_cadastro == ""){
            document.getElementById("password-cadastro").style.border = "2px solid" 
            document.getElementById("password-cadastro").style.borderColor = "red";
        }
        if(confirm_password_cadastro == ""){
            document.getElementById("conf-password-cadastro").style.border = "2px solid" 
            document.getElementById("conf-password-cadastro").style.borderColor = "red";
        }
    }
    else{
        // Confere se a senha é válida
        if((password_cadastro !== confirm_password_cadastro) || password_cadastro < 8){
            document.getElementById("password-cadastro").style.border = "2px solid" 
            document.getElementById("password-cadastro").style.borderColor = "red";

            document.getElementById("conf-password-cadastro").style.border = "2px solid" 
            document.getElementById("conf-password-cadastro").style.borderColor = "red";

            alert("Senha não confere ou não válida")
        }
        else{
            // Confere se o nome de usuário é válido
            if(username_cadastro.length < 4 || username_cadastro.length > 12 || username_cadastro.includes(' ')){
                alert("Username não válido")
            
                document.getElementById("username-cadastro").style.border = "2px solid" 
                document.getElementById("username-cadastro").style.borderColor = "red";
            }
            else{
                // Verifica se o usuário já existe
                db.collection("usuários").where("username", "==", username_cadastro).get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                
                        alert("Usuário já existe.");
                        console.log(doc.id, " => ", doc.data().username);

                        document.getElementById("username-cadastro").style.border = "2px solid" 
                        document.getElementById("username-cadastro").style.borderColor = "red";
                    })
                })
            
                // Se não encontrar o usuário no banco de dados
                db.collection("usuários").where("username", "!=", username_cadastro).get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                    // Cadastra o usuário
                    firebase.auth().createUserWithEmailAndPassword(email_cadastro, password_cadastro)
                        .then((userCredential) => {
                            var user = userCredential.user;

                            const userInfo = {
                                nome: nome_cadastro,
                                username: username_cadastro,
                                email: email_cadastro
                            }

                            // Chamada do banco de dados
                            addDataBase(user, userInfo);
                
                            // Envia email de verificação
                            user.sendEmailVerification().then(function() {
                                // Email sent.
                                alert('Conta Criada! Email de verificação Enviado.');
                                location.reload();
                            })
                        })
                        .catch((error) => {
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            console.log(errorCode + ' ' + errorMessage);
                
                            document.getElementById("nome-cadastro").style.border = "2px solid" 
                            document.getElementById("nome-cadastro").style.borderColor = "red";

                            document.getElementById("username").style.border = "2px solid" 
                            document.getElementById("username").style.borderColor = "red";
                
                            document.getElementById("email-cadastro").style.border = "2px solid" 
                            document.getElementById("email-cadastro").style.borderColor = "red";
                            
                            document.getElementById("password-cadastro").style.border = "2px solid" 
                            document.getElementById("password-cadastro").style.borderColor = "red";

                            document.getElementById("conf-password-cadastro").style.border = "2px solid" 
                            document.getElementById("conf-password-cadastro").style.borderColor = "red";
                        });
                    })
                })
            }
        }
    }
}

// Adicionar dados do usuário no banco de dados
var db = firebase.firestore();
function addDataBase(user, info){

    db.collection("usuários").doc(info.email).set({
        name: info.nome,
        first_name: firstName(info.nome),
        username: info.username,
        email: info.email,
        id: user.uid

    }).then(() => {
        console.log("Document written sucessfully!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

function firstName(name){
    let name_split = name.toLowerCase().split(' ');
    
    return name_split[0].charAt(0).toUpperCase() + name_split[0].slice(1);
}

// Gratificando o usuário
function gratifyUser(user){
    let hour = new Date().getHours();
    let greeting_span = document.getElementById('greeting');
    let greeting = '';

    // Pegando o documento do usuário
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
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

