import React, { useState } from "react";
import "./singupmodal.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { RiUserLine } from "react-icons/ri";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import Checkbox from "@mui/material/Checkbox";
import { TbBrandGoogleFilled } from "react-icons/tb";

<RiUserLine className="header__icon" />;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 5.12,
  px: 10,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <React.Fragment>
      <div className="handleOpen">
        <Button className="handleOpen" onClick={handleOpen}>
          Create Account
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600, height: 624 }}>
          <div className="sing-up-login">
            <h2 className="parent-modal-title">Create your account </h2>
            <div className="sing-input">
              <div className="sing_up">
                <input
                  className="sing-in"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="sing_up">
                <input className="sing-in" type="text" placeholder="E-mail" />
              </div>
              <div className="sing_up">
                <label>
                  <input
                    className="password"
                    type={visible ? "text" : "password"}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                </label>
                <button className="toggleVisibility" onClick={toggleVisibility}>
                  {visible ? (
                    <FiEye className="fiEye" />
                  ) : (
                    <FiEyeOff className="fiEye" />
                  )}
                </button>
              </div>
            </div>

            <div className="modal-chek">
              <Checkbox {...label} defaultChecked />
              <h1>I agree to all</h1>
              <h2 className="forgot-all"> Terms & Conditions</h2>
            </div>

            <button className="login">Log In</button>

            <div className="or-log">
              <hr className="or-loghr" />
              <button className="or-logtxt">Or Log In with</button>
              <hr className="or-loghr" />
            </div>

            <div className="sing-google">
              <button className="sing-googlebtn">
                <TbBrandGoogleFilled />
                Google
              </button>
              <button className="sing-googlebtn">
                <TbBrandGoogleFilled />
                Google
              </button>
            </div>
            <div className="donts">
              <h1>Don’t have an account ? </h1>
              <h2>sign up</h2>
            </div>
          </div>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        {" "}
        <RiUserLine className="header__icon" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600, height: 624 }}>
          <div className="sing-up-login">
            <ChildModal />
            <h2 className="parent-modal-title">Log in to Tech Heim </h2>
            <div className="sing-input">
              <div className="sing_up">
                <input className="sing-in" type="text" placeholder="E-mail" />
              </div>
              <div className="sing_up">
                <label>
                  <input
                    className="password"
                    type={visible ? "text" : "password"}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                </label>
                <button className="toggleVisibility" onClick={toggleVisibility}>
                  {visible ? (
                    <FiEye className="fiEye" />
                  ) : (
                    <FiEyeOff className="fiEye" />
                  )}
                </button>
              </div>
            </div>
            <h1 className="forgot-password">Forgot Password ?</h1>

            <div className="modal-chek">
              <Checkbox {...label} defaultChecked />
              <h1>Keep me logged in </h1>
            </div>

            <button className="login">Log In</button>

            <div className="or-log">
              <hr className="or-loghr" />
              <button className="or-logtxt">Or Log In with</button>
              <hr className="or-loghr" />
            </div>

            <div className="sing-google">
              <button className="sing-googlebtn">
                {" "}
                <span className="TbBrandGoogleFilled">
                  <TbBrandGoogleFilled />
                  GoogleGoogle
                </span>
              </button>
              <button className="sing-googlebtn">
                {" "}
                <span className="TbBrandGoogleFilled">
                  <TbBrandGoogleFilled />
                  Google
                </span>
              </button>
            </div>

            <div className="donts">
              <h1>Don’t have an account ? </h1>
              <h2>sign up</h2>
            </div>

            <div className="account"></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
