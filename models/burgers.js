const orm = require('../config/orm');

//build out models - look at cat activities in the model folder
const burger = {
    all(cb) {
        orm.all('burgers', (res) => cb(res))
    },
    create(cols, vals, cb) {
        orm.create('burgers', col, val, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, (res) => cb(res));
    },
};
module.exports = burger;