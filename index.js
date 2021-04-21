document.querySelectorAll('.drum').forEach(element => {
    element.addEventListener("click", function () {
         this.style.color = 'white';
         bttn = this.innerHTML;
         playSound(bttn);
         animate(bttn);
        })
});

document.addEventListener("keypress", (e)=>{
    playSound(e.key);
    animate(e.key);
})

function playSound(chr){
    switch(chr){
        case 'w':
            var a1 = new Audio('sounds/crash.mp3');
            a1.play();
             break;
        case 'a':
            var a2 = new Audio('sounds/kick-bass.mp3');
            a2.play();
             break;
        case 's':
            var a3 = new Audio('sounds/snare.mp3');
            a3.play();
             break;
        case 'd':
            var a4 = new Audio('sounds/tom-1.mp3');
            a4.play();
             break;
        case 'j':
            var a5 = new Audio('sounds/tom-2.mp3');
            a5.play();
             break;
        case 'k':
            var a6 = new Audio('sounds/tom-3.mp3');
            a6.play();
             break;
        case 'l':
            var a7 = new Audio('sounds/tom-4.mp3');
            a7.play();
             break;
        default:
            alert('No Bindings');
     }
}

function animate(chr){
    var bttn = document.querySelector('.'+chr);
    bttn.classList.add('pressed');

    setTimeout(() => { bttn.classList.remove('pressed')}, 100)
}