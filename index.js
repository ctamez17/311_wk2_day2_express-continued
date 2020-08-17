//setup 
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;

//require data
const comments = require("./data/comments");
const contacts = require("./data/contacts");
const products = require("./data/products");
const vehicles = require("./data/vehicles");

//require routes
const contactsRoutes = require('./routes/contacts')
const commentsRoutes = require('./routes/comments')
const productsRoutes = require('./routes/products')
const vehiclesRoutes = require('./routes/vehicles')

//middleware here
app.use(express.static("public"));
app.use(bodyParser.json());

//use routes here
app.use(contactsRoutes)
app.use(commentsRoutes)
app.use(productsRoutes)
app.use(vehiclesRoutes)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

// app.get('/contacts/:contactId', (req,res) => {
//     const id = req.params.contactId;
    
//     const filteredContact = contacts.filter(contact => contact._id === Number(id));

//     res.json(foundContact);
// });

// app.post("/contacts", (req, res) => {
//     console.log(req, body);
//     contacts.push({
//         _id: contactsCount + 1,
//         ... req.body
//         name: req.body.name,
//         occupation: req.body.occupation,
//         avatar = req.body.avatar
//     })
// });
