import React from 'react'
import Home from './Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App (){
    <Router>
        <Routes>
            <Route path ="/" element={<Home />} />
        </Routes>
    </Router>
}
export default App;