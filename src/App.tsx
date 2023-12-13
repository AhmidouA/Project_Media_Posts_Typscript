import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Posts from './pages/Posts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Posts />}/>
          <Route path='/:id' element={<h1>Detail Page</h1>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
