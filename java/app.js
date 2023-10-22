

//*  hadding

 let changeHading = document.querySelector(".changeHading h1")
 let clickBtn = document.querySelector(".clickBtn")

function textChange() {
     changeHading.innerHTML = 'I am a frontend developer'
}
 clickBtn.addEventListener("click" , textChange)



// on
let btnOn = document.querySelector(".btnOn")
let img = document.querySelector("img")

function turnOnLight () {
    img.src="./image/on.jpg"
}

btnOn.addEventListener('click', turnOnLight)

//*OFF
let btnOff = document.querySelector(".btnOff")

function turnOffLight() {
    img.src="./image/off.jpg"
}

btnOff.addEventListener("click" , turnOffLight)