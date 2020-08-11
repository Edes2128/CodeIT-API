const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000
require('./db/db');
const Posts = require('./posts');
const App = require('./schema')
const Market = require('./market')
const transporter = require('./config');
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());
app.use(cors())
app.post('/market', async (req,res) => {

    const market = new Market(req.body);

    const topologjia = () =>{
        if(req.body.topologjia === 'prezantues'){
            return 10;
        }else if (req.body.topologjia === 'ecommerce'){
            return 2003;
        }else if (req.body.topologjia === 'booking'){
            return 2100;
        }else if (req.body.topologjia === 'portale'){
            return 2120;
        }else if (req.body.topologjia === 'delivery'){
            return 210;
        }else{
            return 0;
        }
    }
    const dizajniWebit = () => {
        if(req.body.dizajniWebit === 'thjeshte'){
            return 20;
        }else if(req.body.dizajniWebit === 'avanc'){
            return 500;
        }else if(req.body.dizajniWebit === 'kompleks'){
            return 1000;
        }else{
            return 0
        }
    }

    const produktetNeWeb = () => {
        if(req.body.produktetNeWeb === '50'){
            return 10;
        }else if(req.body.produktetNeWeb === '300'){
            return 40;
        }else if(req.body.produktetNeWeb === '301'){
            return 60;
        }else{
            return 0
        }
    }

    const hedhjaProdukteveEcommerce = () => {
        if(req.body.hedhjaProdukteveEcommerce === 'codeit'){
            return 200;
        }else if(req.body.hedhjaProdukteveEcommerce === 'klienti'){
            return 400;
        }else if(req.body.hedhjaProdukteveEcommerce === 'pala'){
            return 600;
        }else{
            return 0
        }
    }

    const platforma = () => {
        if(req.body.platforma === 'wordpress'){
            return 400;
        }else if(req.body.platforma === 'shopify'){
            return 500;
        }else if(req.body.platforma === 'prestashop'){
            return 600;
        }else if(req.body.platforma === 'magneto'){
            return 700;
        }else{
            return 0
        }
    }
    const pagesa = () => {
        if(req.body.pagesa === 'cash'){
            return 100;
        }else if(req.body.pagesa === 'paypal'){
            return 50;
        }else if(req.body.pagesa === 'credit'){
            return 60;
        }else if(req.body.pagesa === 'stripe'){
            return 70;
        }else{
            return 0
        }
    }

   const gjuhetWeb = () => {
        if(req.body.gjuhetWeb === 'nje'){
            return 20;
        }else if(req.body.gjuhetWeb === 'shume'){
            return 80;
        }else{
            return 0
        }
    }
    const hedhjaMaterialeveWeb = () => {
        if(req.body.hedhjaMaterialeveWeb === 'klient'){
            return 20;
        }else if(req.body.hedhjaMaterialeveWeb === 'codeIT'){
            return 50;
        }else{
            return 0
        }
    }

    const faqetNeWeb = () => {
        if(req.body.faqetNeWeb === 'pes'){
            return 20;
        }else if(req.body.faqetNeWeb === 'gjasht'){
            return 30;
        }else if(req.body.faqetNeWeb === '11'){
            return 50;
        }else{
            return 0
        }
    }

    const hostDomain = () => {
        if(req.body.hostDomain === 'skam'){
            return 100;
        }else if(req.body.hostDomain === 'kamhost'){
            return 50;
        }else if(req.body.hostDomain === 'kamdomain'){
            return 60;
        }else if(req.body.hostDomain === 'tedyja'){
            return 70;
        }else{
            return 0
        }
    }

    const rendesiaSEO = () => {
        if(req.body.rendesiaSEO === 'aspak'){
            return 100;
        }else if(req.body.rendesiaSEO === 'pak'){
            return 50;
        }else if(req.body.rendesiaSEO === 'rendesishme'){
            return 60;
        }else if(req.body.rendesiaSEO === 'shum'){
            return 70;
        }else{
            return 0
        }
    }


    const elementetNeWeb = () => {

        let price = []

        if(req.body.elementetNeWeb.includes('blog')){
            price.push(100)
        }if(req.body.elementetNeWeb.includes('portofolio')){
            price.push(50);
        }if(req.body.elementetNeWeb.includes('rez-kalendar')){
            price.push(60)
        }if(req.body.elementetNeWeb.includes('artikuj') ){
            price.push(70)
        }if(req.body.elementetNeWeb.includes('faq')){
            price.push(50)
        }if(req.body.elementetNeWeb.includes('livechat')){
            price.push(90)
        }if(req.body.elementetNeWeb.includes('googlemap')){
            price.push(100)
        }if(req.body.elementetNeWeb.includes('prof-perdorues')){
            price.push(300)
        }if(req.body.elementetNeWeb.includes('newsletter')){
            price.push(20)
        }if (price.length > 0){

            return price.reduce((a,b) => a + b,0)

        }else{
            return 0
        }

    }
    const biznesitInevojitet = () => {

        let price = []

        if(req.body.biznesitInevojitet.includes('emer')){
            price.push(200)
        }if(req.body.biznesitInevojitet.includes('logo')){
            price.push(300);
        }if(req.body.biznesitInevojitet.includes('imazh-marke')){
            price.push(600)
        }if(req.body.biznesitInevojitet.includes('tetreja') ){
            price.push(1100)
        }if (price.length > 0){

            return price.reduce((a,b) => a + b,0)

        }else{
            return 0
        }

    }

    const frekuencaPostimeveMediaJaves = () => {
        if(req.body.frekuencaPostimeveMediaJaves === '3'){
            return 100;
        }else if(req.body.frekuencaPostimeveMediaJaves === '7'){
            return 50;
        }else if(req.body.frekuencaPostimeveMediaJaves === '14'){
            return 60;
        }else if(req.body.frekuencaPostimeveMediaJaves === '15'){
            return 70;
        }else{
            return 0
        }
}

const setiFotografikNeMuaj = () => {
    if(req.body.setiFotografikNeMuaj === '1here'){
        return 50;
    }else if(req.body.setiFotografikNeMuaj === '2here'){
        return 100;
    }else{
        return 0
    }
}

const  vendiPromovimit = () => {

    let price = []

    if(req.body.vendiPromovimit.includes('tv')){
        price.push(200)
    }if(req.body.vendiPromovimit.includes('radio')){
        price.push(300);
    }if(req.body.vendiPromovimit.includes('online')){
        price.push(600)
    }if(req.body.vendiPromovimit.includes('portale') ){
        price.push(100)
    }if(req.body.vendiPromovimit.includes('tegjitha') ){
        price.push(1200)
    }if (price.length > 0){

        return price.reduce((a,b) => a + b,0)

    }else{
        return 0
    }

}
const markaRegjistruar = () => {
    if(req.body.markaRegjistruar === 'Po'){
        return 50;
    }else if(req.body.markaRegjistruar === 'Jo'){
        return 0;
    }else{
        return 0
    }
}
    try{
        await market.set({price:  topologjia() + dizajniWebit() + produktetNeWeb() + hedhjaProdukteveEcommerce() + platforma() + pagesa() + gjuhetWeb() + hedhjaMaterialeveWeb() + faqetNeWeb() + hostDomain() + rendesiaSEO() + elementetNeWeb() + markaRegjistruar() + setiFotografikNeMuaj() + frekuencaPostimeveMediaJaves() + biznesitInevojitet() + vendiPromovimit()})
        await market.save();
        const mailOptions = {

            from: req.body.email,
            to: `${process.env.email} ${req.body.email}`,
            subject: 'Marketing',
            html: `
            <table>
            <thead>
            <th style="padding:5px">Emri</th>
            <th style="padding:5px">Email</th>
            <th style="padding:5px">Cel</th>
            <th style="padding:5px">Kerkese</th>
            </thead>
            <tbody >
            <tr>
            <td style="border-right :1px solid dodgerblue;padding:5px">${req.body.emri}</td>
            <td style="border-right :1px solid dodgerblue;padding:5px">${req.body.email}</td>
            <td style="border-right :1px solid dodgerblue;padding:5px">${req.body.tel}</td>
            <td style="border-right :1px solid dodgerblue;padding:5px">${req.body.kerkeseTjeter}</td>
            </tr>
            </tbody>
            </table>
            <h3 style="text-align:center;color:dodgerblue">Marketing</h3>
            <div style="display:flex">
            <p><b>Frekuenca e postimeve ne media gjate javes:</b></p>
            <p>${req.body.frekuencaPostimeveMediaJaves} here</p>
            </div>
            <div style="display:flex">
            <p><b>Seti fotografrik ne muaj:</b></p>
            <p>${req.body.setiFotografikNeMuaj}</p>
            </div>
            <div style="display:flex">
            <p><b>A e do marken te regjistruar:</b></p>
            <p>${req.body.markaRegjistruar}</p>
            </div>
            <div style="display:flex">
            <p><b>Biznesit i nevojitet:</b></p>
            <p>${req.body.biznesitInevojitet}</p>
            </div>
            <div style="display:flex">
            <p><b>Vendi i promovimit:</b></p>
            <p>${req.body.vendiPromovimit}</p>
            </div>
            <h3 style="text-align:center;color:dodgerblue">Website</h3>
            <div style="display:flex">
            <p><b>Topologjia:</b></p>
            <p>${req.body.topologjia}</p>
            </div>
            <div style="display:flex">
            <p><b>Dizajni i Webit:</b></p>
            <p>${req.body.dizajniWebit}</p>
            </div>
            <div style="display:flex">
            <p><b>Gjuhet ne Web:</b></p>
            <p>${req.body.gjuhetWeb}</p>
            </div>
            <div style="display:flex">
            <p><b>Hedhja e materialeve ne web:</b></p>
            <p>${req.body.hedhjaMaterialeveWeb}</p>
            </div>
            <div style="display:flex">
            <p><b>Faqet ne web:</b></p>
            <p>${req.body.faqetNeWeb}</p>
            </div>
            <div style="display:flex">
            <p><b>Host dhe Domain:</b></p>
            <p>${req.body.hostDomain}</p>
            </div>
            <div style="display:flex">
            <p><b>Rendeisa e SEO-s:</b></p>
            <p>${req.body.rendesiaSEO}</p>
            </div>
            <div style="display:flex">
            <p><b>Ne web do te kete element si: </b></p>
            <p>${req.body.elementetNeWeb.includes('') ? ['Nuk dua element shtes'] : req.body.elementetNeWeb}</p>
            </div>
            <div style="display:flex;background-color:green;width:fit-content;color:white;">
            <p><b>Price:</b></p>
            <p>${market.price} $</p>
            </div>
            `,
        }
        const mailClient = {

            from: process.env.email,
            to: req.body.email,
            subject: 'Marketing',
            html: `
        v   <div>
            <p>${market.price} $</p>
            </div>
            `,
        }
        await transporter.sendMail(mailOptions,function(err,info){

            if(err){
                res.status(500).send({
                    success: false,
                    message: 'Something went wrong'
                })
            }else{
                res.send({
                    success: true,
                    messagge: 'Thank you'
                })
                console.log('Thank you')
            }
    console.log(market)
        })
        await transporter.sendMail(mailClient,function(err,info){

            if(err){
                res.status(500).send({
                    success: false,
                    message: 'Something went wrong'
                })
            }else{
                res.send({
                    success: true,
                    messagge: 'Thank you'
                })
                console.log('Thank you')
            }
    console.log(market)
        })
    }catch(e){
        res.send(e)
    }

})

