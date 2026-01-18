import cloudinary from '../config/Cloud.js'
import Products from "../model/productModel.js";


export const addProduct =  async (req, res) => {
    try {


          if (!req.file ) {
      return res.status(400).json({ message: "Image is required" });
    }
      const product = await Products.create({
        name: req.body.name,
        price: req.body.price,
        image: {
          url: req.file.path,        // Cloudinary URL
          publicId: req.file.filename, 
        },
        category:req.body.category
      });

      res.status(201).json({
        message: "File uploaded successfully ✅",
        product,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
    
export const getProduct = async (req,res) => {

   try {
         const { category,search } = req.query;
         const filter = {};
         if(category ){
          filter.category= category;
         }
         if(search){
         filter.name = {
    $regex: search,
    $options: "i",
  };
         }
        const items = await Products.find(filter ? filter :{})
        res.status(200).json({
          success:true,
          items
        })

   } catch (error) {
      res.status(501).json({
        success:"failed",
        msg:error.message
      })
   }
}
export const getProductById = async (req,res) => {

   try {
        const {id} = req.params;
        const items = await Products.findById(id)
        res.status(200).json({
          success:true,
          items
        })

   } catch (error) {
      res.status(501).json({
        success:"failed",
        msg:error.message
      })
   }
}


  


