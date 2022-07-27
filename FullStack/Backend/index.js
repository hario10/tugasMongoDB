import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './Routes/routes.js'

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/tugas_cruds', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database terhubung....'));

app.use(express.json());
app.use(cors())
app.use(route);


app.listen(port, () => console.log(`Server berjalan : ${port}`));