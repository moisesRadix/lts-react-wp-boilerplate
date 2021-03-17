import React from 'react';
import styled from 'styled-components';
import { Card } from '../components/cards/simpleCard';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import TableBuilder from '../components/table/tableBuilder';
import { all_products_rec, data_all_products } from '../utils/mock_data';

const MainContentStyled = styled.main`
	margin-left: 60px;
	padding: 1px 16px;
	height: 100vh;
	background: #0992a9;
	color: #f7f7f7;
`;
export default function AdminLayout() {
	return (
		<React.Fragment>
			<Navbar />
			<Sidebar />
			<MainContentStyled>
				<h1>Welcome To Radix Haven Styled Component Template!</h1>
				<Card>
					<TableBuilder data={data_all_products} columns={all_products_rec} />
				</Card>
			</MainContentStyled>
		</React.Fragment>
	);
}
