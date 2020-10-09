module.exports = {
    findAll: function(req, res) {
        res.send("Find All");
        // hook DB and get all.  return json.
    },
    findById: function(req, res){
        res.send(`Find by ID: ${req.params.id}`);
        // hook DB and search by id.  return json.
    },
    getToysForCategory: function(req, res) {
        res.send(`Getting toys for category ${req.params.id}`);
    }
};