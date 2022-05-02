const keys = document.querySelectorAll(".keyboard__key");
const spaceKey = document.querySelector(".space-key");
const shiftLeft = document.querySelector(".shift-key--left");
const shiftRight = document.querySelector(".shift-key--right");
const toggleCircle = document.querySelector(".toggle-circle");
const capsLock = document.querySelector(".caps-key")
const nightMode = document.querySelector(".night-mode");
const body = document.querySelector("body");
const keyboard = document.querySelector(".keyboard");
const changeColor = document.querySelector(".change-color");
const colorsInput = document.querySelector(".colors__input");
const keyboardLights = document.querySelector(".keyboard__lights");
const textInput = document.querySelector(".text")


for(let i=0; i<keys.length;i++){
    keys[i].setAttribute('keyName',keys[i].innerText);
    keys[i].setAttribute('keyLowerCaseName',keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', (e)=>{
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyName' ) || e.key == keys[i].getAttribute('keyLowerCaseName')) {
            keys[i].classList.add('active')
        }}
        if(e.code == "Space"){
            spaceKey.classList.add("active");
        }
        if(e.code == "ShiftLeft"){
            shiftRight.classList.remove("active");
        }
        if(e.code == "ShiftRight"){
            shiftLeft.classList.remove("active");
        }
        if(e.code == "CapsLock"){
            capsLock.classList.toggle("active");
        }
})
window.addEventListener('keyup', (e)=>{
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyName' ) || e.key == keys[i].getAttribute('keyLowerCaseName')) {
            keys[i].classList.remove('active');
            keys[i].classList.add('remove');
            setTimeout(()=>{
                keys[i].classList.remove("remove");
            })
        }
        if(e.code == "Space"){
            spaceKey.classList.remove("active");
            spaceKey.classList.add("remove");
        }
        if(e.code == "ShiftLeft"){
            shiftRight.classList.remove("active");
            shiftRight.classList.remove("remove");
        }
        if(e.code == "ShiftRight"){
            shiftLeft.classList.remove("active");
            shiftLeft.classList.remove("remove");
        }
    }

})
nightMode.addEventListener("click",()=>{
    toggleCircle.classList.toggle("active");
    body.classList.toggle("active");
    nightMode.classList.toggle("active");
    keyboard.classList.toggle("active");
    textInput.classList.toggle("active");
    changeColor.classList.toggle("active");
    for(let i=0;i<keys.length;i++){
        keys[i].classList.toggle("key-night");
    }
    
});
colorsInput.addEventListener("input", ()=>{
    for(let i=0; i<keys.length;i++){
        keys[i].style.color = colorsInput.value;
    }
    keyboardLights.style.background = colorsInput.value;
})