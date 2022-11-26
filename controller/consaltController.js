const pool = require('../database/config');
class ConsaltController {
    async create(req, res) {
        const { name, phone, title } = req.body;
        const data = await pool.query('insert into consalt(name, phone, title, bool) values($1, $2, $3, $4) returning *', [name, phone, title, false])
        res.json({ message: data.rows[0] });
    }
    async getAll(req, res) {
        const data = await pool.query('select * from consalt');
        res.json({ message: data.rows });
    }
    async update(req, res) {
        const { id } = req.body;
        const data = await pool.query('update consalt set bool = $1 where id = $2 returning *', [true, id])
        res.json({ message: data.rows[0] });
    }
    async delete(req, res) {
        const data = await pool.query('delete from consalt where bool = $1 returning *', [true]);
        res.json(data.rows);
    }
}

module.exports = new ConsaltController();