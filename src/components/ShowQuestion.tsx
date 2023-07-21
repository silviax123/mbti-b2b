import React, { useState, useEffect } from 'react';
import { Wizard, Steps, Step } from 'react-albus';
import QuestionsData from '../data/questions.json'

export interface Question {
  id: string;
  text: string;
  questionType: string;
  questionOrder: string;
}
const Questionnaire: React.FC = () => {
  // const questionData:Question[] = QuestionsData as Question[]
  return (
    <div>
      {QuestionsData.map( (question: Question) => {
        console.log(question)
        return (
          <div>
            {question.text}
          </div>
        )
      })}
    </div>
  )

}
export default Questionnaire;