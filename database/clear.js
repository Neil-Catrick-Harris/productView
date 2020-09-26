const connection = require('./index.js');

connection.clear((err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Cleared DB');
        console.log(res.result);
    }
});
