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

///////////////////////////////////////
// Getting User Initial Information //
///////////////////////////////////////

    // Variables //
    const main = document.getElementById('main');
    const landing = document.getElementById('landing');
    const span_nome = document.getElementById('name')

    // Button Click Event //
    function landingBtnClick(){
        let nome = document.getElementById('form-input').value
       
        sessionStorage.setItem('name', formatText(nome))

        landing.classList.add('hide');
        main.classList.remove('hide');
    }

    // Check if user is already logged in //
    if(sessionStorage.getItem('name')){
        main.classList.remove('hide')
        landing.classList.add('hide')
        gratifyUser()
    }
    else{
        const main = document.getElementById('main')
        const landing = document.getElementById('landing')

        landing.classList.remove('hide')
        main.classList.add('hide')
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
