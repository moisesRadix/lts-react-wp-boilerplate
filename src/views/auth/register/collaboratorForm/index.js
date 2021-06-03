import React, { useState, useEffect, useRef } from 'react';
import Label from 'reactstrap/lib/Label';
import PopoverBody from 'reactstrap/lib/PopoverBody';
import FormGroup from 'reactstrap/lib/FormGroup';
import Form from 'reactstrap/lib/Form';
import Input from 'reactstrap/lib/Input';
import InputGroupAddon from 'reactstrap/lib/InputGroupAddon';
import InputGroupText from 'reactstrap/lib/InputGroupText';
import InputGroup from 'reactstrap/lib/InputGroup';
import Col from 'reactstrap/lib/Col';
import UncontrolledPopover from 'reactstrap/lib/UncontrolledPopover';
import Button from 'reactstrap/lib/Button';
import useForm from 'utils/useForm';
import { collaboratorSchema } from '../registerValidationSchema';
import { useOutsideAlerter, AcceptTermsModal } from '../register';
import { useHistory, useParams } from 'react-router';
import queryString from 'query-string';
import {RadixLoader} from 'components/CustomLoaders/RadixLoader';
import ScreenSuccess from 'components/AlertMessageCard/Index';
import GlobalNotification from 'components/AlertNotification/GlobalNotification';
import { useFreeApi } from 'utils/rest/Index';
import { PrivacyTemplate } from 'utils/constants';
import { Link } from 'react-router-dom';
import '../newregister.scss';
import LoadingScreen from 'components/LoadingScreen';
import logo from 'assets/img/svg/logo/Isotipo.svg';
import logo2 from 'assets/img/svg/logo/Logotipo.svg';

