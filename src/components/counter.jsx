import React, {Component} from "react";

class Counter extends Component{
  state = {
    value: this.props.counter.value
  };

  /*constructor(){
    super(); 
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  handleIncrement = () => {
    console.log("Incremented");
    this.setState({value: this.state.value + 1});
    console.log("value is at " + this.state.value);
  }

  handleDecrement = () => {
    console.log("Decremented");
    if (this.state.value > 0 ) {
      return this.setState({ value: this.state.value  - 1});
    }
  }

  render() {
    return (
    <div className="mt-4">
      <span className={ this.getBadgeClasses() }> {
        this.formatValue()
      } </span>
      <button onClick={this.handleIncrement} className={ this.getIncrementClasses() }>Increment</button>
      <button onClick={this.handleDecrement} className={this.getDecrementClasses()}>Decrement</button>
      <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2 p-2 shadow-none">Delete</button>
    </div>
    );
  }

  getIncrementClasses() {
    let increaseClasses = "btn btn-sm p-2 shadow-none btn-";
    increaseClasses += this.state.value === 0 ? "success" : "dark";
    return increaseClasses;
  }

  getDecrementClasses(){
    let decreaseClasses = "btn btn-sm p-2 ml-2 shadow-none btn-";
    decreaseClasses += (this.state.value === 0) ? "secondary" : "dark";
    return decreaseClasses;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatValue(){
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

// stopped at 1: 10