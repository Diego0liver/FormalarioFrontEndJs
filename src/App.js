import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./components/Home"
import Edit from './components/Edit'
import Cliente from './components/Cliente'
import Add from './components/Add'



function App() {
  return (<div className='App'>
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/editar/:id' element={<Edit />} /> 
      <Route path='/cliente/:id' element={<Cliente />} />
      <Route path='/novocliente/' element={<Add />} />  
    </Routes>
  </Router>
</div>);
}

export default App;





