import React, { useState } from 'react';

export default function GlobalNotification({
	isFirst = true,
	title,
	body,
	type = 'error',
	dismiss = false,
}) {
	const [display, setDisplay] = useState(true);
	const myStyles = {
		witdh: '30rem',
		backgroundColor: '#ffffff',
		border:
			type === 'error'
				? '1px solid #fc5e3a'
				: type === 'success'
				? '1px solid #39B570'
				: '1px solid #faa66e',
		borderRadius: 5,
		color: '#464646',
		display: 'flex',
		justifyContent: 'flex-start',
		lineHeight: 1,
		alignItems: 'center',
		marginTop: !isFirst ? '-2px' : 0,
		marginRight: '1rem',
		marginLeft: '1rem',
		marginBottom: '1rem',
	};

	return (
		display && (
			<div
				className='alert alert-danger alert-server mb-1 pb-2 pt-2'
				style={myStyles}
				role='alert'>
				<div className='mr-3'>
					<i
						className={
							type === 'success'
								? 'fa fa-check-square-o fa-2x'
								: 'fa fa-exclamation-triangle fa-2x'
						}
						style={{ color: type === 'success' ? '#39B570' : '#f3b025' }}
						aria-hidden='true'></i>
				</div>
				<div className=''>
					<h5
						className='alert-heading mt-0'
						style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 0 }}>
						{title}
					</h5>
					<p className='mb-0' style={{ fontSize: 'small' }}>
						{body}
					</p>
				</div>
				{dismiss && (
					<button
						style={{
							position: "absolute",
							top: "18px",
							right: "3px"
						}}
						type='button'
						className='close text-muted'
						data-dismiss='alert'
						aria-label='Close'
						onClick={() => setDisplay(false)}>
						<span aria-hidden='true'>&times;</span>
					</button>
				)}
			</div>
		)
	);
}
