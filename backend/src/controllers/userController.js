const User = require('../models/user')
const Address = require('../models/address')

module.exports = {
    getUsers: async (req, res, next) => {
        const pageSize = req.body.take
        const currentPage = req.body.page

        const searchParams = {}

        const name = req.body.name
        const surname = req.body.surname
        const patronymic = req.body.patronymic
        const birthDate = req.body.birthDate
        const gender = req.body.gender
        const maritalStatus = req.body.maritalStatus
        const nationality = req.body.nationality

        if (name) {
            searchParams.name = name
        }

        if (surname) {
            searchParams.surname = surname
        }

        if (birthDate) {
            searchParams.birthDate = birthDate
        }
        if (gender) {
            searchParams.gender = gender
        }
        if (maritalStatus) {
            searchParams.maritalStatus = maritalStatus
        }
        if (nationality) {
            searchParams.nationality = nationality
        }
        if (patronymic) {
            searchParams.patronymic = patronymic
        }


        const usersQuery = User.find(searchParams).populate('address')
        let fetchedUsers
        if (pageSize && currentPage) {
            usersQuery
                .skip(pageSize * (currentPage - 1))
                .limit(pageSize)
        }
        await usersQuery
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
                        patronymic: user.patronymic,
                        birthDate: user.birthDate,
                        gender: user.gender,
                        maritalStatus: user.maritalStatus,
                        nationality: user.nationality,
                        address: {
                            city: user.address[0].city,
                            country: user.address[0].country,
                            street: user.address[0].street,
                            building: user.address[0].building,
                            flat: user.address[0].flat,
                            zipCode: user.address[0].zipCode,
                            fullAddress: user.address[0].fullAddress
                        }
                    }
                })
                res.status(200).json({
                    code: 200,
                    isSuccess: true,
                    message: 'Contacts fetched successfully!',
                    maxUsers: count,
                    data: users
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Fetching contacts failed!',
                    error
                })
            })
    },

    setUsers: async (req, res, next) => {

        // let i = 0
        //
        // while (i <= 20) {
        //     const user = new User({
        //         name: `Имя${i}`,
        //         surname: `Фамилия${i}`,
        //         patronymic: `Отчество${i}`,
        //         birthDate: '01.01.1990',
        //         gender: `${i % 2 === 0 ? 'мужской' : 'женский'}`,
        //         maritalStatus: `${i % 2 === 0 ? 'женат' : 'замужем'}`,
        //         nationality: `${i % 2 === 0 ? 'Беларус' : 'Россиянин'}`
        //     })
        //
        //     await user.save()
        //         .then(async user => {
        //             const address = new Address({
        //                 city: 'Гомель',
        //                 country: 'Беларусь',
        //                 street: `${i % 2 === 0 ? 'Ленина' : 'Советская'}`,
        //                 building: `${i + 5}`,
        //                 flat: `${i + 9}`,
        //                 zipCode: `${i + 240016}`,
        //                 fullAddress: `${i + 240016} Беларусь, Гомель ${i % 2 === 0 ? 'Ленина' : 'Советская'} ${i + 5} кв.${i + 9}`
        //             })
        //
        //             await address.save()
        //                 .then(async address => {
        //                     user.address.push(address)
        //                     await user.save()
        //                 })
        //
        //         }).catch(error => console.log(error))
        //
        //     i++
        // }

        // User.find().populate('address').then(documents => res.json({users: documents}))

        // User.deleteMany({})
        // Address.deleteMany({})
    }
}
