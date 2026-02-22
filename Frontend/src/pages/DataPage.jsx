import "../app.css";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

const DataPage = ({ter}) => {

  return (
    <div className="dataPage">
      <Navbar />
      <h1 className="titlePage">Terror Data System</h1>
      {ter && <Table ter={ter} />}
    </div>
  );
};


export default DataPage;
