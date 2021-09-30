const {Router} = require('express');
const bcrypt = require('bcryptjs');
const Schema = require('../model/register');
const jwt = require('jsonwebtoken');
const router = Router()

router.get('/register' , (req , res )=>{
    res.send('method of get')
})

router.post('/register'  ,(req , res) =>{
    const {username , password} = req.body
    bcrypt.hash(password , 10 , (err , hash)=>{
            const db = new Schema({
              username,
              password : hash
            });
            const promise = db.save();
            promise
              .then((data) => res.json(data))
              .catch((err) => console.log(err));
    })

})


router.post("/authenticate", (req, res) => {
  const { username, password } = req.body;
  Schema.findOne({username} , (err , data) =>{
      if(err) 
        throw err
      if(!data)
        res.json({
            status:404,
            message: "username xato kiritildi"
        })  
      else{
          bcrypt.compare(password , data.password )
          .then(pass => {
              if(!pass){
                  res.json({
                      status:false,
                      message:'parolingiz xato kiritildi'
                  })
              }
              else{
                  const server = {username }
                    const token = jwt.sign(
                      server,
                      req.app.get("api_secret_key") ,
                      {expiresIn: 720 }
                    );

                    res.json({
                        status: true,
                        token
                    })
              }
          }) 
      }  
  })
});










module.exports =router









