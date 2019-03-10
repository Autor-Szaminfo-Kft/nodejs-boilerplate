const Sequelize = require('sequelize');
const models = require('../models/index');

async function getAllUsers() {
    return models.user.findAll({
        order: [
            ['id', 'DESC']
        ]
    });
}

module.exports = {
    getAllUsers
}