import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [],
    currentQuestionIndex: 0,
    answers: {}, // Store answers as { questionIndex: selectedAnswerKey }
    score: 0,
    isSubmitted: false,
  },
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload; // Set fetched questions to state
    },
    setAnswer: (state, action) => {
      state.answers[state.currentQuestionIndex] = action.payload; // Store selected answer key for the current question
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1; // Move to the next question
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1; // Move to the previous question
      }
    },
    calculateScore: (state) => {
      let score = 0;
      state.questions.forEach((question, index) => {
        // Create an array of correct answer keys based on the correct answers provided
        const correctAnswersKeys = Object.entries(question.correct_answers)
          .filter(([_, value]) => value === 'true') // Filter only correct answers
          .map(([key]) => key.replace('_correct', '')); // Remove '_correct' to match answer keys

        // Get the user's selected answer key
        const userAnswerKey = state.answers[index];

        // Console logs for debugging
        console.log(`Question ${index + 1}: ${question.question}`);
        console.log(`User Answer: ${userAnswerKey}`);
        console.log(`Correct Answers: ${correctAnswersKeys.join(', ')}`);

        // Check if the user's answer matches any of the correct answers
        if (correctAnswersKeys.includes(userAnswerKey)) {
          score += 1; // Increment score for each correct answer
        }

        // Log the current score after each question
        console.log(`Current Score after Question ${index + 1}: ${score}`);
      });

      state.score = score; // Save the calculated score
      state.isSubmitted = true; // Mark the quiz as submitted
      console.log(`Final Score: ${score} out of ${state.questions.length}`); // Log the final score
    },
  },
});

export const { setQuestions, setAnswer, nextQuestion, prevQuestion, calculateScore } = quizSlice.actions;
export default quizSlice.reducer;
