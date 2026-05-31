import React, { useState } from 'react'
import { questions } from './questions'

const Quiz = () => {

  const [showQuiz, setShowQuiz] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowQuiz(true);
  }

  return (
    <div>

      {!showQuiz ? (

        <form onSubmit={handleSubmit}>
          <div className="container w-25">

            <div className="mb-3">
              <label className="form-label">Enter your Name</label>

              <input
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Category</label>

              <input
                type="text"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Start Quiz
            </button>

          </div>
        </form>

      ) : (

        <div className="container mt-4">

          {
            questions.map((q, i) => (
              <div key={q.id} className="card p-3 mb-3">

                <h5>
                  {i + 1}. {q.question}
                </h5>

                {
                  q.options.map((option, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                      />

                      <label className="ms-2">
                        {option}
                      </label>
                    </div>
                  ))
                }

              </div>
            ))
          }

        </div>

      )}

    </div>
  )
}

export default Quiz