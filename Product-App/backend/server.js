const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// MongoDB connection
mongoose.connect("mongodb+srv://AmazingJosh:_AmazingJosh@productapp.d9uky.mongodb.net/?retryWrites=true&w=majority&appName=productapp"
);

const productSchema = new mongoose.Schema({
  name: String,
  title: String,
  image: String
});

//product model

const Product = mongoose.model("Product", productSchema);

const UserSchema = new mongoose.Schema({
username:String,   
email:String,
password:String

  
});

const User = mongoose.model("user", productSchema);


// Routes
//product route
app.post("/api/products", upload.single("image"), async (req, res) => {
  const { name, title } = req.body;
  const image = req.file.path;

  const newProduct = new Product({
    name,
    title,
    image
  });

  try {
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
});


//userRoute




app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
