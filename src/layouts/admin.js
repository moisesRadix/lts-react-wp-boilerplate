import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';

const MainContentStyled = styled.main`
	margin-left: 77px;
	padding: 1px 16px;
	height: 100%;
`;
export default function AdminLayout() {
	return (
		<React.Fragment>
			<Navbar />
			<Sidebar />
			<MainContentStyled>
				<h1>Hello World</h1>
			</MainContentStyled>
		</React.Fragment>
	);
}
