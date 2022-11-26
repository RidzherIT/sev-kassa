const pool = require('../database/config');
class FeedbackController {
    async create(req, res) {
        const body = req.body;
        let date = new Date();
        date = date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear();
        const data = await pool.query('insert into feedback(name, email, description, star, date) values($1,$2,$3,$4,$5) returning *', [body.name, body.email, body.description, body.star, date]);
        res.json({ message: data.rows[0] })
    }
    async getRandom(req, res) {
        const data = await pool.query('select * from feedback order by random() limit 6');
        res.json(data.rows);
    }
}

module.exports = new FeedbackController();