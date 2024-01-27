const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("BEFORE")
isRightTriangle(3, 4, 5)

console.log("DONE!")

//callback
console.log("Sending to server!")
setTimeout(() => {
    console.log("Here is it...")
}, 3000)
console.log("DONE!")


const colorChange = (newC, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newC;
        doNext && doNext();
    }, delay)
}

colorChange('red', 1000, () => {
    colorChange('orange', 1000, () => {
        colorChange('yellow', 1000, () => {
            colorChange('green', 1000, () => {
                colorChange('blue', 1000, () => {

                })
            })
        })
    })
});


//promice

fakePromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakePromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakePromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })
