import React, { useEffect, useState } from 'react';
import { Answer, Choice, Choices, Question } from '../types';
import QuestionCard from './QuestionCard';
import { Step, Steps, Wizard } from 'react-albus';
import ChoicesData from "../data/choices.json";
import QuestionData from "../data/questions.json";


const Quiz: React.FC = (props) => {
  // const choicesData = ChoicesData as Choices;
  const questionsData = QuestionData as Question[];
  const [currentStep, setCurrentStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>()
  const [answers, setAnswers] = useState<Choice[]>([])

  const handleAnswer = (choice: Choice) => {
    setAnswers((prevAnswers) => [...prevAnswers, choice]);
    setCurrentStep((prevStep) => prevStep + 1);
    setCurrentQuestion(questionsData[currentStep + 1])
  };

  console.log("answers:", answers)
  console.log("currentStep:", currentStep)
  console.log("questionsData", questionsData)
  console.log("currentQuestion",currentQuestion)

  // useEffect(() => {
  //   if (currentStep === questionsData.length) {
  //     console.log('Quiz is finished!', answers);
  //   }
  // },[currentStep, answers, questionsData.length])

  useEffect(() => {
    console.log('inside useEffect')

  }, [currentStep])



  return (
    <div>
      <Wizard>
        <Steps>
          {questionsData.map((question, index) => (
            <Step id={`${index}`}>
              {index === currentStep && (
                <QuestionCard
                  number={index}
                  question={currentQuestion}
                  choices={ChoicesData[question.questionOrder]}
                  onAnswer={(choice) => {
                    handleAnswer(choice);
                    setTimeout(() => {
                      setCurrentStep((prevStep) => prevStep + 1 )}, 500);
                  }}

                />
              )}
            </Step>
          ))}
        </Steps>
      </Wizard>
    </div>
  )  
};


export default Quiz;
