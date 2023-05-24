import { Router, Request, Response } from 'express';
export const productsRouter = Router();

const products = [
    {id: 1, title: 'orange'},
    {id: 2, title: 'lemon'}
]

productsRouter.get('/', (req: Request, res: Response) => {

    try {
        res.send(products)
    } catch (err) {
        res.sendStatus(404)
    }

})

productsRouter.post('/', (req: Request, res: Response) => {
    try {
        const newProduct = {
            id: +(new Date()),
            title: req.body.title
        }
        products.push(newProduct)
        res.sendStatus(200).send(newProduct)
    } catch {
        res.sendStatus(400).send('Ошибка')
    }
})