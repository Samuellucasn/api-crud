import { Request, Response } from 'express'
import { itemsModel } from '../models/ItemsModel'

class itemsController{
    async listItems(req: Request, res: Response) {
        try { 
            const list = await itemsModel.findAll({
                attributes: ['price', 'name']
            })
            res.send(list)
        } catch (error) {
            console.log(error)
        }
    }
    
    async getItem(req: Request, res: Response) {
        const {id} = req.params

        try{
            const item = await itemsModel.findAll({
                attributes: [id]
            })
            res.send(item)
        } catch (error) {
            console.log(error)
        }
    }
    
    async insertItem(req: Request, res: Response) {
        const {price, name}= req.body // pega os valores
        try { await itemsModel.create( //create do sequelize cria a tabela de valores
            {
                price,
                name
            }
        )} catch (error) {
            console.log(error)
        }
        res.status(200).send("aqui o seu " + price + name)
    }
    
    async deleteItem(req: Request, res: Response) {
        const {id} = req.params

        try {
            await itemsModel.destroy({
                where: {
                    id: id
                }
            })
            res.send(req.params)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            await itemsModel.destroy({
                truncate: true // to destroy everything
            })
            res.send("ok")
        } catch (error) {
            console.log(error)
        }
    }
    
    async updateItems(req: Request, res: Response) {
        const {id} = req.params
        try {
            await itemsModel.update(req.body, {
                where : { id : id }
            })
            res.send("foi")
        } catch (error) {
            console.log(error)
        }
    }
}

export default new itemsController()