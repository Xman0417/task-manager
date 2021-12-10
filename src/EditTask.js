//This component has the Editing UI.

import React, { useState } from "react";
//MUI Components
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function EditTask({ task, setEditing, editTask }){

    //Task Information
    const [newTitle, setNewTitle] = useState(task.Title);
    const [newDate, setNewDate] = useState(task.Date);
    const [newDesc, setNewDesc] = useState(task.Description);
    const [newSubj, setNewSubj] = useState(task.Subject);
    const [newPri, setNewPri] = useState(task.Priority);

    //Event Handlers
    const handleTitleChange = (e) =>{
        setNewTitle(e.target.value);
    }
    const handleDateChange = (e) =>{
        setNewDate(e.target.value);
    }
    const handleDescChange = (e) =>{
        setNewDesc(e.target.value);
    }
    const handleSubjChange = (e) =>{
        setNewSubj(e.target.value);
    }
    const handlePriChange = (e) =>{
        setNewPri(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        editTask(task.Id, newTitle, newDate, newDesc, newSubj, newPri);
        setNewTitle("");
        setNewDate("");
        setNewDesc("");
        setNewSubj("");
        setEditing(false);
    }

    return(
        <Paper 
            elevation={4}
            style={{
                maxWidth: "500px",
                margin: "10px auto",
                padding: "10px"
            }}
        >
            {/*Very similar to CreateTask for what it returns 
            with an exception that it says "New Name for" + the task's name */}
            <form style={{display:"block", textAlign: "center"}}>
                <h5 style={{margin: "0px"}}>New name for {task.Title} <br /> </h5>
                <input id={task.Id} type="text" value={newTitle} onChange={handleTitleChange} required/>
                <h5 style={{margin: "0px"}}>New date for {task.Title} <br /> </h5>
                <input id={task.Id} type="text" value={newDate} onChange={handleDateChange} required/>
                <h5 style={{margin: "0px"}}>New description for {task.Title} <br /> </h5>
                <input id={task.Id} type="text" value={newDesc} onChange={handleDescChange} />
                <h5 style={{margin: "0px"}}>New subject for {task.Title} <br /> </h5>
                <Select
                    id={task.Id}
                    value={newSubj}
                    label="Subject"
                    onChange={handleSubjChange}
                    style={{width:"175px", height:"30px"}}
                >
                    <MenuItem value={"Math"}>Math</MenuItem>
                    <MenuItem value={"Science"}>Science</MenuItem>
                    <MenuItem value={"English"}>English</MenuItem>
                    <MenuItem value={"History"}>History</MenuItem>
                    <MenuItem value={"Foreign Languages"}>Foreign Languages</MenuItem>
                    <MenuItem value={"Other"}>PE/Health</MenuItem>
                </Select>
                <h5 style={{margin: "0px"}}>Priority</h5>
                <Select
                    value={newPri}
                    label="Priority"
                    onChange={handlePriChange}
                    style={{width:"175px", height:"30px"}}
                >
                    <MenuItem value={"Low"}>Low</MenuItem>
                    <MenuItem value={"Medium"}>Medium</MenuItem>
                    <MenuItem value={"High"}>High</MenuItem>
                </Select>

                <Stack direction="row" spacing={2}>
                    <Button  style={{margin: "10px auto", display: "block"}} variant="contained" color="error"  onClick={()=>setEditing(false)}>
                        Cancel
                    </Button>
                    <Button style={{margin: "10px auto", display: "block"}} variant="contained" color="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
}
export default EditTask;