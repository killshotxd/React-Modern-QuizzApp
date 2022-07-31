import React from "react";
import { Link } from "react-router-dom";

const QuizSelectionPage = () => {
  return (
    <div>
      <h1>Choose your desired Quiz Set</h1>

      <Link to="/QuizHTML">Take HTML Quiz</Link>
      <Link to="/QuizCSS">Take CSS Quiz</Link>
      <Link to="/QuizJS">Take JavaScript Quiz</Link>
    </div>
  );
};

export default QuizSelectionPage;
