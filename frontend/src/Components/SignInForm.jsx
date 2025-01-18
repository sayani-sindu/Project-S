import { Card, CardContent, Typography } from "@mui/joy";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reducer/authSlice";
import { useState } from "react";
import "./sign-up.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignInForm = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isLoggedIn } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    emailId: "",
    password: "",
  });
  const isDisabled = !(data.emailId && data.password);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const loginButtonHandler = async (e) => {
    e.preventDefault();
    try {
      const credentials = data;
      dispatch(loginUser(credentials));
      if (isLoggedIn) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="border-black text-gray-950 w-auto rounded	 ">
        <Card>
          <Typography className="text-black text-center"> Sign In </Typography>
          <form action="">
            <FormControl className="mb-5">
              <FormLabel>Email</FormLabel>
              <Input
                name="emailId"
                type="email"
                onChange={onChangeHandler}
                placeholder="Please Enter your Email"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                className="mb-[20px]"
                name="password"
                type="password"
                onChange={onChangeHandler}
                placeholder="Please enter your password"
              />
            </FormControl>
            <button
              className={isDisabled ? "disable" : "enable"}
              onClick={loginButtonHandler}
              disabled={isDisabled}
            >
              Sign In
            </button>
            <Typography
              endDecorator={<Link href="/signup">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Don't have an account?
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
};
export default SignInForm;
