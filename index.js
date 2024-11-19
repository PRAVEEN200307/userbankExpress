import express from 'express';
import router from './routes/router.js';
import { connectDb } from './db/db.js';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

connectDb();

app.locals.port = 5555;

app.use('/', router)
app.get('/',(req,res)=>{
    res.json('welcome to routing')
})

app.listen(app.locals.port, () => {
    console.log(`server is runnig on http://localhost:${app.locals.port}`)
});