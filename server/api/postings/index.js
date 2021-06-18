const express = require('express');
const router = express.Router();
const knex = require('knex');

const db = require('../../db');

router.get('/', async (req, res) => {
  try {
    const postings = await db('Posting');
    res.send({
      success: true,
      data: {postings}
    });
  } catch(e) {
    res.send({
      success: false
    });
  }
});

router.post('/', async (req, res) => {
  try {
    var error = [];

    if(req.body.title == null || req.body.title == ''){
      error.push("Title cannot be empty!");
    }

    if(req.body.company == null || req.body.company == ''){
      error.push("Company cannot be empty!");
    }

    if(req.body.summary == null || req.body.summary == ''){
      error.push("Summary cannot be empty!");
    }

    if(req.body.skills == null || req.body.skills == ''){
      error.push("Skills cannot be empty!");
    }

    if(req.body.email == null || req.body.email == ''){
      error.push("Email cannot be empty!");
    }

    if(error.length > 0){
      res.send({
        success : false,
        message : "Few fields are empty",
        error : error
      })
    }
    else{
      var result = await db('Posting').insert({
        title   : req.body.title,
        company : req.body.company,
        summary : req.body.summary,
        skills  : req.body.skills,
        email   : req.body.email
      });
  
      res.send({
        success: true
      });
    }   
    
  } catch(e) {
    console.log("ERROR while adding posting\n" + e);
    res.send({
      success: false,
      message : 'Action Failed! Something went wrong!',
      error : e
    });
  }
});

module.exports = router;
