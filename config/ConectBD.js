const mysql = require('mysql');

const pool = mysql.createPool({
    host: '192.168.100.44',
    port: '3306',
    database: 'login',
    user: 'root',
    password: '18304591520t'
});

function connectToDatabase() {
    pool.getConnection((err) => {
        if (err) {
            console.log('Error al conectarse a la base de datos:', err.message);
            setTimeout(connectToDatabase, 3000);
        } else {
            console.log('Conexión exitosa a la base de datos!');
        }
    });
}

connectToDatabase();

module.exports = pool;