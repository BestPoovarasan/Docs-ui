import { config } from "../../config";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authactions } from "../../redux/Store";

const Navbar = () => {
  const dispatch = useDispatch();
  const isloggedin = useSelector((state) => state.isloggedin);
  const sendlogoutreq = async () => {
    const res = await axios.post(`${config.api}/api/logout`, null, {});
    if (res.status === 200) {
      return res;
    }
    return new Error("unable to logout please try again");
  };
  const handlelogout = () => {
    sendlogoutreq().then(() => dispatch(authactions.logout()));
  };
  return (
    <div>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" sx={{ color: "#4caf50" }}>
            DOCS
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
            {!isloggedin && (
              <>
                <Button LinkComponent={NavLink} to="/" variant="contained">
                  Home
                </Button>
                <Button LinkComponent={NavLink} to="/login" variant="contained">
                  Login
                </Button>
                <Button
                  LinkComponent={NavLink}
                  to="/register"
                  variant="contained"
                >
                  Signup
                </Button>
              </>
            )}{" "}
            {isloggedin && (
              <>
                <Button
                  variant="contained"
                  LinkComponent={NavLink}
                  to="/profile"
                  startIcon={<AccountCircleOutlinedIcon />}
                >
                  {" "}
                  Profile
                </Button>
                <Button
                  onClick={handlelogout}
                  LinkComponent={NavLink}
                  to="/"
                  variant="contained"
                >
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
