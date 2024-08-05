const produtosDeCabelo = {
    // Um número (number)
    preco: 29.99, 
    // Uma string (string)
    nome: "Shampoo Anticaspa", 
    // Um booleano (boolean)
    emEstoque: true, 
    // Um array (array)
    ingredientes: ["Água", "Lauril Sulfato de Sódio", "Extrato de Camomila", "Glicerina"], 
    // Um objeto (object)
    fabricante: {
        nome: "Beleza Pura", 
        endereco: "Rua dos Beleza, 123, São Paulo, SP", 
        telefone: "+55 11 98765-4321" 
    },
    // Uma função (function)
    aplicarProduto: function() {
        console.log(`Aplicar ${this.nome} no cabelo. Massageie e enxágue bem.`);
    },
    // null
    desconto: null,
    // undefined
    avaliacao: undefined, 
};

// Usando o objeto
console.log(produtosDeCabelo.preco); 
console.log(produtosDeCabelo.nome); 
console.log(produtosDeCabelo.emEstoque); 
console.log(produtosDeCabelo.ingredientes); 
console.log(produtosDeCabelo.fabricante.nome); 
produtosDeCabelo.aplicarProduto(); 
console.log(produtosDeCabelo.desconto); 
console.log(produtosDeCabelo.avaliacao); 
