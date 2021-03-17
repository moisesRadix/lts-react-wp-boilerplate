import styled from 'styled-components';

export const FormGroup = styled.div`
	color: darkslategray;
	display: block;
	width: 300px;
	margin: 15px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
	display: block;
`;

export const Input = styled.input`
	border: 1px solid #9b9c9c;
	padding: 0.5em;
	color: #424242;
	background: white;
	border-radius: 3px;
	width: 95%;
	margin-bottom: 0.5em;
	outline: none !important;
	&:focus {
		outline: none !important;
	}
`;

export const SubmitLoginButton = styled.button`
	margin-top: 0px;
	margin-bottom: 1em;
	background: #18a9ce;
	color: white;
	border: none;
	font-weight: 300;
	padding: 5px 0;
	width: 130px;
	border-radius: 3px;
	outline: none !important;
	&:focus {
		outline: none !important;
	}
`;
