import {Router} from 'express'
import jwt from 'jsonwebtoken'
import config from "../config/config.js";

const router = Router()


router.get('/', (req, res) => {
    let verification = !!req.cookies.TokenSession
    let usuario;
    if (req.cookies.TokenSession) {
        usuario = jwt.verify(req.cookies.TokenSession, config.cookiekey)

    } else {
        usuario = {
            userName: "Invitado",
            role: 'user'
        }
    }

    let isAdmin = usuario.role === "admin"
    let loggedBoolean = verification && true
    console.log(loggedBoolean)
    res.render('index', {
        styleRoute: `<link href="../styles/index.css" rel="stylesheet">`, loggedBoolean, loggedin: verification,
        user: usuario.userName,
        isAdmin
    })
})

export default router;
