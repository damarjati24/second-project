//core module
//file system
// const fs = require('fs');

// fs.readFile('text.txt','utf-8', (err,data) => {
//     if (err) throw err;
//     console.log(data);
// }); 

const validator = require('validator');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('What is your name?', (name) => {
//     rl.question('What is your number?', (number) => {
//         rl.question('What is your email?', (email) => {
//             console.log(`thank you ${name}`,`your phone number is ${number}`,`and also your email is ${email}`)
                  
//                 if (validator.isAlpha(name)) {
//                     console.log (`thank you ${name}`)
//                 } else {
//                     console.log ("invalid name")
//                 }

//                 if (validator.isMobilePhone(number, 'id-ID')) {
//                     console.log (`your phone number is ${number}`)
//                 } else {
//                     console.log ("invalid number")
//                 }
                
//                 if (validator.isEmail(email)) {
//                     console.log (`and also your email is ${email}`) 
//                 } else {
//                     console.log ("invalid email")
//                 }
//             rl.close();
//         });
//     });
// });
 
function Getemail(name, number) {
    rl.question('What is your email?', (email) => {
        if (validator.isEmail(email)) {
            console.log(`your name is ${name}`)
            console.log (`your phone number is ${number}`)
            console.log (`and also your email is ${email}`)
            rl.close() 
        } else {
            console.log ("invalid email")
            Getemail(name, number)
        }  
    })
}
        

function PhoneNumber(name) {
    rl.question('What is your number?', (number) => {
        if (validator.isMobilePhone(number, 'id-ID')) {
            Getemail(name, number) 
        } else {
            console.log ("invalid number")
            PhoneNumber(name)
        }   
    })
}

function name() {
    rl.question('What is your name?', (name) => {
        PhoneNumber(name)
    })
}
name()