const registro = (id, data, produto, quantidade, valorUnitario, totalPago, idUsuario) => ({
    idTransacao: id,
    data: data,
    produto: produto,
    qtd: quantidade,
    valorUnitario: valorUnitario,
    totalPago: totalPago,
    idUsuario: idUsuario
});
