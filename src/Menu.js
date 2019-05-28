import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <h1>Fried Rice</h1>
        <button onClick={this.handleClick}>Chicken Fried Rice</button>
        <button>Pork Fried Rice</button>
        <button>Golden Fried Rice</button>
        <button>House Special Fried Rice</button>
        <button>Beef Fried House</button>
        <h1>Lo Mein</h1>
        <button>Chicken Lo Mein</button>
        <button>Pork Lo Mein</button>
        <button>Beef Lo Mein</button>
        <button>SeaFood Lo Mein</button>
        <h1>Lunch Special</h1>
        <button onClick={this.props.handleClick}>Chicken and Broccoli</button>
        <button>Salt and Pepper Pork Chop</button>
        <button>Fried Chicken Wings</button>
        <button>Singapore Mei Fun</button>
        <button>Curry Chicken</button>
      </div>
    );
  }
}

export default Menu;
