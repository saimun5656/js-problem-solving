function getpass(length){
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=<>?';
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = '';
    for(let i = 0; i < length; i++){
        const random = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[random]
    }
    return password
}
const password = getpass(80);
console.log(password);