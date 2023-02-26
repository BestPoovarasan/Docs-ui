// import { config } from "../../config";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from 'formik';
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authactions } from "../../redux/Store";



//css style--------------Material UI Tag
const Div = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: 400,
  margin: "auto",
 
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   //<----------- Formik values------------>
  const formik = useFormik({
     initialValues: {
      email: "",
      password: "",
     },
      // <-------------Axios-------------->
     onSubmit : async values => {
      try {
        const login = await axios.post("https://docs-y6mr.onrender.com/api/login", values,);
        dispatch(authactions.login());
         alert(login.data.message);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
     },
   });


  return (
    <form onSubmit={formik.handleSubmit}>
      <Div>
        <Typography variant="h4" sx={{ padding: 4 }}>
          Login
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type ="submit" color="success" variant="contained" sx={{ margin: 2 }}>
          Login
        </Button>
        <Typography> Not a member? <NavLink to="/register">Register Your Account</NavLink></Typography>
      </Div>
    </form>
  );
};

export default Login;
