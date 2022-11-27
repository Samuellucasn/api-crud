import  Express from "express";
import ItemsController from "../controller/ItemsController";

export const router = Express.Router()

router.get('/items', ItemsController.listItems)
router.get('/items/:id', ItemsController.getItem)
router.post('/items', ItemsController.insertItem)
router.delete('/items/:id', ItemsController.deleteItem)
router.delete('/items', ItemsController.deleteAll)
router.put('/items/:id', ItemsController.updateItems)