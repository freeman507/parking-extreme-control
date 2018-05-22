module.exports = {

    save: (model, onSuccess, onError) => {

        model.save((error, result) => {
            if (error) {
                onError(error);
            } else {
                onSuccess(result);
            }
        });
    },

    update: (model, id, onSuccess, onError) => {

        model.save([model.primaryKey, id].join('='), (error, result) => {
            if (error) {
                onError(error);
            } else {
                onSuccess(result);
            }
        });
    },

    findAll: (model, onSuccess, onError) => {

        model.find((error, result) => {
            if (error) {
                onError(error);
            } else {
                onSuccess(result);
            }
        });
    },

    findById: (model, id, onSuccess, onError) => {

        model.find('first', { where: [model.primaryKey, id].join('=') }, (error, result) => {
            if (error) {
                onError(error);
            } else {
                onSuccess(result);
            }
        });
    },

    remove: (model, id, onSuccess, onError) => {

        model.remove([model.primaryKey, id].join('='), (error, result) => {
            if (error) {
                onError(error);
            } else {
                onSuccess(result);
            }
        });
    },

}
