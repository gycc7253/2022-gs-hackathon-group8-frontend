import { React, useState } from "react";
import TextField from "@mui/material/TextField";

function HomePage() {
    return (
        <div className="main">
            <div>Search your content here</div>
            <div className="search">
                <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"
                />
            </div>
        </div>
    )
  }
  
  export default HomePage