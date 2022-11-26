import { Request, Response } from 'express'
import { itemsModel } from '../models/ItemsModel'

class itemsController{

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
        res.send("aqui o seu " + price + name) //retorna o status e o json com a tabela
    }

    async resultItems(req: Request, res: Response) {
        try{
            const price = await itemsModel.findAll({
                attributes: ['price']
            })
            res.send(price)
        } catch (error) {

        }
    }

    async updateItems(req: Request, res: Response) {
        try {

        } catch (error) {
            
        }
    }

    async deleteItem(req: Request, res: Response) {
        try { 
            await itemsModel.destroy({

            })
        } catch (error) {
            console.log()
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            await itemsModel.destroy({})
        } catch (error) {
            console.log("saa")
        }
    }

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
}

export default new itemsController()