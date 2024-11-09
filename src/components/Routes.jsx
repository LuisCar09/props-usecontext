import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Result from './Result';
import Calculator from './Calculator';

const RoutesApp = () => {
    return(
        <Router>
        <Routes>
            
            <Route path='/' element={<Calculator />} />
             <Route path='/result' element={<Result />} />
            

        </Routes>
    </Router>
    )
}

export default RoutesApp