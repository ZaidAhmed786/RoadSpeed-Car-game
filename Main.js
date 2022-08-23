const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');


const keys = {ArrowUp : false , ArrowDown : false , ArrowLeft : false , ArrowRight : false}
const player = {};
const keyDown = (e) =>{
    e.preventDefault();
    keys[e.key] = true
    console.log(keys);
}
const keyUp = (e) =>{
    e.preventDefault();
    keys[e.key] = false
    // console.log(e.key);
}

const gamePlay = ()=>{
    console.log('hey game start now');
    if(player.start)
    {
        window.requestAnimationFrame(gamePlay);
    }
    
}

const start = () =>{
    player.start = true;
    gameArea.classList.remove('hide')
    startScreen.classList.add('hide')
    window.requestAnimationFrame(gamePlay);

    let car = document.createElement('div');
    car.setAttribute('class' , 'car');
    // car.innerHTML = 'car' ;
    gameArea.appendChild(car);

}



startScreen.addEventListener('click' , start)
document.addEventListener('keydown' , keyDown);
document.addEventListener('keyup' , keyUp);



// console.log(score)