import React from "react";
import { Link } from "react-router-dom";
import "./QuizSelectionPage.css";
import HeadShake from "react-reveal/HeadShake";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import { Zoom } from "react-reveal";

const QuizSelectionPage = () => {
  return (
    <div>
      <div className="center-div">
        <HeadShake>
          <h1>
            Choose your desired&nbsp;<span>Quiz</span>&nbsp;Set
          </h1>
        </HeadShake>
        <div className="btnDIV">
          <Flash>
            <Link to="/QuizHTML" className="btn-68">
              Take HTML Quiz
            </Link>
          </Flash>
          <Fade left>
            <Link to="/QuizCSS" className="btn-68">
              Take CSS Quiz
            </Link>
          </Fade>
          <Fade right>
            <Link to="/QuizJS" className="btn-68">
              Take JavaScript Quiz
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default QuizSelectionPage;
