import express from 'express'
import { productsRouter } from './routes/products';
import bodyParser from 'body-parser'

const app = express();
const port = process.env.PORT || 8888;

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

app.use('/products', productsRouter)


app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
})