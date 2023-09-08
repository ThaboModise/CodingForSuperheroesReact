const express = require("express");
const app = express();
const dotenv = require("dotenv"); 
const mongoose = require("mongoose");
const multer = require("multer");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const path = require("path");


dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

/*mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("connected to mongodb!");}).catch((err)=>{
    console.log("error:", err);
})*/

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "images");
    },
    filename:(req,file,cb)=>{
        cb(null, req.body.name);
    }
});

const upload = multer({storage: storage});

app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
})

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoryRoute);

app.use(express.static(path.join(__dirname,"./client/build")));
app.get("*",function(_, res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"), function(err){
        res.status(500).send(err);
    })
});

const PORT = process.env.PORT || 3131;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running!");
    })
})
