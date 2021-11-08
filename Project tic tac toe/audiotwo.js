const soundBtn = document.querySelector('.playerO');
let myAudio =document.querySelector('#audio');
soundBtn.addEventListener('click',()=>{
    myAudio.play();
})