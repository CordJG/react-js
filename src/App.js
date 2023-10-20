import React from "react";
import "./App.css";
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { BrowserRouter, Route, Switch, useParams, Link, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";

function App() {

    const containerStyle = {
        marginTop: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    return (
        <div className="App">
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to = "/counter">Counter</Link> |{" "}
                <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link> | <Link to="/List">List</Link>
            </nav>
            <Routes>
                <Route path = "/" element={<Home />} />
                <Route path = "/about" element={<About />} />
                <Route path = "/counter" element={<Counter />} />
                <Route path = "/input" element={<Input />} />
                <Route path = "/input2" element={<Input2 />} />
                <Route path = "/List" element={<List />} />
            </Routes>
        
        </div>
    );

    // return (

    //     <BrowserRouter>
    //         <Container component="main" maxWidth="xs">
    //             <Box
    //                 sx={containerStyle}
    //             >
    //                 <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }} >
    //                     <LockOutlinedIcon />
    //                 </Avatar>
    //                 <Typography component="h1" variant="h5">
    //                     Sign in
    //                 </Typography>
    //             </Box>
    //             <TextField
    //                 margin="normal"
    //                 label="Email Address"
    //                 required fullWidth
    //                 name="email"
    //                 autoComplete="email" />

    //             <TextField
    //                 label="Password"
    //                 type="password"
    //                 required fullWidth
    //                 name="password"
    //                 autoComplete="current-password"
    //             />
    //             <Box
    //                 sx={containerStyle}
    //             >
    //                 <FormControlLabel
    //                     control={<Checkbox value="save"
    //                         color="primary" />}
    //                     label="Save Id/Pw"
    //                 />
    //             </Box>


    //             <Button
    //                 type="submit"
    //                 fullWidth variant="contained"
    //                 sx={{ mt: 3, mb: 2 }}>
    //                 Sign in
    //             </Button>
    //             <Grid container>
    //                 <Grid item xs>
    //                     <Link>Forgot password?</Link>
    //                 </Grid>
    //                 <Grid item>
    //                     <Link>Sign up</Link>
    //                 </Grid>
    //             </Grid>
    //         </Container>
    //     </BrowserRouter>
    // )
}
export default App;