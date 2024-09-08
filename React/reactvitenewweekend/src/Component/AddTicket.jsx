import React, { Component } from "react";

class AddTicket extends Component {
  state = {
    count: 1,
    search:""
  };

  handleadd = () => {
    this.setState({ count: this.state.count + 100 });
  };


  componentDidUpdate(){

    console.log("Arunachalam");
  }

  render() {
    return (
      <>
        <h1>
          {this.props.name}
        </h1>
        <h3>Count: {this.state.count}</h3>

        <img  height={200} width={200} src={this.props.img} />

        <br></br>
        <button onClick={this.handleadd}>AddTicket</button>
      </>
    );
  }
}

export default AddTicket;










// class
// component ,state,props,life cycle

// life cycle

// mounting  - born\
  // componentdidmoutn
// updating - living.
   
// unmounting  -  death