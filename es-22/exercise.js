const password = 'Hi';
const passwordLength = password.length;

switch (passwordLength) {
    case 4:
        console.log("Password length is correct");
        break;
    case 5:
    case 6:
        console.log("Password not valid");
        break;
}