import React, {useState} from 'react'
import EditTask from './EditTask';

//MUI Components
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Stack from '@mui/material/Stack';

//The Functions onToggleComplete and deleteTask serve as onClick functions for the complete button and the delete button.
//The Function editTask is passed into EditTask.js

const Task = ({Task, onToggleComplete, deleteTask, editTask}) => {
    //UseState that toggles the Standard and Editing Views.
    const [isEditing, setEditing] = useState(false);

    //Displays this when the Edit Button has been clicked in the standard view. 
    const editingView = (
        <EditTask task={Task} setEditing = {setEditing} editTask = {editTask}  />
    );

    //The default view. Displays the Title, Subject, Priority, Date, and Description of the task. 
    const standardView = (
        <Paper
            elevation={4}
            style={{
                maxWidth: "500px",
                margin: "10px auto",
                padding: "10px"
            }}
        >
            <h2>{Task.Title}</h2>
            <h4>Subject: {Task.Subject}</h4>
            <h5>Priority: {Task.Priority}</h5>
            <p>{Task.Date}</p>
            <p>{Task.Description}</p>
            
            <p>Status: {Task.Completed ? 'Completed': 'In Progress'}</p>

            {/* Puts the Complete, Edit, and Delete Buttons in a Line */ }
            <Stack direction="row" spacing={2}>
                <Button 
                    style={{margin: "10px auto", display: "block"}} 
                    onClick={() => onToggleComplete(Task)} 
                    variant="contained"
                    color={Task.Completed ? 'success': 'primary'}
                    
                >
                    
                    {!Task.Completed && "Complete Task"}
                    {Task.Completed && "Completed!"}
                </Button>
                <Button
                    style={{margin: "10px auto", display: "block"}} 
                    variant="contained"
                    color="secondary"
                    onClick={()=>setEditing(true)} 
                >
                    Edit
                </Button>
                <Button
                    style={{margin: "10px auto", display: "block"}} 
                    variant="contained"
                    color="error"
                    onClick={() => deleteTask(Task)} 
                >
                    Delete
                </Button>
            </Stack>
        </Paper>
    );
    //Conditional Rendering returns the correct view depending on whether or not isEditing is true.
    return <>{isEditing ? editingView : standardView}</>;
    
}

export default Task
