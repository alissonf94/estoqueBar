const Bebida = (id, descricao, quantidade, preco) => ({
    id: Number(id),
    descrição: String(descricao), 
    quantidade: Number(quantidade),
    preco: Number(preco),
    ativo: true
});