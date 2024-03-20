//core module
//file system
// const fs = require('fs');

// fs.readFile('text.txt','utf-8', (err,data) => {
//     if (err) throw err;
//     console.log(data);
// }); 


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name?', (name) => {
    rl.question('What is your number?', (number) => {
        rl.question('What is your email?', (email) => {
            console.log(`thank you ${name}`,`your phone number is ${number}`,`and also your email is ${email}`)
            
            rl.close();
        });
    });
});
