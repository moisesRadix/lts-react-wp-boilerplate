import React, { useState, useEffect, useRef } from "react";
// import Label from 'reactstrap/lib/Label';
// import Popover from 'reactstrap/lib/Popover';
// import PopoverBody from 'reactstrap/lib/PopoverBody';
// import Select from 'react-select';
// import FormGroup from 'reactstrap/lib/FormGroup';
// import Form from 'reactstrap/lib/Form';
// import Input from 'reactstrap/lib/Input';
// import InputGroupAddon from 'reactstrap/lib/InputGroupAddon';
// import InputGroupText from 'reactstrap/lib/InputGroupText';
// import InputGroup from 'reactstrap/lib/InputGroup';
// import Col from 'reactstrap/lib/Col';
// import Button from 'reactstrap/lib/Button';
import { registerStep1Schema } from "./registerValidationSchema";
import useForm from "utils/useForm";
import { useFreeApi } from "utils/rest/Index";
import { orderBy } from "lodash";
import Modal from "reactstrap/lib/Modal";
import { PulseLoader } from "react-spinners";
import { useHistory } from "react-router";
import { PrivacyTemplate } from "utils/constants";
import { ScreenSuccessRegistration } from "components/AlertMessageCard/Index";
import GlobalNotification from "components/AlertNotification/GlobalNotification";
import logo from "../../../assets/img/svg/logo/Logotipo.svg";
import logo2 from "../../../assets/img/svg/logo/Isotipo.svg";
import "./newregister.scss";
import Button from "../../../components/button";
import { Col, Row } from "../../../components/ui/grid";
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from "../../../components/formComponents";
import Select from "react-select/src/Select";

export const useOutsideAlerter = (ref, toggle) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        toggle(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside, {
      passive: true,
    });
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside, {
        passive: true,
      });
    };
  }, [ref]);
};

export const t2 = (ref, toggle) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        toggle(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside, {
      passive: true,
    });
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside, {
        passive: true,
      });
    };
  }, [ref]);
};

