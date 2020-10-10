const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Product.find({})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        // hook DB and get all.  return json.
    },

    findByCategory: function(req, res) {
        db.Product.find({category: req.params.category})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Product.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
};