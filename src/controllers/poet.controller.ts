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
            res.send(`it's work`);
        } catch (e: unknown) {
            console.log(e);
        } 
    }

    async getPoets(req: Request, res: Response) {
        try {

        } catch (e: unknown) {

        }
    }

    async updatePoet(req: Request, res: Response) {
        try {


        } catch (e: unknown) {
            console.log(e);
        }
    }

    async deletePoet(req: Request, res: Response) {
        try {

        } catch (e: unknown) {
            console.log(e);
        }
    }
}

module.exports = new PoetController();
