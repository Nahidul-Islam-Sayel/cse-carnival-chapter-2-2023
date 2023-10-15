import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
const Quiz = () => {
    const[studentsPro,setstudentsPro]=useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(false);
  const questions = [
    {
      question: 'প্রশ্ন 1: বাংলাদেশের রাষ্ট্রীয় পতাকার রঙ কি?',
      options: ['লাল', 'সবুজ', 'নীল', 'হলুদ'],
      correctAnswer: 'সবুজ',
    },
    {
      question: 'প্রশ্ন 2: বাংলাদেশের রাষ্ট্রীয় ফুল কোনটি?',
      options: ['শাপলা', 'গোলাপ', 'কৃষ্ণচুড়া', 'পাঁচলি'],
      correctAnswer: 'শাপলা',
    },
   
    {
      question: 'প্রশ্ন 4: বাংলাদেশের প্রথম প্রধানমন্ত্রী কে ছিলেন?',
      options: ['তাজউদ্দিন আহমদ', 'মুজিবুর রহমান', 'মাতিয়ুর রহমান', 'আতাউর রহমান'],
      correctAnswer: 'তাজউদ্দিন আহমদ',
    },
    {
      question: 'প্রশ্ন 5: বাংলাদেশের প্রথম ইউপি নির্বাচন কবে হয়?',
      options: ['২০০৮', '২০১১', '২০১০', '২০০৯'],
      correctAnswer: '২০১১',
    },
    {
      question: 'প্রশ্ন 6: বাংলাদেশের সর্বাধিক উচ্চ পর্বত কোনটি?',
      options: ['ত্রিপুরা', 'কেলা', 'কাঞ্চনজঙ্ঘা', 'মৌলভিবাজার'],
      correctAnswer: 'কেলা',
    },
    {
      question: 'প্রশ্ন 7: বাংলাদেশের সর্বাধিক বৃহত্তম নদী কোনটি?',
      options: ['পদ্মা', 'মেঘনা', 'জমুনা', 'তিস্তা'],
      correctAnswer: 'পদ্মা',
    },
    {
      question: 'প্রশ্ন 8: বাংলাদেশের সবচেয়ে বড় দ্বীপ কোনটি?',
      options: ['সন্দ্বীপ', 'মহেশখালী', 'ভোলা', 'সেন্ট মার্টিন'],
      correctAnswer: 'সেন্ট মার্টিন',
    },
    {
      question: 'প্রশ্ন 9: বাংলাদেশের প্রধান মহাদ্বীপ কোনটি?',
      options: ['আশিয়া', 'আফ্রিকা', 'উত্তর আমেরিকা', 'ইউরোপ'],
      correctAnswer: 'আশিয়া',
    },
    {
      question: 'প্রশ্ন 10: বাংলাদেশের প্রথম উপনির্বাচন কবে হয়?',
      options: ['১৯৮৬', '১৯৯১', '১৯৯৬', '১৯৯০'],
      correctAnswer: '১৯৯১',
    },
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
        setVisible(true)
    }
  };
  useEffect(() => {
    if (visible) {
        const timeout = setTimeout(() => {
            setVisible(false);
         

        }, 1000);
        setstudentsPro(true)
        return () => clearTimeout(timeout);
    }

}, [visible]);
let navigate = useNavigate();
    useEffect(() => {

        setTimeout(() => {
            studentsPro && navigate("/Quiz", { replace: true });
        

        }, 1500);
    }, [studentsPro, navigate])
  return (
    <div className="flex flex-col items-center text-center p-4">
          <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visible ? '' : 'hidden'
                    }`}
            >
                <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                `আপনার ফলাফল: ${score} টি সঠিক উত্তর প্রাপ্ত, মোট প্রশ্ন: ${questions.length}`


                </div>
            </div>
    {currentQuestion < questions.length ? (
      <div className="bg-gray-100 rounded p-4 shadow-md">
        <h3 className="text-xl font-bold mb-4">{questions[currentQuestion].question}</h3>
        <ul className="text-left space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <li
              key={index}
              className="bg-blue-500 text-white rounded p-2 cursor-pointer hover:bg-blue-600"
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div className="bg-gray-100 rounded p-4 shadow-md">
        <h2 className="text-2xl font-bold mb-4">কুইজ সম্পন্ন</h2>
        <p className="text-lg">আপনার সর্বমোট ফল: {score} টি, মোট প্রশ্ন: {questions.length}</p>
      </div>
    )}
  </div>
  );
};

export default Quiz;
