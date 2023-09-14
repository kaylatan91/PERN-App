const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../secrets');

const router = require('express').Router()

const SALT_ROUNDS = 10;

const { createUser, getAllUsers, getUserById, getUserByUsername } = require('../db/helpers/users');

// POST - /api/users - create a new user
router.post('/', async (req, res, next) => {
    try {
        const newUser = await createUser(req.body);
        console.log(req.body)
        res.send(newUser);
    }
    catch (error) {
        next(error);
    }
});

// GET - /api/users - get all users
router.get('/', async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.send(users);
    }
    catch (error) {
        next(error);
    }
});

// GET - /api/users/:userId - get user by Id
router.get('/:id', async (req, res, next) => {
    try {
        const user = await getUserById(req.params.id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

router.post('/register', async (req, res, next) => {
    try {
        console.log(req.body)
        const { username, password } = req.body 
        //hashing password 
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
        //send username and hashed password to db
        const user = await createUser({ username, password: hashedPassword})
        //removing password from user object (security reasons)
        delete user.password

        //create token
        const token = jwt.sign(user, JWT_SECRET)

        //attach cookie to our response using the token that we created
        res.cookie('token', token, {
            sameSite: 'strict',
            httpOnly: true,
            signed: true
        })

        console.log('token', token)
        delete user.password
        res.send({token, user})
        return token;
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        console.log('req.body', req.body)
        const { username, password } = req.body
        const user = await getUserByUsername(username)
        console.log('user', user)

        const validPassword = await bcrypt.compare(password, user.password)

        delete user.password 
        if(validPassword) {
            //create token
            const token = jwt.sign(user, JWT_SECRET)
            //attach cookie to our response using the token we made
            res.cookie('token', token, {
                sameSite: 'strict',
                httpOnly: true,
                signed: true
            })

            delete user.password
            res.send({token, user})
            return token;
        }
    } catch (error) {
        next (error)
    }
})

router.post('/logout', async (req, res, next) => {
    try {
        res.clearCookie('token', {
            sameSite: 'strict',
            httpOnly: true,
            signed: true
        })
        res.send({
            loggedIn: false,
            message: 'Logged Out'
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router; 