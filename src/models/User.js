const mongoose = require('../database');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true,
        required: [true, 'username necessário']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email necessário'],
        validate: {
            validator: function(email) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                .test(email)
            },
            message: props => `${props.value} não é um email válido!`
        }
    },
    password: {
        type: String,
        required: [true, 'A senha é obrigatória!'],
        validate: {
            validator: function (password) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)
            },
            message: props => `${props.value} Sua senha deve conter 6-20 caracteres, 
                entre eles no mínimo um número, uma letra maiúscula e uma minúscula.`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.pre("save", async function hashPassword(next) {
    if (!this.isModified("password")) next();

    this.password = await bcryptjs.hash(this.password, 8);
});

UserSchema.methods = {
    compareHash(hash) {
        return bcryptjs.compare(hash, this.password);
    }
};

module.exports = mongoose.model('User', UserSchema, 'users');