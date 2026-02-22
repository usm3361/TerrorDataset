import { useState } from "react";
import "../App.css";

const Question = ({ ter }) => {
  const allowedFields = ["iyear", "country_txt", "City", "region_txt"];
  const generateQuestion = (data) => {
    const mainKeys = Object.keys(data);
    const randomKey = mainKeys[Math.floor(Math.random() * mainKeys.length)];
    const selectedObj = data[randomKey];

    const availableFields = Object.keys(selectedObj).filter((field) =>
      allowedFields.includes(field),
    );

    const shuffled = availableFields.sort(() => 0.5 - Math.random());

    const [f1, f2, fTarget] = shuffled;

    return {
      display: `when that the ${f1} is "${selectedObj[f1]}" and the ${f2} is "${selectedObj[f2]}", what is the ${fTarget}?`,
      answer: selectedObj[fTarget],
      targetField: fTarget,
    };
  };

  const [currentQuestion, setCurrentQuestion] = useState(generateQuestion(ter));

  const handleNewQuestion = () => {
    setCurrentQuestion(generateQuestion(ter));
  };

  return (
    <div className="question-card">
      <h3 className="question-text">{currentQuestion.display}</h3>
      <div className="input">
        <label htmlFor="answer">answer is:</label>
        <input type="text" id="answer" placeholder="plaese enter your answer:"/>
      </div>

      <div className="action-area">
        <button className="refresh-btn" onClick={handleNewQuestion}>
          New Question
        </button>
      </div>

      {/* Logic Note: You can now compare user input to currentQuestion.answer */}
    </div>
  );
};

export default Question;
