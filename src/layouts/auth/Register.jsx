import React from "react";
import "./authLayout.scss";
import ipad from "assets/img/svg/auth/Ipad.png";

const RegisterLayout = (props) => {
  return (
    <>
      <div className="main-auth-register">
        {/* <svg  version="1.1"
						baseProfile="full"
						xmlns="http://www.w3.org/2000/svg" className='bg-register-circle'>
					<defs>
						<linearGradient id='grad1' x1='20%' y1='60%' x2='100%' y2='50%'>
							<stop offset='0%' style={{ stopColor: '#0075ff', stopOpacity: 1 }} />
							<stop offset='100%' style={{ stopColor: '#2fb7f1', stopOpacity: 1 }} />
						</linearGradient>
					</defs>
					<circle fill='url(#grad1)'/>
				</svg> */}
        <div
          className="circleContainer"
          style={{ background: "#fff", height: "100%", width: "100%" }}
        >
          <div className="circle"> </div>
          <div className="mrk-image">
            <img src={ipad} alt="ipad" height="100%" width="100%" />
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default RegisterLayout;
