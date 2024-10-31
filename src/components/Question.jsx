import React from 'react';
import { Card, Typography, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../redux/quizSlice';

const { Title, Text } = Typography;

// Component to render the current question and answer options
const Question = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, answers } = useSelector((state) => state.quiz);
  const question = questions[currentQuestionIndex];

  const handleAnswerChange = (e) => {
    // Dispatch the selected answer
    dispatch(setAnswer(e.target.value));
  };

  return (
    <Card className="shadow-lg p-6 max-w-2xl mx-auto mt-8 rounded-lg border border-gray-200">
      <Title level={4} className="mb-4 text-center">
        Question {currentQuestionIndex + 1}
      </Title>
      <Text className="text-lg font-semibold block mb-4">{question?.question}</Text>
      <Radio.Group
        onChange={handleAnswerChange}
        value={answers[currentQuestionIndex]}
        className="flex flex-col gap-3"
      >
        {question?.answers && Object.entries(question.answers).map(([key, answer]) =>
          answer ? (
            <Radio
              key={key}
              value={key} // Use the key as the value for correct matching
              className="bg-white hover:bg-blue-50 rounded-lg p-2 border"
            >
              {answer}
            </Radio>
          ) : null
        )}
      </Radio.Group>
    </Card>
  );
};

export default Question;
