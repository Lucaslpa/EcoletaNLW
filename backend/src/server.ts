import cors from 'cors'
import { errors } from 'celebrate'
import express from 'express'; 
import routes from './routes'
 import path from 'path'


const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)



app.use('/uploads' , express.static( path.resolve(__dirname , 'uploads'  )   ))

app.use(errors())

app.listen(1000)
