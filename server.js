const express = require('express')
const app = express()
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const methodOverride = require("method-override");
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const eventsRoutes = require('./routes/events')
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

//Use .env file in config folder
require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

//Connect To Database
connectDB()

//Using EJS for views
app.set('view engine', 'ejs')

//Static Folder
app.use(express.static('public'))

//Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Logging
app.use(logger('dev'))

//Use forms for put / delete
app.use(methodOverride("_method"));

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

// Setup Sessions - stored in MongoDB
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: oneDay },
        store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Use flash messages for errors, info, ect...
app.use(flash())

//Setup Routes For Which The Server Is Listening
app.use('/', mainRoutes)
app.use('/events', eventsRoutes)
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

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})