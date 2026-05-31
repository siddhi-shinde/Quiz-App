import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbarx from "./components/Navbarx";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Navbarx />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/category"
          element={<Category />}
        />

        <Route
          path="/quiz/:category"
          element={<Quiz />}
        />

        <Route
          path="/result"
          element={<Result />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;