const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const Product = require("./models/Product");
const Cart = require("./models/Cart");
const Contact = require("./models/Contact");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI)
//mongoose.connect("mongodb://mongodb:27017/skincare")
//mongoose.connect("mongodb://test:test123@ac-0kbndfa-shard-00-00.btwiarh.mongodb.net:27017,ac-0kbndfa-shard-00-01.btwiarh.mongodb.net:27017,ac-0kbndfa-shard-00-02.btwiarh.mongodb.net:27017/skincare?ssl=true&replicaSet=atlas-lawisw-shard-0&authSource=admin&appName=Cluster0")
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log(err);
});

app.get("/", (req,res)=>{

    res.send("Backend Running");

});

app.post("/register", async(req,res)=>{

    try{

        const user = new User(req.body);

        await user.save();

        res.send("User Registered");

    }catch(err){

        res.send(err);

    }

});

app.post("/login", async(req,res)=>{

    const {email,password} = req.body;

    const user = await User.findOne({
        email,
        password
    });

    if(user){

        res.send("Login Success");

    }else{

        res.send("Invalid Credentials");

    }

});

app.post("/add-product", async(req,res)=>{

    try{

        console.log(req.body);

        const product = new Product(req.body);

        await product.save();

        res.send("Product Added");

    }catch(err){

        console.log(err);

        res.send(err);

    }

});

app.get("/products", async(req,res)=>{

   const products = await Product.find();

   res.json(products);

});

app.post("/cart", async(req,res)=>{

   try{

      console.log(req.body);

      const cartItem = new Cart(req.body);

      await cartItem.save();

      res.send("Product Added To Cart");

   }catch(err){

      console.log(err);

      res.send(err);

   }

});

app.get("/cart", async(req,res)=>{

   try{

      const cartItems = await Cart.find();

      res.json(cartItems);

   }catch(err){

      res.send(err);

   }

});

app.post("/contact", async(req,res)=>{

   try{

      const contact = new Contact(req.body);

      await contact.save();

      res.send("Message Saved");

   }catch(err){

      res.send(err);

   }

});

app.listen(5000, ()=>{
    console.log("Server Started");
});