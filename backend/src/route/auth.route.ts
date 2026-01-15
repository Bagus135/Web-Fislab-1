import express from 'express'
import { login, logout, signUp, getMe, changePass, signUpAdmin} from '../controller/auth.controller.js'
import tokenChecker from '../middleware/tokenChecker.js'
import adminChecker from '../middleware/adminChecker.js'
import ownerChecker from '../middleware/ownerChecker.js'

const AuthRoutes = express.Router()

AuthRoutes.get('/me', tokenChecker, getMe)
AuthRoutes.post('/login', login)
AuthRoutes.post('/signup', tokenChecker, adminChecker, signUp)
AuthRoutes.post('/signup/admin', ownerChecker, signUpAdmin)
AuthRoutes.put('/password/:uid', tokenChecker, changePass)
AuthRoutes.post('/logout', logout)

export default AuthRoutes
