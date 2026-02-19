import React from "react";
import Question from "../components/Question.quiz";
import Input from "../components/Input.quiz";
import Response from "../components/Response";
import Footer from "../components/Footer.quiz";
import "../App.css";

const DynamicTestPage = () => {
  return (
    <div className="quizPage">
      <h1 className="titlePage">Terror Data Quiz</h1>
      <Question />
      <Input />
      <Response />
      <Footer />
    </div>
  );
};

export default DynamicTestPage;
