import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    return res.json({
        msg : "hello world"
    })
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})