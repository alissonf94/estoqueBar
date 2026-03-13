
    const UsuarioManager = {
    login (username, password) {
            const usuarios = DB.buscar('usuarios');
            const usuario = usuarios.find(u => u.username === username && u.password === password);
    
            
            return usuario === null ? true : false;
        },
        registrarUsuario(nome, username, password) {
            const usuarios = DB.buscar('usuarios');
            const proximoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;   
            
            const novoUsuario = Usuario(proximoId, nome, username, password);
            
            usuarios.push(novoUsuario);
            DB.salvar('usuarios', usuarios);
            
            return novoUsuario;
        }
    }
   