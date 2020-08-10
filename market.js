const mongoose = require('mongoose')

const Market = mongoose.model('Market',{
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
    produktetNeWeb: {
        type: String,
        trim: true
    },
    hedhjaProdukteveEcommerce: {
        type : String,
        trim: true
    },
    platforma :{
        type: String,
        trim: true
    },
    pagesa: {
        type: String,
        trim:true
    },
    dizajniWebit : {
        type: String,
        trim : true
    },
    gjuhetWeb : {
        type: String,
        trim : true
    },
    hedhjaMaterialeveWeb : {
        type : String,
        trim : true
    },
    faqetNeWeb: {
        type: String,
        trim: true,
    },

    hostDomain: {
        type: String,
        trim: true
    },
    rendesiaSEO: {
        type:String,
        trim:true
    },
    elementetNeWeb : {
        type: Array
    },
    biznesitInevojitet : {
        type: Array
    },
    frekuencaPostimeveMediaJaves: {
        type: String,
        trim:true
    },
    setiFotografikNeMuaj: {
        type: String,
        trim : true
    },
    vendiPromovimit:{
        type: Array
    },
    markaRegjistruar: {
        type: String,
        trim:true
    },
price: {
    type : String,
}
} )

module.exports = Market;