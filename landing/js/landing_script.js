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

///////////////
// Nav menu //
/////////////
let arrow = document.querySelectorAll('.nav-item');
for(let i = 0; i < arrow.length; i++){
    arrow[i].addEventListener('click', (e) => {
        if(i == 1 || i == 2){
            arrow[1].classList.remove('openMenu');
            arrow[2].classList.remove('openMenu');

            arrow[i].classList.toggle('openMenu');
        }
    })
}





function openUserMenu(){
    alert("User Menu")
}
    