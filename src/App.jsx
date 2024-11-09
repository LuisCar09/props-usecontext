import { Link } from 'react-router-dom';
import { CalculatorProvider } from './components/CalculatorProvider';
import './App.css';

import RoutesApp from './components/Routes';

function App() {
  return (

    <main className='App'>
      <CalculatorProvider>
        <RoutesApp />
      </CalculatorProvider>
      
    </main>

  );
}

export default App;
