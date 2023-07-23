const password = 'Hi';
const passwordLength = password.length;
let condition = passwordLength >= 4 ;
let condition2 = passwordLength <= 6 ;

if (condition && condition2) {
    console.log("Password length is correct")
} else {
    console.log("Password not valid")
}