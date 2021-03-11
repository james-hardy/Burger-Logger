const orm = require('../config/orm.js');

//build out models - look at cat activities in the model folder
const burger = {
    all(cb) {
        orm.all('burgers', (res) => cb(res))
    },
    create(cols, vals, cb) {
        orm.create('burgers', cols, vals, (res) => cb(res));
    },
    update(condition, cb) {
        orm.update('burgers', {devoured:true}, condition, (res) => cb(res));
    },
};
module.exports = burger;