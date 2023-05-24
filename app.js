const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({
    extended :true
}))

app.use(cors())
const commentRoutes = require('./routes/commentroute')
app.use('/comment',commentRoutes)

app.get('/', (req, res) => {
    res.json({
        app: 'Commentapplication',
        path: '/',
        response: "ok"
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        error: true,
        message: "Internal Server Error",
        details: err
    })
});

app.listen(3000, ()=>{
    console.log('App is running on port on 3000')
})


const mongoose = require('mongoose')
let mongoUrl = 'mongodb+srv://syedmohammedhassan96:AixO9QjUO3QWnRpH@cluster0.6mtnwok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUrl,{
         useNewUrlParser :true,
         useUnifiedTopology :true
})
.then(
    console.log('Mongodb connected sucessfully')
).catch(
    // console.log('Connection error')
)