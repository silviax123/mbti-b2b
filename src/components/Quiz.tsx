import React, { useEffect, useState } from 'react';
import { Answer, Choice, Choices, Question } from '../types';
import ChoicesData from "../data/choices.json";
import QuestionData from "../data/questions.json";
import QuestionCard from './QuestionCard';
import { Step, Steps } from 'react-albus';


const Quiz: React.FC = () => {
  // const choicesData = ChoicesData as Choices;
  const questionsData = QuestionData as Question[];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Choice[]>([])

  const handleAnswer = (choice: Choice) => {
    setAnswers((prevAnswers) => [...prevAnswers, choice]);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    if (currentStep === questionsData.length) {
      console.log('Quiz is finished!', answers);
    }
  },[currentStep, answers, questionsData.length])

  return (
    <div>
      <Steps>
        {questionsData.map((question, index) => (
          <Step key={index}>
            <QuestionCard
              question={question}
              choices={ChoicesData[question.questionOrder]}
              onAnswer={handleAnswer}
            />
          </Step>
        ))}
      </Steps>
    </div>
  )  
};


export default Quiz;
