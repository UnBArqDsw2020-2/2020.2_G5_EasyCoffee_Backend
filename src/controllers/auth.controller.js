const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


const auth = {
    async signup (req, res) {

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        });

        try {
            if (await User.findOne({ username: req.body.username })) {
                return res.status(400).json({ error: "nome de usuário já está em uso!"});
            } else if (await User.findOne({ email: req.body.email })) {
                return res.status(400).json({ error: "email já está em uso" });
            }

            const user = new User(req.body);

            await user.save();
            return res.send(`${user}`);
        } catch (error) {
            return res.json("Erro: email ou senha inválidos");
        }

    },
    async signin (req, res) {

        const user = await User.findOne({username: req.body.username});

        if (!user) {
            return res.status(404).send({ message: "Usuário não encontrado." });
        }

        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Senha inválida!"
            });
        }

        let token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400
        });

        res.status(200).json({
            id: user._id,
            username: user.username,
            email: user.email,
            accessToken: token
        });
    }
}

module.exports = auth;