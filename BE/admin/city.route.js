const express = require('express');
const cityRoute = express.Router(); 
const City = require('./city.model');
// Save city
cityRoute.post('/save', (req, res) => {
    var city = new City(req.body);
    city.save()
        .then(() => res.send('City saved'))
        .catch(err => res.send(err));
});

// Search city
cityRoute.get('/search/:ctid', (req, res) => {
    City.findOne({"ctid": req.params.ctid})
        .then(city => res.send(city))
        .catch(err => res.send(err));
});

// Update city
cityRoute.put('/update', (req, res) => {
    City.updateOne(
        {"ctid": req.body.ctid},
        {"ctname": req.body.ctname, "stid": req.body.stid, "status": req.body.status}
    )
    .then(() => res.send('City updated successfully'))
    .catch(err => res.send(err));
});

// Delete (disable) city
cityRoute.delete('/delete/:ctid', (req, res) => {
    City.updateOne({"ctid": req.params.ctid}, {"status": 0})
        .then(() => res.send('City disabled successfully'))
        .catch(err => res.send(err));
});

// Show all cities
cityRoute.get('/show', (req, res) => {
    City.find({"status": 1})
        .then(cities => res.send(cities))
        .catch(err => res.send(err));
});
cityRoute.get('/getall', (req, res) => {
    City.find()
        .then(city => res.send(city))
        .catch(err => res.send(err));
});


// Show cities by state
cityRoute.get('/showcitybystate/:stid', (req, res) => {
    City.find({ stid: req.params.stid, status: 1 })
        .then(cities => res.json(cities))
        .catch(err => res.status(500).send(err));
});
//search city by name
cityRoute.get('/searchbyname/:ctname', (req, res) => {
    City.findOne({"ctname": req.params.ctname})
        .then(city =>{ res.send(city);
        res.end();
        })
        .catch(err => {
            res.send(err);
        });
});
module.exports = cityRoute;