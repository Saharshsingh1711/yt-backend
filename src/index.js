import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'


dotenv.config({
    path: "./.env"
})

connectDB()
// .then(() => {
//     app.on("error", (error) => {
//         console.log("Express Error: ", error)
//         throw error
//     })
    
//     const port = process.env.PORT || 8000;
//     app.listen(port, () => {
//         console.log(`App is listening on port ${port}`);
//     })
// })
// .catch((err) => {
//     console.error("MongoDB connection failed: ", err)
// })