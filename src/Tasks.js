import React, {useState} from 'react'
import Task from './Task';
import FilterTask from './FilterTask';
import CreateTask from './CreateTask';

//MUI Components
import Button from "@mui/material/Button"



function Tasks(){
    //Use State for the list of tasks.
    const [tasks, setTasks] = useState([]);
    //Use State to toggle the button to show CreateTask. Set to hidden at first.
    const [showCreate, setShowCreate] = useState(false);
    //Use State for Filter by Subject/Priority. 
    const [filter, setFilter] = useState("All");
    //Use State for filtering date.
    const [fDate, sfDate] = useState("All");

    
    
//Function for saving tasks. Creates a unique ID by saving the current time. Used in CreateTask.js
    const onSaveTask = ({title, date, desc, subj, pri}) =>{
        const id=Date.now()
        setTasks([
            {Title: title, Date: date,Id: id, Description: desc, Subject: subj, Completed: false, Priority: pri},
            ...tasks,
        ])
        
    };
//Function for editing tasks, is used in EditTask.js and also sent into Task.js.
    const editTask = (id, newTitle, newDate, newDesc, newSubj, newPri) => {
        const updatedTaskList = tasks.map(task => {
            if (id === task.Id){
                return {...task, Title: newTitle, Date: newDate, Description: newDesc, Subject: newSubj, Priority: newPri}
            }
            return task;
        })
        setTasks(updatedTaskList)
    };
//Function that toggles tasks complete. Sent into Task.js to be the onClick function for the Complete Button
    const onToggleComplete = (task) => {
        setTasks(
            tasks.map((chkTask) => {
                chkTask.Completed =
                    task.Id === chkTask.Id ? !chkTask.Completed : chkTask.Completed;
                return chkTask;
            })
        );
    };
    //Function that deletes a task from the array of tasks.
    //Sent into Task.js to be the onClick function for the Delete Button.
    const deleteTask = (oldTask) => {
        const oldId = oldTask.Id;
        const updatedTasks = tasks.filter(task => oldId !== task.Id);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <Button 
                style={{margin: "10px auto", display: "block"}} 
                onClick={() => setShowCreate(!showCreate)} 
                variant="contained"
            >
                {/* Toggles what is shown on the button based on the showCreate variable */}
                {!showCreate && "New Task"}
                {showCreate && "Hide"}
            </Button>
            {/* Statement to show the Create Task UI depending on the showCreate variable*/}
            {showCreate && <CreateTask onSaveTask={onSaveTask} setShowCreate={setShowCreate} />}
             {/*Displays the Filter section, with a filter by Priority/Subject and a Filter by Date */}
            <FilterTask 
                setFilter={setFilter}
                setDate = {sfDate}
            />
            {/* Nested If Else Statements that cycles through each scenario to filter it out.
            Starts with priority and then switches to subject. Each loop also checks whether
            or not the Date Filter is "All", and if it's not, then it sorts by the filtered Date */ }
            {filter === 'All' ?(
                //Testing All First
                (fDate) === 'All' ? (
                    tasks.map((task) => (
                        <Task 
                            Task={task}
                            onToggleComplete={onToggleComplete}
                            deleteTask={deleteTask}
                            editTask={editTask}
                        />
                    ))
                ) : (
                    tasks.map((task) => (
                        <div>
                            {task.Date === fDate ? (
                                <Task 
                                    Task={task}
                                    onToggleComplete={onToggleComplete}
                                    deleteTask={deleteTask}
                                    editTask={editTask}
                                />
                            ) : (
                                console.log("No Tasks")
                            )}
                            
                        </div>
                    ))
                )
            ) : (
                //Priorities
                (filter) === "Low Priority" ? (
                    //Low Priority
                    (fDate) === 'All' ? (
                        tasks.map((task) => (
                            <div>
                                {task.Priority === 'Low' ? (
                                    <Task 
                                    Task={task}
                                    onToggleComplete={onToggleComplete}
                                    deleteTask={deleteTask}
                                    editTask={editTask}
                                />
                                ) : (
                                    console.log("No Tasks")
                                )}
                                
                            </div>
                        ))
                    ) : (
                        tasks.map((task) => (
                            <div>
                                {task.Priority === 'Low' && task.Date === fDate ? (
                                    <Task 
                                    Task={task}
                                    onToggleComplete={onToggleComplete}
                                    deleteTask={deleteTask}
                                    editTask={editTask}
                                />
                                ) : (
                                    console.log("No Tasks")
                                )}
                                
                            </div>
                        ))
                    )   
                ) : (
                    (filter) === "Medium Priority" ? (
                        //Medium Priority
                        (fDate) === 'All' ? (
                            tasks.map((task) => (
                                <div>
                                    {task.Priority === 'Medium' ? (
                                        <Task 
                                            Task={task}
                                            onToggleComplete={onToggleComplete}
                                            deleteTask={deleteTask}
                                            editTask={editTask}
                                        />
                                    ) : (
                                        console.log("No Tasks")
                                    )}
                                    
                                </div>
                            ))   
                        ) : (
                            tasks.map((task) => (
                                <div>
                                    {task.Priority === 'Medium' && task.Date === fDate ? (
                                        <Task 
                                        Task={task}
                                        onToggleComplete={onToggleComplete}
                                        deleteTask={deleteTask}
                                        editTask={editTask}
                                    />
                                    ) : (
                                        console.log("No Tasks")
                                    )}
                                    
                                </div>
                            ))
                        )
                    ) : (
                        (filter) === "High Priority" ? (
                            //High Priority
                            (fDate) === 'All' ? (
                                tasks.map((task) => (
                                    <div>
                                        {task.Priority === 'High' ? (
                                            <Task 
                                                Task={task}
                                                onToggleComplete={onToggleComplete}
                                                deleteTask={deleteTask}
                                                editTask={editTask}
                                            />
                                        ) : (
                                            console.log("No Tasks")
                                        )}
                                        
                                    </div>
                                    ))   
                            ) : (
                                tasks.map((task) => (
                                    <div>
                                        {task.Priority === 'High' && task.Date === fDate ? (
                                            <Task 
                                                Task={task}
                                                onToggleComplete={onToggleComplete}
                                                deleteTask={deleteTask}
                                                editTask={editTask}
                                            />
                                        ) : (
                                            console.log("No Tasks")
                                        )}
                                        
                                    </div>
                                ))
                            )
                        ) : (
                            //Subjects
                            (filter) === "Math" ? (
                                //Math
                                (fDate) === 'All' ? (
                                    tasks.map((task) => (
                                        <div>
                                            {task.Subject === 'Math' ? (
                                                <Task 
                                                    Task={task}
                                                    onToggleComplete={onToggleComplete}
                                                    deleteTask={deleteTask}
                                                    editTask={editTask}
                                                />
                                            ) : (
                                                
                                                console.log("No Tasks")
                                            )}
                                            
                                        </div>
                                    ))   
                                ) : (
                                    tasks.map((task) => (
                                        <div>
                                            {task.Subject === 'Math' && task.Date === fDate ? (
                                                <Task 
                                                    Task={task}
                                                    onToggleComplete={onToggleComplete}
                                                    deleteTask={deleteTask}
                                                    editTask={editTask}
                                                />
                                            ) : (
                                                console.log("No Tasks")
                                            )}
                                        </div>
                                    ))
                                )
                            ) : (
                                (filter) === "Science" ? (
                                    //Science
                                    (fDate) === 'All' ? (
                                        tasks.map((task) => (
                                            <div>
                                                {task.Subject === 'Science' ? (
                                                    <Task 
                                                        Task={task}
                                                        onToggleComplete={onToggleComplete}
                                                        deleteTask={deleteTask}
                                                        editTask={editTask}
                                                    />
                                                ) : (
                                                    console.log("No Tasks")
                                                )}
                                                
                                            </div>
                                        ))   
                                    ):(
                                        tasks.map((task) => (
                                            <div>
                                                {task.Subject === 'Science' && task.Date === fDate ? (
                                                    <Task 
                                                        Task={task}
                                                        onToggleComplete={onToggleComplete}
                                                        deleteTask={deleteTask}
                                                        editTask={editTask}
                                                    />
                                                ) : (
                                                    console.log("No Tasks")
                                                )}
                                            </div>
                                        ))
                                    )
                                ) : (
                                    (filter) === "English" ? (
                                        //English
                                            (fDate) === 'All' ? (
                                                tasks.map((task) => (
                                                    <div>
                                                        {task.Subject === 'English' ? (
                                                            <Task 
                                                                Task={task}
                                                                onToggleComplete={onToggleComplete}
                                                                deleteTask={deleteTask}
                                                                editTask={editTask}
                                                            />
                                                        ) : (
                                                            console.log("No Tasks")
                                                        )}
                                                        
                                                    </div>
                                                ))   
                                            ) : (
                                                tasks.map((task) => (
                                                    <div>
                                                        {task.Subject === 'English' && task.Date === fDate ? (
                                                            <Task 
                                                                Task={task}
                                                                onToggleComplete={onToggleComplete}
                                                                deleteTask={deleteTask}
                                                                editTask={editTask}
                                                            />
                                                        ) : (
                                                            console.log("No Tasks")
                                                        )}
                                                    </div>
                                                ))
                                            )
                                    ) : (
                                        (filter) === "History" ? (
                                            //History
                                            (fDate) === 'All' ? (
                                                tasks.map((task) => (
                                                    <div>
                                                        {task.Subject === 'History' ? (
                                                            <Task 
                                                                Task={task}
                                                                onToggleComplete={onToggleComplete}
                                                                deleteTask={deleteTask}
                                                                editTask={editTask}
                                                            />
                                                        ) : (
                                                            console.log("No Tasks")
                                                        )}
                                                        
                                                    </div>
                                                ))   
                                            ) : (
                                                tasks.map((task) => (
                                                    <div>
                                                        {task.Subject === 'History' && task.Date === fDate ? (
                                                            <Task 
                                                                Task={task}
                                                                onToggleComplete={onToggleComplete}
                                                                deleteTask={deleteTask}
                                                                editTask={editTask}
                                                            />
                                                        ) : (
                                                            console.log("No Tasks")
                                                        )}
                                                    </div>
                                                ))
                                            )
                                        ) : (
                                            (filter) === "Foreign Languages" ? (
                                                //Foreign Languages
                                                (fDate) === 'All' ? (
                                                    tasks.map((task) => (
                                                        <div>
                                                            {task.Subject === 'Foreign Languages' ? (
                                                                <Task 
                                                                    Task={task}
                                                                    onToggleComplete={onToggleComplete}
                                                                    deleteTask={deleteTask}
                                                                    editTask={editTask}
                                                                />
                                                            ) : (
                                                                console.log("No Tasks")
                                                            )}
                                                            
                                                        </div>
                                                    ))   
                                                ) : (
                                                    tasks.map((task) => (
                                                        <div>
                                                            {task.Subject === 'Foreign Languages' && task.Date === fDate ? (
                                                                <Task 
                                                                    Task={task}
                                                                    onToggleComplete={onToggleComplete}
                                                                    deleteTask={deleteTask}
                                                                    editTask={editTask}
                                                                />
                                                            ) : (
                                                                console.log("No Tasks")
                                                            )}
                                                        </div>
                                                    ))
                                                )
                                            ) : (
                                                (filter) === "Other" ? (
                                                    //Other
                                                    (fDate) === 'All' ? (
                                                        tasks.map((task) => (
                                                            <div>
                                                                {task.Subject === 'Other' ? (
                                                                    <Task 
                                                                        Task={task}
                                                                        onToggleComplete={onToggleComplete}
                                                                        deleteTask={deleteTask}
                                                                        editTask={editTask}
                                                                    />
                                                                ) : (
                                                                    console.log("No Tasks")
                                                                )}
                                                                
                                                            </div>
                                                        ))   
                                                    ) : (
                                                        tasks.map((task) => (
                                                            <div>
                                                                {task.Subject === 'Other' && task.Date === fDate ? (
                                                                    <Task 
                                                                        Task={task}
                                                                        onToggleComplete={onToggleComplete}
                                                                        deleteTask={deleteTask}
                                                                        editTask={editTask}
                                                                    />
                                                                ) : (
                                                                    console.log("No Tasks")
                                                                )}
                                                            </div>
                                                        ))
                                                    )
                                                ) : (
                                                    //Should Not Show Up
                                                    console.log("error")
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )

                )
            )
        
        }
           
        </div>
    )
}


export default Tasks