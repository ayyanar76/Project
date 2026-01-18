import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      url: {
        type: String,
        required: true,
      },
      publicId: {
        type: String,
        required: true,
      },
    },

    description: String,
    category: {
      type:String,
      required:true
    },
    stock: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("Product", productSchema);
export default Products;
