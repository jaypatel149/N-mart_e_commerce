import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-center text-white py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>N-Mart</h3>
            <ul className="list-unstyled">
              <div className="d-flex justify-content-center my-5">
                <li>
                  <a href="/" className="me-3">
                    <FacebookIcon name="facebook" />
                  </a>
                </li>
                <li>
                  <a href="/" className="me-3">
                    <InstagramIcon name="instagram" />
                  </a>
                </li>
                <li>
                  <a href="/" className="me-3">
                    <TwitterIcon name="twitter" />
                  </a>
                </li>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control border border-primary bg-light"
                  placeholder="Enter your email address"
                />
                <span className="input-group-text">
                subscribe
                </span>
              </div>
              <p className="text-white">
                &copy; 2027 Your N-Mart. All rights reserved.
              </p>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Contact us</h3>
            <ul className="list-unstyled">
              <li className="my-4">
                <a href="/" className="text-white text-decoration-none">
                  Navgurukul Dharamsala himanchal Pradesh fatehpur - 176057
                </a>
              </li>
              <li className="my-4">
                <a href="/" className="text-white text-decoration-none">
                  9082100916
                </a>
              </li>
              <li className="my-4">
                <a href="/" className="text-white text-decoration-none">
                  hello@jaypatel.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Account</h3>
            <ul className="list-unstyled ">
              <li className="my-4">
                <a href="/" className="text-white text-decoration-none">
                  Create account
                </a>
              </li>
              <li className="my-4">
                <a href="/" className="text-white text-decoration-none">
                  Sing in
                </a>
              </li>
              <li className="my-4">
                <a href="/" className="text-white text-decoration-none">
                  ios app
                </a>
              </li>
              <li className="my-4">
                <a href="/" className="text-white text-decoration-none">
                  Android app
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Resources</h3>
            <ul className="list-unstyled">
              <li className="my-4">
                <a href="/" className="text-white text-decoration-none">
                  test directory
                </a>
              </li>
              <li className="my-4">
                <a href="/" className="text-white text-decoration-none">
                  Help center
                </a>
              </li>
              <li className="my-4">
                <a href="/" className="text-white text-decoration-none">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
