const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //띄어쓰기 없애줌
        unique: 1 //똑같은 이메일은 사용하지 못하게
    },
    password: {
        tupe: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, //관리자나 일반 유저 숫자로 구분
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number //token 유효기간
    }
})

const User = mongoose.model('User', userSchema) //model로 schema 감싸줌

module.exports = { User } //다른 곳에서도 쓸 수 있도록