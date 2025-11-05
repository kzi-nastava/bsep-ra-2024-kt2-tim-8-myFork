import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import interceptor from "../../interceptor/interceptor";
import { Flex } from "reflexbox";

function Login() {
  const navigate = useNavigate();
  const [captchaToken, setCaptchaToken] = useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = async () => {
    interceptor
      .post("auth/login", {
        email: email,
        password: password,
        captchaToken: captchaToken,
      })
      .then((res) => {
        console.log(res.data);
        document.cookie = `accessToken=${encodeURIComponent(
          res.data.accessToken
        )}; Secure; SameSite=Strict;`;
        document.cookie = `refreshToken=${encodeURIComponent(
          res.data.refreshToken
        )}; Secure; SameSite=Strict;`;
        navigate("/");
      })
      .catch((err) => {
        setShowAlert(true);
      });
  };
  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const [successDialogShow, setSuccessDialogShow] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const handleClose = () => {
    setSuccessDialogShow(false);
  };

  return (
    <>
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <form>
          <div className="wrapper">
            <TextField
              fullWidth
              variant="filled"
              label="Email"
              type={"email"}
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              fullWidth
              variant="filled"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <ReCAPTCHA
              sitekey={"6Lc8Y8IpAAAAAPHtxIjjPCcln44xV9XDtuIbs1BD"}
              onChange={(token) => setCaptchaToken(token)}
            />

            <Button
              disabled={
                !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ||
                email.length >= 255 ||
                password.length >= 255 ||
                password === "|"
              }
              variant="contained"
              color="primary"
              endIcon={<LoginIcon />}
              onClick={handleLogin}
            >
              Regular LOGIN
            </Button>
          </div>
        </form>
      </Flex>

      {showAlert && (
        <Alert
          sx={{ width: "fit-content", margin: "10px auto" }}
          severity="error"
          onClose={handleAlertClose}
        >
          Invalid credentials, please try again.
        </Alert>
      )}
    </>
  );
}

export default Login;
