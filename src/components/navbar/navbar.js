import React from 'react';
import ReactDropdown from 'react-dropdown';
import styled from 'styled-components';
import { LogoRadix } from '../sidebar/sidebar';

const NavbarStyled = styled.nav`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: transparent;
	li {
		float: left;
		a {
			display: block;
			color: #2c2c2c;
			text-align: center;
			padding: 18px 16px;
			font-weight: 600;
			text-decoration: none;
		}
	}
	.active {
		background-color: #f1f1f1;
	}
	.nav-settings {
		float: right;
	}
`;

export default function Navbar() {
	return (
		<NavbarStyled>
			{/* <li>
        <a className="active" href="#home">
          <LogoRadix />
        </a>
      </li> */}
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
				<a href='#Settings'>
					<ReactDropdown
						options={['Settings', 'Logout']}
						menuClassName='card-menu'
						value='Menu'
					/>
				</a>
			</li>
		</NavbarStyled>
	);
}
