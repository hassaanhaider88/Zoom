import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../contexts/AuthContext";
import { Snackbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Authentication() {
  const navigate = useNavigate();

  const [LoadingState, setLoadingState] = React.useState(false);
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();
  const [error, setError] = React.useState();
  const [message, setMessage] = React.useState();

  const [formState, setFormState] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async () => {
    if (!username || !password || (formState === 1 && !name)) {
      setError("Please fill in all fields");
      alert("Please fill in all fields");
      return;
    }
    try {
      setLoadingState(true);
      if (formState === 0) {
        let result = await handleLogin(username, password);
        console.log(result);
        setMessage(result.message);

        setError("");
        setUsername("");
        setPassword("");
        setLoadingState(false);
        navigate("/home");
      }
      if (formState === 1) {
        let result = await handleRegister(name, username, password);
        console.log(result);
        setUsername("");
        setMessage(result.message);

        setError("");
        setFormState(0);
        setPassword("");
        setLoadingState(false);
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
      let message = err.response.data.message;
      setError(message);
      setLoadingState(false);
      setOpen(true);
      setUsername("");
      setPassword("");
      setName("");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            borderRight: "2px solid wave ",
            backgroundImage: "url(SignUpBG.png)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, marginBottom: "20px", bgcolor: "secondary.main" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="copy-svg-injected"
              >
                <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path>
              </svg>
            </Avatar>

            <div className="flex w-full bg-gray-100 rounded-xl mb-2 p-1">
              <button
                onClick={() => setFormState(0)}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                  formState === 0
                    ? "bg-white text-[#0A1D3C] shadow-sm"
                    : "text-gray-500"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setFormState(1)}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                  formState === 1
                    ? "bg-white text-[#0A1D3C] shadow-sm"
                    : "text-gray-500"
                }`}
              >
                Sign Up
              </button>
            </div>

            <Box component="form" noValidate sx={{ mt: 1 }}>
              {formState === 1 ? (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Full Name"
                  name="username"
                  value={name}
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <></>
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              />

              <p className="text-red-500 text-center text-sm mt-2">{error}</p>

              <button
                type="button"
                className="w-full py-3 px-5 my-3 text-white font-semibold active:scale-95 duration-300 transition-all rounded-3xl hover:bg-[#d65958] bg-[#BA3F3F] "
                // fullWidth
                // variant="contained"
                // sx={{ mt: 3, mb: 2 }}
                onClick={handleAuth}
              >
                {LoadingState
                  ? "Loading..."
                  : formState === 0
                  ? "Login "
                  : "Register"}
              </button>
              <Link to="/">Back to Home</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar open={open} autoHideDuration={4000} message={message} />
    </ThemeProvider>
  );
}
