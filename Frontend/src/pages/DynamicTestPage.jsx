import Question from "../components/Question";
import Input from "../components/Input";
import Response from "../components/Response";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../App.css";

const DynamicTestPage = ({ ter }) => {
  return (
    <div className="quizPage">
      <Navbar />
      <h1 className="titlePage">Questions from the DataTerror</h1>
      {ter && <Question ter={ter} />}
      <Input />
      <Response />
      <Footer />
    </div>
  );
};

export default DynamicTestPage;
