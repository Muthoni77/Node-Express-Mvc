import express from "express";
import cors from 'cors'
// routes
// import user_router from "./routes/api/user.js";
// import product_router from "./routes/api/product.js";
// const userRoutes = require('./routes/user');
// import userRoutes from "./routes/api/user.js";
import studentRoutes from "./routers/api/student.js"
import connectDB from "./config/db.js";


const app = express();

// Connect Database
await connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));

// use Routes
app.use("/api/student", studentRoutes);
// app.use("/api/products", product_router);

const port = process.env.PORT || 7005;

app.listen(port, () => console.log(`Server running on port ${port}`));