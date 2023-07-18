import React, { useState, useEffect } from 'react';
import { Wizard, Steps, Step } from 'react-albus';

interface Question {
  questionId: number;
  QuestionTitle: string;
  QuestionType: 'E' | 'S' | 'T' | 'J';
  QuestionOrder: 'zheng' | 'fan';
}

const QuestionsComponent: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<number[]>([]);

  useEffect(() => {
    // Fetch questions from questions.json
    const fetchData = async () => {
      try {
        const response = await fetch('questions.json');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchData();
  }, []);

  const handleAnswer = (answer: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    let score = 0;

    if (currentQuestion.QuestionOrder === 'zheng') {
 
    }

    setScores(prevScores => [...prevScores, score]);

    // Move to the next question
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  if (currentQuestionIndex >= questions.length) {
    // Render questionnaire completion message or redirect to another page
    return <div>Questionnaire completed!</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <Steps>
        {questions.map(question => (
          <Step key={question.questionId} id={question.questionId.toString()} />
        ))}
      </Steps>
      <h3>Question {currentQuestion.questionId}</h3>
      <p>{currentQuestion.QuestionTitle}</p>
      <ul>
        <li>
          <button onClick={() => handleAnswer(0)}>Strongly Agree</button>
        </li>
        <li>
          <button onClick={() => handleAnswer(1)}>Agree</button>
        </li>
        <li>
          <button onClick={() => handleAnswer(2)}>Disagree</button>
        </li>
        <li>
          <button onClick={() => handleAnswer(3)}>Strongly Disagree</button>
        </li>
      </ul>
    </div>
  );
};

export default QuestionsComponent;
