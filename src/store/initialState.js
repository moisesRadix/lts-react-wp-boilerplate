import React from 'react';
import moment from 'moment';

const initialState = {
	navbarMini: false,
	user: null,
	viewTitle: 'Home',
	integrations: [],
	organizations: [],
	currentOrg: null,
	browserInfo: {},
	currentOrgName: null,
	access: [],
	fetchIntegrations: null,
	fetchUserInfo: null,
	history: null,
	globalLoading: false,
	refetchOnPage: null,
	is_trial: false,
	subs_caducated: false,
	subscription_status: {
		status: 0,
		btn: 'Trial',
		message: "You're currently using a Free Trial Subscription",
	}, // lets init in 0 for trial
	integration_status: [],
	max_alert: {},
	show_main_filter: true,
};

export const initialTokenState = {
	integrationToken: null,
	selectionFilter: (
		<label style={{ cursor: 'pointer', marginBottom: 0, color: 'rgb(46, 203, 239)' }}>
			<b>This month </b>
			{` `}
			<small>{`${moment().startOf('month').format('MMM DD, YYYY')} - ${moment().format(
				'MMM DD, YYYY',
			)}`}</small>
		</label>
	),
	filterText: 'This Month',
	globalFilter: {
		from: moment(new Date()).startOf('month').format('YYYY-MM-DD'),
		to: moment(new Date()).format('YYYY-MM-DD'),
		groupBy: 'DAY_OF_MONTH',
		groupByResumen: 'MONTH',
	},
	filterOptionList: [],
	globalFilterOnchange: null,
};

export const webSocketState = {
	token: null,
	is_sync: false,
	sync_text: 'Sync',
	execPartialSync: null,
	percentage: null,
	is_connected: false,
	sync_notification: [],
};

export default initialState;
