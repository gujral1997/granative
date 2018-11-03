import express from 'express'
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql' 

const app = express()

app.listen(3000, ()=> {
    console.log('Server is listening on 3000')
})

mongoose.connect('mongodb://granative:granative1234@ds251223.mlab.com:51223/granative')
const db = mongoose.connection
db.on('error', () => console.log('failed to connect  to databse'))
  .once('open', () => console.log('Connected to db'))

app.get('/',(req, res) => {
    res.send('Hello world, this is graphql api.')
})

app.use('/graphql', graphqlHTTP(() => ({
    graphiql: true,
    pretty: true
})))