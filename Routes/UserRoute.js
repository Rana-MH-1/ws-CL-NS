const express = require('express');
const { AddUser, GetAllDataUsers, deletedDataUser, UpdateDataUser } = require('../Controllers/UserController');
const router = express.Router()
const user = require('../Models/UserSchema')


router.post('/', AddUser)

router.get('/', GetAllDataUsers )

router.delete('/:id',deletedDataUser )

router.put('/:idUser', UpdateDataUser )

module.exports = router