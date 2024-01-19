const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://ro.wikipedia.org/wiki/Fi%C8%99ier:Rum%C3%A2nia_v%C4%83zut%C4%83_de_Cezar_Bolliac.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/EU-Romania_%28orthographic_projection%29.svg/435px-EU-Romania_%28orthographic_projection%29.svg.png';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
    link.style.color = 'rgb(0,106,130)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
    link.style.textDecorationStyl
}