export default function RegisterNewCollaborator(props) {
	const [showPassword, setShowPassword] = useState(false);
	const [mainLoading, setMainLoading] = useState(true);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [popoverOpen, setPopoverOpen] = useState(false);
	const [disableButton, setDisableButton] = useState(true);
	const [openTerms, setOpenTerms] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	const [mainError, setMainError] = useState(null);
	const [terms, setTerms] = useState({
		id_term: null,
		information: null,
	});
	const { token } = useParams();
	const hist = useHistory();
	const params = queryString.parse(hist.location.search);
	const toggleTerms = (val) => {
		setModalContent(
			val === 'terms' ? (
				<React.Fragment>
					<div dangerouslySetInnerHTML={{ __html: terms.information }} />
				</React.Fragment>
			) : (
				PrivacyTemplate
			),
		);
		setOpenTerms(!openTerms);
	};
	const toggle = () => setPopoverOpen(!popoverOpen);

	// fetch terms online
	const { executeService: fetchTerms, loading } = useFreeApi(
		'/terms-conditions/default',
		'post',
		{
			onSuccess: (e) => {
				const term = e.data.result.find((f) => f.is_default === true);
				// console.log(getHtml(edited));
				setTerms({
					...term,
					information: term.information,
				});
			},
		},
	);

	const DEFAULT_VALUES = {
		first_name: null, // Input: Select
		last_name: null, // Input: Select
		password: null, // Input: Text
		confirmPassword: null, // Input: Text
		id_terms: null,
	};

	const { executeService, loading: putLoading, data: putData } = useFreeApi(
		'/invitations/verify',
		'post',
		{
			onError: (e) => {
				setMainError(e.payload ? e.payload : e.message);
				if (params.user_exist === 'true') {
					hist.push({
						pathname: '/auth/login',
						state: {
							type: 'error',
							invitation_message: e.payload ? e.payload : e.message,
						},
					});
				}
			},
			onSuccess: () => {
				if (params.user_exist === 'true') {
					hist.push({
						pathname: '/auth/login',
						state: {
							type: 'success',
							invitation_message: 'Thank you for accepting this invitation.',
						},
					});
				}
			},
		},
	);

	const SubmitVerify = () => {
		executeService({
			token: token,
			first_name: values.first_name,
			last_name: values.last_name,
			password: values.password,
			id_terms: values.id_terms,
		});
	};
	const handleShowPassword = () => setShowPassword(!showPassword);
	const handleShowConfirm = () => setShowConfirmPassword(!showConfirmPassword);
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
		handleBlur,
		classNames,
		handleChangeSpecific,
	} = useForm(SubmitVerify, DEFAULT_VALUES, collaboratorSchema);

	// accepting terms
	const handleAcceptTerms = (e) => {
		setDisableButton(!disableButton);
		if (e.target.checked) {
			handleChangeSpecific(terms.id_term, 'id_terms');
		} else {
			handleChangeSpecific(null, 'id_terms');
		}
	};
	useEffect(() => {
		if (errors.password) {
			setPopoverOpen(true);
		} else {
			setPopoverOpen(false);
		}
	}, [errors.password]);
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, setPopoverOpen);

	useEffect(() => {
		fetchTerms();
		if (params.user_exist === 'true') {
			executeService({
				token: token,
				first_name: null,
				last_name: null,
				password: null,
				id_terms: null,
			});
		} else {
			setMainLoading(false);
		}
	}, []);

	return mainLoading ? (
		<LoadingScreen />
	) : (
		<div className='main-register-container'>
			<div className='form-side mt-5'>
				<div style={{textAlign: "center", marginTop: "15px"}}> 
					<img className="" src={logo} width='10%' height='55%' alt='Logo Radix Haven' />
					<img className="ml-2 mt-2" src={logo2} width='35%' height='50%' alt='Isotipo Radix Haven' /> 
				</div>
				{putLoading ? (
					<div className='p-5'>
						<RadixLoader />
					</div>
				) : putData ? (
					<ScreenSuccess
						title='Your account has been created successfully!'
						body={
							<React.Fragment>
								Go to{' '}
								<Link
									to='/auth/login'
									style={{ color: 'var(--radix-color)' }}
									className='font-weight-bold'>
									login
								</Link>{' '}
								an use the platform
							</React.Fragment>
						}
					/>
				) : (
					<>
						{mainError && (
							<div className='row'>
								<div className='container'>
									<GlobalNotification title='Oops!' body={mainError} />
								</div>
							</div>
						)}
						<Form onSubmit={handleSubmit} noValidate className='form m-3' autoComplete='off'>
							<div className='row'>
								<Col xs={12} sm={6} md={6} lg={6}>
									<FormGroup className={classNames.first_name}>
										<Label className='lb-form' htmlFor='first_name'>
											First Name
										</Label>
										<InputGroup>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className='pr-psw'
													style={{ cursor: 'pointer' }}
													onClick={handleShowPassword}>
													<i
														className='fa fa-user radixTextGradientBackground'
														style={{ color: 'var(--radix-color)' }}
														aria-hidden='true'></i>
												</InputGroupText>
											</InputGroupAddon>
											<Input
												className='register-input'
												type='text'
												name='first_name'
												id='first_name'
												onChange={handleChange}
												value={values.first_name || ''}
												onBlur={handleBlur}
											/>
										</InputGroup>
										{errors.first_name && (
											<label className='label-error'>{errors.first_name}</label>
										)}
									</FormGroup>
								</Col>
								<Col xs={12} sm={6} md={6} lg={6}>
									<FormGroup className={classNames.last_name}>
										<Label className='lb-form' htmlFor='last_name'>
											Last Name
										</Label>
										<InputGroup>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className='pr-psw'
													style={{ cursor: 'pointer' }}
													onClick={handleShowPassword}>
													<i
														className='fa fa-user radixTextGradientBackground'
														style={{ color: 'var(--radix-color)' }}
														aria-hidden='true'></i>
												</InputGroupText>
											</InputGroupAddon>
											<Input
												className='register-input'
												type='text'
												name='last_name'
												id='last_name'
												onChange={handleChange}
												value={values.last_name || ''}
												onBlur={handleBlur}
											/>
										</InputGroup>
										{errors.last_name && (
											<label className='label-error'>{errors.last_name}</label>
										)}
									</FormGroup>
								</Col>
							</div>
							<div className='row'></div>
							<div className='row'>
								<Col xs={12} sm={6} md={6} lg={6}>
									<FormGroup className={classNames.password}>
										<Label className='lb-form' id='_rdx_requirementsPassword'>
											Password
											<div
												style={{ cursor: 'pointer' }}
												onClick={() => toggle(true)}
												// ref={wrapperRef}
												style={{ color: 'var(--radix-color)' }}
												className='nc-icon nc-alert-circle-i ml-3 radixTextGradientBackground font-weight-bolder'>
												<UncontrolledPopover
													className='passTooltip'
													placement='top'
													target='_rdx_requirementsPassword'>
													<PopoverBody>
														<div className='row'>
															<Col>
																<p className='text-center'>Password Requirements</p>
															</Col>
														</div>
														<ul>
															<li>MUST contain at least 8 characters (12+ recommended)</li>
															<li>MUST contain at least one uppercase letter</li>
															<li>MUST contain at least one lowercase letter</li>
															<li>MUST contain at least one number</li>
															<li>{`MUST contain at least one special character (!”#$%&'()*+,-./:;<=>?@[\]^_\`{|}~ )`}</li>
														</ul>
													</PopoverBody>
												</UncontrolledPopover>
											</div>
										</Label>
										<InputGroup>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className='pr-psw'
													style={{ cursor: 'pointer' }}
													onClick={handleShowPassword}>
													{showPassword ? (
														<i className='fa fa-eye radixTextGradientBackground' aria-hidden='true'></i>
													) : (
														<i
															style={{ color: 'var(--radix-color)' }}
															className='fa fa-eye-slash radixTextGradientBackground'
															aria-hidden='true'></i>
													)}
												</InputGroupText>
											</InputGroupAddon>
											<Input
												className='register-input'
												type={showPassword ? 'text' : 'password'}
												name='password'
												id='password'
												autoComplete='new-password'
												onChange={handleChange}
												value={values.password || ''}
												onBlur={handleBlur}
												style={{ borderRight: '20px !important' }}
											/>
										</InputGroup>
										{errors.password && (
											<label className='label-error'>{errors.password}</label>
										)}
									</FormGroup>
								</Col>
								<Col xs={12} sm={6} md={6} lg={6}>
									<FormGroup className={classNames.confirmPassword}>
										<Label className='lb-form' htmlFor='confirmPassword'>
											Confirm Password
										</Label>
										<InputGroup>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText
													className='pr-psw'
													style={{ cursor: 'pointer' }}
													onClick={handleShowConfirm}>
													{showConfirmPassword ? (
														<i className='fa fa-eye radixTextGradientBackground' aria-hidden='true'></i>
													) : (
														<i
															className='fa fa-eye-slash radixTextGradientBackground'
															style={{ color: 'var(--radix-color)' }}
															aria-hidden='true'></i>
													)}
												</InputGroupText>
											</InputGroupAddon>
											<Input
												className='register-input'
												type={showConfirmPassword ? 'text' : 'password'}
												name='confirmPassword'
												id='confirmPassword'
												onChange={handleChange}
												value={values.confirmPassword || ''}
												onBlur={handleBlur}
											/>
										</InputGroup>
										{errors.confirmPassword && (
											<label className='label-error'>{errors.confirmPassword}</label>
										)}
									</FormGroup>
								</Col>
							</div>

							<div className='text-left form-check mt-3'>
								<label className='form-check-label'>
									<input
										onChange={handleAcceptTerms}
										type='checkbox'
										className='form-check-input'
										checked={!disableButton}
									/>
									<span className='form-check-sign'></span>I agree to the{' '}
									<a href='#terms' onClick={() => toggleTerms('terms')}>
										<b className='text-url'>terms and conditions</b>
									</a>{' '}
									and{' '}
									<a href='#privacy' onClick={() => toggleTerms('privacy')}>
										<b className='text-url'>Privacy Policy</b>
									</a>
									.
								</label>
								<br />
								{errors.id_terms && <label className='label-error'>{errors.id_terms}</label>}
							</div>
							<div className='row d-flex justify-content-between align-items-baseline m-0 p-0'>
								<Button color='info' disabled={disableButton} type='submit' className="w-100">
									Create Account
								</Button>
							</div>

							<AcceptTermsModal
								closeModal={toggleTerms}
								loading={loading}
								open={openTerms}
								content={modalContent}
							/>
						</Form>
					</>
				)}
			</div>
		</div>
	);
}
