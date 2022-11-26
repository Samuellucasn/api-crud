import  Express from "express";
import ItemsController from "../controller/ItemsController";

export const router = Express.Router()

router.get('/', ItemsController.listItems)
router.get('/items', ItemsController.resultItems)
router.post('/', ItemsController.insertItem)
router.delete('/items/:Id', ItemsController.deleteItem)
router.delete('/items', ItemsController.deleteAll)
router.put('/items', ItemsController.updateItems)