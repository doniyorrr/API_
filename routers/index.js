const {Router} = require('express');
const Schema = require('../model/schema');
const router = Router()


// // .limit
router.get('/' , (req , res)=>{
    Schema.find({} , (err , data)=>{
        res.json(data)
    }).limit(2)
})

// // .skip
// router.get("/db", (req, res) => {
//   Schema.find({}, (err, data) => {
//     res.json(data);
//   }).skip(2);
// });

// .sort({})
// router.get("/db", (req, res) => {
//   Schema.find({}, (err, data) => {
//     res.json(data);
//   }).sort({
//       author:-1
//   });
// });

//aggregate
// router.get("/aggregate", (req, res) => {
//   Schema.aggregate([
//     //   {$match:{author:'msi'}}
//     // {$group:{_id : `$author` , total:{$sum: 1}}}
//     // {$project: {title:1 , author: 1}}
//     // {$sort: {title:1}}

//   ] , (err , data)=>{
//       res.json(data);
//   })
// });

// aggregate lookup
// router.get("/aggregate", (req, res) => {
//   Schema.find({
//       author:{
//           $exists:false /// true
//       }
//   } ,"title" ,  (err , data)=>{
//       res.json(data)
//   })
// });


// validator




router.post("/db", (req, res) => {
    const db = new Schema({
        title:'sphp',
        author:'qwerty',
        price:1200,
        year:2020,

    }) 
    db.save((err , data)=>{
        res.json(data)
    })
});

module.exports = router

















