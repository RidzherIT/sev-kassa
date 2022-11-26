const pool = require('../database/config');
class OrderController {
    async create(req, res) {
        const { fio, phone, email, item, sale, value } = req.body;
        const data = await pool.query('insert into orders(fio, phone, email, item, sale, value, paid, success) values($1, $2, $3, $4, $5, $6, $7, $8) returning *', [fio, phone, email, item, sale, value, false, false]);
        res.json(data.rows[0]);
    }
    async updatePaid(req, res) {
        const { id } = req.body;
        const data = await pool.query('update orders set paid = $1 where id = $2 returning *', [true, id]);
        res.json(data.rows[0]);
    }
    async updateSuccess(req, res) {
        const { id } = req.body;
        const data = await pool.query('update orders set success = $1 where id = $2 returning *', [true, id]);
        res.json(data.rows[0]);
    }
    async delete(req, res) {
        const data = await pool.query('delete from orders where success = $1 returning *', [true]);
        res.json(data.rows);
    }
    async getAll(req, res) {
        const data = await pool.query('select * from orders');
        res.json(data.rows);
    }
}
module.exports = new OrderController();