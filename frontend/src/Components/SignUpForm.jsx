import { Card, CardContent, Typography, } from "@mui/joy";
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";

const SignUpForm  = () => {
     return(<>
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
                type="string"
                placeholder="Please Enter your First Name"
              />
            </FormControl>
            <FormControl className="mb-5">
              <FormLabel>Last Name</FormLabel>
              <Input
                name="LastName"
                type="string"
                placeholder="Please Enter your Last Name"
              />
            </FormControl>
            <FormControl className="mb-5">
              <FormLabel>Email Id</FormLabel>
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
            <Button className="mb-[20px] block">Create Account</Button>
            <Typography
              endDecorator={<Link href="/signin">Sign in</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
             Already have an account
            </Typography>
          </form>
        </Card>
     
     </>)

}
export default SignUpForm