app.post('/app', async (req,res) => {

    const app = new App(req.body)

    try{
        await app.save()
        res.send(app)
        console.log(app)

        const mailOptions = {

            from: req.body.email,
            to: process.env.email,
            subject: 'Aplikacion',
            html: `
            <table>
            <thead>
            <th style="padding:5px">Emri</th>
            <th style="padding:5px">Email</th>
            <th style="padding:5px">Cel</th>
            <th style="padding:5px">Kerkese</th>
            </thead>
            <tbody >
            <tr>
            <td style="border-right :1px solid dodgerblue;padding:5px">${req.body.emri}</td>
            <td style="border-right :1px solid dodgerblue;padding:5px">${req.body.email}</td>
            <td style="border-right :1px solid dodgerblue;padding:5px">${req.body.tel}</td>
            <td style="border-right :1px solid dodgerblue;padding:5px">${req.body.kerkeseTjeter}</td>
            </tr>
            </tbody>
            </table>
                <div style="background-color:dodgerblue;color:white">
                <h3>Specifikat:</h3>
                <p>${req.body.specifikat}</p>
                </div>
            `,
        }
       await transporter.sendMail(mailOptions,function(err,info){

            if(err){
                res.status(500).send({
                    success: false,
                    message: 'Something went wrong'
                })
            }else{
                res.send({
                    success: true,
                    messagge: 'Thank you'
                })
                console.log('Thank you')
            }

        })
    }catch(e){
        res.send(e)
    }

})


