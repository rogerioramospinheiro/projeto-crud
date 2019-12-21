const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3003

const knex = require('knex')
const db = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'Admin',
        password: 'development',
        database: 'cadastro',
        pool: { min: 0, max: 2 }
    }
})
const dependencies = {
    db
}

const pessoasRouter = require('./routes/pessoas')

app.use(bodyParser.urlencoded( { extended: false } ) )
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.render('home'))
app.use('/pessoas', pessoasRouter(dependencies))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('CRUD listening on port: ' + port)
    }
})