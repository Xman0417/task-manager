//this component shows the filtering settings 

import React, { useState } from "react";

//MUI Components
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button"


function FilterTask({setFilter, setDate}){
    //Use States for main filter and then the filter for Date. All is default value.
    const [fil, sfil] = useState("All");
    const [fDate, sfDate] = useState("All");
    //Event Handlers
    const handleChange  = (e) => {
        sfil(e.target.value);
    }
    const handleDateChange  = (e) => {
        sfDate(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setFilter(fil);
        setDate(fDate);
    }

    return(
        <Paper 
            style={{
                display: "block",
                textAlign: "center", 
                maxWidth: "300px", 
                padding: "5px",
                margin: "10px auto"
                }}
        >
            <h3>Filter Tasks</h3>
            <h4 style ={{marginBottom: "1px"}}>Subject/Priority</h4>
            {/*MUI Dropdown - Contains the dropdown filtering options*/}
            <Select
                value={fil}
                label="Filter"
                onChange={handleChange}
                style={{width:"175px", height:"30px"}}
            >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Low Priority"}>Low Priority</MenuItem>
                <MenuItem value={"Medium Priority"}>Medium Priority</MenuItem>
                <MenuItem value={"High Priority"}>High Priority</MenuItem>
                <MenuItem value={"Math"}>Subject: Math</MenuItem>
                <MenuItem value={"Science"}>Subject: Science</MenuItem>
                <MenuItem value={"English"}>Subject: English</MenuItem>
                <MenuItem value={"History"}>Subject: History</MenuItem>
                <MenuItem value={"Foreign Languages"}>Subject: Foreign Languages</MenuItem>
                <MenuItem value={"Other"}>Subject: Other</MenuItem>
                
            </Select>
            <h4 style = {{marginBottom: "1px", marginTop: "1px"}}> Date </h4>
            <input value={fDate} onChange={handleDateChange} required />
            <p style = {{color: "grey", marginTop: "1px", fontSize: "10px"  }}>Enter "All" to remove the filter on the date</p>
            <Button style={{margin: "10px auto", display: "block"}} variant="contained" color="primary" onClick={handleSubmit}>
                Save
            </Button>
        </Paper>
    );
}

export default FilterTask;