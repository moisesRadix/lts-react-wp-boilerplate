import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../components/cards/simpleCard';
import { FormGroup, Input } from '../../../components/formComponents';

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

export default function Login() {
	return (
		<LoginContainer>
			<Card>
				<LoginImage src='https://radixhaven.com/wp-content/uploads/2020/08/logoRadix.png' />
				<h2>Login</h2>
				<div style={{ margin: '1rem' }}>
					<form>
						<FormGroup>
							<label>Username</label>
							<Input />
						</FormGroup>
						<FormGroup>
							<label>Password</label>
							<Input />
						</FormGroup>
					</form>
					<div class='text-center p-t-115'>
						{' '}
						<span class='txt1'> Don’t have an account? </span>{' '}
						<a class='txt2' href='#'>
							{' '}
							Sign Up{' '}
						</a>{' '}
					</div>
				</div>
			</Card>
		</LoginContainer>
	);
}
