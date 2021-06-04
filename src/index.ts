import express from 'express'
import {json} from 'body-parser'
import router from './routes'

const app = express()

app.use(json())
app.use(express.urlencoded({extended: false}))
app.use(router)


app.listen(3000, ()=> {
    console.log('server is running on port 3000')
})