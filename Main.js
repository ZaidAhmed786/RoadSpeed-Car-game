const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

let player = { speeed : 5};
const keys = {ArrowUp : false , ArrowDown : false , ArrowLeft : false , ArrowRight : false}

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
    let car = document.querySelector('.car')
    let road = gameArea.getBoundingClientRect();
    if(player.start)
    {
        if(keys.ArrowUp && player.y > (road.top + 70)) { player.y -= player.speeed }
        if(keys.ArrowDown && player.y < (road.bottom - 50)) {player.y += player.speeed}
        if(keys.ArrowLeft && player.x > 0) { player.x -= player.speeed }
        if(keys.ArrowRight && player.x < (road.width - 50)) {player.x += player.speeed }
        car.style.top = player.y + "px";
        car.style.left = player.x + "px";
        window.requestAnimationFrame(gamePlay);
        
    }
    
}

const start = () =>{
    player.start = true;
    gameArea.classList.remove('hide')
    startScreen.classList.add('hide')
    window.requestAnimationFrame(gamePlay);

   

            for(let x=0;x<5;x++){
                let roadLine = document.createElement('div');
                roadLine.setAttribute('class' , 'roadLine');
                roadLine.style.top = (x*150) + "px";
                gameArea.appendChild(roadLine);
                
            }

    let car = document.createElement('div');
    car.setAttribute('class' , 'car');
    // car.innerHTML = 'car' ;
    gameArea.appendChild(car);

    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    console.log(car.offsetLeft)

}



startScreen.addEventListener('click' , start)
document.addEventListener('keydown' , keyDown);
document.addEventListener('keyup' , keyUp);



// console.log(score)