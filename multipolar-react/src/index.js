import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./containers/FormContainer";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div className="col-md-6">
        <span>Masukkan Data Dengan Benar</span>
        <FormContainer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
