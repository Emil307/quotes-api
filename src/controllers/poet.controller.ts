import { Request, Response, NextFunction } from 'express';
const db = require('../db/index');

interface CustomResponse extends Response {
    customProperty?: string;
  }

class PoetController {
    async createPoet(req: Request, res: Response) {
        try {
            const {name, profile_quote} = req.body;
            const newPoet = await db.query(`INSERT INTO poet (name, profile_quote) values ($1, $2) RETURNING *`, [name, profile_quote]);
            res.json(newPoet.rows[0]);
        } catch (e: unknown) {
            console.log(e);
        }
    } 

    async getOnePoet(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const poet = await db.query(`SELECT * FROM poet WHERE id = $1`, [id]);
            res.json(poet.rows[0]);
        } catch (e: unknown) {
            console.log(e);
        } 
    }

    async getPoets(req: Request, res: Response) {
        try {
            const poetsList = await db.query(`SELECT * FROM poet`);
            res.json(poetsList.rows);
        } catch (e: unknown) {
            console.log(e);
        }
    }

    async updatePoet(req: Request, res: Response) {
        try {
            const {name, profile_quote} = req.body;
            const id = req.params.id;
            const poet = await db.query(`UPDATE poet SET name = $1, profile_quote = $2 WHERE id = $3 RETURNING *`, [name, profile_quote, id]);
            res.json(poet.rows[0]);
        } catch (e: unknown) {
            console.log(e);
        }
    }

    async deletePoet(req: Request, res: Response) {
        try {
            const id = req.params.id;
            await db.query(`DELETE FROM poet WHERE id = ${id}`);
            res.json('ok');
        } catch (e: unknown) {
            console.log(e);
        }
    }
}

module.exports = new PoetController();
