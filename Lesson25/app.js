const btn = document.querySelector("#v2");

btn.onlick = function(){
    console.log("You click me");
}

function scream(){
    console.log("Stopp");

}

btn.onmouseenter = scream;

btn.addEventListener('click',function(){

})

const generate = document.querySelector("#generate");
const h = document.querySelector("#title");
generate.addEventListener('click',function(){

    var color1 = Math.floor(Math.random()*255);
    var color2 = Math.floor(Math.random()*255);
    var color3 = Math.floor(Math.random()*255);

    const color = `rgb(${color1},${color2},${color3})`;
    document.body.style.backgroundColor = color;

    h.innerText = color;
})


window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
    }
})