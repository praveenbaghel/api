import express from "express";
import movies from "./movies.json" assert { type: "json" };
import cors from "cors";

const app = express();
app.use(express.json());

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
  
})

const port = process.env.PORT || 5000;

app.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

app.listen(port, () => console.log(`server is running at ${port}`));
