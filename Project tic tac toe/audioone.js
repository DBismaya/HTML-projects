const soundBtn = document.querySelector('.playerX');
let myAudio =document.querySelector('#audio');
soundBtn.addEventListener('click',()=>{
    myAudio.play();
})