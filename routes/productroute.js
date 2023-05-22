const express = require('express')
const router = express.Router()
const productcontroller = require('../controllers/productcontroller')

const bodyParser = require('body-parser')

var jsonparser = bodyParser.json()

var urlencodedparser = bodyParser.urlencoded({extended:false})

router.post('/addproduct',jsonparser,productcontroller.addproducts)
router.get('/getalldata',jsonparser, productcontroller.getproducts)

module.exports = router
