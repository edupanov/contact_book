const User = require('../models/user').User
const Address = require('../models/address').Address
const Phone = require('../models/phone').Phone
const Attachment = require('../models/attachment').Attachment
const nodemailer = require('nodemailer')
const fs = require('fs')
const path = require('path')


module.exports = {

    login: async (req, res, next) => {
        const email = req.body.email
        const password = req.body.password

        await User.find({email: email})
            .then(user => {
                console.log(user)
                if (!user[0]._id) {
                    res.status(404).json({
                        message: `Пользователь с email: ${email} не найден!`,
                        isSuccess: false,
                    })
                }
                res.status(200).json({
                    message: 'Авторизация прошла успешно!',
                    isSuccess: true,
                    user
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Fetching contacts failed!',
                    isSuccess: false,
                    error
                })
            })
    },

    getContacts: async (req, res, next) => {
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
        const email = req.body.email
        const currentJob = req.body.currentJob


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
            searchParams.birthDate = {$lt: dateTo}
        }
        if (dateFrom) {
            searchParams.birthDate = {$gte: dateFrom}
        }
        if (dateTo) {
            searchParams.birthDate = {$lt: dateTo}
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
        if (currentJob) {
            searchParams.currentJob = currentJob
        }
        if (email) {
            searchParams.email = email
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
            .populate(['addresses', 'phones', 'attachments'])
            .skip(isPaging ? pageSize * (currentPage - 1) : 0)
            .limit(isPaging ? pageSize : 0)
            .then(async documents => {
                const contactsCount = await User.countDocuments()
                const users = documents.map(user => {
                    const addr = {
                        id: user.addresses[0]._id,
                        city: user.addresses[0].city,
                        country: user.addresses[0].country,
                        street: user.addresses[0].street,
                        building: user.addresses[0].building,
                        flat: user.addresses[0].flat,
                        zipCode: user.addresses[0].zipCode,
                        fullAddress: user.addresses[0].fullAddress
                    }

                    const phones = user.phones.map(phone => {
                        return {
                            id: phone._id,
                            countryCode: phone.countryCode,
                            operatorID: phone.operatorID,
                            phoneNumber: phone.phoneNumber,
                            phoneType: phone.phoneType,
                            comment: phone.comment
                        }
                    })

                    const attachments = user.attachments.map(attachment => {
                        return {
                            id: attachment._id,
                            comment: attachment.comment,
                            filePath: attachment.filePath,
                            uploadDate: attachment.uploadDate
                        }
                    })

                    return {
                        id: user._id,
                        name: user.name,
                        surname: user.surname,
                        patronymic: user.patronymic,
                        birthDate: user.birthDate,
                        gender: user.gender,
                        maritalStatus: user.maritalStatus,
                        nationality: user.nationality,
                        currentJob: user.currentJob,
                        email: user.email,
                        edit: user.edit,
                        address: addr,
                        imagePath: user.imagePath,
                        attachments,
                        phones
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

    createContact: async (req, res, next) => {
        let newContact = req.body.contact

        const url = req.protocol + '://' + req.get('host')
        newContact.imagePath = url + '/attachments/' + req.file.filename

        await User.create(newContact)
            .then(async user => {
                if (user._id) {
                    await Address.create(newContact.address).then(address => {
                        if (address._id) {
                            user.addresses.push(address)
                            newContact.phones.map(phone => {
                                user.phones.push(phone)
                            })
                            user.save()
                                .then(user => {
                                    if (user._id) {
                                        res.status(200).json({
                                            message: 'Contact was created successfully!'
                                        })
                                    }
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
        let contactForUpdate = req.body.contact
        const contactId = contactForUpdate.id
        const addressId = contactForUpdate.address.id
        const phones = contactForUpdate.phones
        const logo = contactForUpdate.logo
        const attachments = contactForUpdate.attachments

        const filePathUrl = req.protocol + '://' + req.get('host')

        await User.findById({_id: contactId})
            .then(user => {
                    if (user._id) {
                        const addressIndex = user.addresses.findIndex(item => item._id.equals(addressId))

                        user.name = contactForUpdate.name
                        user.surname = contactForUpdate.surname
                        user.patronymic = contactForUpdate.patronymic
                        user.birthDate = contactForUpdate.birthDate
                        user.gender = contactForUpdate.gender
                        user.maritalStatus = contactForUpdate.maritalStatus
                        user.nationality = contactForUpdate.nationality
                        user.currentJob = contactForUpdate.currentJob
                        user.email = contactForUpdate.email


                        if (addressIndex >= 0) {
                            user.addresses[addressIndex].city = contactForUpdate.address.city
                            user.addresses[addressIndex].country = contactForUpdate.address.country
                            user.addresses[addressIndex].street = contactForUpdate.address.street
                            user.addresses[addressIndex].building = contactForUpdate.address.building
                            user.addresses[addressIndex].flat = contactForUpdate.address.flat
                            user.addresses[addressIndex].zipCode = contactForUpdate.address.zipCode
                            user.addresses[addressIndex].fullAddress = contactForUpdate.address.fullAddress
                        }

                        // user.phones.forEach(phone => {
                        //     if (!phones.includes(phone)) {
                        //         user.phones.pull(phone._id)
                        //     }
                        // })
                        //
                        // phones.forEach(phoneForUpdate => {
                        //
                        //     const phoneIndex = user.phones.findIndex(item => item._id.equals(phoneForUpdate.id))
                        //
                        //     if (phoneForUpdate.id) {
                        //         if (phoneIndex >= 0) {
                        //             user.phones[phoneIndex].countryCode = phoneForUpdate.countryCode
                        //             user.phones[phoneIndex].operatorID = phoneForUpdate.operatorID
                        //             user.phones[phoneIndex].phoneNumber = phoneForUpdate.phoneNumber
                        //             user.phones[phoneIndex].phoneType = phoneForUpdate.phoneType
                        //             user.phones[phoneIndex].comment = phoneForUpdate.comment
                        //         } else {
                        //
                        //             user.phones.push(phoneForUpdate)
                        //         }
                        //     }
                        //
                        // })

                        // if (logo.file) {
                        //     const logoName = user.imagePath.split('/').reverse()[0]
                        //     const deleteLogoPath = `backend/assets/logo/${logoName}`
                        //
                        //     if (user.imagePath) {
                        //         fs.unlink(deleteLogoPath, () => {
                        //             console.log('Logo успешно удален')
                        //         })
                        //     }
                        //
                        //     const createLogoPath = `backend/assets/logo/${user.id}-${logo.name}`
                        //     const logoBase64Image = logo.file.split(';base64,').pop();
                        //     fs.writeFile(createLogoPath, logoBase64Image, {encoding: 'base64'}, () => {
                        //         console.log('Logo успешно сохранен')
                        //     });
                        //     user.imagePath = filePathUrl + `/assets/logo/${user.id}-${logo.name}`
                        // }

                        if (attachments.length > 0) {
                            const presentedAttachmentIds = attachments.reduce((acc, item) => {
                                if (item.id) {
                                    acc.push(item.id.toString().trim())
                                }

                                return acc
                            }, [])

                            user.attachments.length > 0 && user.attachments.forEach(attachment => {
                                if (!presentedAttachmentIds.includes(attachment._id.toString().trim())) {
                                    user.attachments.pull(attachment._id)
                                    const attachmentName = attachment.filePath.split('/').reverse()[0]
                                    const deleteAttachmentPath = `backend/assets/attachments/${attachmentName}`
                                    fs.unlink(deleteAttachmentPath, () => {
                                        console.log('Attachment успешно удален')
                                    })
                                }
                            })

                            attachments.length > 0 && attachments.forEach(attachmentForUpdate => {
                                if (attachmentForUpdate.id) {
                                    const attachmentIndex = user.attachments.findIndex(item => item._id.equals(attachmentForUpdate.id))
                                    if (attachmentIndex >= 0) {
                                        if (attachmentForUpdate.date) {
                                            user.attachments[attachmentIndex].uploadDate = attachmentForUpdate.date
                                        }
                                        if (attachmentForUpdate.comment) {
                                            user.attachments[attachmentIndex].comment = attachmentForUpdate.comment
                                        }
                                    }
                                } else {
                                    const createAttachmentPath = `backend/assets/attachments/${user.id}-${attachmentForUpdate.fileName}`
                                    const attachmentBase64Image = attachmentForUpdate.base64File.split(';base64,').pop();
                                    fs.writeFile(createAttachmentPath, attachmentBase64Image, {encoding: 'base64'}, () => {
                                        console.log('Attachment успешно сохранен')
                                    });
                                    user.attachments.push(attachmentForUpdate)
                                }
                            })
                        }
                    } else {
                        user.attachments = []
                    }


                    user.save()
                        .then(() => {
                            res.status(200).json({
                                code: 200,
                                isSuccess: true,
                                message: 'Contact updated successfully!'
                            })
                        })
                        .catch(err => {
                            res.status(500).json({
                                error: err,
                                message: 'Ошибка сервера, не удалось обновить контакт'
                            })
                        })
                }
            )
            .catch(err => {
                res.status(500).json({
                    error: err,
                    message: 'Ошибка сервера, не удалось обновить контакт'
                })
            })
    },

    deleteContacts: async (req, res, next) => {
        const deleted = req.body.deletedContacts

        await User.deleteMany({_id: deleted})
            .then(count => {
                res.status(200).json({
                    code: 200,
                    isSuccess: true,
                    message: 'Contacts deleted successfully!',
                    count
                })
            })
    },

    sendEmails: async (req, res, next) => {
        const emails = req.body.emails?.reduce((acc, email) => {
            return `${acc} ${email}`
        }, '')
        const theme = req.body.theme
        const text = req.body.text

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'edupanov@gmail.com',
                pass: 'Marvel9812'
            }
        });

        const mailOptions = {
            from: 'edupanov@gmail.com',
            to: emails,
            subject: theme,
            text
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(200).json({
                    code: 500,
                    isSuccess: false,
                    message: 'Ошибка при отправки письма!!'
                })
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({
                    code: 200,
                    isSuccess: true,
                    message: 'Письмо успешно отправлено!'
                })
            }
        })
    },

    addPhone: async (req, res, next) => {

        const newPhone = req.body.phone
        const contactId = req.body.contactId

        await User.findById({_id: contactId})
            .then(async user => {
                if (user._id) {
                    user.phones.forEach(phone => {
                        const fullPhone = `${phone.countryCode} ${phone.operatorID} ${phone.phoneNumber}`
                        const newFullPhone = `${newPhone.countryCode} ${newPhone.operatorID} ${newPhone.phoneNumber}`

                        if (fullPhone.trim() === newFullPhone.trim()) {
                            res.status(400).json({
                                message: 'Данный номер телефона уже зарегистрирован'
                            })
                        }
                    })

                    user.phones.push(newPhone)

                    user.save().then(user => {
                        if (user._id) {
                            res.status(200).json({
                                status: 200,
                                isSuccess: true,
                                message: 'Телефон успешно добавлен!'
                            })
                        }
                    })

                } else {
                    res.status(404).json({
                        message: `Контакт с id ${contactId} не найден!`
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Ошибка сервера, попробуйте еще раз',
                    err
                })
            })
    },

    removePhone: async (req, res, next) => {

        const contactId = req.body.contactId
        const phoneId = req.body.phoneId

        await User.findById({_id: contactId})
            .then(async user => {
                if (user._id) {
                    user.phones.pull(phoneId)

                    user.save().then(user => {
                        if (user._id) {
                            res.status(200).json({
                                status: 200,
                                isSuccess: true,
                                message: 'Телефон успешно удален!'
                            })
                        }
                    })

                } else {
                    res.status(404).json({
                        message: `Контакт с id ${contactId} не найден!`
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Ошибка сервера, попробуйте еще раз',
                    err
                })
            })
    },


    deleteAllContacts: async (req, res, next) => {

        await User.find({})
            .then(async documents => {
                const contacts = documents

                contacts.map(contact => contact._id)

                await User.deleteMany({_id: contacts})
                    .then(count => {
                        res.status(200).json({
                            code: 200,
                            isSuccess: true,
                            message: 'Contacts deleted successfully!',
                            count
                        })
                    })
            })
    },

    setContacts: async (req, res, next) => {

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
        //         nationality: `${i % 2 === 0 ? 'Беларус' : 'Россиянин'}`,
        //         currentJob: `${i % 2 === 0 ? 'Programmer' : 'Tester'}`,
        //         email: `${i % 2 === 0 ? 'edupanov@gmail.com' : 'kleshchenok.private@gmail.com'}`,
        //         imagePath: ''
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
        //             const phone = new Phone({
        //                 countryCode: `${i % 2 === 0 ? '+375' : '+7'}`,
        //                 operatorID: `${i % 2 === 0 ? '29' : '916'}`,
        //                 phoneNumber: `${i % 2 === 0 ? '126 23 89' : '789 56 18'}`,
        //                 phoneType: `${i % 2 === 0 ? 'Мобильный' : 'Домашний'}`,
        //                 comment: `${i % 2 === 0 ? 'Белорусский номер' : 'Российский номер'}`
        //             })
        //
        //             await phone.save()
        //                 .then(async phone => {
        //                     user.phones.push(phone)
        //                     await user.save()
        //                 })
        //
        //             const attachment = new Attachment({
        //                 uploadDate: `${i % 2 === 0 ? '12.03.2021' : '17.04.2021'}`,
        //                 filePath: `${i % 2 === 0 ? 'test' : 'notFound'}`,
        //                 comment: `${i % 2 === 0 ? 'Super comment' : 'Super Puper comment'}`
        //             })
        //
        //             await attachment.save()
        //                 .then(async attachment => {
        //                     user.attachments.push(attachment)
        //                     await user.save()
        //                 })
        //
        //         }).catch(error => console.log(error))
        //
        //     i++
        // }

        // User.find().populate('addresses').then(documents => res.json({users: documents}))
        //
        // User.deleteMany({}).then(result => res.json({deleted: result}))
        // Address.deleteMany({}).then(result => res.json({deleted: result}))
        // Phone.deleteMany({}).then(result => res.json({deleted: result}))
    }
}