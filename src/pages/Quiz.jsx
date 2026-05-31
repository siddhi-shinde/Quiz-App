import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizData from "../data/quizData";

function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate();

  const questions = quizData[category] || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState(
    Array(questions.length).fill("")
  );

  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (questions.length === 0) {
    return (
      <div className="container mt-5">
        <h2>No Questions Found</h2>
      </div>
    );
  }

  const handleOptionSelect = (option) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = option;

    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(
        currentQuestion - 1
      );
    }
  };

  const handleSubmit = () => {
    let score = 0;

    questions.forEach((question, index) => {
      if (
        answers[index] ===
        question.answer
      ) {
        score++;
      }
    });

    navigate("/result", {
      state: {
        score,
        total: questions.length,
        category,
      },
    });
  };

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        {/* Timer */}

        <div className="d-flex justify-content-between mb-3">

          <h5>
            Question {currentQuestion + 1} /
            {questions.length}
          </h5>

          <h5 className="text-danger">
            ⏳ {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60)
              .toString()
              .padStart(2, "0")}
          </h5>

        </div>

        {/* Progress Bar */}

        <div className="progress mb-4">

          <div
            className="progress-bar bg-success"
            style={{
              width: `${
                ((currentQuestion + 1) /
                  questions.length) *
                100
              }%`,
            }}
          >
            {currentQuestion + 1}/
            {questions.length}
          </div>

        </div>

        {/* Question Navigation */}

        <div className="mb-4 text-center">

          {questions.map((_, index) => (

            <button
              key={index}
              className={`btn m-1 ${
                answers[index]
                  ? "btn-success"
                  : "btn-outline-secondary"
              }`}
              onClick={() =>
                setCurrentQuestion(index)
              }
            >
              {index + 1}
            </button>

          ))}

        </div>

        {/* Question */}

        <h3 className="mb-4">
          {questions[currentQuestion].question}
        </h3>

        {/* Options */}

        {questions[
          currentQuestion
        ].options.map(
          (option, index) => (

            <button
              key={index}
              className={`btn w-100 mb-3 ${
                answers[currentQuestion] ===
                option
                  ? "btn-success"
                  : "btn-outline-primary"
              }`}
              onClick={() =>
                handleOptionSelect(option)
              }
            >
              {option}
            </button>

          )
        )}

        {/* Navigation Buttons */}

        <div className="d-flex justify-content-between mt-4">

          <button
            className="btn btn-secondary"
            onClick={handlePrevious}
            disabled={
              currentQuestion === 0
            }
          >
            Previous
          </button>

          {currentQuestion ===
          questions.length - 1 ? (

            <button
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit Quiz
            </button>

          ) : (

            <button
              className="btn btn-primary"
              onClick={handleNext}
            >
              Next
            </button>

          )}

        </div>

      </div>

    </div>
  );
}

export default Quiz;