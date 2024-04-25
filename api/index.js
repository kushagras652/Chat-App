const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const crypto=require("crypto")

const app=express();
const port=3000
const cors=require("cors")

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const jwt=require("jsonwebtoken")
const User=require("./models/User")

mongoose.connect("mongodb+srv://kushagra:kushagra@cluster0.pgp2xp8.mongodb.net/").then(()=>{
    console.log("Connected to mongoDB")
}).catch(error=>{
    console.log("Error connecting tot mongoDB")
})

app.listen(port,()=>{
    console.log("Server is running on 3000")
})

//endpoints for registering the users

app.post("/Register",async(req,res)=>{
    const {name,email,password}=req.body;

    try{
        const existingUser=await User.findOne({email});
        if(existingUser)
        return res.status(400).json({message:"User Already exists"})

        const newUser=new User({
            name,
            email,
            password
        })

        const response = await newUser.save();
        res.json(response);
    }catch(error){
        console.log("Error registering the user")
        res.status(500).json({message:'Registration Failed'})
    }
})


const generateSecretKey=()=>{
    const secretKey=crypto.randomBytes(20).toString("hex");

    return secretKey;

}

const secretKey=generateSecretKey()

//endpoints for login

app.post("/Login",async(req,res)=>{
    try{
        const {email,password}=req.body;

        const user=await User.findOne({email});

        if(!user){
            return res.status(401).json({message:"Invalid Email or password"})
        }

        if(user.password!=password){
            return res.status(401).json({message:"Invalid Password"})
        }
    
        const token=jwt.sign({userId:user._id},secretKey);
    
        res.status(200).json({token})
    }catch(error){
        res.status(500).json({message:"Login Failed"})
    }
})