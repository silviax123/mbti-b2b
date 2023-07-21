import { Button } from "@mui/joy";
import AnimalWithContainer from "./AnimalWithContainer";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import { Choice } from "../types";

const IndexOfTest = () => {
  return (
    <>
      <header className="App-header">
        <p>M16 Personality Test</p>
      </header> 
      <body className='App-body'>
        <ProgressBar value={40}/>
        {/* <QuestionCard /> */}
        <div className='button-container'>
          <Button disabled={false} variant="solid" color='success'>Submit</Button>
          <Button>Last Question</Button>
        </div>
      </body>
      <footer>
        <p>©️ M16.人格研究所</p>
      </footer>
    </>
  )
}

export default IndexOfTest