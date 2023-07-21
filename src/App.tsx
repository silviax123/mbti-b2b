import './App.css';
import QuestionCard from './components/QuestionCard';
import IndexOfAnswer from './components/IndexOfAnswer';
import IndexOfTest from './components/IndexOfTest';
import ShowQuestion from './components/ShowQuestion';
import { Choice } from './types';

function App() {
  return (
    <div className="App">
      {/* <IndexOfTest /> */}
      {/* <IndexOfAnswer /> */}
      {/* <ShowQuestion /> */}
      <QuestionCard question={{
        id: '1',
        text: 'question1',
        questionType: 'E',
        questionOrder: 'plus'
      }} choices={[]} score={0} onAnswer={function (c: Choice): void {
        throw new Error('Function not implemented.');
      } }/>
    </div>

  )
}

export default App;
