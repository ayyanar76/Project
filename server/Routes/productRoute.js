import express from 'express'
import { addProduct, getProduct, getProductById } from '../controller/productController.js'
import upload from '../middleware/upload.js'


const productrouter = express.Router()
productrouter.route('/products').get(getProduct)
productrouter.route('/product/:id').get(getProductById)
productrouter.route('/products/upload').post( upload.single("image"),addProduct)


 
export default productrouter          