import './App.css';
import QuestionCard from './components/QuestionCard';
import IndexOfAnswer from './components/IndexOfAnswer';
import IndexOfTest from './components/IndexOfTest';
import ShowQuestion from './components/ShowQuestion';
import { Choice } from './types';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      {/* <IndexOfTest /> */}
      {/* <IndexOfAnswer /> */}
      {/* <ShowQuestion /> */}
      <Quiz/>
    </div>

  )
}

export default App;
