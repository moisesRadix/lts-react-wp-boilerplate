import { DEFAULT_VIEW_USER } from '../constants';

export const logout = (history) => {
	history.push('/auth/login');
	localStorage.removeItem('token');
	localStorage.removeItem('refreshToken');
	localStorage.removeItem('current_org');
	localStorage.removeItem('integrationToken');
	localStorage.removeItem('integrationTokenSelection');
};

export const login = (token, refreshToken, history) => {
	localStorage.removeItem('token');
	localStorage.removeItem('refreshToken');
	localStorage.removeItem('current_org');
	localStorage.removeItem('integrationToken');
	localStorage.removeItem('integrationTokenSelection');
	localStorage.setItem('token', token);
	localStorage.setItem('refreshToken', refreshToken);
	history.push(DEFAULT_VIEW_USER);
};
