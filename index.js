import express from 'express';
import { buscarContatoId, buscarTodos } from './servicos/buscaServico.js';
import { deletaContato } from './servicos/deletaServico.js';
const app = new express();
const porta = 3000;

app.get('/contatos', async (req, res) => {
    const contatos = await buscarTodos();
    res.status(200).json(contatos);
})

app.get('/contatos/:id', async (req,res) => {
    const id = req.params.id;

    if(!isNaN(id)) {
        const contato = await buscarContatoId(id);
        if(contato.length > 0) {
            res.status(200).json(contato[0]);
        } else {
            res.status(404).json({'mensagem':'Registro não encontrado...'});
        }
    } else {
        res.status(400).json({'mensagem':'Requisição Inválida...'});
    }
})

app.delete('/contatos/:id', async (req, res) => {
    const id = req.params.id;
    let resultado;
    if (id) {
        resultado = await deletaContato();
    } else {
        res.status(400).json({'mensagem':'Requisição inválida...'});
    }

    if(resultado.affectedRows > 0){
        res.status(200).json({'mensagem':'Registro exterminado com êxito...'});
    } else {
        res.status(404).json({'mensagem':'Não foi possível achar esse registro...'});
    }
})

app.listen(porta, () => {
    let data = new Date();
    console.log(`Servidor iniciado...\nPorta: ${porta}\nData: ${data}\n`);
})