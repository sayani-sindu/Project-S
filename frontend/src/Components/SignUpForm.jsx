import { Card, CardContent, Typography } from "@mui/joy";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./sign-up.css";
import axios from "axios";
const SignUpForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({
    firstName: "",
    LastName: "",
    emailId: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const isDisabled = !(
    userData.firstName &&
    userData.LastName &&
    userData.emailId &&
    userData.password
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "http://127.0.0.1:3000/api/v1/auth/register";
    try {
      const response = await axios.post(
        URL,
        {
          firstName: userData.firstName,
          lastName: userData.LastName,
          emailId: userData.emailId,
          password: userData.password,
        },
        
      );
      navigate("/");

      console.log(response);
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <>
      <Card size="lg" className="w-96">
        <Typography className="text-black text-center">
          {" "}
          Create Your Account{" "}
        </Typography>
        <form action="">
          <FormControl className="mb-5">
            <FormLabel>First Name</FormLabel>
            <Input
              name="firstName"
              type="text"
              placeholder="Please Enter your First Name"
              onChange={onChangeHandler}
              value={userData.firstName}
            />
          </FormControl>
          <FormControl className="mb-5">
            <FormLabel>Last Name</FormLabel>
            <Input
              name="LastName"
              type="text"
              value={userData.lastName}
              placeholder="Please Enter your Last Name"
              onChange={onChangeHandler}
            />
          </FormControl>
          <FormControl className="mb-5">
            <FormLabel>Email Id</FormLabel>
            <Input
              name="emailId"
              type="email"
              value={userData.emailId}
              placeholder="Please Enter your Email"
              onChange={onChangeHandler}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              className="mb-[20px]"
              name="password"
              type="password"
              value={userData.password}
              placeholder="Please enter your password"
              onChange={onChangeHandler}
            />
          </FormControl>
          <button
            className={isDisabled ? "disable" : "enable"}
            disabled={isDisabled}
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <Typography
            endDecorator={<Link href="/signin">Sign in</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Already have an account
          </Typography>
        </form>
      </Card>
    </>
  );
};
export default SignUpForm;
