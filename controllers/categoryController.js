const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Product.find({})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.ststatus(422).json(err));
        // hook DB and get all.  return json.
    },
    findById: function(req, res) {
        db.Product.findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
        // hook DB and search by id.  return json.
    
    getToysForCategory: function(req, res) {
        res.send(`Getting toys for category ${req.params.id}`);
    }
};