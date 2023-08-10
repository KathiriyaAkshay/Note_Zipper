const express = require("express");
const dotenv  = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const noteRoutes = require('./routes/noteRoutes');
const app = express();
dotenv.config();
connectDB();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/",(req, res)=>{
    res.send("API is running..");
});

// app.get("/api/notes", (req, res)=>{
//     res.json(notes);
// });

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);
// app.get("/api/notes/:id",(req, res)=>{
//     const note = notes.find((n)=>n._id===req.params.id);
//     res.send(note);
// });

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})