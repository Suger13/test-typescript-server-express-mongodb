import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Route from './routes/userRoute'
import bodyParser from 'body-parser'
import userRoutes from './routes/userRoute'

dotenv.config()

const app: Express = express()
app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT
app.get('/', (req: Request, res: Response) => {
    return res.json({
        msg : "hello world"
    })
})

app.use('/users', userRoutes)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})