import { Card, CardContent, Typography, } from "@mui/joy";
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
const SignInForm = () => {
  return (
    <>
      <div className="border-black text-gray-950 w-auto rounded	 ">
        <Card>
          <Typography className="text-black text-center"> Sign In </Typography>
          <form action="">
            <FormControl className="mb-5">
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Please Enter your Email"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
              className="mb-[20px]"
                name="password"
                type="password"
                placeholder="Please enter your password"
              />
            </FormControl>
            <Button className="mb-[20px] block">Log in</Button>
            <Typography 

              endDecorator={<Link href="/signup" >Sign up</Link>}
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
