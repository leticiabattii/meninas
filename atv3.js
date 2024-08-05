const produtosDeCabelo = {
    // Um número (number)
    preco: 29.99, // Preço de um produto de cabelo em reais

    // Uma string (string)
    nome: "Shampoo Anticaspa", // Nome do produto de cabelo

    // Um booleano (boolean)
    emEstoque: true, // Se o produto está em estoque ou não

    // Um array (array)
    ingredientes: ["Água", "Lauril Sulfato de Sódio", "Extrato de Camomila", "Glicerina"], // Ingredientes do produto

    // Um objeto (object)
    fabricante: {
        nome: "Beleza Pura", // Nome do fabricante
        endereco: "Rua dos Beleza, 123, São Paulo, SP", // Endereço do fabricante
        telefone: "+55 11 98765-4321" // Telefone do fabricante
    },

    // Uma função (function)
    aplicarProduto: function() {
        console.log(`Aplicar ${this.nome} no cabelo. Massageie e enxágue bem.`);
    },

    // null
    desconto: null, // Desconto pode ser definido no futuro

    // undefined
    avaliacao: undefined, // Avaliação ainda não foi definida

    // Função toString() usando o this para formatar uma descrição do produto
    toString: function() {
        // Gerar a lista de ingredientes como uma string
        const ingredientesStr = this.ingredientes.join(", ");

        // Gerar a descrição do fabricante
        const fabricanteStr = `Fabricante: ${this.fabricante.nome}, Endereço: ${this.fabricante.endereco}, Telefone: ${this.fabricante.telefone}`;

        // Desconto
        const descontoStr = this.desconto ? `Desconto disponível: R$${this.desconto}` : "Sem desconto disponível";

        // Avaliação
        const avaliacaoStr = this.avaliacao ? `Avaliação: ${this.avaliacao}` : "Avaliação ainda não definida";

        // Retornar a descrição completa
        return `Produto: ${this.nome}\nPreço: R$${this.preco}\nIngredientes: ${ingredientesStr}\n${fabricanteStr}\n${descontoStr}\n${avaliacaoStr}\nEm estoque: ${this.emEstoque ? "Sim" : "Não"}`;
    }
};

// Usando a função toString() para obter uma descrição do produto
console.log(produtosDeCabelo.toString());
