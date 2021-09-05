/////////////////////////
// Universal Functions //
/////////////////////////

function formatText(txt){
    return txt[0].toUpperCase() + txt.slice(1)
}

function formatNumber(num){
    if(num < 10) return '0' + num
    else return num
}

///////////////////////
// Getting time now //
///////////////////////

setInterval(getTimeNow, 1000);

function getTimeNow(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    let tempo = formatNumber(h) + ":" + formatNumber(m) + ":" + formatNumber(s);
}

////////////////////
// Open user menu //
////////////////////
function openUserMenu(){
    alert("User Menu")
}
    

/////////////////////////
// Gratifying the user //
/////////////////////////
function gratifyUser(){
    let hour = new Date().getHours();
    let greeting_span = document.getElementById('greeting');
    let nome = sessionStorage.getItem('name') 
    let greeting = '';

    console.log(nome)

    if(hour >= 5 && hour < 12){
        greeting = `Bom dia, ${nome}.`
    }
    else if(hour >= 12 && hour < 18){
        greeting = `Boa tarde, ${nome}.`
    }
    else{
        greeting = `Boa noite, ${nome}.`
    }

    greeting_span.innerHTML = greeting
}
