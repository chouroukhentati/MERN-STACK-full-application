const express = require('express');

const router = express.Router();

const bcrypt =require('bcrypt');

const config=require('config');
const jwt=require('jsonwebtoken');

//USER model

const User = require('../../models/User');

// route GET api/users
// register new Users 
// access Public

router.post('/',async (req,res)=>{
    console.log(req.body)
    const {name,email,password}=req.body;
    ///validation
    if(!name||!email||!password){
        return res.status(400).json({msg:'please enter all fields'})

         
    }
    //check for existing 
    User.findOne({email}).then(user=>{
        
        if(user){
            return res.status(400).json({msg:'user already exists'})
        }else {
        
        // Create salt and Hash
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(req.body.password,salt,(err,hash)=>{
                if(err) throw err;
                else{
                    
                    const newUser= new User({
                        name,
                        email,
                        password:hash
                    })
                    console.log(newUser)
                newUser.save()
                .then(result=>res.send(result))
          .then(client=>{
              jwt.sign(
                  {id:client._id},config.get('jwtSecret'),
                  {expiresIn:3600},
                  (err,token)=>{
                      if(err) throw err;
                      res.json({
                          token,
                          user:{
                              id:client._id,
                              name:client.name,
                              email:client.email
                          }
                      })
                  }
              )
          }).catch(er=>console.log(er))
        //      } })
        // //     })
      
                }  // // })
    })
})
}})
})

module.exports = router;