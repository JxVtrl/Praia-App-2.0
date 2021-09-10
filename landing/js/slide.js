////////////////
// Carrossel //
//////////////
let carrossel = document.querySelector('#carrossel-container');
let carrossel_item_width = document.getElementById('carrossel').clientWidth
let botoes_carrossel = document.getElementById('botoes-carrossel');
let index = 0
let controle = 0 
let reverse = false

setInterval(carrosselMove, 3500);
function carrosselMove(){
    if(reverse == true){
        index--
        controle -= carrossel_item_width
        
        if(index == 0){
            reverse = false
            index, controle = 0,0
            carrosselMove()
        }
        carrossel.style.transform = 'translateX(' + -controle + 'px)';
        carrosselBotoes(index)
    }
    else{
        carrossel.style.transform = 'translateX(' + -controle + 'px)';
        carrosselBotoes(index)

        index++
        controle += carrossel_item_width
        if(index >= carrossel.childElementCount){
            reverse = true
            carrosselMove()
        }
        
    }
}

// Mover Carrossel pelo Scroll
document.getElementById('carrossel').addEventListener('wheel', function(e){
    // Se rolar mais que deve para baixo
    if(index <= 0 && e.deltaY > 0){
        index = carrossel.childElementCount - 1
        controle = carrossel_item_width * index
        reverse = true
        carrosselBotoes(index)
        carrossel.style.transform = 'translateX(' + -controle + 'px)';
    }
    // Se rolar mais que deve para cima
    else if(controle >= carrossel_item_width*(carrossel.childElementCount-1) && e.deltaY < 0){
        index = 0
        controle = 0
        reverse = false
        carrosselBotoes(index)
        carrossel.style.transform = 'translateX(' + -controle + 'px)';
    }
    else{
        if(e.deltaY < 0){
            index++
            controle += carrossel_item_width
            carrossel.style.transform = 'translateX(' + -controle + 'px)';
            carrosselBotoes(index)
        }
        else{
            index--
            controle -= carrossel_item_width
            carrossel.style.transform = 'translateX(' + -controle + 'px)';
            carrosselBotoes(index)
        }
    }
})

// Criar botoes do carrossel
function carrosselBotoes(index){
    for(let i = 0; i < carrossel.childElementCount; i++){
        botoes_carrossel.children[i].classList.remove('bx-radio-circle-marked')
        botoes_carrossel.children[i].classList.add('bx-radio-circle')
    }
    botoes_carrossel.children[index].classList.remove('bx-radio-circle')
    botoes_carrossel.children[index].classList.add('bx-radio-circle-marked')
}

// Mover Carrossel pelos botoes
let todos_botoes_carrossel = document.querySelectorAll('.botao-carrossel')
todos_botoes_carrossel.forEach(botao => {
    botao.addEventListener('click', e => {
        let p = e.target.parentElement;
        let botaoIndex = Array.prototype.indexOf.call(p.children, e.target);

        carrossel.style.transform = 'translateX(' + -(carrossel_item_width * botaoIndex) + 'px)';
        carrosselBotoes(botaoIndex)
    })
})


