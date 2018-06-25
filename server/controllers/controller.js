const mongoose = require('mongoose');
const Pet = mongoose.model('Pet')

module.exports = {
    // newPet: function (req, res) {
    //     Pet.find({ name: req.body.name }, function (err, pet) {
    //         if (user.length) {
    //             request.flash('registration', 'Pet already exists');
    //             console.log('pet exist')
    //             res.json({})
    //         } else {
    //             var pet = new Pet(req.body)
    //             console.log(pet)
    //             pet.save(function (err) {
    //                 if (err) {
    //                     for (var key in err.errors) {
    //                         request.flash('registration', err.errors[key].message);
    //                     }
    //                     console.log('somethig went worng');
    //                     res.json({ message: "Error", error: err })
    //                 } else {
    //                     console.log('successfully added a user');
    //                     res.json({ message: "Success" })
    //                 }
    //             })
    //         }
    //     })
    // },
    add: function (req, res) {
        console.log(req.body)
        Pet.find({ name: req.body.name }, function (err, pet) {
            if (pet.length) {
                console.log('pet exists')
                res.json({ Status: false, err: "Pet already exist" })
            }
            else {
                var pet = new Pet(req.body)
                pet.save(function (err) {
                    if (err) {
                        console.log('somethig went worng');
                        res.json({ Status: false, Error: err })
                    } else {
                        console.log('successfully added a user');
                        res.json({ Status: true, message: "Success" })
                    }
                })
            }
        })
    },
    // add: function (req, res) {
    //     console.log(req.body)
    //     var pet = new Pet(req.body)
    //     pet.save(function (err) {
    //         if (err) {
    //             console.log('somethig went worng');
    //             res.json({ message: "Error", error: err })
    //         } else {
    //             console.log('successfully added a user');
    //             res.json({ message: "Success" })
    //         }
    //     })
    // },

    getPet: function (req, res) {
        Pet.find({}, function (err, pet) {
            if (err) {
                console.log("Returned error", err);
                // respond with JSON
                res.json({ message: "Error", error: err })
            }
            else {
                // respond with JSON
                res.json({ data: pet })
            }
        })
    },
    deletePet: function (req, res) {
        console.log(req.params.id)
        Pet.findByIdAndRemove({ _id: req.params.id }, function (err) {
            if (err) {
                console.log('somethig went worng');
                res.json({ message: "Error", error: err })
            } else {
                console.log('successfully adopted this pet');
                res.json({ message: "Success adoption" });
            }
        })
    },

    updatePet: function (request, response) {
        // console.log(request.body)
        Pet.findByIdAndUpdate({ _id: request.body._id }, { $set: request.body }, function (err, pet) {
            if (err) {
                console.log('somethig went worng');
                response.json({ message: "Error", error: err })
            } else {
                console.log('successfully updated a user', pet);
                response.json({ message: "Success update" });
            }

        })
    },
    showPet: function (req, res) {
        console.log(req.params)
        Pet.findOne({ _id: req.params.id }, function (err, pet) {
            var data = pet;

            if (err) {
                console.log('somethig went worng');
                res.json({ message: "Error", error: err })
            } else {
                console.log(data);
                res.json({ message: "Success", data: pet });
            }

        })
    },
    like: function (req, res) {
        console.log(req.body)
        Pet.findByIdAndUpdate({ _id: req.body.id }, { $inc: { "likes": 1 } }, function (err, pet) {
            if (err) {
                console.log('somethig went worng');
                res.json({ message: "Error", error: err })
            } else {
                console.log('successfully liked');
                res.json({ message: "Success update" });
            }

        })
    }

}