import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'luan',
    password: 'senha',
    database: 'agendaSuprema'
})

export default pool;