const mysql = require('./../config/mysql');

module.exports = {

    exec: (query, onSuccess, onError) => {

        mysql.query(query, (error, result, fields) => {
            if (error) {
                onError(error);
            } else {
                onSuccess(result);
            }
        });

    }
};
