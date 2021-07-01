const User = require('../models/user')

module.exports = {
    getUsers: (req, res, next) => {
        User.find()
            .then(response => {
                const users = response.map(user => {
                    return {
                        id: user._id,
                        name: user.name,
                        surname: user.surname,
                        patronymic: user.patronymic
                    }
                })
                res.status(200).json({
                    message: 'Users fetched successfully!',
                    users
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Fetching users failed!',
                    error
                })
            })
    }
}