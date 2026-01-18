import AppError from "../middleware/Handleerror.js"
import bcrypt from 'bcrypt'
import User from '../model/userModel.js'
import Cart from "../model/CartModel.js";
import genrateToken from '../middleware/tokengenrator.js'
import Products from "../model/productModel.js";


export const createUser = async(req,res,next)=>{
    try {
       const {name,email,password,role} = req.body;
       if(!name || !email || !password ){
        next (new AppError(400,"Bad Request"))
       }    
       const hashpassword = await bcrypt.hash(password,10)
       const customer = await User.create({
        name,email,password:hashpassword
       })
       const cart = await Cart.create({
        user:customer._id,
        items:[]
       })
         await customer.save();
  res.status(200).json({
    success:true,
    customer
  })
    } catch (error) {
       next (new AppError(501,error.message))  
    }
}
 
export const login = async(req,res,next)=>{
    try {
        const {email , password} = req.body;
        if(!email || !password){
            next (new AppError(400,"Bad Request"))  
        }
        const customer = await User.findOne({email})
        if(!customer){
             next (new AppError(404,"User Not Found")) 
        }
        const isMatch = await bcrypt.compare(password,customer.password)
        if(!isMatch){
              next (new AppError(401,"Invalied Credentials")) 
        }
        const token = genrateToken(customer._id)

        console.log(token);
        
        if(!token){
            next(new AppError(400,"Token Missed"))
        }
       res.cookie("token",token,{
        maxAge:7*24*60*60*1000,
        httpOnly:true,
        secure:process.env.NODE_ENV ==="production",
        sameSite:process.env.NODE_ENV ==="production" ? "none":"strict"

       }).status(201).json({
        success:true,
        msg:"Loggin Success"
       })
    } catch (error) {
        next (new AppError(501,error.message))   
    }
}

export const getUserdetails =async (req,res,next) => {
    try {
       
        
          const user = req.user

         const customer = await User.findById(user._id)
         const cart = await Cart.findOne({user:user._id}).populate("items.product");

         if(!customer){
            next(new AppError(404,"User Not Found In Token Please Login again"))
         }
         res.status(200).json({
            success:true,
            customer,
            cart
         })
    } catch (error) {
          next (new AppError(501,error.message))   
    }
}

export const addToCart = async(req,res,next)=>{
     try {
        const {productId} = req.params;
       
        
        const user = req.user;
        const product = await Products.findById(productId)
     
       const cart = await Cart.findOne({user:user._id})
       if(!cart){
         cart = await Cart.create({
        user: user._id,
        items: [],
        totalPrice: 0,
      });
       }

        const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({
        product: productId,
        quantity: 1,
      });
    }

    // 5️⃣ Recalculate total price
    cart.totalPrice = cart.items.reduce((total, item) => {
      return total + item.quantity * product.price;
    }, 0);

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart,
    });
     

     } catch (error) {
         next (new AppError(501,error.message)) 
     }
}

export const removeFromCart = async(req,res,next)=>{
  try {
     const {productId} = req.params;
      const user = req.user;
      const product = await Products.findById(productId)

     const cart = await Cart.findOne({user:user._id})
      if (!cart) {
      return next(new AppError("Cart not found", 404));
    }
     const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
    if(itemIndex === -1){
       return next(new AppError("Product not found in cart", 404));
    }
    cart.items.splice(itemIndex,1);
      let total = 0;

    for (const item of cart.items) {
      const product = await Products.findById(item.product);
      if (product) {
        total += product.price * item.quantity;
      }
    }

    cart.totalPrice = total;
    await cart.save();

    res.status(200).json({
      success: true,
      message: "Product removed from cart",
      cart,
    });

  } catch (error) {
    next(new AppError(501,error.message))
  }
}