import React, { useEffect, useState } from "react";
import { Answer, Choice, Choices, Question } from "../types";
import QuestionCard from "./QuestionCard";
import { Step, Steps, Wizard } from "react-albus";
import ChoicesData from "../data/choices.json";
import QuestionData from "../data/questions.json";

const Quiz: React.FC = (props) => {
  // const choicesData = ChoicesData as Choices;
  const questionsData = QuestionData as Question[];
  // const [currentStep, setCurrentStep] = useState(0);
  // const [currentQuestion, setCurrentQuestion] = useState<Question | null>();
  const [answers, setAnswers] = useState<Choice[]>([]);

  const handleAnswer = (choice: Choice) => {
    setAnswers((prevAnswers) => [...prevAnswers, choice]);
    // setCurrentStep((prevStep) => prevStep + 1);
    // setCurrentQuestion(questionsData[currentStep + 1]);
  };

  console.log("answers:", answers); //why answer did not display in console?
  // console.log("currentStep:", currentStep);
  // console.log("currentQuestion", currentQuestion);

  // useEffect(() => {
  //   if (currentStep === questionsData.length) {
  //     console.log('Quiz is finished!', answers);
  //   }
  // },[currentStep, answers, questionsData.length])

  // useEffect(() => {
  //   console.log('inside useEffect')

  // }, [currentStep]) // Is this necessary?

  return (
    <div>
      <Wizard>
        <Steps>
          {questionsData.map((question, index) => (
            <Step
              id={`${index}`}
              render={({ next }) => (
                <QuestionCard
                  number={index}
                  question={question}
                  choices={ChoicesData[question.questionOrder]}
                  onAnswer={(choice) => {
                    handleAnswer(choice);
                    next();
                    // setTimeout(() => {
                    //   setCurrentStep((prevStep) => prevStep)}, 500); // should I write prevStep here?
                  }}
                />
              )}
            />
          ))}
        </Steps>
      </Wizard>
    </div>
  );
};

export default Quiz;
