import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import Link from "@mui/material/Link";

const SignIn = ({ login }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <Box
      sx={{
        display: "relative",
        width: 350,
        maxHeight: 300,
        backgroundColor: "white",
      }}
    >
      <Box sx={{ my: 2 }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", alignItems: "flex-end", my: 2 }}>
            <MailOutlineIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              type="email"
              style={{ width: 300 }}
              id="inputEmail"
              label="Email"
              variant="standard"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", my: 2 }}>
            <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              style={{ width: 300 }}
              id="inputPassWord"
              label="Mật khẩu"
              variant="standard"
            />
          </Box>
          <Button
            type="submit"
            sx={{ my: 3, boxShadow: "1px 2px 9px #1976D2" }}
            variant="contained"
          >
            Đăng nhập
          </Button>
        </form>
      </Box>

      <Link
        sx={{
          fontSize: "12px",
          color: "#46B9E8",
          display: "block",
          mt: 2,
          height: "23.5px",
        }}
        href="/"
      >
        Bạn đã quên mật khẩu?
      </Link>
    </Box>
  );
};
export default SignIn;
