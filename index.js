const express = require('express');
const ejs = require('ejs');
const {
    default: mongoose
} = require('mongoose');
const TodoRoute = require('./controller/routes/toRoutes')


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


app.use(TodoRoute)

app.use('/*', (req, res) => {
    res.send('<h1>Page NOt found</h1>')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("server running on port 5000")
})