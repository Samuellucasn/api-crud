import { Request, Response } from 'express'
import { itemsModel } from '../models/ItemsModel'

class itemsController{
    async listItems(req: Request, res: Response) {
        try { 
            const list = await itemsModel.findAll({
                attributes: ['price', 'name']
            })
            return res.status(200).send(list)
        } catch (error: any) {
            const erroMessage = error.parent.sqlMessage
            res.status(401).send("ERRO 404 " + erroMessage)
        }
    }
    
    async getItem(req: Request, res: Response) {
        const {id} = req.params

        try{
            const item = await itemsModel.findAll({
                attributes: ['id', 'price', 'name'],
                where : {
                    id: id
                }
            })
            return res.status(200).send(item)
        } catch (error: any) {
            const erroMessage = error.parent.sqlMessage
            res.status(401).send("ERRO 404 " + erroMessage)
        }
    }
    
    async insertItem(req: Request, res: Response) {
        const {price, name}= req.body 
        try { await itemsModel.create(
            {
                price,
                name
            })
            return res.status(201)
        } catch (error: any) {
            const erroMessage = error.parent.sqlMessage
            res.status(400).send("ERRO 400 " + erroMessage)
        }
    }
    
    async deleteItem(req: Request, res: Response) {
        const {id} = req.params

        try {
            await itemsModel.destroy({
                where: {
                    id: id
                }
            })
            return res.status(204)
        } catch (error: any) {
            const erroMessage = error.parent.sqlMessage
            res.status(404).send("ERRO 404 " + erroMessage)
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            await itemsModel.destroy({
                truncate: true 
            })
            return res.status(204)
        } catch (error: any) {
            const erroMessage = error.parent.sqlMessage
            res.status(404).send("ERRO 404 " + erroMessage)
        }
    }
    
    async updateItems(req: Request, res: Response) {
        const {id} = req.params
        
        try {
            await itemsModel.update(req.body, {
                where : { id : id }
            })
            return res.status(204)
        } catch (error: any) {
            const erroMessage = error.parent.sqlMessage
            res.status(404).send("ERRO 404 " + erroMessage)
        }
    }
}

export default new itemsController()