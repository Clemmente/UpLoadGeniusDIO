let order = [];
let clickedOrder = [];
let score = 0;

// 0 - roxo purple
// 1 - rosa pink
// 2 - laranja orange
// 3 - bege beige

const purple = document.querySelector('.purple');
const pink = document.querySelector('.pink');
const orange = document.querySelector('.orange');
const beige = document.querySelector('.beige');

//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4 );
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//verifica se os botões clicados são os mesmos gerados no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou miseravi! Iniciando próximo nível!`);
        nextLevel();
    }
}

//função para o click do jogador
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return purple;
    } else if(color == 1) {
        return pink;
    } else if (color == 2) {
        return orange;
    } else if (color == 3) {
        return beige;
    }
}

//Função para próximo nível do jogo
let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//função para game over
let lose = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//função de inicio do jogo
let playGame = () => {
    alert('bem vindo ao GENESIS! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
purple.onclick = () => click(0);
pink.onclick = () => click(1);
orange.onclick = () => click(2);
beige.onclick = () => click(3);

//purple.addEventListener('click', click(0));
//pink.addEventListener('click', click(1));
//orange.addEventListener('click', click(2));
//beige.addEventListener('click', click(3));

//inicio do jogo
playGame();