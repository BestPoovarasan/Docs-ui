import { config } from "../../config";
import { Box, TextField, Button, styled, Typography,} from "@mui/material";
import axios from "axios";
import { useFormik } from 'formik';
import { useNavigate, NavLink } from "react-router-dom";


//css style--------------Material UI Tag
const Div = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: 300,
  margin: "auto",
 
});
// <----------formik validate---------->
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length <= 3) {
    errors.name = "Must be 4 characters or greater";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length <= 5) {
    errors.password = "Must be 6 characters or greater";
  }

  if (!values.email) {
    errors.email = "";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email address";
  }
  return errors;
};

const Register = () => {
  const navigate = useNavigate();
   //<----------- Formik values------------>
  let formik = useFormik({
     initialValues: {
      name:"",
      email: "",
      password: "",
     },
     validate,
      // <-------------Axios-------------->
     onSubmit: async values => {
      try {
        const signup = await axios.post(`${config.api}/api/signup`, values);
         alert(signup.data.message);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
     },
   });
 
  return (
    <Box>
 <form onSubmit={formik.handleSubmit}>
      <Div>
        <Typography variant="h4" sx={{ padding: 4 }}>
          Signup
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          margin="normal"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />{formik.errors.name ? <div style={{ color: "red" }}>{formik.errors.name}</div> : null}
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />{formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />{formik.errors.password ? <div style={{ color: "red" }}>{formik.errors.password}</div> : null}
        <Button type ="submit" variant="contained" sx={{ margin: 2 }}>
          Register
        </Button>
        <Typography>Already have account go to <NavLink to="/login">Login Page</NavLink></Typography>
      </Div>
    </form>
    </Box>
   
  )
};
export default Register;
