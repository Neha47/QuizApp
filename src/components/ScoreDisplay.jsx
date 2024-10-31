import React from 'react';
import { Result } from 'antd';
import { useSelector } from 'react-redux';

// Component to display the final score after quiz submission
const ScoreDisplay = () => {
  const { score, questions } = useSelector((state) => state.quiz);

  return (
    <Result
      status="success"
      title="Quiz Completed!"
      subTitle={`You scored ${score} out of ${questions.length}`}
      className="mt-8"
    />
  );
};

export default ScoreDisplay;
