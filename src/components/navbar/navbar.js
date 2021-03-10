import React from 'react';
import styled from 'styled-components';
import { LogoRadix } from '../sidebar/sidebar';

const NavbarStyled = styled.nav`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #333;
	li {
		float: left;
		a {
			display: block;
			color: white;
			text-align: center;
			padding: 14px 16px;
			text-decoration: none;
		}
		a:hover:not(.active) {
			background-color: #111;
		}
	}
	.active {
		background-color: #4caf50;
	}
	.nav-settings {
		float: right;
	}
`;

export default function Navbar() {
	return (
		<NavbarStyled>
			<li>
				<a className='active' href='#home'>
					<LogoRadix />
				</a>
			</li>
			<li>
				<a href='#news'>News</a>
			</li>
			<li>
				<a href='#contact'>Contact</a>
			</li>
			<li>
				<a href='#about'>About</a>
			</li>
			<li className='nav-settings'>
				{' '}
				<a href='#Settings'>Settings</a>
			</li>
		</NavbarStyled>
	);
}
