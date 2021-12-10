import './App.css';

import Tasks from './Tasks'

function App() {
  //Majority of code is in Tasks.js, this was built off of the original demo that we did in HSE Apps
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Task Manager</h1>
      <Tasks />
      
    </div>
  );
}

export default App;
