import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const CustomerRegisterPage = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/auth/protected",
        {},
        {
          withCredentials: true,
        }
      )
      .then((protectedResponse) => {
        console.log(protectedResponse.data);
      })
      .catch((error) => {
        console.error("Error accessing protected route:", error);
      });
  }, []);

  const handleSubmit = async () => {
    console.log({ userName, password });

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/user/register",
        { userName, password, email, role: "customer" },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // Login successful, you can redirect to the dashboard or perform other actions.
        console.log("Logged in successfully");
      }
    } catch (error) {
      console.log(error);
    }
    // const response = await fetch("http://localhost:5000/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username: "rakib", password: "asdasdasd" }),
    // });

    // if (response.status === 200) {
    //   // Handle successful login
    // } else {
    //   // Handle login failure
    // }
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
          <Typography variant="h4">Register</Typography>
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
            type="text"
            label="email"
            fullWidth
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
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
              handleSubmit();
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CustomerRegisterPage;
