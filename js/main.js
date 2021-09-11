//////////////////////////
// Universal Functions //
////////////////////////

function formatNumber(num){
    if(num < 10) return '0' + num
    else return num
}

///////////////////////
// Getting time now //
/////////////////////

setInterval(getTimeNow, 1000);
function getTimeNow(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    let tempo = formatNumber(h) + ":" + formatNumber(m) + ":" + formatNumber(s);

    return tempo;
}


////////////////////////////
// Pages //////////////////
//////////////////////////

function home(){
    document.querySelectorAll('.pages').forEach(link => {
        link.classList.add('hide')
    })
    document.getElementById('home').classList.remove('hide');
}

function profile(){
    document.querySelectorAll('.pages').forEach(link => {
        link.classList.add('hide')
    })
    document.getElementById('profile').classList.remove('hide');
}
