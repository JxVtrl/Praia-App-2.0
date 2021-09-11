window.onload = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        // Botando as Infos Do usuário no Perfil
        db.collection("usuários").doc(user.email).get().then((doc) => {
            if (doc.exists) {
                let user_name = doc.data().name
                let username = doc.data().username
                let user_email = doc.data().email
                let user_birth = doc.data().birth
                let user_phone = doc.data().city

                document.getElementById('profile-name').innerHTML = user_name
                document.getElementById('profile-username').innerHTML = username
                document.getElementById('profile-email').innerHTML = user_email

                document.getElementById('profile-birth').innerHTML = user_birth
                document.getElementById('profile-phone').innerHTML = user_phone

                if(document.getElementById('profile-birth').innerHTML == 'undefined'){
                    document.getElementById('profile-birth').innerHTML = `Não informado`
                }
                if(document.getElementById('profile-phone').innerHTML == 'undefined'){
                    document.getElementById('profile-phone').innerHTML = `Não informado`
                }
            } 
            else {
                console.log("No such document!");
            }
        })
    })
}
