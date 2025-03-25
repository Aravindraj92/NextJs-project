"use client";
// import { UserLogin } from '../action';
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (formData) => {
    console.log("iam in");
    // const result = await UserLogin(formData);
    if (result.success) {
      console.log(result.token);
      router.push("/dashboard");
    }
  };
  return (
    <>
      <div className="">
      <Card sx={{ maxWidth: 345 }} className="flex item-center">
          <form action={handleSubmit} className="flex flex-col">
            <Typography variant="h6" gutterBottom>
              Login Form
            </Typography>
            <TextField
              id="filled-basic"
              label="Email"
              name="email"
              type="text"
              variant="filled"
              className="m-10"
            />
            <TextField
              id="filled-basic"
              label="Password"
              type="password"
              name="password"
              variant="filled"
              className="m-10"
            />
            <Button size="small" variant="contained" type="submit" className="m-10"> 
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}
