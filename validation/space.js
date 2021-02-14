const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

module.exports = function validateSpaceInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.address = !isEmpty(data.address) ? data.address : '';
    data.cost = !isEmpty(data.cost) ? data.cost : '';

    // address checks
    if (Validator.isEmpty(data.address)) {
        errors.address = 'Address field is required';
    }

    // cost checks
    if (Validator.isEmpty(data.cost)) {
        errors.passworcostd = 'Cost field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};
