const mongoose = require("mongoose");

mongoose.connect(`mongodb://${process.env.DB_HOST}/warbler`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    auth: {
        user: "root",
        password: "mysuperpassword"    
    }, authSource: "admin" })
        .then(_=> console.log("db connected"))
        .catch(err => console.log(err));

module.exports = {
    User: require("./User"),
    Message: require("./Message")
}