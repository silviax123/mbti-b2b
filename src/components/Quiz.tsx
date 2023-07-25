import React, { useEffect, useState } from "react";
import { Answer, Choice, Choices, Domain, Question, questionTypes } from "../types";
import QuestionCard from "./QuestionCard";
import { Step, Steps, Wizard } from "react-albus";
import ChoicesData from "../data/choices.json";
import QuestionData from "../data/questions.json";


const Quiz: React.FC = (props) => {
  // const choicesData = ChoicesData as Choices;
  const questionsData = QuestionData as Question[];
  const [currentStep, setCurrentStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>();
  const [choices, setChoices] = useState<Choice[]>([]);
  const [answers, setAnswers] = useState<Choice[]>([]);
  const [tempSum, setTempSum] = useState(0)
  const [tempType, setTempType] = useState('E')
  // const [sum, setSum] = useState({ 'E': 0, 'S': 0, 'T': 0, 'J':0 })


  const [sum, setSum] = useState<{ [key in Domain]: number }>({
    'E': 0, 'S': 0, 'T': 0, 'J':0,
  });


  const handleAnswer = (choice: Choice) => {
    setChoices((prevChoices) => [...prevChoices, choice]);
    setCurrentStep((prevStep) => prevStep + 1);
    setCurrentQuestion(questionsData[currentStep + 1])

    const tempSum = choice.score;
    const tempType = currentQuestion?.questionType
    setSum((prevSum) => ({
      ...prevSum,
      tempType: prevSum[tempType] + tempSum
    }))
    console.log("tempSum", tempSum);
    console.log("tempType", tempType);
  };



  console.log("choices", choices); 
  console.log("currentStep:", currentStep);
  console.log("currentQuestion", currentQuestion);
  // console.log("sum:", sum)



  return (
    <div>
      <Wizard>
        <Steps>
          {questionsData.map((question, index) => (
            <Step
              id={`${index}`}
              render={({ next }) => (
                <QuestionCard
                  question={question}
                  choices={ChoicesData[question.questionOrder]}
                  // questionType={question.questionType}
                  onAnswer={(choice) => {
                    handleAnswer(choice);
                    next();
                  }}
                />
              )}
            />
          ))}
        </Steps>
      </Wizard>
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
