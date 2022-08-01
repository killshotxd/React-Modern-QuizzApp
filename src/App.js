import Home from "./pages/Home";
import QuizSelectionPage from "./pages/QuizSelectionPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizHTML from "./pages/QuizHTML";
import QuizCSS from "./pages/QuizCSS";
import QuizJS from "./pages/QuizJS";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/QuizSelectionPage" element={<QuizSelectionPage />} />
        <Route path="/QuizHTML" element={<QuizHTML />} />
        <Route path="/QuizCSS" element={<QuizCSS />} />
        <Route path="/QuizJS" element={<QuizJS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
