import { useState, useEffect, useContext } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
import { logout } from 'utils/auth/login';
import { GlobalContext } from 'views/app';
import { SET_INITIAL_STATE } from 'store/actions';
import { useHistory } from 'react-router-dom';
dotenv.config();

const clt = axios.CancelToken;
const source = clt.source();

export const REST_URI =
	process.env.NODE_ENV === 'production'
		? process.env.REACT_APP_REST_PROD_URL
		: process.env.REACT_APP_REST_DEV_URL;

export const instanceAxios = axios.create({
	baseURL: REST_URI,
	responseType: 'json',
	cancelToken: source.token,
});

export const CancelRequest = () => {
	source.cancel('Service Request Aborted');
};

const importHeaders = () => {
	return {
		'client-ip': localStorage.getItem('client-ip') || '',
		'client-browser': localStorage.getItem('client-browser') || '',
		'client-country': '',
		'client-os': localStorage.getItem('client-os') || '',
	};
};

export const verficarTokenLogin = async () => {
	const TOKEN = localStorage.getItem('token');
	// alert(JSON.stringify(TOKEN))
	return await axios
		.post(
			REST_URI + '/user/refreshToken',
			{ token: TOKEN },
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + TOKEN,
				},
			},
		)
		.then(
			(response) => {
				localStorage.setItem('token', response.data.token);
				return true;
			},
			(err) => {
				localStorage.clear();
				return false;
			},
		)
		.catch((error) => {
			localStorage.clear();
			// mhhyHistory.go('/auth/login');
			console.error('Verify Token Error in Catch');
			return false;
		});
};

// custom hook for authorized endpoints
/**
 * <function description>
 * customAxios Hook for authorized endpoints
 * @moisesRadix
 * @param {object} configBody Configuration object to call endpoint.
 * @param {boolean} configBody.tokenAlready In case of multiple calls, set this to avoid a refreshToken verification.
 * @param {string} configBody.url  enpoint url for request.
 * @param {string} configBody.method "GET"|POST"|"PUT"|"DELETE"
 * @param {boolean} configBody.automatic Execute the hook automatically in case of true.
 * @param {function} configBody.onSuccess function callback on a successfull response
 * @param {function} configBody.onError function callback on a failed response
 */
