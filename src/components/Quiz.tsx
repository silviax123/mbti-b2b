import './container.css';
import ChoicesData from "../data/choices.json";
import QuestionData from "../data/questions.json";
import { Choice, Domain, Question } from "../types";
import React, { useState } from "react";
import { Step, Steps, Wizard } from "react-albus";
import {  useNavigate } from 'react-router-dom';
import { Button } from "@mui/joy";
import { Line } from 'rc-progress';
import { TransitionGroup } from "react-transition-group";
import QuestionCard from "./QuestionCard";

type Sum = { E: number, S: number, T: number, J: number}

const Quiz: React.FC = () => {
  const questionsData = QuestionData as Question[];
  const [answers, setAnswers] = useState<{choice: Choice, question: Question}[]>([]);
  // const [sum, setSum] = useState<Sum>({
  //   E: 0, S: 0, T: 0, J:0
  // });

  const navigate = useNavigate();
  console.log(answers);
  const handleAnswer = (choice: Choice, question: Question) => {
    answers.push({choice, question});
    setAnswers(answers);
    console.log(getSum());
    
    // const tempSum = choice.score;
    // const tempType = question?.questionType;
    // const newSum = {...sum} // by value (decomposition)
    // newSum[tempType] += tempSum
    // setSum(newSum)
  };



  const handleLastQuestion = () => {
    // const tempSum = choice.score;
    // const tempType = question?.questionType;
    // const newSum = {...sum}
    // newSum[tempType] -= tempSum
    // setSum(newSum)
    answers.pop()
    setAnswers(answers);
    console.log(getSum());
  }

  const getSum = () => {
    const temp = [1, 2, 3, 4]
    const total = temp.reduce((sum, value) => sum += value, 0);
    console.log(total)

    return answers.reduce((sum, answer) => {
      const questionType = answer.question.questionType; 
      const score = answer.choice.score;
      sum[questionType as keyof Sum] += score;
      return sum
    }, {E: 0, S: 0, T: 0, J: 0} as Sum);
  }

  const handleSubmit = (next: any) => {
    answers.filter((answer) => answer.choice);
    const sum = getSum();
    localStorage.setItem('sumData', JSON.stringify(sum));
    navigate('/result')
  }

  return (
    <div>
      <div>
        <Wizard 
          render={({ step, steps }) => (
            <div>
              <Line 
                percent={(steps.indexOf(step) + 1) / steps.length * 100}
              />
              <TransitionGroup>
                <Steps>
                  {questionsData.map((question, index) => {
                    return (
                    <Step
                      id={`${index}`}
                      render={({ next, previous }) => (
                        <div>
                          <QuestionCard
                            question={question}
                            choices={ChoicesData[question.questionOrder]}
                            onAnswer={(choice) => {
                               // what the choice points to? why this ok but last question not?
                              handleAnswer(choice, question);
                              // add question here
                              next();
                            }}
                          />
                          <Button 
                            // onClick={previous}
                            onClick = {() => {
                              handleLastQuestion();
                              previous();
                            }}
                          >Last Question
                          </Button>
                          <div className='button-container'>
                            <Button 
                              disabled={question.id !== "60"} 
                              variant="solid" 
                              color='success'
                              onClick={handleSubmit}
                            >Submit
                            </Button>
                          </div>
                        </div>
                      )}
                  />)})
                  }
                </Steps>
              </TransitionGroup>
            </div>
          )}
        />
      </div>
      <div>
        {/* <p>Sum E: {sum.E}</p>
        <p>Sum S: {sum.S}</p>
        <p>Sum T: {sum.T}</p>
        <p>Sum J: {sum.J}</p> */}
      </div>

    </div>
  );
};
export default Quiz;