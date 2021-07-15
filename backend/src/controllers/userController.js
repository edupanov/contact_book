const User = require('../models/user').User
const Address = require('../models/address').Address

module.exports = {

    createContact: async (req, res, next) => {
        let newContact = req.body.contact

        console.log(newContact)
        await User.create(newContact)
            .then(async user => {
                if (user._id) {
                    await Address.create(newContact.address).then(address => {
                        if (address._id) {
                            user.addresses.push(address)
                            user.save()
                            res.status(200).json({
                                message: 'Contact was created successfully!'
                            })

                        }
                    })
                }
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Fetching contacts failed!',
                    error
                })
            })
    },

    updateContact: async (req, res, next) => {
        let newContact = req.body.contact
        const newContactId = newContact.id
        console.log(newContact)
        await User.findById({_id: newContactId})
            .then(async document => {
                if (document._id) {
                    res.status(400).json({
                        message: 'Ошибка, контакт с данным ID уже существует, проверьте правильность данных'
                    })
                }
                newContact = {
                    _id: newContactId,
                    ...newContact
                }
                await User.create(newContact)
                    .then(user => {
                        if (user._id) {
                            res.status(200).json({
                                message: 'Contact was created successfully!'
                            })
                        }
                    })
                    .catch(error => {
                        res.status(500).json({
                            message: 'Fetching contacts failed!',
                            error
                        })
                    })
            })
    },

    getUsers: async (req, res, next) => {
        const pageSize = req.body.take
        const currentPage = req.body.page
        const isPaging = pageSize && currentPage

        const searchParams = {}

        //info
        const name = req.body.name
        const surname = req.body.surname
        const patronymic = req.body.patronymic
        const dateFrom = req.body.dateFrom
        const dateTo = req.body.dateTo
        const gender = req.body.gender
        const maritalStatus = req.body.maritalStatus
        const nationality = req.body.nationality
        //address
        const city = req.body.city
        const country = req.body.country
        const street = req.body.street
        const building = req.body.building
        const flat = req.body.flat
        const zipCode = req.body.zipCode

        if (name) {
            searchParams.name = name
        }
        if (surname) {
            searchParams.surname = surname
        }
        if (patronymic) {
            searchParams.patronymic = patronymic
        }
        if (dateFrom && dateTo) {
            searchParams.birthDate = {
                $gte: dateFrom,
                $lt: dateTo
            }
        }
        if (dateTo) {
            searchParams.birthDate = {$gte: dateFrom}
        }
        if (dateFrom) {
            searchParams.birthDate = { $lt: dateTo}
        }
        if (dateFrom) {
            searchParams.birthDate = {$gte: dateFrom}
        }
        if (dateTo) {
            searchParams.birthDate = { $lt: dateTo}
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

        if (city) {
            searchParams['addresses.city'] = city
        }
        if (country) {
            searchParams['addresses.country'] = country
        }
        if (street) {
            searchParams['addresses.street'] = street
        }
        if (building) {
            searchParams['addresses.building'] = building
        }
        if (flat) {
            searchParams['addresses.flat'] = flat
        }
        if (zipCode) {
            searchParams['addresses.zipCode'] = zipCode
        }

        await User.find(searchParams)
            .populate('addresses')
            .skip(isPaging ? pageSize * (currentPage - 1) : 0)
            .limit(isPaging ? pageSize : 0)
            .then(async documents => {
                const contactsCount = await User.countDocuments()
                const users = documents.map(user => {
                    return {
                        id: user._id,
                        name: user.name,
                        surname: user.surname,
                        patronymic: user.patronymic,
                        birthDate: user.birthDate,
                        gender: user.gender,
                        maritalStatus: user.maritalStatus,
                        nationality: user.nationality,
                        address: user.addresses[0]
                    }
                })
                res.status(200).json({
                    code: 200,
                    isSuccess: true,
                    message: 'Contacts fetched successfully!',
                    maxUsers: contactsCount,
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
        // while (i <= 50) {
        //     const user = new User({
        //         name: `Имя${i}`,
        //         surname: `Фамилия${i}`,
        //         patronymic: `Отчество${i}`,
        //         birthDate: `01.01.${2007 + i}`,
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
        //                 zipCode: `${i + 240016}`
        //             })
        //
        //             await address.save()
        //                 .then(async address => {
        //                     user.addresses.push(address)
        //                     await user.save()
        //                 })
        //
        //         }).catch(error => console.log(error))
        //
        //     i++
        // }

        // User.find().populate('addresses').then(documents => res.json({users: documents}))

        // User.deleteMany({}).then(result =>  res.json({deleted: result}))
        // Address.deleteMany({}).then(result =>  res.json({deleted: result}))
    }
}
