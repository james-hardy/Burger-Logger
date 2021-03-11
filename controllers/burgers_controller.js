const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject)
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    console.log(req.body);
    burger.create(['burger_name', 'devoured'], [req.body.burger_name, 0], (result) => {
        res.json({ id: result.insertId});
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);
    console.log(req.params);
    burger.update(
        // table, objColVals, condition, cb
        condition, function (result) {
            console.log(result);
        }

        // {
        //     devoured: req.body.devour,
        // },
        // condition,
        // (result) => {
        //     if (result.changedRows === 0){
        //         return res.status(404).end();
        //     }
        //     res.status(200).end()
        // }
    );
});

module.exports = router;