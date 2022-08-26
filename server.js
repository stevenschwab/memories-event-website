const express = require('express') // Using express to help build out API
const app = express()
const mongoose = require('mongoose') // Using mongoose to help me with my models and talking to my DB
const passport = require('passport') // Using passport to talk with Microsoft's identity platform
const session = require('express-session') // To stay logged in
const MongoStore = require('connect-mongo') // Passing session to db
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database') // db file inside of config folder which enables connection to mongo DB
const mainRoutes = require('./routes/main')
const eventsRoutes = require('./routes/events') // look at requests and determine which controller to use
const activitiesRoutes = require('./routes/activities')
const journalRoutes = require('./routes/journal')
const mediaRoutes = require('./routes/media')
const qAndARoutes = require('./routes/q&a')
const scheduleRoutes = require('./routes/schedule')
const travelAndLodgingRoutes = require('./routes/travel&lodging')
const aboutUsRoutes = require('./routes/aboutUs')
const createYourOwnEventsRoutes = require('./routes/createYourOwnEvent')
const helpAndSupportRoutes = require('./routes/help&support')
const inspirationRoutes = require('./routes/inspiration')

require('dotenv').config({path: './config/.env'}) // get env file enabling us to use env file in application
// Passport config which includes a function
require('./config/passport')(passport)
// call to connect to the db
connectDB()

app.set('view engine', 'ejs') // pass data into to spit out HTML (embedded js template)
app.use(express.static('public')) // enables static files to serve on express behalf
app.use(express.urlencoded({ extended: true })) // look at data coming along with each of our requests
app.use(express.json()) // look at data coming along with each of our requests
app.use(logger('dev'))

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
// Sessions, keeping users logged in
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: oneDay },
        store: MongoStore.create(
            { 
                mongoUrl: process.env.DB_STRING  //(URI FROM.env file)
            }
        ), // keep track of sessions in db
    })
)

// Passport middleware, so users can stay logged in
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
app.use('/events', eventsRoutes) // anything with todos
app.use('/activities', activitiesRoutes)
app.use('/journal', journalRoutes)
app.use('/media', mediaRoutes)
app.use('/qAnda', qAndARoutes)
app.use('/schedule', scheduleRoutes)
app.use('/travelAndlodging', travelAndLodgingRoutes)
app.use('/aboutUs', aboutUsRoutes)
app.use('/createYourOwnEvent', createYourOwnEventsRoutes)
app.use('/helpAndsupport', helpAndSupportRoutes)
app.use('/inspiration', inspirationRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})