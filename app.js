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





app.listen(3000, ()=>{
    console.log('App is running on port on 3000')
})


const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/',{
         useNewUrlParser :true,
         useUnifiedTopology :true
})
.then(
    console.log('Mongodb connected sucessfully')
).catch(
    // console.log('Connection error')
)