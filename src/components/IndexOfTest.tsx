import { Button } from "@mui/joy";
import AnimalWithContainer from "./AnimalWithContainer";
import AnswerRadioGroup from "./AnswerRadioGroup";
import ProgressBar from "./ProgressBar";

const IndexOfTest = () => {
  return (
    <>
      <header className="App-header">
        <p>M16人格测试</p>
      </header> 
      <body className='App-body'>
        <ProgressBar value={40}/>
        <AnimalWithContainer>
          <p> this is the content inside the container</p>
        </AnimalWithContainer>
        <AnswerRadioGroup question={'question1'} options={[]} onNext={function (): void {
          throw new Error('Function not implemented.');
        } }></AnswerRadioGroup>
        <div className='button-container'>
          <Button disabled={false} variant="solid" color='success'>提交试卷</Button>
          <Button>上一题</Button>
        </div>
      </body>
      <footer>
        <p>©️ M16人格研究所.</p>
      </footer>
    </>
  )
}

export default IndexOfTest