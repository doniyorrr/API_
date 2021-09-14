const { Router } = require("express");
const Schema = require("../model/schema");
const router = Router();

// router.get('/' , (req , res)=>{
//     res.send('salom method of GET')
// })

router.post("/", (req, res) => {
  // const {title , category , country , year , imdb_score} = req.body

  const db = new Schema(req.body);
  // title: title,
  // category:category,
  // country:country,
  // year:year,
  // imdb_score:imdb_score,
  // title,
  // category,
  // country,
  // year,
  // imdb_score

  // })
  const promise = db.save();
  promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// list all movies
router.get("/", (req, res) => {
  const promise = Schema.find({});
  promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// get a movies. | by ID
router.get("/:movie_id", (req, res) => {
  const promise = Schema.findById(req.params.movie_id);
  promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Update a movie with new info.
router.put("/:movie_id", (req, res) => {
  const promise = Schema.findByIdAndUpdate(req.params.movie_id, req.body);
  promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// | Delete a movie. |
router.delete("/:movie_id", (req, res) => {
  const promise = Schema.findByIdAndRemove(req.params.movie_id);
  promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// | Get the top 10 movies. |
router.get("/top/top10", (req, res) => {
  const promise = Schema.find({}).limit(10).sort({ imdb_score: -1 });
  promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});


// | Movies between two dates. |
router.get("/:start_year/:end_year", (req, res) => {
    const {start_year , end_year} = req.params
  const promise = Schema.find({
      year:{'$gte': parseInt(start_year) , '$lte':parseInt(end_year)}
  });
  promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
