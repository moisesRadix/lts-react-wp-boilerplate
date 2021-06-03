import React from 'react';
import { Route } from 'react-router';
import rocket from 'assets/img/svg/login/rocket.svg'
import './authLayout.scss';

export default function AuthLayout(props) {
	const getRoutes = (routes) => {
		return routes.map((prop, key) => {
			if (prop.collapse) {
				return this.getRoutes(prop.views);
			}
			if (prop.layout === '/auth') {
				return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
			} else {
				return null;
			}
		});
	};
	return (
		<>
			<div className='main-auth'>
				{props.children}
				<div className="rocketContainer">
					<img className="rocketContainer-rocket" src={rocket} alt="rocket"/>
				</div>
			</div>
		</>
	);
}
