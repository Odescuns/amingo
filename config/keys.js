if (process.env.NODE_ENV === 'production'){

        console.log("Env is production");
        module.exports = require('./keys_prod');
} else {
    console.log("Env is dev");
    module.exports = require('./keys_dev');
}