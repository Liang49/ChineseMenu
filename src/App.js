import React from "react";
import Menu from "./Menu.js";
import Checkout from "./Checkout.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box: "food",
      check: "event"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log();
    this.setState({
      box: "change",
      check: event.target.textContent
    });
  }
  render() {
    return (
      <div>
        <h1>Resturant Order</h1>
        <Menu handleClick={this.handleClick} />
        <Checkout
          box={this.state.box}
          check={this.state.check}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
