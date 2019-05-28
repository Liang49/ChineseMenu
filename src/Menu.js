import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <h1>Fried Rice</h1>
        <button onClick={this.props.handleClick}>Chicken Fried Rice</button>
        <button onClick={this.props.handleClick}>Pork Fried Rice</button>
        <button onClick={this.props.handleClick}>Golden Fried Rice</button>
        <button onClick={this.props.handleClick}>
          House Special Fried Rice
        </button>
        <button onClick={this.props.handleClick}>Beef Fried House</button>
        <h1>Lo Mein</h1>
        <button onClick={this.props.handleClick}>Chicken Lo Mein</button>
        <button onClick={this.props.handleClick}>Pork Lo Mein</button>
        <button onClick={this.props.handleClick}>Beef Lo Mein</button>
        <button onClick={this.props.handleClick}>SeaFood Lo Mein</button>
        <h1>Lunch Special</h1>
        <button onClick={this.props.handleClick}>Chicken and Broccoli</button>
        <button onClick={this.props.handleClick}>
          Salt and Pepper Pork Chop
        </button>
        <button onClick={this.props.handleClick}>Fried Chicken Wings</button>
        <button onClick={this.props.handleClick}>Singapore Mei Fun</button>
        <button onClick={this.props.handleClick}>Curry Chicken</button>
      </div>
    );
  }
}

export default Menu;
