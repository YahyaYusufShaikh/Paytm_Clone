const express = require('express')
const cors = require('cors')

application.use(cors());
application.use(express.json())

const router = express.Router()
const userRouter = require('./user.js')


router.use("/user", userRouter);

module.exports = router;