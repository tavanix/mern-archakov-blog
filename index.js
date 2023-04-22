import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

mongoose
    .connect(
        'mongodb+srv://admin:wwwwww@mern.klrksfj.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => console.log('db connected'))
    .catch((err) => {
        console.log('db err: ', err)
    })

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hi lucky man')
})

app.post('/auth/login', (req, res) => {
    console.log(req.body)

    const token = jwt.sign(
        {
            email: req.body.email,
            fullname: 'Peter Jason',
        },
        'secret123'
    )

    res.json({ success: true, token })
})

app.listen(4444, (err) => {
    if (err) {
        return log(err)
    }

    console.log('... server started ...')
})
