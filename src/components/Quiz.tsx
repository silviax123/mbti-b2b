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

const Quiz: React.FC = () => {
  const questionsData = QuestionData as Question[];
  const [sum, setSum] = useState<{ [key in Domain]: number }>({
    'E': 0, 'S': 0, 'T': 0, 'J':0
  });

  const navigate = useNavigate()
  const handleAnswer = (choice: Choice, question: Question) => {
    const tempSum = choice.score;
    const tempType = question?.questionType;
    const newSum = {...sum} // by value (decomposition)
    newSum[tempType] += tempSum
    setSum(newSum)
  };

  const handleLastQuestion = (choice: Choice, question: Question) => {
    const tempSum = choice.score;
    const tempType = question?.questionType;
    const newSum = {...sum}
    newSum[tempType] -= tempSum
    setSum(newSum)
  }

  const handleSubmit = () => {
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
                              handleAnswer(choice, question); // add question here
                              next();
                            }}
                          />
                          <Button 
                            onClick={previous}
                            // onClick = {(choice) => {
                            //   handleLastQuestion(choice, question)
                            // }}
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
        <p>Sum E: {sum.E}</p>
        <p>Sum S: {sum.S}</p>
        <p>Sum T: {sum.T}</p>
        <p>Sum J: {sum.J}</p>
      </div>

    </div>
  );
};
export default Quiz;