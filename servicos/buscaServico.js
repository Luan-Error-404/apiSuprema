import pool from './conexao.js';

export async function buscarContatoId (id) {
    const conexao = await pool.getConnection();
    const sql = "SELECT * FROM contato WHERE id = ?";
    const [resultado] = await conexao.execute(sql, [id]);
    conexao.release();
    return resultado;
}

export async function buscarTodos() {
    const conexao = await pool.getConnection();
    const sql = "SELECT * FROM contato";
    const [resultado] = await conexao.execute(sql);
    conexao.release();
    return resultado;
}

export async function buscarContatoEmail(email) {
    const conexao = await pool.getConnection();
    const emailComCuringa = `%${email}%`;
    const sql = "SELECT * FROM contato WHERE email LIKE ?";
    const [contatos] = await conexao.execute(sql, [emailComCuringa]);
    conexao.release();
    return contatos;
}

export async function buscarContatoNome(nome) {
    const conexao = await pool.getConnection();
    const nomeComCuringa = `%${nome}%`;
    const sql = "SELECT * FROM contato WHERE nome LIKE ?";
    const [contatos] = await conexao.execute(sql, [nomeComCuringa]);
    conexao.release();
    return contatos;
}