import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Flex } from "reflexbox";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import interceptor from "../../interceptor/interceptor";
import QrCode2Icon from "@mui/icons-material/QrCode2";

function Profile() {
  const [user, setUser] = useState({
    phoneNumber: "",
    name: "",
    surname: "",
    address: {
      country: "",
      city: "",
      street: "",
      streetNumber: "",
    },
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("address.")) {
      setUser((prevState) => {
        const address = { ...prevState.address, [name.split(".")[1]]: value };
        return { ...prevState, address };
      });
    } else {
      setUser((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  useEffect(() => {
    const isValid =
      user.name.length <= 255 &&
      user.surname.length <= 255 &&
      user.phoneNumber.length <= 255 &&
      user.address.country.length <= 255 &&
      user.address.city.length <= 255 &&
      user.address.street.length <= 255 &&
      user.address.streetNumber.length <= 255 &&
      user.name !== "" &&
      user.phoneNumber !== "" &&
      /^[+]?[\d\s.-](?:\/?[\d\s.-]){0,}$/.test(user.phoneNumber) &&
      user.surname !== "" &&
      user.address.country !== "" &&
      user.address.city !== "" &&
      user.address.street !== "" &&
      user.address.streetNumber !== "";
    setIsDisabled(!isValid);
  }, [user]);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordDialogShow, setPasswordDialogShow] = useState(false);
  const [successDialogShow, setSuccessDialogShow] = useState(false);
  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const [errorDialogShow, setErrorDialogShow] = useState(false);

  const handleChangePassword = () => {
    interceptor
      .post("account/change-password", {
        oldPassword: oldPassword,
        newPassword: newPassword,
      })
      .then((response) => {
        setOldPassword("");
        setNewPassword("");
        setPasswordDialogShow(false);
        setSuccessDialogShow(true);
      })
      .catch((error) => {
        setErrorDialogShow(true);
        setPasswordDialogShow(false);
      });
  };
  const handleErrorClose = () => {
    setErrorDialogShow(false);
  };

  const handleUpdate = () => {
    interceptor
      .put("employee/logged-in-info", user)
      .then((res) => {
        setSuccessDialogShow(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorDialogShow(false);
      });
  };

  const getMyInfo = () => {
    interceptor
      .get("employee/logged-in-info")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  const handleClose = () => {
    setSuccessDialogShow(false);
  };

  const [QRCodeDialog, setQRCodeDialog] = useState(false);
  const [QRCode, setQRCode] = useState(false);

  const handleCloseQRcodeDialog = () => {
    setQRCodeDialog(false);
  };

  const viewQrCode = () => {
    interceptor
      .get("auth/two-factor-auth-qr", { responseType: "arraybuffer" })
      .then((res) => {
        const base64Image = btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        setQRCode(`data:image/png;base64,${base64Image}`);
        setQRCodeDialog(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      \
      <Dialog onClose={handleClose} open={successDialogShow}>
        <DialogTitle>Update Successful!</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog onClose={handleErrorClose} open={errorDialogShow}>
        <DialogTitle>Error</DialogTitle>
        <DialogActions>
          <Button onClick={handleErrorClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div className="wrapper">
        <Flex flexDirection="column">
          <Flex>
            <Box width={1 / 4} m={1}>
              <TextField
                fullWidth
                variant="filled"
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
            </Box>
            <Box width={1 / 4} m={1}>
              <TextField
                fullWidth
                variant="filled"
                name="surname"
                value={user.surname}
                onChange={handleInputChange}
              />
            </Box>
            <Box width={1 / 4} m={1}>
              <TextField
                fullWidth
                variant="filled"
                label="Phone number"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleInputChange}
              />
            </Box>
            {user.clientType !== null && (
              <>
                <Box width={1 / 4} m={1}>
                  <TextField
                    disabled
                    fullWidth
                    variant="filled"
                    name="Client Type"
                    value={user.clientType}
                  />
                </Box>
                <Box width={1 / 4} m={1}>
                  <TextField
                    disabled
                    fullWidth
                    variant="filled"
                    name="packet"
                    value={user.packet}
                  />
                </Box>
              </>
            )}
          </Flex>
          <Flex>
            <Box width={1 / 4} m={1}>
              <TextField
                fullWidth
                variant="filled"
                label="Country"
                name="address.country"
                value={user.address.country}
                onChange={handleInputChange}
              />
            </Box>
            <Box width={1 / 4} m={1}>
              <TextField
                fullWidth
                variant="filled"
                label="City"
                name="address.city"
                value={user.address.city}
                onChange={handleInputChange}
              />
            </Box>
            <Box width={1 / 4} m={1}>
              <TextField
                fullWidth
                variant="filled"
                label="Street"
                name="address.street"
                value={user.address.street}
                onChange={handleInputChange}
              />
            </Box>
            <Box width={1 / 4} m={1}>
              <TextField
                fullWidth
                variant="filled"
                label="Street Number"
                name="address.streetNumber"
                value={user.address.streetNumber}
                onChange={handleInputChange}
              />
            </Box>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Flex flexDirection="row">
              <Box m={1}>
                <Button
                  variant="contained"
                  color="success"
                  endIcon={<PublishedWithChangesIcon />}
                  disabled={isDisabled}
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              </Box>
            </Flex>
          </Flex>
          <hr
            style={{
              width: "100%",
              border: "1px solid grey",
            }}
          />
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          ></Flex>
        </Flex>
      </div>
    </>
  );
}

export default Profile;
