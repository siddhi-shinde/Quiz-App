import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const userName =
  localStorage.getItem("quizUser") || "User";

  const score = location.state?.score || 0;
  const total = location.state?.total || 10;
  const category =
    location.state?.category || "Quiz";

  const percentage = (
    (score / total) *
    100
  ).toFixed(0);

  const wrongAnswers = total - score;

  let grade = "F";

  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";

  return (
    <div className="container mt-5">

      <div className="card shadow text-center p-5">

        <h1 className="text-success">
          Quiz Completed 🎉
        </h1>

        <h2 className="mb-3">
  Congratulations, {userName}! 🎉
</h2>

        <h3 className="mt-3">
          Category: {category.toUpperCase()}
        </h3>

        <hr />

        <h2>
          Score: {score} / {total}
        </h2>

        <h4 className="mt-3">
          Correct Answers: {score}
        </h4>

        <h4>
          Wrong Answers: {wrongAnswers}
        </h4>

        <h4>
          Percentage: {percentage}%
        </h4>

        <h4>
          Grade: {grade}
        </h4>

        <button
          className="btn btn-primary mt-4"
          onClick={() =>
            navigate("/category")
          }
        >
          Take Another Quiz
        </button>

      </div>

    </div>
  );
}

export default Result;