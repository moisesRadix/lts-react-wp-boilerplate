import React from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { authRoutes } from 'routes';
import InvitationDecline from 'views/auth/invitationVerification/InvitationDecline';
import RegisterNewCollaborator from 'views/auth/register/collaboratorForm';
import RegisterForm from 'views/auth/register/register';
import AuthLayout from './Auth';
import RegisterLayout from './Register';

export default function NewAuthLayout() {
	const hist = useHistory();
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
			{!hist.location.pathname.includes('register') &&
			!hist.location.pathname.includes('invite') ? (
				<AuthLayout>
					<Switch>
						{getRoutes(authRoutes)}
						<Route exact path='/auth/decline/:token' component={InvitationDecline} />
					</Switch>
				</AuthLayout>
			) : (
				<RegisterLayout>
					<Switch>
						<Route path='/auth/register' exact component={RegisterForm} />;
						<Route path='/auth/invite/:token' exact component={RegisterNewCollaborator} />;
					</Switch>
				</RegisterLayout>
			)}
		</>
	);
}
