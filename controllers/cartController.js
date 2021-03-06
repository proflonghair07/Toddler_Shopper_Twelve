const db = require("../models")
const ObjectId = require('mongoose').Types.ObjectId; 
module.exports = {
    getByEmail: function(req, res) {
        res.send(`Getting cart ${req.params.id}`);
        // put logic to get the current card, or cart based on the id.  If not using a cart from DB and just using session, you will not need the ID.
    },
    addToyToCart: function(req, res) {
        //need user id

        const query = { user: new ObjectId(req.body.userId) };

        db.Cart.find(query).then((userCart)=>{
            console.log('adding to cart')
            console.log(userCart)
            if(userCart.length <1){                
                db.Cart.create({user:req.body.userId, products:[req.body.productId]}).then((cartDb)=>{
                    console.log('creating new cart')
                    console.log(cartDb)
                    res.json(cartDb)
                }).catch((err)=> {
                    console.log(err)
                    res.json(err)
                })
            }else{
                db.Cart.findOneAndUpdate(query,
                    {"$push": {"products": req.body.productId }}
                    ).then((cartDb)=>{
                        console.log('updating existing cart')
                        console.log(cartDb)
                        res.json(cartDb)
                    }).catch((err)=> {
                        console.log(err)
                        res.json(err)
                    })
            }
       
        })

        // Parameters should be email address and product id

        // put logic to add toy, based on the toy's id, to a cart.
        // probably want to add cart ID to this.
    },
    removeToyFromCart: function(req, res) {

        console.log(req)
        const query = { user: new ObjectId(req.body.userId) };
        const reomveProd = {products: req.body.productId}
        console.log(reomveProd)
        // Favorite.updateOne( {cn: req.params.name}, { $pullAll: {uid: [req.params.deleteUid] } } )

        db.Cart.findOneAndUpdate(query,
            {"$pull": reomveProd}
            ).then((cartDb)=>{
                console.log('reomving item from cart')
                console.log(cartDb)
                res.json(cartDb)
            }).catch((err)=> {
                console.log(err)
                res.json(err)
            })

       

        // Parameters should be email address and product id.


        // put log out logic here
        // probably want to add cart ID to this.
    },
    checkout: function(req, res) {

        console.log("checkout route*****")
        console.log(req.params.id);
        const query = { user: new ObjectId(req.params.id) };
        
//        db.Cart.find( query ).then((userCart)=> {
//            console.log(userCart);
//        })
         db.Cart.find(query).populate("products")
         .then((userCart)=>{
//             console.log('adding to cart')
//             console.log(userCart)
             res.json(userCart)
         })
//         .populate("products")
//         .then((data)=>{
//             res.json(data)
//         })
         .catch((err)=>{
             console.log(err)
             res.json(err)
             console.log();
         })
    },
    clear: function(req, res) {

//        res.send(`Canceling order for cart id ${req.params.id}`);

//        const query = { _id: req.params.id };
        
                 db.Cart.findByIdAndDelete(req.params.id)
                 .then(()=>{
                     res.json({'message': 'Cart deleted'});
                 })
                 .catch((err)=>{
                     console.log(err)
                     res.json(err)
                     console.log();
                 })
    }
}