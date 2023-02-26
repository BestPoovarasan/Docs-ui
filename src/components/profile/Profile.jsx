import { useState, useEffect } from "react";
import { Box, TextField, styled, Typography } from "@mui/material";
import axios from "axios";

const Div = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: 300,
  margin: "auto",
});

const Profile = () => {
  const [user, setUser] = useState();

  const refreshtoken = async ()=>{
    const res = await axios.get("https://docs-y6mr.onrender.com/api/refresh",).catch(error=>console.log(error))
    const data = await res.data;
    return data;
  }

  const fetchdata = async ()=>{
    const res = await axios.get("https://docs-y6mr.onrender.com/api/user",).catch(error=>console.log(error))
    const data = await res.data;
    return data;
  }

  useEffect(() => {
    fetchdata().then((data)=>setUser(data.user));
    let interval = setInterval(() => {
      refreshtoken().then(data => setUser(data.user))
    }, 1000 * 28);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Div>
      {user && (
        <>
          <Typography variant="h4" sx={{ padding: 4 }}>
            Profile
          </Typography>
          <TextField
            fullWidth
            id="outlined-read-only-input"
            margin="normal"
            defaultValue={user.name}
            InputProps={{ readOnly: true }}
          ></TextField>
          <TextField
            fullWidth
            id="outlined-read-only-input"
            margin="normal"
            defaultValue={user.email}
            InputProps={{ readOnly: true }}
          ></TextField>
        </>
      )}
    </Div>
    </>
  );
};

export default Profile;
