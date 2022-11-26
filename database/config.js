const Pool = require('pg').Pool;
const pool = new Pool({
    connectionString: 'postgres://database_name_sev_kassa:Rci9uKVu6Y88a14jhvTIcsNKR6JkTcJi@dpg-cdts1gaen0hlde4apnsg-a.frankfurt-postgres.render.com/database_name_sev_kassa',
    
    ssl: {
        rejectUnauthorized: false
    }
})
module.exports = pool;