import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { nextQuestion, prevQuestion, calculateScore } from '../redux/quizSlice';

// Component to navigate between questions and submit the quiz
const Navigation = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, questions } = useSelector((state) => state.quiz);

  return (
    <div className="flex justify-between items-center max-w-2xl mx-auto mt-6">
      <Button
        onClick={() => dispatch(prevQuestion())}
        disabled={currentQuestionIndex === 0}
        type="default"
        className="rounded-md"
      >
        Previous
      </Button>
      {currentQuestionIndex === questions.length - 1 ? (
        <Button
          onClick={() => dispatch(calculateScore())}
          type="primary"
          className="rounded-md"
        >
          Submit
        </Button>
      ) : (
        <Button
          onClick={() => dispatch(nextQuestion())}
          type="primary"
          className="rounded-md"
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default Navigation;
