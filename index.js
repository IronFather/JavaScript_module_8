console.log(`привіт node.js`);

const Joi = require(`joi`);

const password = Joi.string().min(3).max(10).alphanum();

console.log(password.validate(`gerrrvvggbgbgrbg`));

const func = () => {
    console.log(`It's great day`);
}