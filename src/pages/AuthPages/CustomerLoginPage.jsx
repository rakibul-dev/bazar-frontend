import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";

const CustomerLoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const user = useSelector((state) => state.userSlice.user);

  const handleLogin = async () => {
    try {
      dispatch(loginUser({ username: userName, password })).then(() => {
        if (user.role == "admin") {
          navigate("/");
        } else {
          console.log("cant navigate");
          console.log(user);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          justifyContent="center"
          alignItems="center"
          width="40%"
        >
          <Typography variant="h4">Login</Typography>
          <TextField
            type="text"
            label="user name"
            fullWidth
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
          />
          <TextField
            type="password"
            label="password"
            fullWidth
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CustomerLoginPage;
