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
let li_box = document.querySelectorAll('.nav-item');
console.log(li_box)
for (var i = 0; i < li_box.length; i++) {
    li_box[i].addEventListener("click", (e)=>{
        console.log(e.target)
        
        arrowParent.classList.toggle("showMenu");
    });
}




let nav = document.querySelector('.sidebar');
let logOutIcon = document.getElementById('icon-logout')
let newIcon = document.getElementById('newIcon-li');

document.getElementById('logo').addEventListener('click', () => {
    if(nav.classList.contains('close')){
        nav.classList.remove('close');
        logOutIcon.classList.remove('hide');
        newIcon.innerHTML = ''
    }
    else{
        nav.classList.add('close');
        logOutIcon.classList.add('hide');
        newIcon.innerHTML = 
        `   <i class='bx bx-log-out' id="icon-logout" onclick="logout()"></i>
            <ul class="sub-menu"><li onclick="logout()"><a class="link_name" href="#">Sair</a></li></ul>   `
    }

})

    