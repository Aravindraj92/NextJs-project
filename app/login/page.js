"use client";
import { useState } from "react";
import { UserLogin } from "../action";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function LoginForm() {
  const [message, setMessage] = useState();
  const router = useRouter();
  const handleSubmit = async (formData) => {
    console.log("iam in");
    const result = await UserLogin(formData);
    if (result.success) {
      // console.log(result.token);
      localStorage.setItem("isLogin", true);

      router.push("/dashboard");
    }
    setMessage(result.message);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };
  return (
    <>
      <div className="flex flex-row justify-center mt-50">
        <Card sx={{ width: 345 }} className="flex justify-center">
          <form
            action={handleSubmit}
            className="flex flex-col justify-center gap-10 mb-10"
          >
            <Typography variant="h6" gutterBottom className="text-center">
              Login Form
            </Typography>
            <TextField
              id="email"
              label="Email"
              name="email"
              type="text"
              variant="standard"
              className="m-10"
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              name="password"
              variant="standard"
              className="m-10"
            />
            <Button
              size="small"
              variant="contained"
              type="submit"
              className="m-10"
            >
              Submit
            </Button>
          </form>
        </Card>
      </div>

      {message && (
        <div
          class="text-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span class="font-medium">{message}</span>
        </div>
      )}
    </>
  );
}
