var pessoa = {
    nome: "pedrinho", 
    cpf:"00000000000", 
    idade:"16", 
    email: "pedro@gmail",
    hobbies:['irritar', 'ser chato', 'chamar o daniel de burro'],
    saudacao: function(){
    return('Oi! Eu sou' + this.nome)
    },
}
console.log(pessoa.saudacao())