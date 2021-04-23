const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios').default;

const router = express.Router();

//get request to get synonym
router.get('/synonym/:synonym', (req, res)=>{
    console.log(`in synonym with ${req.params.synonym}`)
    axios.request({
        method: 'GET',
        url: `https://wordsapiv1.p.rapidapi.com/words/${req.params.synonym}/synonyms`,
        headers: {
        'x-rapidapi-key': `${process.env.WORDS}`,
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
        }
  }).then(function (response) {
        console.log(response.data);
        res.send(response.data)
    }).catch(function (error) {
        console.error(error);
        res.sendStatus(500)
    });
})

//get request to get rhyming word
router.get('/rhyme/:rhyme', (req, res)=>{
    console.log(`in synonym with ${req.params.synonym}`)
    axios.request({
        method: 'GET',
        url: `https://wordsapiv1.p.rapidapi.com/words/${req.params.rhyme}/rhymes`,
        headers: {
        'x-rapidapi-key': `${process.env.WORDS}`,
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
        }
  }).then(function (response) {
        console.log(response.data);
        res.send(response.data)
    }).catch(function (error) {
        console.error(error);
        res.sendStatus(500)
    });
})

module.exports = router;
