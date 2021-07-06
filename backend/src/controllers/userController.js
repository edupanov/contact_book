const User = require('../models/user')

module.exports = {
    getUsers: (req, res, next) => {
        console.log(req.params)
        const pageSize = +req.params.take
        const currentPage = +req.params.page
        const usersQuery = User.find()
        let fetchedUsers
        if (pageSize && currentPage) {
            usersQuery
                .skip(pageSize * (currentPage - 1))
                .limit(pageSize)
        }
        usersQuery
            .then(documents => {
                fetchedUsers = documents
                return User.countDocuments()
            })
            .then(count => {
                const users = fetchedUsers.map(user => {
                    return {
                        id: user._id,
                        name: user.name,
                        surname: user.surname,
                        patronymic: user.patronymic
                    }
                })
                res.status(200).json({
                    code: 200,
                    isSuccess: true,
                    message: 'Users fetched successfully!',
                    maxUsers: count,
                    data: users
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Fetching users failed!',
                    error
                })
            })
    },

    setUsers: (req, res, next) => {
        const users = [
            {name: 'Name6', surname: 'Surname6', patronymic: 'Patronymic6'},
            {name: 'Name7', surname: 'Surname7', patronymic: 'Patronymic7'},
            {name: 'Name8', surname: 'Surname8', patronymic: 'Patronymic8'},
            {name: 'Name9', surname: 'Surname9', patronymic: 'Patronymic9'},
            {name: 'Name10', surname: 'Surname10', patronymic: 'Patronymic10'},
            {name: 'Name11', surname: 'Surname11', patronymic: 'Patronymic11'},
            {name: 'Name12', surname: 'Surname12', patronymic: 'Patronymic12'},
            {name: 'Name13', surname: 'Surname13', patronymic: 'Patronymic13'},
            {name: 'Name14', surname: 'Surname14', patronymic: 'Patronymic14'},
            {name: 'Name15', surname: 'Surname15', patronymic: 'Patronymic15'},
            {name: 'Name16', surname: 'Surname16', patronymic: 'Patronymic16'},
            {name: 'Name17', surname: 'Surname17', patronymic: 'Patronymic17'},
            {name: 'Name18', surname: 'Surname18', patronymic: 'Patronymic18'},
            {name: 'Name19', surname: 'Surname19', patronymic: 'Patronymic19'},
            {name: 'Name20', surname: 'Surname20', patronymic: 'Patronymic20'},
            {name: 'Name21', surname: 'Surname21', patronymic: 'Patronymic21'},
            {name: 'Name22', surname: 'Surname22', patronymic: 'Patronymic22'},
            {name: 'Name23', surname: 'Surname23', patronymic: 'Patronymic23'},
            {name: 'Name24', surname: 'Surname24', patronymic: 'Patronymic24'},
            {name: 'Name25', surname: 'Surname25', patronymic: 'Patronymic25'}
        ]

            User.create(users)
            .then(documents => {
                res.status(200).json({
                    code: 200,
                    isSuccess: true,
                    message: 'Users created successfully!',
                    data: documents
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Creating users failed!',
                    error
                })
            })
    }
}