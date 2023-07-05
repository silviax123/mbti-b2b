import React, { useState } from 'react';
import AnswerRadioGroup from './AnswerRadioGroup';

const Questionnaire: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<number[]>([]);

  const questions = [
    {
      question: 'Question 1',
      options: [
        { label: 'Option A', score: -2 },
        { label: 'Option B', score: -1 },
        { label: 'Option C', score: 1 },
        { label: 'Option D', score: 2 },
      ],
    },
    // Add more questions here...
  ];

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const handleAnswerSelected = (score: number) => {
    setScores(prevScores => [...prevScores, score]);
    handleNextQuestion();
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];
    return (
      <AnswerRadioGroup
        question={question.question}
        options={question.options}
        onNext={handleNextQuestion}
      />
    );
  };

  return (<></>)
}