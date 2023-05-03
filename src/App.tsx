import React from 'react';
import './App.css';
import UiKit from "./components/ui/ui-kit/ui-kit";
import {Routes} from "react-router"
import {Route, BrowserRouter} from "react-router-dom"
import Cooperation from "./components/Cooperation/Cooperation";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/ui-kit' element={<UiKit/>}/>
            <Route path='/' element={<Cooperation/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
