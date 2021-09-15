const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/product_manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log("Tank, I'm in!"))
    .catch(err => console.log("Mr. Anderson...", err));