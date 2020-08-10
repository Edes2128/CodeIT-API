const mongoose = require('mongoose')

const App = mongoose.model('App',{
    emri: {
        type: String,
        trim: true,

    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
},
    tel: {
        type: String,
        trim: true
    },
    kerkeseTjeter: {
        type: String,
    },
    topologjia :{
        type : String,
        trim: true
    },
    specifikat: {
        type:String
    },

} )

module.exports = App;