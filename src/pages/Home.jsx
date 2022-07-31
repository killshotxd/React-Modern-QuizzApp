import React from "react";
import "../pages/Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Quizzer</h1>
      <h2>Take Quizzes in our Quizzer App and level up your skills</h2>
      <Link to="/QuizSelectionPage">Take Quiz</Link>
    </div>
  );
};

export default Home;
