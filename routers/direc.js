const express = require('express');
const mongoose = require('mongoose');
dbDirector = require('../model/directors');
const router = express.Router()

router.post('/' , (req , res)=>{
    const db = new dbDirector(req.body)
    const promise = db.save()
    promise.then(data => res.json(data))
    .catch(err => console.log(err))
})

// router.get('/' , (req , res )=>{
//     const promise = dbDirector.find({})
//     promise.then(data => res.json(data))
//     .catch(err => console.log(err))
// })


router.get("/", (req, res) => {
    const promise = dbDirector.aggregate([
      {
        $lookup: {
          from: "schemas",
          localField: "_id",
          foreignField: "director_id",
          as: "film",
        },
      },
      {
        $unwind: {
          path: "$film",
        },
      },
      {
          $group:{
              _id:{
                  _id: '$_id',
                  name: "$name",
                  bio: '$bio',

                  
              },
              films:{
                  $push:'$film'
              }
          }
      },
      {
          $project:{
              _id:"$_id.id",
              name:"$_id.name",
              bio:"$_id.bio",
              films:"$films"
          }
      }
    ]);
    promise.then(data => res.json(data))
    .catch(err => console.log(err))
});


router.get("/:director_id", (req, res) => {
  const promise = dbDirector.aggregate([
    {
      $match: {
        '_id': mongoose.Types.ObjectId(req.params.director_id),
      },
    },
    {
      $lookup: {
        from: "schemas",
        localField: "_id",
        foreignField: "director_id",
        as: "film",
      },
    },
    {
      $unwind: {
        path: "$film",
      },
    },
    {
      $group: {
        _id: {
          _id: "$_id",
          name: "$name",
          bio: "$bio",
        },
        films: {
          $push: "$film",
        },
      },
    },
    {
      $project: {
        _id: "$_id.id",
        name: "$_id.name",
        bio: "_id.bio",
        film: "$films",
      },
    },
  ]);
  promise.then((data) => res.json(data)).catch((err) => console.log(err));
});

router.get('/:director_id' , (req , res) =>{
  
})

module.exports = router


















