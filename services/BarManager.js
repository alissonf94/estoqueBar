const BarManager = {

    adicionarBebida(descricao, quantidade, preco) {
        const estoque = DB.buscar('estoque_bar');
        const proximoId = estoque.length > 0 ? estoque[estoque.length - 1].id + 1 : 1;
        
        const novoItem = Bebida(proximoId, descricao, quantidade, preco);
        
        estoque.push(novoItem);
        
        DB.salvar('estoque_bar', estoque);
        console.log(`Sucesso: ${descricao} adicionado ao bar.`);
    },

  
    buscarEstoque() {
        return DB.buscar('estoque_bar').filter(item => item.ativo);
    },

  
    atualizarPreco(id, novoPreco) {
        let estoque = DB.buscar('estoque_bar');
        const index = estoque.findIndex(item => item.id === id);
       
        if (index !== -1) {
            estoque[index].preco = novoPreco;
            DB.salvar('estoque_bar', estoque);

            return;
        }
        
        throw new Error(`Bebida com ID ${id} não encontrada.`);
    },

    

    removerBebidaPorId(id) {
        let estoque = DB.buscar('estoque_bar');
        const index = estoque.findIndex(item => item.id === id);
      
        if (index !== -1) {
            estoque[index].ativo = false; 
            DB.salvar('estoque_bar', estoque);
           
            return;
        }

        throw new Error(`Bebida com ID ${id} não encontrada.`);
    },

   atualizarStatusBebida (id)  {
        let estoque = DB.buscar('estoque_bar');
        
        let bebida = estoque.find(item => item.id === id);
        
        if(bebida.quantidade === 0){
            
            bebida.ativo = false;
            
            DB.salvar('estoque_bar', estoque);
        }
    },

    venderBebida(idItem, qtdDesejada, idUsuario) {
        let estoque = DB.buscar('estoque_bar');
        let historico = DB.buscar('historico_vendas');
        
        const proximoId = historico.length > 0 ? historico[historico.length - 1].idTransacao + 1 : 1;

        const item = estoque.find(i => i.id === idItem && i.ativo);

        if (!item) throw new Error("Bebida não encontrada.");
        if (item.quantidade < qtdDesejada) throw new Error("Estoque insuficiente.");

        
        item.quantidade -= qtdDesejada;

        const registro = registroVenda( proximoId, new Date().toLocaleString(), item.descrição, qtdDesejada, item.preco, (item.preco * qtdDesejada), idUsuario);
    
        historico.push(registro);
        
        DB.salvar('estoque_bar', estoque);
        DB.salvar('historico_vendas', historico);
        
        return registro;
    },
 
    buscarHistoricoDeComprasPorUsuario(idUsuario) {
        const historico = DB.buscar('historico_vendas');
        return historico.filter(registro => registro.idUsuario === idUsuario);
    },

    buscarBebidaPorId(id) {
        const estoque = DB.buscar('estoque_bar');
        let bebida = estoque.find(item => item.id === id && item.ativo);
       
        if(bebida !== null){
            return bebida;
        }
        
        throw new Error(`Bebida com ID ${id} não encontrada.`);
    }
};