import React, { useState } from "react";
import { Choice, Domain, Question } from "../types";
import QuestionCard from "./QuestionCard";
import { Step, Steps, Wizard } from "react-albus";
import ChoicesData from "../data/choices.json";
import QuestionData from "../data/questions.json";

const Quiz: React.FC = (props) => {
  const questionsData = QuestionData as Question[];
  const [sum, setSum] = useState<{ [key in Domain]: number }>({
    'E': 0, 'S': 0, 'T': 0, 'J':0
  });

  const handleAnswer = (choice: Choice, question: Question) => {
    const tempSum = choice.score;
    const tempType = question?.questionType;
    const newSum = {...sum} // by value (decomposition)
    console.log('sum',sum)
    console.log('newSum', newSum)
    newSum[tempType] += tempSum

    setSum(newSum)
    console.log("tempSum", tempSum);
    console.log("tempType", tempType);
  };

  return (
    <div>
      <Wizard>
        <Steps>
          {questionsData.map((question, index) => {
            // console.log(question)
            // console.log(index)
            return (
            <Step
              id={`${index}`}
              render={({ next }) => (
                <QuestionCard
                  question={question}
                  choices={ChoicesData[question.questionOrder]}
                  onAnswer={(choice) => {
                    handleAnswer(choice, question);
                    next();
                  }}
                />
              )}
            />)})
          }
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
