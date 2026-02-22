import Question from "../components/Question";
import Navbar from "../components/Navbar";
import "../App.css";

const DynamicTestPage = ({ ter }) => {
  return (
    <div className="quizPage">
      <Navbar />
      <h1 className="titlePage">Questions from the DataTerror</h1>
      {ter && <Question ter={ter} />}
    </div>
  );
};

export default DynamicTestPage;
