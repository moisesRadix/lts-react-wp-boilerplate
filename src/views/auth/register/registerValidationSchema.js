import Joi from '@hapi/joi';
/*eslint no-useless-escape: 0*/
export const registerStep2Schema = {
	name: Joi.string().required().label('Company Name').messages({
		'string.base': 'Company Name is required',
		'any.required': 'Company Name is required',
		'string.empty': 'Company Name is required',
	}),
	id_org_size: Joi.number().required().label('Company Size').messages({
		'number.base': 'Company Size is not valid',
		'number.required': 'Company Size is required',
	}),
	id_job: Joi.number().required().label('Teams').messages({
		'number.base': 'Teams is not valid',
		'number.required': 'Teams is required',
	}),

	website: Joi.string()
		.required()
		.label('Website')
		.pattern(
			new RegExp(
				/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
			),
		)
		.messages({
			'string.pattern.base': 'Website must be a valid URL',
			'string.base': 'Website is not valid',
			'string.empty': 'Website is required',
		}),
	country: Joi.number().required().label('Country').messages({
		'number.required': 'Country is required',
		'any.required': 'Country is required',
		'string.base': 'Country is required',
	}),
	state: Joi.number().required().label('State').messages({
		'number.base': 'State is not valid',
		'number.required': 'Country is required',
	}),
	city: Joi.number().required().label('City').label('City').messages({
		'number.base': 'State is not valid',
		'number.required': 'Country is required',
	}),
};

export const registerStep1Schema = {
	first_name: Joi.string().required().label('First name').messages({
		'string.base': 'First name is required',
		'any.required': 'First name is required',
		'string.empty': 'First name is required',
	}),
	last_name: Joi.string().required().label('Last name').messages({
		'string.base': 'Last name is required',
		'any.required': 'Last name is required',
		'string.empty': 'Last name is required',
	}),
	company_name: Joi.string().required().label('Company Name').messages({
		'string.base': 'Company Name is required',
		'any.required': 'Company Name is required',
		'string.empty': 'Company Name is required',
	}),
	id_org_size: Joi.number().required().label('Company Size').messages({
		'number.base': 'Company Size is not valid',
		'number.required': 'Company Size is required',
	}),
	email: Joi.string()
		.required()
		.email({ minDomainSegments: 2, tlds: { allow: false } })
		.label('Email')
		.messages({
			'string.email': 'Please enter a valid Email address.',
			'any.required': 'Email is a required',
			'string.empty': 'Email is a required',
		}),

	password: Joi.string()
		.required()
		.label('password')
		.pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=\-!*()@%&]).{8,}$/))
		.messages({
			'string.pattern.base': "Password doesn't meet the minimum requirements",
			'any.required': 'Password is required',
			'string.empty': 'Password is required',
			'any.ref': 'Passwords must match',
		}),
	confirmPassword: Joi.required()
		.valid(Joi.ref('password'))
		.messages({ 'any.only': 'Passwords must match' }),
	id_terms: Joi.string().required().min(7).label('Terms').messages({
		'string.base': 'Terms must be accepted!',
		'any.required': 'Terms must be accepted!',
		'string.empty': 'Terms must be accepted!',
	}),
};

export const collaboratorSchema = {
	first_name: Joi.string().required().label('First name').messages({
		'string.base': 'First name is required',
		'any.required': 'First name is required',
		'string.empty': 'First name is required',
	}),
	last_name: Joi.string().required().label('Last name').messages({
		'string.base': 'Last name is required',
		'any.required': 'Last name is required',
		'string.empty': 'Last name is required',
	}),

	password: Joi.string()
		.required()
		.label('password')
		.pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=\-!*()@%&]).{8,}$/))
		.messages({
			'string.pattern.base': "Password doesn't meet the minimum requirements",
			'any.required': 'Password is required',
			'string.empty': 'Password is required',
			'any.ref': 'Passwords must match',
		}),
	confirmPassword: Joi.required()
		.valid(Joi.ref('password'))
		.messages({ 'any.only': 'Passwords must match' }),
	id_terms: Joi.string().required().min(7).label('Terms').messages({
		'string.base': 'Terms must be accepted!',
		'any.required': 'Terms must be accepted!',
		'string.empty': 'Terms must be accepted!',
	}),
};
