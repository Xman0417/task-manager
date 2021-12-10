//This component is the Create Task UI.

import React, { useState } from "react";

//MUI Components
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

//Two functions are passed in, one saves the task, one toggles whether or not the UI is seen.
function CreateTask({onSaveTask, setShowCreate }){
    //Task Properties that are saved in these variables and then saved in the function onSaveTask.
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("");
    const [subj, setSubj] = useState("");
    const [pri, setPri] = useState("");
    //When the button is submitted, it saves the task. 
    const saveTask = (e) => {
        e.preventDefault();
        onSaveTask({title: title, date: date, desc: desc, subj: subj, pri: pri});

        setTitle("");
        setDate("");
        setDesc("");
        setSubj("");
        setPri("");
        setShowCreate(false);
    };

    //Required for the Dropdowns
    const handleSubjectChange = (e) => {
        setSubj(e.target.value);
    };
    const handlePriorityChange = (e) => {
        setPri(e.target.value);
    };

    return(
        <Paper
            elevation={4}
            style={{
                maxWidth: "800px",
                margin: "10px auto",
                padding: "10px",
                textAlign: "center"
            }}
        >
            <h1 style = {{marginBottom: "0px"}}>Add Task</h1>

            <form style={{textAlign: "center"}}>
                <h5 style={{margin: "0px"}}>Title</h5>
                <input type="text" name="title" className="title" value={title} onChange={(e)=> setTitle(e.target.value)} style={{marginBottom: "15px"}} required />

                <h5 style={{margin: "0px"}}>Date</h5>
                <input type="text" name="date" className="date" value={date} onChange={(e)=> setDate(e.target.value)} style={{marginBottom: "15px"}} required/>

                <h5 style={{margin: "0px"}}>Description</h5>
                <input type="text" name="desc" className="desc" value={desc} onChange={(e)=> setDesc(e.target.value)} style={{marginBottom: "15px"}} />
                <h5 style={{margin: "0px"}}>Subject</h5>
                {/* MUI Dropdown */}
                <Select
                    value={subj}
                    label="Subject"
                    onChange={handleSubjectChange}
                    style={{width:"175px", height:"30px"}}
                    required
                >
                    <MenuItem value={"Math"}>Math</MenuItem>
                    <MenuItem value={"Science"}>Science</MenuItem>
                    <MenuItem value={"English"}>English</MenuItem>
                    <MenuItem value={"History"}>History</MenuItem>
                    <MenuItem value={"Foreign Languages"}>Foreign Languages</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
                
                <h5 style={{margin: "0px"}}>Priority</h5>
                {/*MUI Dropdown*/}
                <Select
                    value={pri}
                    label="Priority"
                    onChange={handlePriorityChange}
                    style={{width:"175px", height:"30px"}}
                    required
                >
                    <MenuItem value={"Low"}>Low</MenuItem>
                    <MenuItem value={"Medium"}>Medium</MenuItem>
                    <MenuItem value={"High"}>High</MenuItem>
                </Select>
                <Button style={{margin: "10px auto", display: "block"}} onClick={saveTask} variant="contained" size="large">
                    Save
                </Button>
            </form>
            
        </Paper>
    )
}

export default CreateTask;