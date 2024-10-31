import React from 'react';
import { Progress } from 'antd';
import { useSelector } from 'react-redux';

// Component to display progress based on the current question index
const ProgressBar = () => {
  const { currentQuestionIndex, questions } = useSelector((state) => state.quiz);
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="w-full bg-gray-100 py-3 px-8 shadow-sm">
      <Progress percent={progress} showInfo={false} strokeColor="#1890ff" />
    </div>
  );
};

export default ProgressBar;
