import React, { useState } from "react";
import data from './data';
import Tours from './components/Tours/Tours';

const App = () => {

  const [tours, setTours] = useState(data);


  // remove tourcard by id 
  function removeTour(id){
     const newTours = tours.filter(tour =>tour.id !== id);
     setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tour Left</h2>
        <button className="btn-white" onClick={()=> setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (<div className="App">
    <Tours tours={tours} removeTour ={removeTour}></Tours>
  </div>
  )
};

export default App;


// import FormTask from "./Pages/FormTask";

// function App(){
//   return(
//     <div>
//       <FormTask/>
//     </div>
//   )
// }
// export default App;