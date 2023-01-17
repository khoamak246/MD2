import Control from "./Components/Control";
import ListStudent from "./Components/ListStudent";
import Form from "./Components/Form";

function App() {
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          {/* <!-- START CONTROL --> */}
          <Control />
          {/* <!-- END CONTROL --> */}
          {/* <!-- START LIST STUDENT --> */}
          <ListStudent />
          {/* <!-- END LIST STUDENT --> */}
        </div>
      </div>
      {/* <!-- START FORM SINH VIEN --> */}
      <Form />
      {/* <!-- END FORM SINH VIÊN --> */}
    </div>
  );
}

export default App;
