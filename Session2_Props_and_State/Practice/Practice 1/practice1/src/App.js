import React from "react";
import Header from "./Components/Header";
import ListItems from "./Components/ListItems";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ListItems />
      </div>
    );
  }
}
export default App;
