import React from "react";
import "../pages/Home.css";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <div className="center__div">
      <div className="text__center">
        <Slide left>
          <h1>
            Welcome to&nbsp;<span>Quizzer App 🚀</span>
          </h1>
        </Slide>
        <Slide right>
          <h2>Take Quizzes in our Quizzer App and level up your skills</h2>
        </Slide>
        <Zoom>
          <Link to="/QuizSelectionPage" className="btn-68">
            Take Quiz
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default Home;
