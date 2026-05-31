import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Home</Link>
    <button className="navbar-toggler" htmlFor="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Quiz</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Result</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<h1>Welcome!!!</h1>
    </div>
  )
}

export default Home