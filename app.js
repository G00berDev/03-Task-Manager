const ecpress = require(express)
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
PORT = 3000

//local middleware
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'))
app.use(express.json)

app.use('./api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const serverInit = async () =>{
    try{
        await connectDB();
        console.log('connected to mongoDB')
        app.listen(port, () => console.log('http://localhost${port}'))

    }
}