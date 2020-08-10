const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:B3IQs1VOcziVTT5z@cluster0.ondlm.mongodb.net/codeit?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})

