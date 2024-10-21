import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js"
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();
const PORT =  3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin: true,  // Allow all origins
    credentials: true,  // Allow credentials
      // Specify allowed methods
     // Specify allowed headers
}));




app.get("/", (req, res)=>{
    res.send( "hello")
   });

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

connectDB();

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})