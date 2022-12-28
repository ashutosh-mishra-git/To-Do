const express = require('express');
const ejs = require('ejs');
const {
    default: mongoose
} = require('mongoose');
const TodoRoute = require('../To-Do/controller/routes/toRoutes')


const app = express();

// db connection
const URL = 'mongodb+srv://ashum610:moIE2ONjc49llTTL@cluster0.yqinbrz.mongodb.net/?retryWrites=true&w=majority'
// mongoose.connect(URL).then(()=>{
//     console.log("connection s")
// })
// .catch((e)=>{
//     console.log("Err")
// })



const db = async (URL) => {
    try {
        const dbStatus = await mongoose.connect(URL)
        if (dbStatus) console.log("connection s")
    } catch (e) {

        console.log(e.message)
    }
}

db(URL);


app.use(express.json())


app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}));

app.use('/public', express.static('public'));


app.use('/Todo', TodoRoute)


app.listen(5000, () => {
    console.log("server running on port 5000")
})