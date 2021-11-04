const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema =  new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    facebookId: String,
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.plugin(passportLocalMongoose); // plugs the plugin into userSchema to allow auto authentication related methods

module.exports = mongoose.model('User', userSchema);