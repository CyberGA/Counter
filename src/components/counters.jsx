import React, { Component } from "react";
import Counter from "./counter"

class Counters extends Component {
  state = {
    counters : [
      { id: 1, value: 4},
      { id: 2, value: 0},
      { id: 3, value: 0},
      { id: 4, value: 0}
    ]
  };
  handleAddCounter = () => {
    return <Counter />;
  }
  handleReset = () => {
    const counters = this.state.counters.map(c => {c.value = 0;
    return c;
    });
    this.setState({ counters });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
      <button onClick={this.handleReset} className="btn btn-danger btn-lg mt-4 ml-2 p-2 shadow-none">Reset Counters</button>
      <button onClick={this.handleAddCounter} className="btn btn-success btn-lg mt-4 ml-2 p-2 shadow-none">Add Counter</button>
        { this.state.counters.map( counter => 
        <Counter key={counter.id} 
        onDelete={this.handleDelete} /*value={counter.value} 
        id={counter.id}*/ counter={counter} />)}
      </div>
    );
  }
}
export default Counters;