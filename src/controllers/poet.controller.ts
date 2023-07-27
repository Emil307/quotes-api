import { Request, Response, NextFunction } from 'express';
const db = require('../db/index');

interface CustomResponse extends Response {
    customProperty?: string;
  }

class PoetController {
    async createPoet(req: Request, res: Response) {
        try {

        } catch (e: unknown) {
            console.log(e);
        }
    } 

    async getOnePoet(req: Request, res: Response) {
        try {

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
