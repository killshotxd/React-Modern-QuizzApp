import React from "react";
import { Link } from "react-router-dom";

const QuizSelectionPage = () => {
  return (
    <div>
      <h1>Welcome</h1>

      <Link to="/QuizHTML">Take HTML Quiz</Link>
    </div>
  );
};

export default QuizSelectionPage;
