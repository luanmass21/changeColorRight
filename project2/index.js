const body = document.getElementsByTagName('body')[0]
const green = document.getElementById('green')
const red = document.getElementById('red')
const blue = document.getElementById('blue')



body.style.background = "black"
// console.log(body)

function setColor(name){
    body.style.background = name;



}


function randomColor(){
    const red = Math.round(Math.random() * 255) 
    const green = Math.round(Math.random() * 255) 
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.background = color;



}   

randomColor()