export const AcceptTermsModal = ({
  open,
  closeModal,
  onConfirm,
  loading,
  title = "",
  content,
  showConfirm = true,
  showClose = true,
}) => {
  return (
    <Modal
      toggle={closeModal}
      isOpen={open}
      // contentClassName="card"
      centered={true}
      className="FooterModal"
      contentClassName="modal-terms"
    >
      <div className="modal-hader">{title}</div>
      <div
        style={{
          maxHeight: "65vh",
          overflowY: "scroll",
          marginTop: "1rem",
        }}
      >
        <div
          className="container"
          style={{ overflowY: "scroll", display: "flex", alignItems: "center" }}
        >
          {loading ? (
            <div className="container">
              <PulseLoader color="var(--radix-color)" loading />
            </div>
          ) : (
            <div>{content}</div>
          )}
        </div>
      </div>
      <div className="modal-footer">
        {/* <Button color='info' className='mr-1' onClick={() => closeModal()}>
					I agree to terms and conditions
				</Button> */}

        <Button buttonType="primary" action={() => closeModal()}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default function SignUpCustomerForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [compSize, setCompSize] = useState([]);
  const [openTerms, setOpenTerms] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [modalContent, setModalContent] = useState(null);
  const [terms, setTerms] = useState({
    id_term: null,
    information: null,
  });
  const [successEmail, setSuccessEmail] = useState(null);
  const [mainError, setMainError] = useState(null);

  const {
    data: putData,
    loading: putLoading,
    executeService,
  } = useFreeApi("/user/signup", "post", {
    onError: (e) => {
      // console.log(e);
      setMainError(e.payload ? e.payload : e.message);
    },
    onSuccess: (e) => {
      setSuccessEmail(e.data.result.email);
    },
  });
  const toggleTerms = (val) => {
    setModalContent(
      val === "terms" ? (
        <React.Fragment>
          <div dangerouslySetInnerHTML={{ __html: terms.information }} />
        </React.Fragment>
      ) : (
        PrivacyTemplate
      )
    );
    setOpenTerms(!openTerms);
  };
  const toggle = () => setPopoverOpen(!popoverOpen);

  const DEFAULT_VALUES = {
    first_name: null, // Input: Select
    last_name: null, // Input: Select
    company_name: null, // Input: Date
    id_org_size: null, // Input: Date
    email: null, // Input: Text
    password: null, // Input: Text
    confirmPassword: null, // Input: Text
    id_terms: null,
  };

  const hist = useHistory();

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setPopoverOpen);
  const submitForm = () => {
    const body = {
      users: {
        first_name: values.first_name,
        last_name: values.last_name,
        nickname: values.email ? values.email.split("@")[0] : null,
        email: values.email,
        password: values.password,
        status: 10,
      },
      orgs: {
        name: values.company_name,
        id_org_size: values.id_org_size,
      },
      id_terms: values.id_terms,
    };
    executeService(body);
  };
  const { executeService: fetchTerms, loading } = useFreeApi(
    "/terms-conditions/default",
    "post",
    {
      onSuccess: (e) => {
        const term = e.data.result.find((f) => f.is_default === true);
        // console.log(getHtml(edited));
        setTerms({
          ...term,
          information: term.information,
        });
      },
    }
  );
  const { executeService: fetchCatalog } = useFreeApi(
    "/catalogs/orgsize",
    "get",
    {
      onSuccess: (e) => {
        const orgState = orderBy(e.data.result, ["id_org_size"], "asc").map(
          (c) => {
            return {
              ...c,
              label: c.name,
              value: c.id_org_size,
            };
          }
        );

        setCompSize(orgState);
      },
      onError: (err) => {
        // console.log(err);
      },
    }
  );

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    classNames,
    handleChangeSpecific,
    handleChangeReactSelect,
    handleBlurReactSelect,
  } = useForm(submitForm, DEFAULT_VALUES, registerStep1Schema);

  useEffect(() => {
    if (errors.password) {
      setPopoverOpen(true);
    } else {
      setPopoverOpen(false);
    }
  }, [errors.password]);

  useEffect(() => {
    fetchCatalog();
    fetchTerms();
  }, []);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirm = () => setShowConfirmPassword(!showConfirmPassword);
  const handleAcceptTerms = (e) => {
    setDisableButton(!disableButton);
    if (e.target.checked) {
      handleChangeSpecific(terms.id_term, "id_terms");
    } else {
      handleChangeSpecific(null, "id_terms");
    }
  };
  return (
    <div className="main-register-container">
      <div className="form-side">
        {putLoading ? (
          <div className="p-5 mt-5">
            <PulseLoader color="var(--radix-color)" loading />
          </div>
        ) : putData ? (
          <ScreenSuccessRegistration email={successEmail} />
        ) : (
          <>
            {mainError && (
              <Row className="row">
                <div className="container">
                  <GlobalNotification title="Oops!" body={mainError} />
                </div>
              </Row>
            )}
            <div className="brand-register">
              <div className="brand-logos p-0 m-0">
                <img
                  className="mr-3 Isotipo"
                  src={logo2}
                  alt="Isotipo Radix Haven"
                />
                <img
                  className="mt-2 Logotipo"
                  src={logo}
                  alt="Logo Radix Haven"
                />
              </div>
              <div
                className="brand-login mt-2"
                style={{
                  textAlign: "right",
                }}
              >
                <p className="mb-0 ">
                  Already have an account?{" "}
                  <b
                    className="text-url"
                    onClick={() => hist.push("/auth/login")}
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </b>
                </p>
              </div>
            </div>
            <div className="col p-0 mt-4 mb-4">
              <span className="promo1 mb-2">
                {" "}
                Start your{" "}
                <span className="radixTextGradientBackground">
                  {" "}
                  15 days free trial{" "}
                </span>{" "}
              </span>
              <br />
              <span className="promo2"> All your online revenue metrics </span>
            </div>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="form"
              autoComplete="off"
            >
              <div className="row m-0">
                <Col className="pl-0 registerInput" size={6}>
                  <FormGroup className={classNames.company_name}>
                    <Label className="lb-form" htmlFor="name">
                      Company Name
                    </Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          className="pr-psw"
                          style={{ cursor: "pointer" }}
                          onClick={handleShowPassword}
                        >
                          <i
                            className="fa fa-building radixTextGradientBackground"
                            // style={{ color: 'var(--radix-color)' }}
                            aria-hidden="true"
                          ></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="register-input"
                        type="text"
                        name="company_name"
                        id="name"
                        onChange={handleChange}
                        value={values.company_name || ""}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                    {errors.company_name && (
                      <label className="label-error">
                        {errors.company_name}
                      </label>
                    )}
                  </FormGroup>
                </Col>
                <Col
                  className="pl-0 registerInput"
                  style={{ paddingRight: "0" }}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                >
                  <FormGroup className={classNames.id_org_size}>
                    <Label className="lb-form" htmlFor="id_org_size">
                      Company Size
                    </Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          className="pr-psw"
                          style={{ cursor: "pointer" }}
                          onClick={handleShowPassword}
                        >
                          <i
                            className="fa fa-industry radixTextGradientBackground"
                            // style={{ color: 'var(--radix-color)' }}
                            aria-hidden="true"
                          ></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Select
                        className="react-select primary form-control-react-select register-input p-0 border-0"
                        placeholder=" "
                        name="id_org_size"
                        id="id_org_size"
                        onChange={(value) =>
                          handleChangeReactSelect(value, "id_org_size")
                        }
                        onBlur={(target) =>
                          handleBlurReactSelect(target, "id_org_size")
                        }
                        options={compSize}
                      />
                    </InputGroup>
                    {errors.id_org_size && (
                      <label className="label-error">
                        {errors.id_org_size}
                      </label>
                    )}
                  </FormGroup>
                </Col>
                <Col
                  className="pl-0 registerInput"
                  style={{ paddingRight: "24px" }}
                  size={6}
                >
                  <FormGroup className={classNames.first_name}>
                    <Label className="lb-form" htmlFor="first_name">
                      First Name
                    </Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          className="pr-psw"
                          style={{ cursor: "pointer" }}
                          onClick={handleShowPassword}
                        >
                          <i
                            className="fa fa-user radixTextGradientBackground"
                            // style={{ color: 'var(--radix-color)' }}
                            aria-hidden="true"
                          ></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="register-input"
                        type="text"
                        name="first_name"
                        id="first_name"
                        onChange={handleChange}
                        value={values.first_name || ""}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                    {errors.first_name && (
                      <label className="label-error">{errors.first_name}</label>
                    )}
                  </FormGroup>
                </Col>
                <Col
                  className="pl-0 registerInput"
                  style={{ paddingRight: "0" }}
                  size={6}
                >
                  <FormGroup className={classNames.last_name}>
                    <Label className="lb-form" htmlFor="last_name">
                      Last Name
                    </Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          className="pr-psw"
                          style={{ cursor: "pointer" }}
                          onClick={handleShowPassword}
                        >
                          <i
                            className="fa fa-user radixTextGradientBackground"
                            // style={{ color: 'var(--radix-color)' }}
                            aria-hidden="true"
                          ></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="register-input"
                        type="text"
                        name="last_name"
                        id="last_name"
                        onChange={handleChange}
                        value={values.last_name || ""}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                    {errors.last_name && (
                      <label className="label-error">{errors.last_name}</label>
                    )}
                  </FormGroup>
                </Col>
              </div>
              <div className="row m-0">
                <Col
                  className="pl-0 registerInput"
                  style={{ paddingRight: "0" }}
                  size={6}
                >
                  <FormGroup className={classNames.email}>
                    <Label className="lb-form" htmlFor="email">
                      Email Address
                    </Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          className="pr-psw"
                          style={{ cursor: "pointer" }}
                          onClick={handleShowPassword}
                        >
                          <i
                            className="fa fa-envelope radixTextGradientBackground"
                            // style={{ color: 'var(--radix-color)' }}
                            aria-hidden="true"
                          ></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="register-input"
                        type="text"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={values.email || ""}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                    {errors.email && (
                      <label className="label-error">{errors.email}</label>
                    )}
                  </FormGroup>
                </Col>
              </div>
              <div className="row m-0">
                <Col
                  className="pl-0 registerInput"
                  style={{ paddingRight: "24px" }}
                  size={6}
                >
                  <FormGroup className={classNames.password}>
                    <Label className="lb-form" id="_rdx_requirementsPassword">
                      Password
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => toggle(true)}
                        ref={wrapperRef}
                        // style={{ color: 'var(--radix-color)' }}
                        className="nc-icon nc-alert-circle-i ml-3 font-weight-bolder radixTextGradientBackground"
                      >
                        <Popover
                          className="passTooltip"
                          placement="top"
                          isOpen={popoverOpen}
                          target="_rdx_requirementsPassword"
                        >
                          <PopoverBody>
                            <div className="row">
                              <Col>
                                <p className="text-center">
                                  Password Requirements
                                </p>
                              </Col>
                            </div>
                            <ul>
                              <li>
                                MUST contain at least 8 characters (12+
                                recommended)
                              </li>
                              <li>
                                MUST contain at least one uppercase letter
                              </li>
                              <li>
                                MUST contain at least one lowercase letter
                              </li>
                              <li>MUST contain at least one number</li>
                              <li>{`MUST contain at least one special character (!”#$%&'()*+,-./:;<=>?@[\]^_\`{|}~ )`}</li>
                            </ul>
                          </PopoverBody>
                        </Popover>
                      </div>
                    </Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          className="pr-psw"
                          style={{ cursor: "pointer" }}
                          onClick={handleShowPassword}
                        >
                          {showPassword ? (
                            <i
                              className="fa fa-eye radixTextGradientBackground"
                              aria-hidden="true"
                            ></i>
                          ) : (
                            <i
                              // style={{ color: 'var(--radix-color)' }}
                              className="fa fa-eye-slash radixTextGradientBackground"
                              aria-hidden="true"
                            ></i>
                          )}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="register-input"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={handleChange}
                        value={values.password || ""}
                        onBlur={handleBlur}
                        style={{ borderRight: "20px !important" }}
                      />
                    </InputGroup>
                    {errors.password && (
                      <label className="label-error">{errors.password}</label>
                    )}
                  </FormGroup>
                </Col>
                <Col
                  className="pl-0 registerInput"
                  style={{ paddingRight: "0" }}
                  size={6}
                >
                  <FormGroup className={classNames.confirmPassword}>
                    <Label className="lb-form" htmlFor="confirmPassword">
                      Confirm Password
                    </Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          className="pr-psw"
                          style={{ cursor: "pointer" }}
                          onClick={handleShowConfirm}
                        >
                          {showConfirmPassword ? (
                            <i
                              className="fa fa-eye radixTextGradientBackground"
                              aria-hidden="true"
                            ></i>
                          ) : (
                            <i
                              className="fa fa-eye-slash radixTextGradientBackground"
                              // style={{ color: 'var(--radix-color)' }}
                              aria-hidden="true"
                            ></i>
                          )}
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="register-input"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPassword"
                        onChange={handleChange}
                        value={values.confirmPassword || ""}
                        onBlur={handleBlur}
                      />
                    </InputGroup>
                    {errors.confirmPassword && (
                      <label className="label-error">
                        {errors.confirmPassword}
                      </label>
                    )}
                  </FormGroup>
                </Col>
              </div>
              <div className="text-left form-check mt-2">
                <label className="form-check-label">
                  <input
                    onChange={handleAcceptTerms}
                    type="checkbox"
                    className="form-check-input"
                    checked={!disableButton}
                  />
                  <span className="form-check-sign"></span>I agree to the{" "}
                  <a href="#terms" onClick={() => toggleTerms("terms")}>
                    <b className="text-url">terms and conditions</b>
                  </a>{" "}
                  and{" "}
                  <a href="#privacy" onClick={() => toggleTerms("privacy")}>
                    <b className="text-url">Privacy Policy</b>
                  </a>
                  .
                </label>
                <br />
                {errors.id_terms && (
                  <label className="label-error">{errors.id_terms}</label>
                )}
              </div>
              <div className="row d-flex justify-content-between align-items-baseline mt-1 mr-0 ml-0">
                <button
                  className="w-100 radixGradientBackground"
                  disabled={disableButton}
                  type="submit"
                  style={{
                    border: "none",
                    borderRadius: "var(--radix-border-radius)",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "8px 0 8px 0",
                    letterSpacing: "1px",
                  }}
                >
                  Create account
                </button>
              </div>

              <AcceptTermsModal
                closeModal={toggleTerms}
                loading={loading}
                open={openTerms}
                content={modalContent}
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
}