app.post('/website', async (req,res) =>{

    const posts = new Posts(req.body);

    const topologjia = () =>{
        if(req.body.topologjia === 'prezantues'){
            return 10;
        }else if (req.body.topologjia === 'ecommerce'){
            return 2003;
        }else if (req.body.topologjia === 'booking'){
            return 2100;
        }else if (req.body.topologjia === 'portale'){
            return 2120;
        }else if (req.body.topologjia === 'delivery'){
            return 210;
        }else{
            return 0;
        }
    }
    const dizajniWebit = () => {
        if(req.body.dizajniWebit === 'thjeshte'){
            return 300;
        }else if(req.body.dizajniWebit === 'avanc'){
            return 500;
        }else if(req.body.dizajniWebit === 'kompleks'){
            return 1000;
        }else{
            return 0
        }
    }

    const produktetNeWeb = () => {
        if(req.body.produktetNeWeb === '50'){
            return 20;
        }else if(req.body.produktetNeWeb === '300'){
            return 40;
        }else if(req.body.produktetNeWeb === '301'){
            return 60;
        }else{
            return 0
        }
    }

    const hedhjaProdukteveEcommerce = () => {
        if(req.body.hedhjaProdukteveEcommerce === 'codeit'){
            return 200;
        }else if(req.body.hedhjaProdukteveEcommerce === 'klienti'){
            return 400;
        }else if(req.body.hedhjaProdukteveEcommerce === 'pala'){
            return 600;
        }else{
            return 0
        }
    }

    const platforma = () => {
        if(req.body.platforma === 'wordpress'){
            return 400;
        }else if(req.body.platforma === 'shopify'){
            return 500;
        }else if(req.body.platforma === 'prestashop'){
            return 600;
        }else if(req.body.platforma === 'magneto'){
            return 700;
        }else{
            return 0
        }
    }
    const pagesa = () => {
        if(req.body.pagesa === 'cash'){
            return 100;
        }else if(req.body.pagesa === 'paypal'){
            return 50;
        }else if(req.body.pagesa === 'credit'){
            return 60;
        }else if(req.body.pagesa === 'stripe'){
            return 70;
        }else{
            return 0
        }
    }

   const gjuhetWeb = () => {
        if(req.body.gjuhetWeb === 'nje'){
            return 20;
        }else if(req.body.gjuhetWeb === 'shume'){
            return 80;
        }else{
            return 0
        }
    }
    const hedhjaMaterialeveWeb = () => {
        if(req.body.hedhjaMaterialeveWeb === 'klient'){
            return 20;
        }else if(req.body.hedhjaMaterialeveWeb === 'codeIT'){
            return 50;
        }else{
            return 0
        }
    }

    const faqetNeWeb = () => {
        if(req.body.faqetNeWeb === 'pes'){
            return 20;
        }else if(req.body.faqetNeWeb === 'gjasht'){
            return 30;
        }else if(req.body.faqetNeWeb === '11'){
            return 50;
        }else{
            return 0
        }
    }

    const hostDomain = () => {
        if(req.body.hostDomain === 'skam'){
            return 100;
        }else if(req.body.hostDomain === 'kamhost'){
            return 50;
        }else if(req.body.hostDomain === 'kamdomain'){
            return 60;
        }else if(req.body.hostDomain === 'tedyja'){
            return 70;
        }else{
            return 0
        }
    }

    const rendesiaSEO = () => {
        if(req.body.rendesiaSEO === 'aspak'){
            return 100;
        }else if(req.body.rendesiaSEO === 'pak'){
            return 50;
        }else if(req.body.rendesiaSEO === 'rendesishme'){
            return 60;
        }else if(req.body.rendesiaSEO === 'shum'){
            return 70;
        }else{
            return 0
        }
    }


    const elementetNeWeb = () => {

        let price = []

        if(req.body.elementetNeWeb.includes('blog')){
            price.push(100)
        }if(req.body.elementetNeWeb.includes('portofolio')){
            price.push(50);
        }if(req.body.elementetNeWeb.includes('rez-kalendar')){
            price.push(60)
        }if(req.body.elementetNeWeb.includes('artikuj') ){
            price.push(70)
        }if(req.body.elementetNeWeb.includes('faq')){
            price.push(50)
        }if(req.body.elementetNeWeb.includes('livechat')){
            price.push(90)
        }if(req.body.elementetNeWeb.includes('googlemap')){
            price.push(100)
        }if(req.body.elementetNeWeb.includes('prof-perdorues')){
            price.push(300)
        }if(req.body.elementetNeWeb.includes('newsletter')){
            price.push(20)
        }if (price.length > 0){

            return price.reduce((a,b) => a + b,0)

        }else{
            return 0
        }

    }
    const biznesitInevojitet = () => {

        let price = []

        if(req.body.biznesitInevojitet.includes('emer')){
            price.push(200)
        }if(req.body.biznesitInevojitet.includes('logo')){
            price.push(300);
        }if(req.body.biznesitInevojitet.includes('imazh-marke')){
            price.push(600)
        }if(req.body.biznesitInevojitet.includes('tetreja') ){
            price.push(1100)
        }if (price.length > 0){

            return price.reduce((a,b) => a + b,0)

        }else{
            return 0
        }

    }

    const frekuencaPostimeveMediaJaves = () => {
        if(req.body.frekuencaPostimeveMediaJaves === '3'){
            return 100;
        }else if(req.body.frekuencaPostimeveMediaJaves === '7'){
            return 50;
        }else if(req.body.frekuencaPostimeveMediaJaves === '14'){
            return 60;
        }else if(req.body.frekuencaPostimeveMediaJaves === '15'){
            return 70;
        }else{
            return 0
        }
}

const setiFotografikNeMuaj = () => {
    if(req.body.setiFotografikNeMuaj === '1here'){
        return 50;
    }else if(req.body.setiFotografikNeMuaj === '2here'){
        return 100;
    }else{
        return 0
    }
}

const  vendiPromovimit = () => {

    let price = []

    if(req.body.vendiPromovimit.includes('tv')){
        price.push(200)
    }if(req.body.vendiPromovimit.includes('radio')){
        price.push(300);
    }if(req.body.vendiPromovimit.includes('online')){
        price.push(600)
    }if(req.body.vendiPromovimit.includes('portale') ){
        price.push(100)
    }if(req.body.vendiPromovimit.includes('tegjitha') ){
        price.push(1200)
    }if (price.length > 0){

        return price.reduce((a,b) => a + b,0)

    }else{
        return 0
    }

}
const markaRegjistruar = () => {
    if(req.body.markaRegjistruar === 'Po'){
        return 50;
    }else if(req.body.markaRegjistruar === 'Jo'){
        return 0;
    }else{
        return 0
    }
}

    try{
         await posts.set({price:  topologjia() + dizajniWebit() + produktetNeWeb() + hedhjaProdukteveEcommerce() + platforma() + pagesa() + gjuhetWeb() + hedhjaMaterialeveWeb() + faqetNeWeb() + hostDomain() + rendesiaSEO() + elementetNeWeb() + markaRegjistruar() + setiFotografikNeMuaj() + frekuencaPostimeveMediaJaves() + biznesitInevojitet() + vendiPromovimit()})
        await posts.save();
        res.send(posts);
        const mailOptions = {

            from: req.body.email,
            to: `${process.env.email} ${req.body.email}`,
            to: req.body.email,
            subject: 'Website',
            html: `
            <table>
            <thead>
            <th style="padding:5px">Emri</th>
            <th style="padding:5px">Email</th>
            <th style="padding:5px">Cel</th>
            <th style="padding:5px">Kerkese</th>
            </thead>
            <tbody >
            <tr>
            <td style="border-right :1px solid dodgerblue;padding:5px">${req.body.emri}</td>
            <td style="border-right :1px solid dodgerblue;padding:5px">${req.body.email}</td>
            <td style="border-right :1px solid dodgerblue;padding:5px">${req.body.tel}</td>
            <td style="border-right :1px solid dodgerblue;padding:5px">${req.body.kerkeseTjeter}</td>
            </tr>
            </tbody>
            </table>
            <h3 style="text-align:center;color:dodgerblue">Website</h3>
            <div style="display:flex">
            <p><b>Topologjia:</b></p>
            <p>${req.body.topologjia}</p>
            </div>
            <div style="display:flex">
            <p><b>Dizajni i Webit:</b></p>
            <p>${req.body.dizajniWebit}</p>
            </div>
            <div style="display:flex">
            <p><b>Gjuhet ne Web:</b></p>
            <p>${req.body.gjuhetWeb}</p>
            </div>
            <div style="display:flex">
            <p><b>Hedhja e materialeve ne web:</b></p>
            <p>${req.body.hedhjaMaterialeveWeb}</p>
            </div>
            <div style="display:flex">
            <p><b>Faqet ne web:</b></p>
            <p>${req.body.faqetNeWeb}</p>
            </div>
            <div style="display:flex">
            <p><b>Host dhe Domain:</b></p>
            <p>${req.body.hostDomain}</p>
            </div>
            <div style="display:flex">
            <p><b>Rendeisa e SEO-s:</b></p>
            <p>${req.body.rendesiaSEO}</p>
            </div>
            <div style="display:flex">
            <p><b>Ne web do te kete element si: </b></p>
            <p>${req.body.elementetNeWeb.includes('') ? ['Nuk dua element shtes'] : req.body.elementetNeWeb}</p>
            </div>
            <h3 style="text-align:center;color:dodgerblue">Marketing</h3>
            <div style="display:flex">
            <p><b>Frekuenca e postimeve ne media gjate javes:</b></p>
            <p>${req.body.frekuencaPostimeveMediaJaves} here</p>
            </div>
            <div style="display:flex">
            <p><b>Seti fotografrik ne muaj:</b></p>
            <p>${req.body.setiFotografikNeMuaj}</p>
            </div>
            <div style="display:flex">
            <p><b>A e do marken te regjistruar:</b></p>
            <p>${req.body.markaRegjistruar}</p>
            </div>
            <div style="display:flex">
            <p><b>Biznesit i nevojitet:</b></p>
            <p>${req.body.biznesitInevojitet}</p>
            </div>
            <div style="display:flex">
            <p><b>Vendi i promovimit:</b></p>
            <p>${req.body.vendiPromovimit}</p>
            </div>
            <div style="display:flex;background-color:green;width:fit-content;color:white;">
            <p><b>Price: </b></p>
            <p>${posts.price}$</p>
            </div>
            `,
        }
       await transporter.sendMail(mailOptions,function(err,info){

            if(err){
                res.status(500).send({
                    success: false,
                    message: 'Something went wrong'
                })
            }else{
                res.send({
                    success: true,
                    messagge: 'Thank you'
                })
                console.log('Thank you')
            }

        })
        console.log(posts);
    }catch(e){
        res.status(400).send(e)
    }

})

app.listen(port , () =>{

    console.log(port)

})

