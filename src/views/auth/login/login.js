import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Card } from '../../../components/cards/simpleCard';
import { FormGroup, Input, SubmitLoginButton } from '../../../components/formComponents';
import { useFreeApi } from '../../../utils/rest/Index';
import useForm from '../../../utils/useForm';
import { GlobalContext } from '../../app';
import loginSchema from './loginSchema';
import { login as loginUtil } from '../../../utils/auth/login';
import { BeatLoader } from 'react-spinners';

const LoginContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	position: relative;
	top: 0;
	background-color: #18a9ce;
	background-image: linear-gradient(43deg, #00cbff 0%, #4872d233 46%, #ffffff 100%);
	div > h2 {
		text-align: center;
		margin-bottom: 0;
		margin-top: 0;
	}
`;

const LoginImage = styled.img`
	width: 60%;
	text-align: center;
	margin-left: auto;
	margin-right: auto;
`;

export default function Login(props) {
	const { dispatch, state } = useContext(GlobalContext);
	const { browserInfo } = state;
	const [showPassword, setShowPassword] = useState(false);
	const { loading, error, data, executeService } = useFreeApi('/user/login', 'post');
	const handleShowPassword = () => setShowPassword(!showPassword);
	const getDefaultValues = () => {
		return {
			email: '',
			password: '',
		};
	};
	// PLEASE BE CAREWFULL THESE CODE LINE ARE SOOOOOOO IMPORTANT, DON'T BE SILLY, DON'T BE STUPID
	// ANALYSE EVERITHING BEFORE ANY CHANGE PLEASE
	const submitForm = () => {
		// I'm removing cleaning general state on loggin submit (before executing request)
		// dispatch({ type: SET_INITIAL_STATE });
		// // loginUtil("Im a token", "I am a refresh token", props.history);
		executeService(values);
	};

	const { values, errors, handleChange, handleSubmit, handleBlur, classNames } = useForm(
		submitForm,
		getDefaultValues(),
		loginSchema,
	);
	useEffect(() => {
		if (data && !error && !loading) {
			// I'm removing cleaning general state after login success response
			// dispatch({ type: SET_INITIAL_STATE });
			loginUtil(data.Token, data.Token, props.history);
		}
	}, [data, props.history, error, loading]);
	return (
		<LoginContainer>
			<Card>
				<LoginImage src='https://radixhaven.com/wp-content/uploads/2020/08/logoRadix.png' />
				<h2>Login</h2>
				<div style={{ margin: '1rem' }}>
					<div className='has-danger' style={{ fontWeight: 'bold' }}>
						{error?.payload}
					</div>
					<form onSubmit={handleSubmit} noValidate>
						<FormGroup>
							<label>Email</label>
							<Input
								name='email'
								id='email'
								onChange={handleChange}
								value={values.email || ''}
								onBlur={handleBlur}
								type='email'
							/>
							{errors.email && (
								<small className={classNames.email}>
									<b>{errors.email}</b>
								</small>
							)}
						</FormGroup>
						<FormGroup>
							<label>Password</label>
							<Input
								placeholder='Password'
								type={showPassword ? 'text' : 'password'}
								name='password'
								id='password'
								autoComplete='off'
								onChange={handleChange}
								value={values.password || ''}
								onBlur={handleBlur}
							/>
							{errors.password && (
								<small className={classNames.password}>
									<b>{errors.password}</b>
								</small>
							)}
						</FormGroup>
						<div style={{ textAlign: 'center', marginTop: 10 }}>
							<SubmitLoginButton type='submit'>
								{loading ? <BeatLoader size={10} color='#F1EAE0' loading /> : 'Login'}
							</SubmitLoginButton>
						</div>
					</form>
					<div className='text-center p-t-115'>
						{' '}
						<span className='txt1'> Don’t have an account? </span>{' '}
						<a className='txt2' href='#'>
							{' '}
							Sign Up{' '}
						</a>{' '}
					</div>
				</div>
			</Card>
		</LoginContainer>
	);
}
