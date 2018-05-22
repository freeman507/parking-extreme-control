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

    findAll: (model, onSuccess, onError) => {

        model.find((error, result) => {
            if (error) {
                onError(error);
            } else {
                onSuccess(result);
            }
        });
    },

    findById: (model, onSuccess, onError) => {

        model.find((error, result) => {
            if (error) {
                onError(error);
            } else {
                onSuccess(result);
            }
        });
    },

    remove: (model, id, onSuccess, onError) => {

        model.remove([model.id, id].join('='));

        onSuccess();
    },

}
