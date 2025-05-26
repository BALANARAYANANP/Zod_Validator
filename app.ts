import express from 'express'
import { ValidateUser } from './middlewares/validateUser'

const app = express()
app.use(express.json())


app.post("/user", ValidateUser, (req, res) => {
    res.status(200).json({
      message: "User data is valid",
      user: req.body,
    });
  });
  
  app.listen(3000, () => console.log("Server running on http://localhost:3000"));