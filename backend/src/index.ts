import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import AuthRoutes from './route/auth.route.js'
import AdminRoutes from './route/admin.route.js'
import ShortlinkRoutes from './route/shortlink.route.js'
import masterRoutes from './route/master.route.js'
import profileRoutes from './route/profile.route.js'
import ScheduleRoutes from './route/schedule.route.js'
import ScoreRoutes from './route/score.route.js'

//Execute the express module
const PORT = process.env.PORT || 5000
const app = express()

//Exceute the confic from envirovement variable
dotenv.config();
// MiddleWare
app.use(express.json({limit:`500kb`}))
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}));
app.use(cookieParser())

// Route Link

app.use("/api/auth", AuthRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/api/shortlink", ShortlinkRoutes);
app.use("/api/master", masterRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/schedule", ScheduleRoutes);
app.use("/api/score", ScoreRoutes);


app.use('/', (req,res)=>{
    res.status(200).json({message :"Hallo Bang"})
})

app.listen(PORT, ()=>{
    console.log("Server running on http://localhost:5000 :)")
})