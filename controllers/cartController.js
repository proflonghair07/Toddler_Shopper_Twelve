module.exports = {
    getByEmail: function(req, res) {
        res.send(`Getting cart ${req.params.id}`);
        // put logic to get the current card, or cart based on the id.  If not using a cart from DB and just using session, you will not need the ID.
    },
    addToyToCart: function(req, res) {
        res.send(`Adding toy ${req.params.id} to cart`);
        // Parameters should be email address and product id

        // put logic to add toy, based on the toy's id, to a cart.
        // probably want to add cart ID to this.
    },
    removeToyFromCart: function(req, res) {
        res.send(`Remove toy ${req.params.id} from cart`);

        // Parameters should be email address and product id.


        // put log out logic here
        // probably want to add cart ID to this.
    },
    checkout: function(req, res) {
        res.send(`Checking out for cart id ${req.params.id}`);
    },
    clear: function(req, res) {
        res.send(`Canceling order for cart id ${req.params.id}`);

        // Parameters should be email address.
    }
}