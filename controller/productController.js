const pool = require('../database/config');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
class ProductController {
    async create(req, res) {
        const body = req.body;
        const { img } = req.files;
        const imgName = uuid.v4() + '.png';
        img.mv(path.resolve(__dirname, '..', 'static', imgName));
        const data = await pool.query('insert into product(img, title, sale, href, description, time) values ($1, $2, $3, $4, $5, $6) returning *', [imgName, body.title, +body.sale, body.href, body.description, +body.time]);
        res.json({ message: data.rows[0] });
    }
    async delete(req, res) {
        const { id } = req.body;
        const elem = await pool.query('select * from product where id = $1', [id]);
        if (!elem.rows[0]) return res.json({ message: 'Данного продукта не существует' })
        let data = await pool.query('delete from product where id = $1 returning *', [id]);
        data = data.rows[0];
        const pathFile = data.img;
        fs.unlink(path.resolve(__dirname, '..', 'static', pathFile), err => {
            console.log(err)
        });
        res.json(data);
    }
    async getOne(req, res) {
        const { id } = req.body;
        const data = await pool.query('select * from product where id = $1', [id]);
        res.json({ message: data.rows[0] });
    }
    async getAll(req, res) {
        let { page } = req.body;
        const num = 8;
        console.log(page);
        let valueProduct = 8;
        if (page > 0) {
            valueProduct = 4;
            page = num + valueProduct * page - (valueProduct - 1);
        }
        const data = await pool.query(`select * from product limit ${valueProduct} offset ${page}`);
        res.json(data.rows);
    }
    async getForAdmin(req, res) {
        const data = await pool.query('select * from product');
        res.json(data.rows);
    }
}
module.exports = new ProductController();