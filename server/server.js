//environment variable middleware
require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
const PORT=3000;
const authRoute=require("./router/auth-router");
const contactRoute=require("./router/contact-router");
const courseRoute=require("./router/course-router");
const adminRoute=require("./router/admin-router")
const connectDB=require("./utils/db");
const errorMiddleware=require("./middlewares/error-middleware");

//allow cors
const corsOptions={
    origin: "http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

//Middleware 
app.use(express.json());

//api calls mounting
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", courseRoute);

// Admin routes;
app.use("/api/admin", adminRoute);

//error Middleware
app.use(errorMiddleware);

//connection
connectDB().then(()=>{
    app.listen(PORT,(req,res)=>{
        console.log(`listening on PORT ${PORT}`)
    });

});
