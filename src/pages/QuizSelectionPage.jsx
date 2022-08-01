import React from "react";
import { Link } from "react-router-dom";
import "./QuizSelectionPage.css";
import Shake from "react-reveal/Shake";
import Flash from "react-reveal/Flash";

const QuizSelectionPage = () => {
  return (
    <div>
      <div className="center-div">
        <Shake>
          <h1>
            Choose your desired&nbsp;<span>Quiz</span>&nbsp;Set
          </h1>
        </Shake>

        <div className="btnDIV">
          <Flash>
            <Link to="/QuizHTML" className="btn-68">
              Take HTML Quiz
            </Link>
            <Link to="/QuizCSS" className="btn-68">
              Take CSS Quiz
            </Link>
            <Link to="/QuizJS" className="btn-68">
              Take JavaScript Quiz
            </Link>
          </Flash>
        </div>
      </div>
    </div>
  );
};

export default QuizSelectionPage;