export const useAuthorizedApi = ({
	tokenAlready = false,
	url,
	method = 'get',
	contentType = 'application/json',
	automatic = false,
	onSuccess = null,
	onError = null,
}) => {
	const { state, dispatch, dispatchSync } = useContext(GlobalContext);
	const hist = useHistory();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const executeService = async (body = {}) => {
		try {
			setLoading(true);
			const TOKEN = localStorage.getItem('token');
			if (tokenAlready) {
				const response = await instanceAxios({
					method: method,
					url: url,
					data: body,
					params: method === 'get' ? body : null,
					headers: {
						'Content-Type': contentType,
						Authorization: 'Bearer ' + TOKEN,
						...importHeaders(),
					},
				});

				setLoading(false);
				setError(null);
				setData(response.data);
				if (onSuccess) {
					onSuccess(response);
				}
			} else {
				const tkn = await verficarTokenLogin();
				if (tkn) {
					const response = await instanceAxios({
						method: method,
						url: url,
						data: body,
						headers: {
							'Content-Type': contentType,
							'client-ip': localStorage.getItem('client-ip') || '',
							'client-browser': localStorage.getItem('client-browser') || '',
							'client-country': '',
							'client-os': localStorage.getItem('client-os') || '',
							Authorization: 'Bearer ' + TOKEN,
						},
					});
					setLoading(false);
					setError(null);
					setData(response.data);
					if (onSuccess) {
						onSuccess(response);
					}
				} else {
					// CancelRequest();
					dispatch({ type: SET_INITIAL_STATE });
					dispatchSync({ type: 'CLEAR' });
					logout(hist);
				}
			}
			// const  response = await
		} catch (error) {
			// console.log('Authorized Api Error:', error);

			setLoading(false);
			setData(null);
			setError({
				message: error.message,
				statusText: error.response ? error.response.statusText : null,
				code: error.response ? error.response.status : 500,
				payload: error.response
					? error.response.data
						? error.response.data.payload
							? error.response.data.payload.message
							: error.response.data.message
						: `Temporarily out of service`
					: `Temporarily out of service`,
			});
			if (onError) {
				onError({
					message: error.message,
					statusText: error.response ? error.response.statusText : null,
					code: error.response ? error.response.status : 500,
					payload: error.response
						? error.response.data
							? error.response.data.payload
								? error.response.data.payload.message
								: error.response.data.message
							: `Temporarily out of service`
						: `Temporarily out of service`,
				});
			}
		}
	};

	useEffect(() => {
		if (automatic) {
			executeService();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { data, loading, error, executeService };
};

/**
 * <function description>
 * customAxios Hook for non-authorized (free) endpoints.
 * @moisesRadix
 * @param {string} url  enpoint url for request.
 * @param {string} method "GET"|POST"|"PUT"|"DELETE"
 * @param {function} options.onSuccess function callback on a successfull response
 * @param {function} options.onError function callback on a failed response
 */
export const useFreeApi = (
	url,
	method = 'get',
	options = { onSuccess: null, onError: null, headers: {} },
) => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const { state } = useContext(GlobalContext);

	const executeService = async (body = {}) => {
		try {
			setLoading(true);
			const myheaders = options.headers;
			const response = await instanceAxios({
				method: method,
				url: url,
				data: body,
				headers: {
					'Content-Type': 'application/json',
					...importHeaders(),
					...myheaders,
				},
			});
			setData(response.data);
			setError(null);
			setLoading(false);
			if (options.onSuccess) {
				options.onSuccess(response);
			}
		} catch (error) {
			setData(null);
			setLoading(false);
			setError({
				message: error.message,
				statusText: error.response ? error.response.statusText : null,
				code: error.response ? error.response.status : 500,
				payload: error.response
					? error.response.data
						? error.response.data.payload
							? error.response.data.payload.message
							: error.response.data.message
						: `Temporarily out of service`
					: `Temporarily out of service`,
			});
			if (options.onError) {
				options.onError({
					message: error.message,
					statusText: error.response ? error.response.statusText : null,
					code: error.response ? error.response.status : 500,
					payload: error.response
						? error.response.data
							? error.response.data.payload
								? error.response.data.payload.message
								: error.response.data.message
							: `Temporarily out of service`
						: `Temporarily out of service`,
				});
			}
		}
	};

	return { data, loading, error, executeService };
};

export const useAuthorizedMultiple = ({
	url = [],
	contentType = 'application/json',
	onSuccess = null,
	onError = null,
}) => {
	const { state } = useContext(GlobalContext);

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const executeServiceList = async () => {
		try {
			setLoading(true);
			const tkn = await verficarTokenLogin();
			if (tkn) {
				const TOKEN = localStorage.getItem('token');
				const allRequest = await Promise.all(
					url.map((request) => {
						return instanceAxios({
							method: request.method ? request.method : 'GET',
							url: request.url,
							data: request.body ? request.body : {},
							headers: {
								'Content-Type': contentType,
								...importHeaders(),
								Authorization: 'Bearer ' + TOKEN,
							},
						});
					}),
				);

				setLoading(false);
				setError(null);
				setData(allRequest);
				if (onSuccess) {
					onSuccess(allRequest);
				}
			} else {
				logout(state.history);
			}
		} catch (error) {
			setLoading(false);
			setData(null);
			setError({
				message: error.message,
				statusText: error.response ? error.response.statusText : null,
				code: error.response ? error.response.status : 500,
				payload: error.response
					? error.response.data
						? error.response.data.payload
							? error.response.data.payload.message
							: error.response.data.message
						: `Temporarily out of service`
					: `Temporarily out of service`,
			});
			if (onError) {
				onError({
					message: error.message,
					statusText: error.response ? error.response.statusText : null,
					code: error.response ? error.response.status : 500,
					payload: error.response
						? error.response.data
							? error.response.data.payload
								? error.response.data.payload.message
								: error.response.data.message
							: `Temporarily out of service`
						: `Temporarily out of service`,
				});
			}
		}
	};

	return { data, loading, error, executeServiceList };
};

export const useFreeMultiple = ({
	url = [],
	contentType = 'application/json',
	onSuccess = null,
	onError = null,
}) => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const executeFreeServiceList = async () => {
		try {
			setLoading(true);
			const allRequest = await Promise.all(
				url.map((request) => {
					return instanceAxios({
						method: request.method ? request.method : 'GET',
						url: request.url,
						data: request.body ? request.body : {},
						headers: {
							'Content-Type': contentType,
						},
					});
				}),
			);

			setLoading(false);
			setError(null);
			setData(allRequest);
			if (onSuccess) {
				onSuccess(allRequest);
			}
		} catch (error) {
			setLoading(false);
			setData(null);
			setError({
				message: error.message,
				statusText: error.response ? error.response.statusText : null,
				code: error.response ? error.response.status : 500,
				payload: error.response
					? error.response.data
						? error.response.data.payload
							? error.response.data.payload.message
							: error.response.data.message
						: `Temporarily out of service`
					: `Temporarily out of service`,
			});
			if (onError) {
				onError({
					message: error.message,
					statusText: error.response ? error.response.statusText : null,
					code: error.response ? error.response.status : 500,
					payload: error.response
						? error.response.data
							? error.response.data.payload
								? error.response.data.payload.message
								: error.response.data.message
							: `Temporarily out of service`
						: `Temporarily out of service`,
				});
			}
		}
	};

	return { data, loading, error, executeFreeServiceList };
};

// no Hook Axios Method
/**
 * <function description>
 * @moisesRadix
 * Normal axios endpoint fetch function (async)
 * @param {string} url enpoint url for request
 * @param {object} bodyData body object in case of a non-get method
 * @param {string} method "GET"|POST"|"PUT"|"DELETE"
 * @param {string} contentType [Optional] Content type
 */
export const CustomAxios = async (
	url = '',
	bodyData = {},
	method = 'post',
	contentType = 'application/json',
) => {
	try {
		const isLogin = await verficarTokenLogin();
		if (isLogin) {
			const TOKEN = localStorage.getItem('token');
			return await instanceAxios({
				method: method,
				url: url,
				data: bodyData,
				headers: {
					'Content-Type': contentType.toString(),
					...importHeaders(),
					Authorization: 'Bearer ' + TOKEN,
				},
			});
		} else {
			return {
				error: {
					message: 'Token Expired',
				},
			};
		}
	} catch (error) {
		// console.log('CustomAxios Error:', error);
		return {
			error: {
				message: error.message,
				statusText: error.response ? error.response.statusText : null,
				code: error.response ? error.response.status : 500,
				payload: error.response
					? error.response.data
						? error.response.data.payload
							? error.response.data.payload.message
							: error.response.data.message
						: `Temporarily out of service`
					: `Temporarily Out Of Service`,
			},
		};
	}
};

/**
 * <function description>
 * @moisesRadix
 * Alternative axios endpoint fetch function
 * @param {string} url enpoint url for request
 * @param {object} bodyData body object in case of a non-get method
 * @param {string} method "GET"|POST"|"PUT"|"DELETE"
 * @param {string} contentType [Optional] Content type
 * @returns {Promise<void>} Promise
 */
export const CustomAxiosPromise = (url = '', bodyData = {}, method = 'post') => {
	return new Promise(async (res, rej) => {
		try {
			const isLogin = await verficarTokenLogin();
			if (isLogin) {
				const TOKEN = localStorage.getItem('token');
				const response = await instanceAxios({
					method: method,
					url: url,
					data: bodyData,
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + TOKEN,
						...importHeaders(),
					},
				});
				res(response);
			} else {
				rej({
					error: {
						message: 'Token Expired',
					},
				});
			}
		} catch (error) {
			rej({ message: error });
		}
	});
};
