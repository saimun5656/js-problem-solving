function getpass(length){
    const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?'
    let password = '';
    for(let i = 0; i < length; i++){
        const random = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[random]
    }
    return password
}
const password = getpass(8);
console.log(password);