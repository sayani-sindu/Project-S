import { Card, CardContent, Typography } from "@mui/joy";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import { useDispatch } from "react-redux";
import { login } from "../reducer/authSlice";
import { useState } from "react";
import axios from "axios";
const SignInForm = () => {
  const [data, setData] = useState({
    emailId: "",
    password: "",
  });
  let dispatch = useDispatch();

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
      const response = await axios.post(
        "http://127.0.0.1:3000/auth/login",
        setData,
        { withCredentials: true }
      );
      console.log(response.data);
      localStorage.setItem("token", "null");

      localStorage.setItem("token", response.data.data.token);

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
            <Button className="mb-[20px] block" onClick={loginButtonHandler}>
              Log in
            </Button>
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
