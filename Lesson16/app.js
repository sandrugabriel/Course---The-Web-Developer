
//console.log("Hello, my fisrt java !");
//let rand = Math.random();
//if(Math.floor(rand*10)===2){

//console.log("True !");

//} 
//else if(Math.floor(rand*10)===3){


//  console.log("\n The number is " + Math.floor(rand*10));
//}
//else{
//   console.log(False!!!!!!"\n The number is " + Math.floor(rand*10));

//}

//let total = 1+3;

const pass = prompt("Plese, Enter a new password");

if (pass) {
    if (pass.length >= 6 && pass.indexOf(' ') === -1) {

        console.log("Password is change!");

    }
    else {
        console.log("The password should have at lest 6 character");
    }

} else {
    console.log("Enter the password!!!");
}

const nr=2;
switch (nr) {

    case 1:
        console.log("Monday!");
        break;
    case 2:
        console.log("Thusday!");
        break;

    default:
        console.log("Invalid number");

}