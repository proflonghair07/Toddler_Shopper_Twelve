var userModel = require('../models/user');

module.exports = {
    login: function (req, res) {
        userModel.find({ emailAddress: req.body.emailAddress })
            .then(userModel => {
                // results are an array.  Use first index.  You will want to safety code this when there are no results
                if(req.body.password == userModel[0].password){
                    // hook session creation here.  Refer to your previous exercise where you had a log in.
                    res.send(200);
                } else{
                    res.send(401);
                }
            })
            .catch(err => res.status(422).json(err));
    },
    logout: function (req, res) {
        res.send("Logout");
        // put log out logic here
    },
    createUser: function (req, res) {

        var emailAddress = req.body.emailAddress;
        var password = req.body.password;

        var user = new userModel();
        user.emailAddress = emailAddress;
        user.password = password;

        user.save(function (err, data) {
            if (err) {
                res.send(500, err);
            }
            else {
                res.send(200);
            }
        });


    }
}