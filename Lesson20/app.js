
function greet(first, last) {
    console.log(`Hey there, ${first} ${last}.`)
}

function repeat(text, ct) {
    let r = '';
    for (let i = 0; i < ct; i++) {
        r += text;
    }
    console.log(r);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}


