import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions } from './redux/quizSlice';
import ProgressBar from './components/ProgressBar';
import Question from './components/Question';
import Navigation from './components/Navigation';
import ScoreDisplay from './components/ScoreDisplay';

const App = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, isSubmitted } = useSelector((state) => state.quiz);

  useEffect(() => {
    fetch('https://quizapi.io/api/v1/questions?apiKey=M7RT7dicTsTgRWHPM4LqiwuNuiHK9VmtPIuFZOnY&category=code&difficulty=Easy&limit=10&tags=JavaScript')
      .then((response) => response.json())
      .then((data) => dispatch(setQuestions(data)))
      .catch((error) => console.error(error));
  }, [dispatch]);

  // Conditional rendering to ensure questions are loaded
  if (!questions || questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <ProgressBar />
      {isSubmitted ? (
        <ScoreDisplay /> // Display score only after submission
      ) : currentQuestionIndex < questions.length ? (
        <>
          <Question />
          <Navigation />
        </>
      ) : (
        <ScoreDisplay />
      )}
    </div>
  );
};

export default App;
