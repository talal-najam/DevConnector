const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {

	let errors = {};

	// Have field go through custom isEmpty to check if it is null then set it to empty string
	data.text = !isEmpty(data.text) ? data.text : '';

	if(!Validator.isLength(data.text, { min: 10, max: 300})) {
		errors.text = 'Post must be between 10 and 300 characters';
	}

	if(Validator.isEmpty(data.text)) {
		errors.text = 'Text field is required';
	}




	return {
		errors,
		isValid: isEmpty(errors)
	}
}
