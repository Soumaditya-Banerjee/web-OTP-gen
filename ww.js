var prompt = require('prompt-sync')();


function ball(){
let otp ="";
for(i=1;i<=10;i++){
    otp+=Math.floor(Math.random()*i)
}
    return otp;
}

console.log(ball())
