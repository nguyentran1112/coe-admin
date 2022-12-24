import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <Box
      sx={{
        display: "relative",
        width: 350,
        maxHeight: 300,
        backgroundColor: "white",
      }}
    >
      <Box>
        <form>
          <Box sx={{ display: "flex", alignItems: "flex-end", my: 2 }}>
            <AccountCircleIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: 300 }}
              id="inputEmail"
              label="Tên người dùng"
              variant="standard"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", my: 2 }}>
            <MailOutlineIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
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
              type="password"
              required
              style={{ width: 300 }}
              id="inputPassWord"
              label="Mật khẩu"
              variant="standard"
            />
          </Box>
          <Button
            sx={{ mt: 3, boxShadow: "1px 2px 9px #1976D2" }}
            variant="contained"
          >
            Đăng ký tài khoản
          </Button>
        </form>
      </Box>
    </Box>
  );
};
export default SignUp;
