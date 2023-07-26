import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexOfAnswer from './components/IndexOfAnswer';
import IndexOfTest from './components/IndexOfTest';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<IndexOfTest />}/>
          <Route path='/result' element={<IndexOfAnswer />}/>
        </Routes>
      </div>
    </Router>

  )
}

export default App;
