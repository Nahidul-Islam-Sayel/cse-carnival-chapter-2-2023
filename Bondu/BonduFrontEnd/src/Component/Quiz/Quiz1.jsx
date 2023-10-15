import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const MathQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(false);

  const questions = [
    {
      questionText: '১ + ২ = ?',
      options: ['A) ২', 'B) ৩', 'C) ৪', 'D) ৫'],
      correctAnswer: 'B) ৩',
    },
    {
      questionText: '৪ - ১ = ?',
      options: ['A) ১', 'B) ২', 'C) ৩', 'D) ৪'],
      correctAnswer: 'C) ৩',
    },
    {
      questionText: '৫ + ১ = ?',
      options: ['A) ৫', 'B) ৬', 'C) ৭', 'D) ৮'],
      correctAnswer: 'B) ৬',
    },
    {
      questionText: '৩ - ২ = ?',
      options: ['A) ১', 'B) ২', 'C) ৩', 'D) ৪'],
      correctAnswer: 'A) ১',
    },
    {
      questionText: '২ + ৩ = ?',
      options: ['A) ৩', 'B) ৪', 'C) ৫', 'D) ৬'],
      correctAnswer: 'C) ৫',
    },
    {
      questionText: '৪ - ৩ = ?',
      options: ['A) ১', 'B) ২', 'C) ৩', 'D) ৪'],
      correctAnswer: 'A) ১',
    },
    {
      questionText: '১ + ৪ = ?',
      options: ['A) ৪', 'B) ৫', 'C) ৬', 'D) ৭'],
      correctAnswer: 'B) ৫',
    },
    {
      questionText: '৬ - ২ = ?',
      options: ['A) ২', 'B) ৩', 'C) ৪', 'D) ৫'],
      correctAnswer: 'D) ৫',
    },
    {
      questionText: '২ + ৫ = ?',
      options: ['A) ৬', 'B) ৭', 'C) ৮', 'D) ৯'],
      correctAnswer: 'B) ৭',
    },
    {
      questionText: '৭ - ৩ = ?',
      options: ['A) ৩', 'B) ৪', 'C) ৫', 'D) ৬'],
      correctAnswer: 'C) ৫',
    },
  ];


  const handleAnswerClick = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const correctAnswerText = correctAnswer.split(') ')[1]; // Extract the answer part (e.g., '৩')

    if (selectedAnswer === correctAnswerText) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  let navigate = useNavigate();
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        navigate("/Quiz", { replace: true });
      }, 1500);
    }
  }, [visible, navigate]);

  return (
    <div className="flex flex-col items-center text-center p-4">
      <div
        className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${
          visible ? '' : 'hidden'
        }`}
      >
        <div className="max-w-xl w-full bg-green-400 text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
          আপনার ফলাফল: {score} টি সঠিক উত্তর প্রাপ্ত, মোট প্রশ্ন: {questions.length}
        </div>
      </div>
      {currentQuestion < questions.length ? (
        <div className="bg-gray-100 rounded p-4 shadow-md">
          <h3 className="text-xl font-bold mb-4">{questions[currentQuestion].questionText}</h3>
          <ul className="text-left space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                className="bg-blue-500 text-white rounded p-2 cursor-pointer hover-bg-blue-600"
                onClick={() => handleAnswerClick(option.split(') ')[1])} // Extract the answer part
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-gray-100 rounded p-4 shadow-md">
          <h2 className="text-2xl font-bold mb-4">কুইজ সম্পন্ন</h2>
          <p className="text-lg">
            আপনার সর্বমোট ফল: {score} টি, মোট প্রশ্ন: {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default MathQuiz;
