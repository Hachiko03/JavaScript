const password = 'Hi';
const passwordLength = password.length;

switch (passwordLength) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Password length is correct");
        break;
    default:
        console.log("Password not valid");
        break;
}