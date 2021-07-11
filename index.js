import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoutes from './routes/posts.js'

const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postsRoutes);

const connectionUrl = "mongodb+srv://powriotask:keepcalm@cluster0.k6pbm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.get('/', (req, res) => {
    res.send('Hello Api'
    )
})
const PORT = process.env.PORT || 5000;

mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server port ${PORT}`) ))
    .catch( error => console.log(error) );

mongoose.set('useFindAndModify', false);