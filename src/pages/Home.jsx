import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const startQuiz = () => {
    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }

    localStorage.setItem("quizUser", name);

    navigate("/category");
  };

  return (
    <div className="container">
      <div className="hero-section text-center">

        <h1 className="display-3 fw-bold">
          Quiz Master
        </h1>

        <p className="lead">
          Test your knowledge in History,
          Geography, Science, Sports &
          Technology
        </p>

        <div className="mt-4">

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <button
            className="btn btn-warning btn-lg"
            onClick={startQuiz}
          >
            Start Quiz
          </button>

        </div>

      </div>
    </div>
  );
}

export default Home;