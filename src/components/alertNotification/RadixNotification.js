import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

export default function RadixNotification({
	confirmAlert,
	onConfirm = () => {},
	onCancel = () => {},
	children,
	title = '',
}) {
	return (
		<SweetAlert
			warning
			showCancel
			confirmBtnText='Yes'
			confirmBtnBsStyle='success'
			cancelBtnBsStyle='danger'
			title={title}
			show={confirmAlert}
			onConfirm={onConfirm}
			onCancel={onCancel}>
			{children}
		</SweetAlert>
	);
}
