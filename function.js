function isPalindrome(str) {
    const frase = str.split('')
    const frase_ao_contrario = frase.reverse();
    if(frase === frase_ao_contrario) {
        return true
}

return false

}

console.log(isPalindrome('natan')); 
