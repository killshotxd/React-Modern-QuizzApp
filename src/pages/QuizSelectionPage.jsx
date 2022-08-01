import React from "react";
import { Link } from "react-router-dom";
import "./QuizSelectionPage.css";

const QuizSelectionPage = () => {
  return (
    <div>
      <div className="center-div">
        <h1>
          Choose your desired&nbsp;<span>Quiz</span>&nbsp;Set
        </h1>

        <div className="btnDIV">
          <Link to="/QuizHTML" className="btn-68">
            Take HTML Quiz
          </Link>
          <Link to="/QuizCSS" className="btn-68">
            Take CSS Quiz
          </Link>
          <Link to="/QuizJS" className="btn-68">
            Take JavaScript Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizSelectionPage;
