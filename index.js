const express = require('express') //express 모듈 가져옴
const app = express()
const port = 5000 //port 번호는 아무거나 상관없음


const mongoose = require('mongoose')
mongoose.connect('mongodb + srv: //chaeshee0908:cotmdgml019@@boiler-plate.d9kha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Nice Day!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})